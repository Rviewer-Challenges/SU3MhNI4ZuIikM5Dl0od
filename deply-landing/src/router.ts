import {
  createMemoryHistory,
  createRouter as createClientRouter,
  createWebHistory,
} from 'vue-router'
import routes from 'pages-generated'

export function createRouter() {
  const router = createClientRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  })

  return router
}
