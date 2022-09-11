<script setup lang="ts">
import { computed } from 'vue'

export interface SectionMapProps {
  light?: boolean
}

const props = withDefaults(defineProps<SectionMapProps>(), {
  light: false,
})

const mapClasses = computed(() => [props.light && 'is-light'])
</script>

<template>
  <img
    class="map-bg z-0"
    :class="mapClasses"
    src="/assets/illustrations/map/map.svg"
    alt="map background"
  />
</template>

<style lang="scss" scoped>
.map-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

html:not(.is-dark) {
  .map-bg {
    &.is-light {
      filter: invert(1);
      opacity: 0.6;
    }
  }
}
</style>
