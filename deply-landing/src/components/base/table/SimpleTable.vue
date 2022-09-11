<script setup lang="ts">
import { computed } from 'vue'

export interface SimpleTableProps {
  striped?: boolean
  bordered?: boolean
  scrollable?: boolean
}

const props = withDefaults(defineProps<SimpleTableProps>(), {
  striped: false,
  bordered: true,
  scrollable: false,
})

const tableContainerClasses = computed(() => [
  props.scrollable && `table-container`,
])

const tableClasses = computed(() => [
  props.bordered && `is-bordered`,
  props.striped && `is-striped`,
])
</script>

<template>
  <div class="py-2 w-full" :class="tableContainerClasses">
    <div class="table-container">
      <table class="table" :class="tableClasses">
        <slot></slot>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table {
  width: 100%;
  font-family: var(--font);
  background: var(--table-bg-color);
  border-color: var(--table-border-color);
}
</style>
