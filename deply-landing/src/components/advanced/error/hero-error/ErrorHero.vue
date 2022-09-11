<script setup lang="ts">
import { computed } from 'vue'

export type ErrorHeroColor = 'default' | 'grey' | 'primary'

export interface ErrorHeroProps {
  color?: ErrorHeroColor
  pattern?: boolean
}

const props = withDefaults(defineProps<ErrorHeroProps>(), {
  color: 'grey',
  pattern: false,
})

const errorClasses = computed(() => [
  props.color && `is-${props.color}`,
  props.pattern && ``,
])
</script>

<template>
  <Hero class="error-hero" size="fullheight" :class="errorClasses">
    <template #body>
      <slot name="error"></slot>
    </template>
  </Hero>
</template>

<style scoped lang="scss">
.error-hero {
  :deep(.hero-body) {
    padding-top: 0;
    padding-bottom: 0;
  }

  &.is-default {
    background-color: var(--hero-bg-color);
  }

  &.is-grey {
    background-color: var(--hero-grey-bg-color);
  }

  &.is-primary {
    background-color: var(--primary-dark-12);
  }
}

.is-dark {
  .error-hero {
    background-color: var(--night-light-4);
  }
}
</style>
