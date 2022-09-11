import { definePlugin } from '/@src/app'

/*
 * Here you can register global navigation guards
 * @see https://router.vuejs.org/guide/advanced/navigation-guards.html
 * @see https://github.com/hannoeru/vite-plugin-pages#sfc-custom-block-for-route-data
 */
export default definePlugin(({ router }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  router.beforeEach(async (to, from) => {
    // do something
  })
})
