<script setup lang="ts">
import { computed } from 'vue'
import { useDarkmode } from '/@src/stores/darkmode'

import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface DarkImageProps {
  src: string
  srcDark?: string
  alt?: string
  width?: string
  height?: string
  inline?: boolean
}

const props = withDefaults(defineProps<DarkImageProps>(), {
  alt: undefined,
  srcDark: undefined,
  width: '800',
  height: '600',
})
const darkmode = useDarkmode()
const classes = computed(() => (props.inline ? 'inline' : 'block'))
const src = computed(() =>
  darkmode.isDark && props.srcDark ? props.srcDark : props.src
)
</script>

<template>
  <img
    :class="classes"
    :src="src"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
    loading="lazy"
    @error.once="
      (event) =>
        viaPlaceholderErrorHandler(event, `${props.width}x${props.height}`)
    "
  />
</template>

<style lang="scss" scoped>
img {
  width: 100%;

  &.inline {
    display: inline-block;
  }

  &.block {
    display: block;
  }
}
</style>
