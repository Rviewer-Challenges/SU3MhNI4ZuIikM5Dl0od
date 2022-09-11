<script setup lang="ts">
export type AppStoreType = 'apple' | 'google'

export interface AppButtonProps {
  type: AppStoreType
  url: string
}

const props = defineProps<AppButtonProps>()
</script>

<template>
  <RouterLink :to="props.url" class="app-button">
    <img
      v-if="props.type === 'apple'"
      src="/assets/appstore/app-store.svg"
      alt="Download on App store"
    />
    <img
      v-else-if="props.type === 'google'"
      src="/assets/appstore/google-play.svg"
      alt="Download on Google Play"
    />
  </RouterLink>
</template>

<style scoped lang="scss">
.app-button {
  display: inline-block;
  position: relative;
  background: none;
  border: none;
  padding: 0;
  margin: 0 0.25rem;

  img {
    display: block;
    width: 100%;
    max-width: 160px;
    min-width: 160px;
  }
}

@media (max-width: 767px) {
  .app-button {
    img {
      max-width: 140px;
      min-width: 140px;
    }
  }
}
</style>
