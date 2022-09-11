<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface ContentBlockHImage {
  url: string
  text: string
  link: RouteLocationRaw
}

export interface ContentBlockHProps {
  title: string
  text: string
  images: ContentBlockHImage[]
  imageWidth?: string
  imageHeight?: string
  links?: boolean
  linkLabel?: string
  limit?: 2 | 3 | 4 | number
  imageSquared?: boolean
  inverted?: boolean
  compact?: boolean
}

const props = withDefaults(defineProps<ContentBlockHProps>(), {
  imageWidth: '429',
  imageHeight: '250',
  links: false,
  linkLabel: 'Learn More',
  limit: 3,
  imageSquared: false,
  inverted: false,
  compact: false,
})

const spacingClasses = computed(() => [props.compact ? 'pb-6' : 'py-6'])

const wrapperClasses = computed(() => [props.limit && `max-w-1/${props.limit}`])

const imageClasses = computed(() => [props.imageSquared && `image-squared`])

const textClasses = computed(() => [
  props.limit > 3 ? `rem-80` : `rem-95`,
  props.inverted && 'text-light',
])

const invertedClasses = computed(() => [props.inverted && 'text-light'])
</script>

<template>
  <div class="mx-auto max-w-9" :class="spacingClasses">
    <div
      v-if="!props.compact"
      class="
        is-flex is-align-items-center is-justify-content-space-between
        d-column-mobile
        b-centered-mobile
        mb-12
        px-2
      "
    >
      <div class="side-title">
        <Title
          tag="h2"
          :size="4"
          weight="semi"
          narrow
          :inverted="props.inverted"
        >
          <span>{{ props.title }}</span>
        </Title>
      </div>
      <p class="paragraph max-w-5 mobile:my-4" :class="invertedClasses">
        {{ props.text }}
      </p>
    </div>

    <div class="is-flex b-only-mobile-flex-wrap">
      <div
        v-for="(image, index) in props.images.slice(0, props.limit)"
        :key="index"
        class="max-w-mobile px-2 mobile:mb-8"
        :class="wrapperClasses"
      >
        <img
          class="inline-block mb-2"
          :class="imageClasses"
          :src="image.url"
          alt="featured image"
          :width="props.imageWidth"
          :height="props.imageHeight"
        />
        <p class="paragraph" :class="textClasses">{{ image.text }}</p>
        <ActionLink
          v-if="props.links"
          :label="props.linkLabel"
          :link="image.link"
          size="small"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-squared {
  border-radius: 1.5rem;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .side-title {
    min-width: 40%;
  }
}
</style>
