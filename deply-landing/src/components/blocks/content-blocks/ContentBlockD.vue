<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface ContentBlockDImage {
  url: string
  label: string
}

export interface ContentBlockDProps {
  title: string
  subtitle: string
  text: string
  images: ContentBlockDImage[]
  link?: RouteLocationRaw
  linkLabel?: string
  limit?: 2 | 3 | 4
  imageSquared?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<ContentBlockDProps>(), {
  link: undefined,
  linkLabel: 'Learn More',
  limit: 2,
  imageSquared: false,
  inverted: false,
})

const wrapperClasses = computed(() => [props.limit && `max-w-1/${props.limit}`])

const imageClasses = computed(() => [props.imageSquared && `image-squared`])

const textClasses = computed(() => [props.inverted && 'text-light'])
</script>

<template>
  <div class="py-12 mx-auto max-w-9">
    <slot name="title">
      <div class="has-text-centered mb-8">
        <SectionTitle
          :title="props.title"
          :subtitle="props.subtitle"
          :inverted="props.inverted"
        />
      </div>
    </slot>
    <slot name="images">
      <div class="is-flex b-only-mobile-flex-wrap">
        <div
          v-for="(image, index) in props.images.slice(0, props.limit)"
          :key="index"
          class="max-w-mobile px-2"
          :class="wrapperClasses"
        >
          <img
            class="inline-block mx-2"
            :class="imageClasses"
            :src="image.url"
            :alt="image.label"
          />
        </div>
      </div>
    </slot>

    <div class="px-4 py-4">
      <slot name="content">
        <div class="columns">
          <div class="column">
            <p class="paragraph" :class="textClasses">{{ props.text }}</p>
            <ActionLink
              v-if="props.link"
              :label="props.linkLabel"
              :link="props.link"
            />
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-squared {
  border-radius: 1.5rem;
}
</style>
