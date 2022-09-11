<script setup lang="ts">
import { computed } from 'vue'

export type TitleSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type TitleWeight = 'thin' | 'stressed' | 'semi' | 'bold'
export type TitleTag = 'h1' | 'h2' | 'h3'

export interface TitleProps {
  size?: TitleSize
  weight?: TitleWeight
  inverted?: boolean
  narrow?: boolean
  leading?: boolean
  uppercase?: boolean
  tag: TitleTag
}

const props = withDefaults(defineProps<TitleProps>(), {
  size: undefined,
  weight: undefined,
  inverted: false,
  narrow: false,
  leading: false,
  uppercase: false,
  tag: 'h2',
})

const titleClasses = computed(() => [
  props.size && `is-${props.size}`,
  props.weight && `is-${props.weight}`,
  props.inverted && `is-inverted`,
  props.narrow && `is-narrow`,
  props.leading && `is-leading`,
  props.uppercase && `is-uppercase`,
])
</script>

<template inherit-attrs="false">
  <h1 v-if="tag == 'h1'" v-bind="$attrs" class="title" :class="titleClasses">
    <slot></slot>
  </h1>

  <h2 v-if="tag == 'h2'" v-bind="$attrs" class="title" :class="titleClasses">
    <slot></slot>
  </h2>

  <h3 v-if="tag == 'h3'" v-bind="$attrs" class="title" :class="titleClasses">
    <slot></slot>
  </h3>
</template>

<style lang="scss" scoped>
.title {
  font-family: var(--font-alt);
  color: var(--title-color);

  &.is-inverted {
    color: var(--title-color-inverted);
  }

  &.is-0,
  &.is-8 {
    font-size: 4rem;
  }

  &.is-7 {
    font-size: 0.9rem;
  }

  &.is-narrow {
    margin-bottom: 0 !important;
  }

  &.is-leading {
    margin-bottom: 0.5rem !important;
  }

  &.is-uppercase {
    text-transform: uppercase;
  }

  &.is-thin {
    font-weight: 300;
  }

  &.is-semi {
    font-weight: 600;
  }

  &.is-bold {
    font-weight: 700;
  }

  &.is-bolder {
    font-weight: 800;
  }
}
</style>
