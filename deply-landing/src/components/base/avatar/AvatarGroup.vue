<script setup lang="ts">
import { ref, computed } from 'vue'
import type { AvatarSimpleProps } from '/@src/components/base/avatar/AvatarSimple.vue'

export type AvatarGroupSize = 'small' | 'medium' | 'large'

export interface AvatarGroupProps {
  avatars: AvatarSimpleProps[]
  size?: AvatarGroupSize
  compact?: boolean
  squared?: boolean
  limit?: number
  counter?: boolean
  boxed?: boolean
}

const props = withDefaults(defineProps<AvatarGroupProps>(), {
  size: undefined,
  compact: false,
  squared: false,
  limit: 3,
  counter: false,
  boxed: false,
})

const avatarGroupClasses = computed(() => [
  props.compact ? `is-compact` : `is-loose`,
  props.boxed && 'is-boxed',
  props.squared && `is-squared`,
])

const avatarCounterClasses = computed(() => [
  props.size && `is-${props.size}`,
  props.squared && `is-squared`,
])

const total = ref(props.avatars.length)
const limit = ref(props.limit)
const remaining = total.value - limit.value
</script>

<template>
  <div class="avatar-group" :class="avatarGroupClasses">
    <AvatarSimple
      v-for="(avatar, index) in props.avatars.slice(0, props.limit)"
      :key="index"
      :picture="avatar.picture"
      :squared="props.squared"
      :size="props.size"
    />
    <div
      v-if="props.counter && props.limit < props.avatars.length"
      class="avatar-counter"
      :class="avatarCounterClasses"
    >
      <span class="counter-inner">+{{ remaining }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.avatar-group {
  display: flex;

  .avatar-counter {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    width: 38px;
    min-width: 38px;
    border-radius: 50%;
    background: var(--avatar-counter-bg-color);

    .counter-inner {
      position: relative;
      left: -0.25rem;
      font-family: var(--font);
      color: var(--avatar-counter-color);
      font-weight: 500;
      font-size: 0.9rem;
    }

    &.is-squared {
      border-radius: 0.75rem;
    }

    &.is-small {
      height: 28px;
      width: 28px;
      min-width: 28px;

      &:not(:first-child) {
        margin-left: -0.5rem;
      }

      &.is-squared {
        border-radius: 0.5rem;
      }
    }

    &.is-medium {
      height: 48px;
      width: 48px;
      min-width: 48px;
      border: 4px solid var(--avatar-border-color);

      &.is-squared {
        border-radius: 0.85rem;
      }
    }

    &.is-large {
      height: 62px;
      width: 62px;
      min-width: 62px;
      border: 4px solid var(--avatar-border-color);

      &.is-squared {
        border-radius: 1rem;
      }
    }
  }

  &.is-compact {
    *:not(:first-child) {
      margin-left: -0.75rem;
    }

    :deep(.avatar) {
      .avatar-image {
        border: 3px solid var(--avatar-border-color) !important;
      }

      &.is-small {
        &:not(:first-child) {
          margin-left: -0.5rem;
        }

        .avatar-image {
          border: 2px solid var(--avatar-border-color) !important;
        }
      }

      &.is-medium {
        .avatar-image {
          border: 4px solid var(--avatar-border-color) !important;
        }
      }

      &.is-large {
        .avatar-image {
          border: 4px solid var(--avatar-border-color) !important;
        }
      }
    }
  }

  &.is-loose {
    *:not(:first-child) {
      margin-left: 0.75rem;
    }
  }

  &.is-boxed {
    :deep(.avatar) {
      padding: 0.35rem;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      box-shadow: var(--spread-shadow);

      .avatar-image {
        background: var(--wrap-muted-color);
      }
    }

    &:not(.is-squared) {
      :deep(.avatar) {
        border-radius: 50%;
      }
    }
  }
}
</style>
