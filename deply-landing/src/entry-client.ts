import { createApp } from '/@src/app'
import initCookiesPlugin from '/@src/utils/cookies'
initCookiesPlugin()

createApp().then(async ({ app, router, pinia }) => {
  // restore pinia state
  const initialState = window.__vulk__
  if (typeof initialState?.pinia === 'object') {
    pinia.state.value = initialState.pinia
  }

  // wait client side hydratation to complete
  await router.isReady()

  app.mount('#app')
})
