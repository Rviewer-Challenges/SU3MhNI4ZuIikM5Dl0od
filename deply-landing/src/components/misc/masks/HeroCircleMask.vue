<script setup lang="ts">
import { computed } from 'vue'
export type CircleMaskColor = 'grey' | 'primary' | 'white'

export interface CircleMaskProps {
  color?: CircleMaskColor
}

const props = withDefaults(defineProps<CircleMaskProps>(), {
  color: 'white',
})

const svgClasses = computed(() => [props.color && `mask-${props.color}`])
</script>

<template>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    viewBox="0 0 1440 440"
    xml:space="preserve"
  >
    <g id="XMLID_29_">
      <path
        id="XMLID_30_"
        :class="svgClasses"
        d="M-15 442.5h707.4c-261.2 0-504.3-77.7-707.4-211.2v211.2z"
      />
      <path
        id="XMLID_31_"
        :class="svgClasses"
        d="M692.4 442.5H1455V192.9c-213.6 156.9-477.2 249.6-762.6 249.6z"
      />
    </g>
  </svg>
</template>

<style scoped lang="scss">
svg {
  display: block;
}

.mask-white {
  fill: var(--hero-bg-color);
}

.mask-grey {
  fill: var(--hero-grey-bg-color);
}

.mask-primary {
  fill: var(--primary);
}
</style>
