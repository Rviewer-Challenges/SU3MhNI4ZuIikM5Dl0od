import { defineAsyncComponent } from 'vue'
import { definePlugin } from '/@src/app'

export default definePlugin(({ app }) => {
  // register <Slider> component with lazyloading
  app.component(
    // eslint-disable-next-line vue/multi-word-component-names
    'Slider',
    defineAsyncComponent({
      loader: () => import('@vueform/slider').then((mod) => mod.default),
      delay: 0,
      suspensible: false,
    })
  )
})
