import { ref, watch, computed, defineAsyncComponent, markRaw } from 'vue'
import { useRoute, RouterView } from 'vue-router'

const defaultLayoutId = 'default'
const modules = import.meta.glob('../layouts/*.vue')

const layouts: Record<string, any> = {}
for (const path in modules) {
  const layoutId = path.replace('../layouts/', '').replace('.vue', '')
  layouts[layoutId] = markRaw(
    defineAsyncComponent({
      loader: modules[path],
      delay: 0,
      suspensible: false,
    })
  )
}

export function useLayout() {
  const route = useRoute()
  const LayoutComponent = ref(layouts.default || RouterView)
  const layout = computed(
    () => (route?.meta?.layout as string) || defaultLayoutId
  )
  const transition = computed(
    () => (route?.meta?.transition as string) ?? 'no-transition'
  )

  watch(
    layout,
    (newLayout: any) => {
      if (newLayout in layouts) {
        LayoutComponent.value = layouts[newLayout]
      } else {
        console.error(`useLayout: no layout found with id "${newLayout}".`)
      }
    },
    { immediate: true }
  )

  return {
    layout,
    transition,
    LayoutComponent,
  }
}
