<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type ActionLinkSize = 'tiny' | 'small'

export interface ActionLinkProps {
  link: RouteLocationRaw
  label?: string
  size?: ActionLinkSize
  narrow?: boolean
  heavy?: boolean
}

const props = withDefaults(defineProps<ActionLinkProps>(), {
  link: undefined,
  label: 'Learn More',
  size: undefined,
  narrow: false,
  heavy: false,
})

const linkClasses = computed(() => [
  props.size === 'tiny' && 'rem-90',
  props.size === 'small' && 'rem-95',
  props.narrow && 'is-narrow',
  props.heavy && 'is-heavy',
])
</script>

<template>
  <RouterLink :to="props.link" class="action-link" :class="linkClasses">
    <span>{{ props.label }}</span>
    <i class="iconify" data-icon="feather:arrow-right"></i>
  </RouterLink>
</template>

<style scoped lang="scss">
.action-link {
  display: inline-flex;
  align-items: center;
  margin-top: 0.5rem;
  font-family: var(--font);

  &:hover {
    color: var(--primary);

    .iconify {
      transform: translateX(5px);
    }
  }

  &.is-narrow {
    margin-top: 0;
  }

  &.is-heavy {
    font-weight: 500;
  }

  .iconify {
    vertical-align: middle;
    margin-left: 0.25rem;
    transition: transform 0.3s;
  }
}
</style>
