<script setup lang="ts">
import { computed } from 'vue'
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

import type { SocialLink } from '/@src/types'

export type TeamBlockAColumn = 3 | 4 | 6

export interface TeamBlockAItem {
  image: string
  name: string
  position: string
  socialLinks: SocialLink[]
}

export interface TeamBlockAProps {
  items: TeamBlockAItem[]
  columns?: TeamBlockAColumn
  limit?: number
  curved?: boolean
  grayscale?: boolean
  scale?: boolean
  plain?: boolean
}

const props = withDefaults(defineProps<TeamBlockAProps>(), {
  columns: 3,
  limit: 32,
  curved: false,
  grayscale: false,
  scale: false,
  plain: false,
})

const blockClasses = computed(() => [
  props.grayscale && `is-grayscale`,
  props.scale && `is-scale`,
  props.plain && `is-plain`,
  props.plain && props.curved && `is-curved`,
])

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])
</script>

<template>
  <div class="py-6">
    <div
      class="columns is-multiline b-columns-half-tablet-p"
      :class="blockClasses"
    >
      <div
        v-for="(item, index) in props.items.slice(0, props.limit)"
        :key="index"
        class="column"
        :class="columnClasses"
      >
        <div class="card">
          <div class="card-image">
            <img
              :src="item.image"
              alt="Team member image"
              @error.once="
                (event) => viaPlaceholderErrorHandler(event, '500x333')
              "
            />
          </div>
          <div class="card-content">
            <div class="media is-align-items-center">
              <div class="media-content">
                <Title tag="h3" :size="7" weight="semi" narrow>
                  <span>{{ item.name }}</span>
                </Title>
                <p class="paragraph rem-85">{{ item.position }}</p>
              </div>
              <div class="media-right">
                <RouterLink
                  v-for="(link, i) in item.socialLinks"
                  :key="i"
                  :to="link.url"
                  target="_blank"
                  class="px-1"
                >
                  <i class="iconify" :data-icon="link.icon"></i>
                  <span class="is-sr-only">{{ link.name }}</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  box-shadow: var(--light-box-shadow);
  border-radius: 0.75rem;
  overflow: hidden;

  .card-image {
    overflow: hidden;

    img {
      display: block;
      transition: filter 0.3s, opacity 0.3s, transform 0.3s;
    }
  }

  .card-content {
    padding: 1rem;

    .media-right {
      a {
        &:hover {
          color: var(--primary-light-12);
        }
      }
    }
  }
}

.is-grayscale {
  .card {
    .card-image {
      img {
        filter: grayscale(1);
        opacity: 0.8;
      }
    }

    &:hover {
      .card-image {
        img {
          filter: grayscale(0);
          opacity: 1;
        }
      }
    }
  }
}

.is-scale {
  .card {
    &:hover {
      .card-image {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
}

.is-plain {
  .card {
    border: none !important;
    background: none !important;
    border-radius: 0;
    box-shadow: none;

    .card-image {
      img {
        border-radius: 0;
      }
    }

    .card-content {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
    }
  }

  &.is-curved {
    .card {
      .card-image {
        img {
          border-radius: 1.25rem;
        }
      }

      .card-content {
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        padding-top: 0.5rem;
      }
    }
  }
}
</style>
