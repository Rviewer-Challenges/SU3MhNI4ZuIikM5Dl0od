<script setup lang="ts">
import { computed } from 'vue'

export interface FieldProps {
  grouped?: boolean
}

const props = withDefaults(defineProps<FieldProps>(), {
  grouped: false,
})

const fieldClasses = computed(() => [props.grouped && `is-grouped`])
</script>

<template>
  <div class="field" :class="fieldClasses">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@media only screen and (max-width: 767px) {
  .field {
    &.is-grouped {
      flex-direction: column;

      :deep(.control) {
        margin: 0;

        &:not(:last-child) {
          margin-bottom: 0.75rem;
        }
      }

      :deep(.button) {
        width: 100%;
      }
    }
  }
}
</style>
