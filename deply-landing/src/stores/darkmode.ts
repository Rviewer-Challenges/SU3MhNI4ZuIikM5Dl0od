/**
 * This is a store that hold the dark mode state
 * It could be auto (fit system preference), dark or light
 *
 * Using useStorage from @vueuse/core allow persistance storage accross tabs/sessions
 *
 * We can import and set isDark anywhere in our project
 * @see /src/components/navigation/LandingNavigation.vue
 * @see /src/components/partials/toolbars/Toolbar.vue
 */

import { computed } from 'vue'
import { usePreferredDark } from '@vueuse/core'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { useUniversalCookies } from '/@src/utils/cookies'

export const DARK_MODE_BODY_CLASS = 'is-dark'
export type DarkModeSchema = 'auto' | 'dark' | 'light'

export const useDarkmode = defineStore('darkmode', () => {
  const preferredDark = usePreferredDark()
  const cookies = useUniversalCookies(['color-schema'])
  const colorSchema = computed({
    get: () => {
      return cookies.get('color-schema')
    },
    set: (value: string | undefined) => {
      if (value === undefined) {
        cookies.remove('color-schema', {
          sameSite: 'lax',
          path: '/',
        })
      } else {
        cookies.set('color-schema', value, {
          sameSite: 'lax',
          path: '/',
        })
      }
    },
  })

  const isDark = computed({
    get() {
      return colorSchema.value === undefined
        ? preferredDark.value
        : colorSchema.value === 'dark'
    },
    set(v: boolean) {
      colorSchema.value = v ? 'dark' : 'light'
    },
  })

  const htmlClass = computed(() => (isDark.value ? DARK_MODE_BODY_CLASS : ''))

  const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    isDark.value = !target.checked
  }

  return {
    isDark,
    htmlClass,
    onChange,
  }
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDarkmode, import.meta.hot))
}
