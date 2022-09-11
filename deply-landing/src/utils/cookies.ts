import { createCookies } from '@vueuse/integrations/useCookies'
import { CookieChangeOptions } from 'universal-cookie'
import { setCookie } from 'h3'
import { IncomingMessage, ServerResponse } from 'http'

let universalCookies: ReturnType<typeof createCookies>

const useUniversalCookies = (params?: any, options?: any) => {
  return universalCookies(params, options)
}

const initCookiesPlugin = (req?: IncomingMessage, res?: ServerResponse) => {
  universalCookies = createCookies(req)

  if (!import.meta.env.SSR) {
    return
  }

  // this is a watcher to set the cookie from the server
  useUniversalCookies().addChangeListener((change: CookieChangeOptions) => {
    if (res!.headersSent) {
      return
    }

    if (change.value === undefined) {
      const unsetOptions = (<any>Object).assign({}, change.options)
      unsetOptions.maxAge = -1

      setCookie(res!, change.name, '', change.options)
    } else {
      setCookie(res!, change.name, change.value, change.options)
    }
  })
}

export default initCookiesPlugin

export { useUniversalCookies }
