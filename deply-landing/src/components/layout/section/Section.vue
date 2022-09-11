<script setup lang="ts">
import { computed } from 'vue'

export type SectionSize = 'medium' | 'large'
export type SectionColor = 'grey' | 'darker' | 'primary' | 'gradient'
export type SectionWave = 'wave-1' | 'wave-2'
export type SectionTongue = 'tongue-1' | 'tongue-2'
export type SectionShapeColor =
  | 'grey'
  | 'darker'
  | 'primary'
  | 'white'
  | 'footer-dark'

export interface SectionProps {
  size?: SectionSize
  color?: SectionColor
  borderedTop?: boolean
  borderedBottom?: boolean
  bottomSpaced?: boolean
  bottomNarrow?: boolean
  topNarrow?: boolean
  overflown?: boolean
  wave?: SectionWave
  tongue?: SectionTongue
  shapeColor?: SectionShapeColor
  overlay?: boolean
}

const props = withDefaults(defineProps<SectionProps>(), {
  size: undefined,
  color: undefined,
  borderedTop: false,
  borderedBottom: false,
  bottomNarrow: false,
  topNarrow: false,
  overflown: false,
  wave: undefined,
  tongue: undefined,
  shapeColor: 'grey',
  overlay: false,
})

const sectionClasses = computed(() => [
  props.size && `is-${props.size}`,
  props.color && `is-${props.color}`,
  props.borderedTop && `has-border-top`,
  props.borderedBottom && `has-border-bottom`,
  props.bottomSpaced && `is-bottom-spaced`,
  props.overflown && `is-overflown`,
  props.wave && `section-${props.wave}`,
  props.tongue && `section-${props.tongue}`,
  props.bottomNarrow && `is-bottom-narrow`,
  props.topNarrow && `is-top-narrow`,
])
</script>

<template>
  <div class="section" :class="sectionClasses">
    <div v-if="overlay" class="section-overlay"></div>
    <slot name="background"></slot>
    <div class="section-content">
      <slot></slot>
    </div>
    <div v-if="props.wave === 'wave-1'" class="section-wave">
      <WaveOne :color="props.shapeColor" />
    </div>
    <div v-if="props.wave === 'wave-2'" class="section-wave">
      <WaveTwo :color="props.shapeColor" name="a-wave-1" />
    </div>
    <div v-if="props.tongue === 'tongue-1'" class="section-tongue">
      <TongueOne :color="props.shapeColor" />
    </div>
    <div v-if="props.tongue === 'tongue-2'" class="section-tongue">
      <TongueTwo :color="props.shapeColor" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin section-gradient {
  background: var(--primary);
  background: linear-gradient(
    to right,
    var(--primary),
    var(--primary-dark-22)
  ) !important;
}

.section {
  position: relative;
  background: var(--section-bg-color);
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  .section-content {
    position: relative;
    z-index: 2;
  }

  .section-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dark-text);
    opacity: 0.6;
    z-index: 0;
  }

  &.is-overflown {
    overflow: initial;
  }

  &.is-darker {
    background: var(--section-bg-color-dark);
  }

  &.is-grey {
    background: var(--section-bg-color-grey);
  }

  &.is-primary {
    background: var(--primary);
  }

  &.is-gradient {
    @include section-gradient();
  }

  &.has-border-top {
    border-top: 1px solid var(--section-border-color);
  }

  &.has-border-bottom {
    border-bottom: 1px solid var(--section-border-color);
  }

  &.is-bottom-spaced {
    padding-bottom: 6rem;
  }

  &.is-bottom-narrow {
    padding-bottom: 0;
  }

  &.is-top-narrow {
    padding-top: 0;
  }

  .section-wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  &.section-wave-1 {
    padding-bottom: 9.875rem;
  }

  &.section-wave-2 {
    padding-bottom: 9.875rem;
  }

  &.section-tongue-1 {
    :deep(.tongue-1) {
      position: absolute;
      top: 75px;
      right: 0;
      width: 720px;
      height: 539px;
      z-index: 1;
    }
  }

  &.section-tongue-2 {
    :deep(.tongue-2) {
      position: absolute;
      top: 75px;
      left: 0;
      width: 720px;
      height: 539px;
      z-index: 1;
    }
  }
}

@media only screen and (max-width: 767px) {
  .section {
    &.section-wave-1 {
      padding-bottom: 3rem;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .section {
    &.section-wave-1 {
      padding-bottom: 6rem;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .section {
    &.section-wave-1 {
      padding-bottom: 8.5rem;
    }
  }
}
</style>
