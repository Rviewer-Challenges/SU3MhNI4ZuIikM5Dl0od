<script setup lang="ts">
import type { AvatarSimpleSize } from '/@src/components/base/avatar/AvatarSimple.vue'

export type HeroAvatarOrientation = 'left' | 'right'

export interface HeroAvatar {
  id: number
  order: number
  orientation: HeroAvatarOrientation
  picture: string
  size: AvatarSimpleSize
}

export interface HeroAvatarsProps {
  avatars: HeroAvatar[]
}

const props = withDefaults(defineProps<HeroAvatarsProps>(), {
  avatars: () => [],
})
</script>

<template>
  <AvatarSimple
    v-for="(avatar, index) in props.avatars"
    :key="index"
    class="float-avatar"
    :class="[
      avatar.order && `float-avatar-${avatar.order}`,
      avatar.orientation && `is-${avatar.orientation}`,
    ]"
    :picture="avatar.picture"
    :size="avatar.size"
  />
</template>

<style lang="scss" scoped>
.float-avatar {
  position: absolute !important;

  &.is-left {
    &.float-avatar-1 {
      top: 0;
      left: 0;
    }

    &.float-avatar-2 {
      top: 10%;
      left: 5%;
    }

    &.float-avatar-3 {
      top: 8%;
      left: -5%;
    }

    &.float-avatar-4 {
      top: 22%;
      left: -18%;
    }

    &.float-avatar-5 {
      top: 16%;
      left: -12%;
    }

    &.float-avatar-6 {
      top: 3%;
      left: -12%;
    }
  }

  &.is-right {
    &.float-avatar-1 {
      top: 0;
      right: 0;
    }

    &.float-avatar-2 {
      top: 10%;
      right: 5%;
    }

    &.float-avatar-3 {
      top: 8%;
      right: -5%;
    }

    &.float-avatar-4 {
      top: 22%;
      right: -18%;
    }

    &.float-avatar-5 {
      top: 16%;
      right: -12%;
    }

    &.float-avatar-6 {
      top: 3%;
      right: -12%;
    }
  }
}

@media only screen and (max-width: 767px) {
  .float-avatar {
    &.is-left {
      &.float-avatar-1 {
        top: -9%;
        left: -7%;
      }

      &.float-avatar-2 {
        display: none !important;
      }

      &.float-avatar-3 {
        display: none !important;
      }

      &.float-avatar-4 {
        top: 35%;
        left: -9%;

        :deep(img) {
          height: 50px !important;
          width: 50px !important;
          min-width: 50px !important;
        }
      }

      &.float-avatar-6 {
        top: 9%;
        left: -2%;
        display: none;
      }
    }

    &.is-right {
      &.float-avatar-1 {
        top: -4%;
        right: 23%;
      }

      &.float-avatar-2 {
        display: none !important;
      }

      &.float-avatar-3 {
        display: none;
      }

      &.float-avatar-4 {
        top: 35%;
        right: -9%;

        :deep(img) {
          height: 50px !important;
          width: 50px !important;
          min-width: 50px !important;
        }
      }

      &.float-avatar-6 {
        top: 2%;
        right: -10%;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .float-avatar {
    &.is-left {
      &.float-avatar-3 {
        left: -7%;
      }

      &.float-avatar-4 {
        display: none;
      }

      &.float-avatar-5 {
        top: -7%;
        left: 9%;
      }

      &.float-avatar-6 {
        top: 24%;
        left: 2%;
      }
    }

    &.is-right {
      &.float-avatar-3 {
        right: -7%;
      }

      &.float-avatar-4 {
        display: none;
      }

      &.float-avatar-5 {
        top: -7%;
        right: 9%;
      }

      &.float-avatar-6 {
        top: 24%;
        right: 2%;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .float-avatar {
    &.is-left {
      &.float-avatar-6 {
        top: 21%;
        left: -1%;
      }
    }

    &.is-right {
      &.float-avatar-6 {
        top: 21%;
        right: -1%;
      }
    }
  }
}
</style>
