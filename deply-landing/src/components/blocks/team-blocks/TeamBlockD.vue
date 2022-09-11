<script setup lang="ts">
import { computed } from 'vue'
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

import type { SocialLink } from '/@src/types'

export type TeamBlockDColumn = 3 | 4

export interface TeamBlockDItem {
  image: string
  name: string
  position: string
  bio: string
  socialLinks: SocialLink[]
}

export interface TeamBlockDProps {
  items: TeamBlockDItem[]
  columns?: TeamBlockDColumn
  limit?: number
  squared?: boolean
  bubbles?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<TeamBlockDProps>(), {
  columns: 3,
  limit: 8,
  squared: false,
  bubbles: false,
  animated: false,
})

const blockClasses = computed(() => [
  props.squared && `is-squared`,
  props.animated && `is-animated`,
])

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])
</script>

<template>
  <div class="team-block py-6 mx-auto">
    <div class="columns is-multiline b-columns-third-tablet-p">
      <div
        v-for="(item, index) in props.items.slice(0, props.limit)"
        :key="index"
        class="column"
        :class="columnClasses"
      >
        <div class="team-block-item has-text-centered" :class="blockClasses">
          <img
            class="block mx-auto size-110x110"
            :src="item.image"
            alt="featured image"
            height="110"
            width="110"
            @error.once="
              (event) => viaPlaceholderErrorHandler(event, '110x110')
            "
          />
          <div>
            <Title tag="h3" :size="7" weight="semi" narrow>
              <span>{{ item.name }}</span>
            </Title>
            <p class="paragraph rem-85 mb-2">{{ item.position }}</p>
            <p class="paragraph rem-85 mb-4 text-light mx-auto max-w-3">
              {{ item.bio }}
            </p>
          </div>
          <div class="is-flex is-justify-content-center">
            <RouterLink
              v-for="(link, i) in item.socialLinks"
              :key="i"
              :to="link.url"
              target="_blank"
              class="px-2"
            >
              <i class="iconify" :data-icon="link.icon"></i>
              <span class="is-sr-only">{{ link.name }}</span>
            </RouterLink>
          </div>
          <div v-if="props.bubbles" class="bubble-container">
            <div class="bubble bubble-1"></div>
            <div class="bubble bubble-2"></div>
            <div class="bubble bubble-3"></div>
            <div class="bubble bubble-4"></div>
            <div class="bubble bubble-5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.team-block {
  .team-block-item {
    position: relative;
    text-align: center;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    padding: 2rem;
    border-radius: 1.5rem;
    overflow: hidden;

    img,
    div:not(.bubble):not(.bubble-container) {
      position: relative;
      z-index: 2;
    }

    img {
      border-radius: 50%;
    }

    .bubble {
      position: absolute;
      border-radius: 50%;
      background: var(--feature-block-c-box-bubble-bg);
      z-index: 0;
      transition: transform 0.3s;

      &.bubble-1 {
        top: -1rem;
        left: -1rem;
        height: 65px;
        width: 65px;
        transition-delay: 0.35s;
      }

      &.bubble-2 {
        top: 4rem;
        left: 4rem;
        height: 32px;
        width: 32px;
        transition-delay: 0.15s;
      }

      &.bubble-3 {
        bottom: 3rem;
        left: -3rem;
        height: 80px;
        width: 80px;
        transition-delay: 0.05s;
      }

      &.bubble-4 {
        bottom: 3rem;
        right: 2rem;
        height: 30px;
        width: 30px;
        transition-delay: 0.5s;
      }

      &.bubble-5 {
        top: 1rem;
        right: 2rem;
        height: 20px;
        width: 20px;
        transition-delay: 0.65s;
      }
    }

    &.is-squared {
      img {
        border-radius: 1.75rem;
      }
    }

    &.is-animated {
      .bubble {
        transform: scale(0);
      }
    }

    &:hover {
      &.is-animated {
        .bubble {
          transform: scale(1) !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .team-block {
    .team-block-item {
      padding: 1.5rem;
    }
  }
}
</style>
