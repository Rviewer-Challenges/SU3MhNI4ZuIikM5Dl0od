import { ref, computed } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { addDays } from 'date-fns'
import { useUniversalCookies } from '/@src/utils/cookies'

export type UserData = Record<string, any> | null

export const useUserSession = defineStore('userSession', () => {
  const cookies = useUniversalCookies(['token'])
  const token = computed({
    get: () => {
      return cookies.get('token')
    },
    set: (value: string | undefined) => {
      if (value === undefined && cookies.get('token')) {
        cookies.remove('token', {
          sameSite: 'lax',
          path: '/',
        })
      } else if (value !== undefined) {
        cookies.set('token', value, {
          sameSite: 'lax',
          path: '/',
          expires: cookieExpiry.value,
        })
      }
    },
  })
  const user = ref<Partial<UserData>>()
  const rememberMe = ref(false)
  const cookieExpiry = computed(() =>
    rememberMe.value ? addDays(new Date(), 30) : undefined
  )

  const isLoggedIn = computed(
    () => token.value !== undefined && token.value !== ''
  )

  function setUser(value: Partial<UserData>) {
    user.value = value
  }

  function setToken(value: string) {
    token.value = value
  }

  async function logoutUser() {
    user.value = undefined
    token.value = undefined
  }

  return {
    user,
    token,
    isLoggedIn,
    logoutUser,
    setUser,
    setToken,
  } as const
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserSession, import.meta.hot))
}
