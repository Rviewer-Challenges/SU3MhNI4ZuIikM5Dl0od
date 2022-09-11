<script setup lang="ts">
import { computed } from 'vue'

import type { SocialLink } from '/@src/types'

export interface TeamBlockEItem {
  image: string
  name: string
  position: string
  socialLinks: SocialLink[]
}

export interface TeamBlockEProps {
  items: TeamBlockEItem[]
  limit?: number
  squared?: boolean
  shapes?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<TeamBlockEProps>(), {
  limit: 9,
  squared: false,
  shapes: false,
  animated: false,
})

const blockClasses = computed(() => [props.animated && `is-animated`])
</script>

<template>
  <div class="team-block py-6 mx-auto max-w-9">
    <div class="columns is-multiline b-columns-third-tablet-p">
      <div
        v-for="(item, index) in props.items.slice(0, props.limit)"
        :key="index"
        class="column is-4"
      >
        <div class="team-block-item" :class="blockClasses">
          <div class="media is-align-items-center">
            <div class="media-left is-flex is-align-items-center">
              <AvatarSimple
                size="large"
                :picture="item.image"
                :squared="props.squared"
              />
            </div>
            <div class="media-content">
              <Title tag="h3" :size="7" weight="semi" narrow>
                <span>{{ item.name }}</span>
              </Title>
              <p class="paragraph rem-85">{{ item.position }}</p>
              <div class="is-flex is-align-items-center">
                <RouterLink
                  v-for="(link, i) in item.socialLinks"
                  :key="i"
                  :to="link.url"
                  target="_blank"
                  class="mr-2 rem-80"
                >
                  <i class="iconify" :data-icon="link.icon"></i>
                  <span class="is-sr-only">{{ link.name }}</span>
                </RouterLink>
              </div>
            </div>
          </div>
          <div v-if="props.shapes" class="block-shape block-shape-1"></div>
          <div v-if="props.shapes" class="block-shape block-shape-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.team-block {
  .team-block-item {
    position: relative;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    padding: 0.75rem;
    border-radius: 0.75rem;
    overflow: hidden;

    .media {
      position: relative;
      z-index: 2;

      a {
        &:hover {
          color: var(--primary-light-12);
        }
      }
    }

    .block-shape {
      position: absolute;
      height: 16px;
      width: 100px;
      border-radius: 50rem;
      background: var(--widget-grey);
      z-index: 0;
      transition: transform 0.3s ease;

      &.block-shape-1 {
        bottom: 0;
        right: 0;
        transform: rotate(45deg) translate(10px, -50px);
        transition-delay: 0.7s;
      }

      &.block-shape-2 {
        bottom: 0;
        right: 0;
        transform: rotate(45deg) translate(30px, -20px);
        transition-delay: 0.55s;
      }
    }

    &.is-animated {
      .block-shape {
        &.block-shape-1 {
          transform: rotate(45deg) translate(90px, -50px);
        }

        &.block-shape-2 {
          transform: rotate(45deg) translate(100px, -20px);
        }
      }

      &:hover {
        .block-shape {
          &.block-shape-1 {
            transform: rotate(45deg) translate(10px, -50px);
          }

          &.block-shape-2 {
            transform: rotate(45deg) translate(30px, -20px);
          }
        }
      }
    }
  }
}

.is-dark {
  .team-block {
    .team-block-item {
      .block-shape {
        opacity: 0.05;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .team-block {
    .team-block-item {
      :deep(.avatar) {
        img {
          height: 50px;
          width: 50px;
          min-width: 50px;
        }
      }
    }
  }
}
</style>
