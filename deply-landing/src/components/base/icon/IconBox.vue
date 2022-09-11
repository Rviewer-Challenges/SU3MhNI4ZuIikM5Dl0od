<script setup lang="ts">
export type IconBoxSize = 'small' | 'medium' | 'large' | 'big' | 'xl'
export type IconBoxColor =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'
  | 'yellow'
  | 'orange'
  | 'green'
  | 'red'
  | 'blue'
export interface IconBoxProps {
  size?: IconBoxSize
  color?: IconBoxColor
  rounded?: boolean
  bordered?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<IconBoxProps>(), {
  size: undefined,
  color: 'default',
  bordered: false,
  inverted: false,
})
</script>

<template>
  <div
    class="icon-box"
    :class="[
      props.size && 'is-' + props.size,
      props.color && 'is-' + props.color,
      props.rounded && 'is-rounded',
      props.bordered && 'is-bordered',
      props.inverted && 'is-inverted',
    ]"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.icon-box {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  min-width: 40px;
  border-radius: 0.5rem;
  background: var(--icon-bg-color);
  transition: all 0.3s;

  &.is-small {
    height: 32px;
    width: 32px;
    min-width: 32px;

    svg {
      height: 16px;
      width: 16px;
      stroke-width: 1.4px;
    }
  }

  &.is-medium {
    height: 50px;
    width: 50px;
    min-width: 50px;
    font-size: 1.25rem;
    border-radius: 0.75rem;

    &.is-bordered {
      border-width: 1.6px;
    }

    svg {
      height: 25px;
      width: 25px;
      stroke-width: 1.4px;
    }
  }

  &.is-large {
    height: 68px;
    width: 68px;
    min-width: 68px;
    font-size: 1.5rem;
    border-radius: 1rem;

    &.is-bordered {
      border-width: 2px;
    }

    svg {
      height: 34px;
      width: 34px;
      stroke-width: 2px;
    }
  }

  &.is-big {
    height: 80px;
    width: 80px;
    min-width: 80px;
    font-size: 1.75rem;
    border-radius: 1.25rem;

    &.is-bordered {
      border-width: 2px;
    }

    svg {
      height: 40px;
      width: 40px;
      stroke-width: 3px;
    }
  }

  &.is-xl {
    height: 100px;
    width: 100px;
    min-width: 100px;
    font-size: 2rem;
    border-radius: 1.5rem;

    &.is-bordered {
      border-width: 2px;
    }

    svg {
      height: 50px;
      width: 50px;
      stroke-width: 3px;
    }
  }

  &.is-rounded {
    border-radius: 50%;
  }

  &.is-inverted {
    i {
      color: var(--white-smoke) !important;
    }

    :deep(svg) {
      color: var(--white-smoke) !important;
    }
  }

  &.is-default {
    :deep(svg) {
      color: var(--icon-color);
    }
  }

  &.is-primary {
    background: var(--icon-primary-bg-color);

    &.is-bordered {
      border-color: var(--icon-primary-color);
    }

    &.is-inverted {
      background: var(--icon-primary-inverted-bg-color);
    }

    i {
      color: var(--icon-primary-color);
    }

    :deep(svg) {
      color: var(--icon-primary-color);
    }
  }

  &.is-success {
    background: var(--icon-success-bg-color);

    &.is-bordered {
      border-color: var(--icon-success-color);
    }

    &.is-inverted {
      background: var(--icon-success-inverted-bg-color);
    }

    i {
      color: var(--icon-success-color);
    }

    :deep(svg) {
      color: var(--icon-success-color);
    }
  }

  &.is-info {
    background: var(--icon-info-bg-color);

    &.is-bordered {
      border-color: var(--icon-info-color);
    }

    &.is-inverted {
      background: var(--icon-info-inverted-bg-color);
    }

    i {
      color: var(--icon-info-color);
    }

    :deep(svg) {
      color: var(--icon-info-color);
    }
  }

  &.is-warning {
    background: var(--icon-warning-bg-color);

    &.is-bordered {
      border-color: var(--icon-warning-color);
    }

    &.is-inverted {
      background: var(--icon-warning-inverted-bg-color);
    }

    i {
      color: var(--icon-warning-color);
    }

    :deep(svg) {
      color: var(--icon-warning-color);
    }
  }

  &.is-danger {
    background: var(--icon-danger-bg-color);

    &.is-bordered {
      border-color: var(--icon-danger-color);
    }

    &.is-inverted {
      background: var(--icon-danger-inverted-bg-color);
    }

    i {
      color: var(--icon-danger-color);
    }

    :deep(svg) {
      color: var(--icon-danger-color);
    }
  }

  &.is-purple {
    background: var(--icon-purple-bg-color);

    &.is-bordered {
      border-color: var(--icon-purple-color);
    }

    &.is-inverted {
      background: var(--icon-purple-inverted-bg-color);
    }

    i {
      color: var(--icon-purple-color);
    }

    :deep(svg) {
      color: var(--icon-purple-color);
    }
  }

  &.is-blue {
    background: var(--icon-blue-bg-color);

    &.is-bordered {
      border-color: var(--icon-blue-color);
    }

    &.is-inverted {
      background: var(--icon-blue-inverted-bg-color);
    }

    i {
      color: var(--icon-blue-color);
    }

    :deep(svg) {
      color: var(--icon-blue-color);
    }
  }

  &.is-yellow {
    background: var(--icon-yellow-bg-color);

    &.is-bordered {
      border-color: var(--icon-yellow-color);
    }

    &.is-inverted {
      background: var(--icon-yellow-inverted-bg-color);
    }

    i {
      color: var(--icon-yellow-color);
    }

    :deep(svg) {
      color: var(--icon-yellow-color);
    }
  }

  &.is-orange {
    background: var(--icon-orange-bg-color);

    &.is-bordered {
      border-color: var(--icon-orange-color);
    }

    &.is-inverted {
      background: var(--icon-orange-inverted-bg-color);
    }

    i,
    .iconify {
      color: var(--icon-orange-color);
    }

    :deep(svg) {
      color: var(--icon-orange-color);
    }
  }

  &.is-green {
    background: var(--icon-green-bg-color);

    &.is-bordered {
      border-color: var(--icon-green-color);
    }

    &.is-inverted {
      background: var(--icon-green-inverted-bg-color);
    }

    i {
      color: var(--icon-green-color);
    }

    :deep(svg) {
      color: var(--icon-green-color);
    }
  }

  &.is-red {
    background: var(--icon-red-bg-color);

    &.is-bordered {
      border-color: var(--icon-red-color);
    }

    &.is-inverted {
      background: var(--icon-red-inverted-bg-color);
    }

    i {
      color: var(--icon-red-color);
    }

    :deep(svg) {
      color: var(--icon-red-color);
    }
  }

  &.is-bordered {
    border: 1px solid var(--widget-grey);
  }

  .iconify {
    font-size: 1.2rem;
    color: var(--muted-grey);
    transition: color 0.3s;
  }

  .iconify {
    font-size: 1.4rem;
    color: var(--muted-grey);
    transition: color 0.3s;
  }

  svg {
    height: 20px;
    width: 20px;
    stroke-width: 1.4px;
  }
}
</style>
