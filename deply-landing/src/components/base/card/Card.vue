<script setup lang="ts">
import { computed } from 'vue'

export type CardShape = 'straight' | 'squared' | 'curved'

export interface CardProps {
  padding?: string
  shape?: CardShape
  shadow?: boolean
  muted?: boolean
  overflow?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<CardProps>(), {
  padding: '1.5rem',
  shape: 'curved',
  shadow: false,
  muted: false,
  overflow: true,
  animated: false,
})

const cardClasses = computed(() => [
  props.shape && `is-${props.shape}`,
  props.animated && `is-animated`,
  props.muted && `is-muted`,
  props.overflow && `card-overflow`,
  !props.shadow ? `card-shadow-hover` : `card-shadow`,
])
</script>

<template>
  <div class="card" :class="cardClasses">
    <slot name="header"></slot>
    <div class="card-content">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  box-shadow: none;
  transition: box-shadow 0.3s, transform 0.3s;

  &.is-squared {
    border-radius: 0.5rem;
  }

  &.is-curved {
    border-radius: 1.25rem;
  }

  &.is-animated {
    &:hover {
      transform: translateY(-5px);
    }
  }

  &.is-muted {
    background: var(--wrap-muted-color);
    border: none !important;
    box-shadow: none !important;
  }

  &.card-shadow {
    box-shadow: var(--light-box-shadow);
  }

  &.card-shadow-hover:hover {
    box-shadow: var(--light-box-shadow);
  }

  &.card-overflow {
    overflow: hidden;
  }

  .card-content {
    padding: v-bind('props.padding');
  }
}
</style>
