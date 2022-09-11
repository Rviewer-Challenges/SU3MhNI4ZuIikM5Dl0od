<script setup lang="ts">
import { computed } from 'vue'
export type TongueTwoColor =
  | 'grey'
  | 'darker'
  | 'primary'
  | 'white'
  | 'footer-dark'

export interface TongueTwoProps {
  color?: TongueTwoColor
}

const props = withDefaults(defineProps<TongueTwoProps>(), {
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
    class="tongue-2"
    :class="svgClasses"
  >
    <path
      d="M843,456.4C843,218.7,301.7,10,13,10c-288.7,0-440,69.6-440,307.4c0,237.8,242.1,314.1,530.9,314.1
	C392.6,631.5,843,694.2,843,456.4z"
    />
    <path
      class="opacity-50"
      d="M853,446.4C853,208.7,371.4,0,114.5,0S-277,69.6-277,307.4c0,237.8,215.4,314.1,472.4,314.1
	C452.3,621.5,853,684.2,853,446.4z"
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
