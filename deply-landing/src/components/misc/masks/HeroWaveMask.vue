<script setup lang="ts">
import { computed } from 'vue'
export type WaveMaskColor = 'grey' | 'primary' | 'white'

export interface WaveMaskProps {
  color?: WaveMaskColor
}

const props = withDefaults(defineProps<WaveMaskProps>(), {
  color: 'white',
})

const svgClasses = computed(() => [props.color && `mask-${props.color}`])
</script>

<template>
  <svg
    data-name="Calque 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 1186.8"
  >
    <path
      d="M1755.5 78.3a863.94 863.94 0 00-120.4 65.5c-65.5 34-100.5 149-100.5 149-17 71-78.5 156-78.5 156s-99 140-346 168c-189.9 21.5-234.4 124-244.8 170.2-5.2 22.3-16.9 36.8-21.1 41.3-28.7 30.2-53.1 41.6-59.4 44.2-61.6 24.1-145 38.6-204.7 88.3-95.3 79.3-288 83.3-288 83.3C82.8 1045.5 0 1186.8 0 1186.8h1920V.3c-74-4.5-97.5 48.5-164.5 78z"
      :class="svgClasses"
    />
  </svg>
</template>

<style scoped lang="scss">
svg {
  display: block;
}

.mask-white {
  fill: var(--hero-grey-bg-color);
}

.mask-grey {
  fill: var(--hero-bg-color);
}

.mask-primary {
  fill: var(--hero-bg-color);
}
</style>
