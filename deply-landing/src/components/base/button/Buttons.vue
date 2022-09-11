<script setup lang="ts">
import { computed } from 'vue'

export type ButtonsAlign = false | 'left' | 'centered' | 'right'

export interface ButtonsProps {
  alignment?: ButtonsAlign
  stacked?: boolean
}

const props = withDefaults(defineProps<ButtonsProps>(), {
  alignment: undefined,
  stacked: false,
})

const buttonsClasses = computed(() => [
  props.alignment && `is-${props.alignment}`,
  props.stacked && `is-stacked`,
])
</script>

<template>
  <div class="buttons is-relative z-1" :class="buttonsClasses">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@media only screen and (max-width: 767px) {
  .buttons {
    &.is-stacked {
      flex-direction: column;

      :deep(.button) {
        width: 100%;
        margin: 0;

        &:not(:last-child) {
          margin-bottom: 0.5rem !important;
        }
      }
    }
  }
}
</style>
