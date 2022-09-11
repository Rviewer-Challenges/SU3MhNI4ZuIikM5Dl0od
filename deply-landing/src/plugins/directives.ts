import { definePlugin } from '/@src/app'
import { vPreloadLink } from '/@src/directives/preload-link'
import { vBackground } from '/@src/directives/background'

export default definePlugin(({ app }) => {
  // register global v-preload-link directive
  app.directive('preload-link', vPreloadLink)

  // register global v-background directive
  app.directive('background', vBackground)
})
