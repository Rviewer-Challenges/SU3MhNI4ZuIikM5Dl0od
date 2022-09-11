<script setup lang="ts">
import { computed } from 'vue'
export type TongueOneColor =
  | 'grey'
  | 'darker'
  | 'primary'
  | 'white'
  | 'footer-dark'

export interface TongueOneProps {
  color?: TongueOneColor
}

const props = withDefaults(defineProps<TongueOneProps>(), {
  color: 'grey',
})

const svgClasses = computed(() => [props.color && `tongue-${props.color}`])
</script>

<template>
  <svg
    width="853"
    height="639"
    viewBox="0 0 853 639"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="tongue-1"
    :class="svgClasses"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M749.122 631.529C1037.86 631.529 1280 555.156 1280 317.386C1280 79.6165 1128.79 10 840.046 10C551.305 10 10 218.672 10 456.442C10 694.212 460.381 631.529 749.122 631.529Z"
    />
    <path
      class="opacity-50"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M657.644 621.529C914.556 621.529 1130 545.156 1130 307.386C1130 69.6165 995.456 0 738.545 0C481.634 0 0 208.672 0 446.442C0 684.212 400.733 621.529 657.644 621.529Z"
    />
  </svg>
</template>

<style scoped lang="scss">
svg {
  display: block;
}

.tongue-grey {
  fill: var(--section-bg-color-grey);

  path {
    fill: var(--section-bg-color-grey);
  }
}

.tongue-darker {
  fill: var(--section-bg-color-dark);

  path {
    fill: var(--section-bg-color-dark);
  }
}

.tongue-white {
  fill: var(--section-bg-color);

  path {
    fill: var(--section-bg-color);
  }
}

.tongue-primary {
  fill: var(--primary);
  opacity: 0.4;

  path {
    fill: var(--primary);
    opacity: 0.4;
  }
}

.tongue-footer-dark {
  fill: var(--footer-dark-bg-color);

  path {
    fill: var(--footer-dark-bg-color);
  }
}
</style>
