<script setup lang="ts">
import { computed } from 'vue'

import type { SocialLink } from '/@src/types'
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export type TeamBlockCColumn = 3 | 4

export interface TeamBlockCItem {
  image: string
  name: string
  position: string
  bio: string
  socialLinks: SocialLink[]
}

export interface TeamBlockCProps {
  items: TeamBlockCItem[]
  columns?: TeamBlockCColumn
  limit?: number
  squared?: boolean
  bubbles?: boolean
  grayscale?: boolean
}

const props = withDefaults(defineProps<TeamBlockCProps>(), {
  columns: 3,
  limit: 4,
  squared: false,
  bubbles: false,
  grayscale: false,
})

const blockClasses = computed(() => [
  props.squared && `is-squared`,
  props.grayscale && `is-grayscale`,
])

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])
</script>

<template>
  <div class="team-block py-6 mx-auto max-w-9" :class="blockClasses">
    <div class="columns is-multiline b-columns-third-tablet-p">
      <div
        v-for="(item, index) in props.items.slice(0, props.limit)"
        :key="index"
        class="column"
        :class="columnClasses"
      >
        <div class="team-block-item mb-8">
          <Bubbles v-if="props.bubbles" />
          <img
            class="block"
            :src="item.image"
            alt="featured image"
            width="270"
            height="333"
            @error.once="
              (event) => viaPlaceholderErrorHandler(event, `270x333`)
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
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.team-block {
  position: relative;

  .team-block-item {
    position: relative;
    text-align: center;

    img {
      position: relative;
      width: 100%;
      z-index: 2;
      transition: filter 0.3s, opacity 0.3s;
    }

    :deep(.bubbles) {
      position: absolute;
      z-index: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 150px;
      width: 150px;
      opacity: 0;
      transition: opacity 0.3s;
    }

    a {
      &:hover {
        color: var(--primary-light-12);
      }
    }

    &:hover {
      :deep(.bubbles) {
        opacity: 1;
      }
    }
  }

  &.is-squared {
    .team-block-item {
      img {
        border-radius: 1.25rem;
      }
    }
  }

  &.is-grayscale {
    .team-block-item {
      img {
        filter: grayscale(1);
        opacity: 0.8;
      }

      &:hover {
        img {
          filter: grayscale(0);
          opacity: 1;
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .team-block {
    .team-block-item {
      :deep(.title) {
        font-size: 1.15rem;

        + .paragraph {
          font-size: 0.95rem !important;
        }
      }

      .paragraph {
        + .paragraph {
          max-width: 245px;
        }
      }
    }
  }
}
</style>
