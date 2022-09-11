<script setup lang="ts">
import { computed } from 'vue'
export type SlantMaskColor = 'grey' | 'primary' | 'white'

export interface SlantMaskProps {
  color?: SlantMaskColor
}

const props = withDefaults(defineProps<SlantMaskProps>(), {
  color: 'white',
})

const svgClasses = computed(() => [props.color && `mask-${props.color}`])
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 587.3 359.4"
  >
    <defs><path id="a-slant-mask" d="M0 0h587.3v359.4H0z" /></defs>
    <clipPath id="b-slant-mask">
      <use xlink:href="#a-slant-mask" overflow="visible" />
    </clipPath>
    <path
      clip-path="url(#b-slant-mask)"
      :class="svgClasses"
      d="M65.6 375.3L602.5 99.1l320.2 111.5 139.2 264.9L617 629.9 6.1 465.8z"
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
