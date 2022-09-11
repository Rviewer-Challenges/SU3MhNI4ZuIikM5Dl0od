<script setup lang="ts">
import { computed } from 'vue'

import type { SocialLink } from '/@src/types'

export type TeamBlockBColumn = 3 | 4

export interface TeamBlockBItem {
  image: string
  name: string
  position: string
  socialLinks: SocialLink[]
}

export interface TeamBlockBProps {
  items: TeamBlockBItem[]
  columns?: TeamBlockBColumn
  limit?: number
  squared?: boolean
  bubbles?: boolean
}

const props = withDefaults(defineProps<TeamBlockBProps>(), {
  columns: 3,
  limit: 9,
  squared: false,
  bubbles: false,
})

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])
</script>

<template>
  <div class="py-6">
    <div
      class="
        columns
        is-multiline
        b-columns-half-mobile b-columns-third-tablet-p
      "
    >
      <div
        v-for="(item, index) in props.items.slice(0, props.limit)"
        :key="index"
        class="column is-3"
        :class="columnClasses"
      >
        <div class="team-block py-2">
          <Bubbles v-if="props.bubbles" />
          <AvatarSimple
            size="xl"
            :picture="item.image"
            :squared="props.squared"
          />
          <div class="py-2">
            <Title tag="h3" :size="7" weight="semi" narrow>
              <span>{{ item.name }}</span>
            </Title>
            <p class="paragraph rem-85">{{ item.position }}</p>
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
  text-align: center;

  :deep(.bubbles) {
    position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 80px;
    width: 80px;
    opacity: 0;
    transition: opacity 0.3s;
  }

  :deep(.avatar) {
    position: relative;
    z-index: 2;
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
</style>
