<script setup lang="ts">
import { computed } from 'vue'
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export type AvatarSimpleSize = 'small' | 'medium' | 'large' | 'big' | 'xl' | ''

export interface AvatarSimpleProps {
  size?: AvatarSimpleSize
  picture: string
  squared?: boolean
  badge?: string
}

const props = withDefaults(defineProps<AvatarSimpleProps>(), {
  size: undefined,
  squared: false,
  badge: undefined,
})

const avatarSimpleClasses = computed(() => [
  props.size && `is-${props.size}`,
  props.squared && `is-squared`,
])
</script>

<template>
  <div class="avatar" :class="avatarSimpleClasses">
    <slot>
      <img
        :src="props.picture"
        class="avatar-image"
        alt="placeholder"
        height="38"
        width="38"
        @error.once="(event) => viaPlaceholderErrorHandler(event, '150x150')"
      />
      <img
        v-if="props.badge"
        :src="props.badge"
        class="avatar-badge"
        alt="Badge"
        height="18"
        width="18"
        @error.once="(event) => viaPlaceholderErrorHandler(event, '150x150')"
      />
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  position: relative;
  display: inline-block;

  .avatar-image {
    display: block;
    height: 38px;
    width: 38px;
    min-width: 38px;
    border-radius: 50%;
  }

  .avatar-badge {
    position: absolute;
    bottom: -0.1rem;
    right: -0.1rem;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid var(--avatar-border-color);
  }

  &.is-small {
    .avatar-image {
      height: 28px;
      width: 28px;
      min-width: 28px;
    }

    .avatar-badge {
      bottom: -0.05rem;
      right: -0.05rem;
      width: 12px;
      height: 12px;
    }

    &.is-squared {
      .avatar-image {
        border-radius: 0.5rem;
      }

      .avatar-badge {
        bottom: -0.15rem !important;
        right: -0.15rem !important;
      }
    }
  }

  &.is-medium {
    .avatar-image {
      height: 48px;
      width: 48px;
      min-width: 48px;
    }

    .avatar-badge {
      bottom: -0.1rem;
      right: -0.1rem;
      width: 22px;
      height: 22px;
    }

    &.is-squared {
      .avatar-image {
        border-radius: 0.85rem;
      }

      .avatar-badge {
        bottom: -0.25rem !important;
        right: -0.25rem !important;
      }
    }
  }

  &.is-large {
    .avatar-image {
      height: 62px;
      width: 62px;
      min-width: 62px;
    }

    .avatar-badge {
      bottom: -0.02rem;
      right: -0.02rem;
      width: 28px;
      height: 28px;
      border-width: 3px;
    }

    &.is-squared {
      .avatar-image {
        border-radius: 1rem;
      }

      .avatar-badge {
        bottom: -0.25rem !important;
        right: -0.25rem !important;
      }
    }
  }

  &.is-big {
    .avatar-image {
      height: 80px;
      width: 80px;
      min-width: 80px;
    }

    .avatar-badge {
      bottom: 0.02rem;
      right: 0.02rem;
      width: 34px;
      height: 34px;
      border-width: 3px;
    }

    &.is-squared {
      .avatar-image {
        border-radius: 1.25rem;
      }

      .avatar-badge {
        bottom: -0.25rem !important;
        right: -0.25rem !important;
      }
    }
  }

  &.is-xl {
    .avatar-image {
      height: 100px;
      width: 100px;
      min-width: 100px;
    }

    .avatar-badge {
      bottom: 0.1rem;
      right: 0.1rem;
      width: 38px;
      height: 38px;
      border-width: 4px;
    }

    &.is-squared {
      .avatar-image {
        border-radius: 1.5rem;
      }

      .avatar-badge {
        bottom: -0.25rem !important;
        right: -0.25rem !important;
      }
    }
  }

  &.is-squared {
    .avatar-image {
      border-radius: 0.75rem;
    }
  }
}
</style>
