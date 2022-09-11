<script setup lang="ts">
import { computed } from 'vue'

export type TableCellColors =
  | 'default'
  | 'medium'
  | 'main'
  | 'blue'
  | 'green'
  | 'orange'
  | 'red'

export type TableCellSize = '' | 'small' | 'medium' | 'large'

export interface TableCellProps {
  color?: TableCellColors
  size?: TableCellSize
}

const props = withDefaults(defineProps<TableCellProps>(), {
  color: 'medium',
  size: '',
})

const cellClasses = computed(() => [
  props.color && `is-${props.color}`,
  props.size === 'small' && `rem-90`,
])
</script>

<template>
  <td :class="cellClasses">
    <slot></slot>
  </td>
</template>

<style lang="scss" scoped>
td {
  vertical-align: middle;
  padding: 0.75rem;
  border-color: var(--table-border-color);

  &.is-default {
    color: var(--light-text);
  }

  &.is-medium {
    color: var(--medium-text);
  }

  &.is-main {
    color: var(--primary);
  }

  &.is-blue {
    color: var(--info);
  }

  &.is-green {
    color: var(--success);
  }

  &.is-orange {
    color: var(--orange);
  }

  &.is-red {
    color: var(--red);
  }
}
</style>
