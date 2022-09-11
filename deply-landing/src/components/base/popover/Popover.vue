<script setup lang="ts">
import { computed } from 'vue'
import Popper from 'vue3-popper'

export type PopoverPlacement = 'top' | 'bottom' | 'right' | 'left'
export type PopoverColor =
  | 'default'
  | 'inverted'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'purple'

export type PopoverSpacing = 'small' | 'medium' | 'large'

export interface PopoverProps {
  content?: string
  placement?: PopoverPlacement
  spacing?: PopoverSpacing
  arrow?: boolean
  hover?: boolean
  custom?: boolean
  color?: PopoverColor
  offsetDistance?: number
  openDelay?: number
  closeDelay?: number
}

const props = withDefaults(defineProps<PopoverProps>(), {
  content: undefined,
  placement: 'top',
  spacing: 'medium',
  arrow: false,
  hover: false,
  custom: false,
  color: 'default',
  offsetDistance: 12,
  openDelay: 0,
  closeDelay: 0,
})

const popoverClasses = computed(() => [
  props.color && !props.custom && `popover-${props.color}`,
  props.spacing && `popover-spacing-${props.spacing}`,
])
</script>

<template>
  <ClientOnly v-bind="$attrs">
    <Popper
      :placement="props.placement"
      :arrow="props.arrow"
      :hover="props.hover"
      :content="props.content"
      :class="popoverClasses"
    >
      <template v-if="props.custom" #content>
        <slot name="popover"></slot>
      </template>
      <slot></slot>
    </Popper>
  </ClientOnly>
</template>

<style scoped lang="scss">
:deep(.popper) {
  border-radius: 0.75rem;
  border-color: transparent;
  font-family: var(--font);
  font-size: 0.85rem;

  &[data-popper-placement^='left'] > #arrow {
    right: -1px;
  }

  &[data-popper-placement^='right'] > #arrow {
    left: -10px;
  }
}
</style>
