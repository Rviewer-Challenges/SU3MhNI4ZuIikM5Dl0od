<script setup lang="ts">
import type { AvatarSimpleSize } from '/@src/components/base/avatar/AvatarSimple.vue'

export type HeroStackOrientation = 'left' | 'right'

export interface HeroStack {
  id: number
  order: number
  orientation: HeroStackOrientation
  picture: string
  size: AvatarSimpleSize
}

export interface HeroStacksProps {
  stacks: HeroStack[]
}

const props = withDefaults(defineProps<HeroStacksProps>(), {
  stacks: () => [],
})
</script>

<template>
  <AvatarSimple
    v-for="(avatar, index) in props.stacks"
    :key="index"
    class="float-stack"
    :class="[
      avatar.order && `float-stack-${avatar.order}`,
      avatar.orientation && `is-${avatar.orientation}`,
    ]"
    :picture="avatar.picture"
    :size="avatar.size"
  />
</template>

<style lang="scss" scoped>
.float-stack {
  position: absolute !important;
  padding: 0.35rem;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 50%;
  box-shadow: var(--spread-shadow);

  :deep(.avatar-image) {
    background: var(--wrap-muted-color);
  }

  &.is-left {
    &.float-stack-1 {
      top: 20%;
      left: 0;
    }

    &.float-stack-2 {
      top: 30%;
      left: 5%;
    }

    &.float-stack-3 {
      top: 28%;
      left: -5%;
    }

    &.float-stack-4 {
      top: 42%;
      left: -18%;
    }

    &.float-stack-5 {
      top: 34%;
      left: -12%;
    }

    &.float-stack-6 {
      top: 21%;
      left: -14%;
    }

    &.float-stack-7 {
      top: 10%;
      left: -8%;
    }

    &.float-stack-8 {
      top: 42%;
      left: -2%;
    }
  }

  &.is-right {
    &.float-stack-1 {
      top: 20%;
      right: 0;
    }

    &.float-stack-2 {
      top: 30%;
      right: 5%;
    }

    &.float-stack-3 {
      top: 28%;
      right: -5%;
    }

    &.float-stack-4 {
      top: 42%;
      right: -18%;
    }

    &.float-stack-5 {
      top: 34%;
      right: -12%;
    }

    &.float-stack-6 {
      top: 21%;
      right: -14%;
    }

    &.float-stack-7 {
      top: 10%;
      right: -8%;
    }

    &.float-stack-8 {
      top: 42%;
      right: -2%;
    }
  }
}

@media only screen and (max-width: 767px) {
  .float-stack {
    &.is-left {
      &.float-stack-1 {
        top: 5%;
        left: -12%;
      }

      &.float-stack-2 {
        display: none !important;
      }

      &.float-stack-3,
      &.float-stack-4,
      &.float-stack-6,
      &.float-stack-7 {
        display: none !important;
      }

      &.float-stack-8 {
        top: 20%;
        left: -6%;
        transform: scale(0.7);
      }
    }

    &.is-right {
      &.float-stack-1 {
        top: -4%;
        right: 23%;
      }

      &.float-stack-2 {
        display: none !important;
      }

      &.float-stack-3,
      &.float-stack-4,
      &.float-stack-7 {
        display: none;
      }

      &.float-stack-5 {
        top: 30%;
      }

      &.float-stack-6 {
        top: 2%;
        right: -16%;
      }

      &.float-stack-8 {
        top: 17%;
        right: -11%;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .float-stack {
    &.is-left {
      &.float-stack-3 {
        left: -10%;
      }

      &.float-stack-4 {
        display: none;
      }

      &.float-stack-5 {
        top: -5%;
        left: -5%;
      }

      &.float-stack-6 {
        top: 4%;
        left: 5%;
      }
    }

    &.is-right {
      &.float-stack-3 {
        right: -10%;
      }

      &.float-stack-4 {
        display: none;
      }

      &.float-stack-5 {
        top: -5%;
        right: -5%;
      }

      &.float-stack-6 {
        top: 4%;
        right: 4%;
      }
    }
  }
}
</style>
