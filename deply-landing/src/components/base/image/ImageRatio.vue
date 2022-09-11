<script setup lang="ts">
import { computed } from 'vue'

export type ImageRatio =
  | '1by1'
  | '5by4'
  | '4by3'
  | '3by2'
  | '5by3'
  | '16by9'
  | '2by1'
  | '3by1'
  | '4by5'
  | '3by4'
  | '2by3'
  | '3by5'
  | '9by16'
  | '1by2'
  | '1by3'

export type ImageDimensions = 16 | 24 | 32 | 48 | 64 | 96 | 128

export interface ImageRatioProps {
  ratio: ImageRatio
  rounded?: boolean
  curve?: string
  squareDimensions?: ImageDimensions
}

const props = withDefaults(defineProps<ImageRatioProps>(), {
  rounded: false,
  curve: '1rem',
  squareDimensions: undefined,
})

const ratioClasses = computed(() => [
  props.ratio && `is-${props.ratio}`,
  props.ratio === '1by1' &&
    props.squareDimensions &&
    `is-${props.squareDimensions}x${props.squareDimensions}`,
  props.rounded && `is-rounded`,
])

const dimensions = computed(() => {
  return props.squareDimensions + 'px'
})
</script>

<template>
  <figure class="image" :class="ratioClasses">
    <slot></slot>
  </figure>
</template>

<style scoped lang="scss">
.image {
  display: inline-block;

  :deep(img) {
    object-fit: cover;
  }

  &:not(.is-1by1) {
    width: 100%;
  }

  &.is-1by1 {
    max-width: v-bind('dimensions');
    max-height: v-bind('dimensions');
  }

  &.is-rounded {
    :deep(img) {
      border-radius: v-bind('props.curve');
    }
  }
}
</style>
