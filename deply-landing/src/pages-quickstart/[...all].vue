<route lang="yaml">
meta:
  layout: minimal
</route>

<script setup lang="ts">
import { computed, useSSRContext } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

/*
 * Here we are using the route param named "all", which is set in the file name ([...all].vue)
 * @see https://github.com/hannoeru/vite-plugin-pages#dynamic-routes
 * @see https://github.com/hannoeru/vite-plugin-pages#catch-all-routes
 */
const slugPart = computed(() =>
  Array.isArray(route.params.all) ? route.params.all : []
)
const slug = computed(() => `/${slugPart.value.join('/')}`)

/**
 * When the route is not found, we want to show a 404 page
 * We do this by using the `useSSRContext` composable, then we use this to set the 404 status code
 * @see src/entry-server.ts
 * @see server.ts
 */
if (import.meta.env.SSR) {
  const context = useSSRContext()

  if (context) {
    context.found = false
  }
}
</script>

<template>
  <div>
    <ErrorHero color="primary" pattern>
      <template #error>
        <ErrorAnimated>
          Oops, something went wrong and we couldn't find that page at
          <strong>{{ slug }}</strong>
          . Please try again later.
        </ErrorAnimated>
      </template>
    </ErrorHero>
  </div>
</template>
