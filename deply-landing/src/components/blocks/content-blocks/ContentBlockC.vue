<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface ContentBlockCText {
  paragraph: string
  link: RouteLocationRaw
}

export interface ContentBlockCProps {
  title: string
  subtitle: string
  text: ContentBlockCText[]
  image: string
  links?: boolean
  linksLabel?: string
  imageSquared?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<ContentBlockCProps>(), {
  links: false,
  linksLabel: 'Learn More',
  imageSquared: false,
  inverted: false,
})

const imageClasses = computed(() => [props.imageSquared && `image-squared`])

const textClasses = computed(() => [props.inverted && 'text-light'])
</script>

<template>
  <div class="py-6 mx-auto max-w-6">
    <slot name="title">
      <div class="has-text-centered pb-6">
        <SectionTitle
          :title="props.title"
          :subtitle="props.subtitle"
          :inverted="props.inverted"
        />
      </div>
    </slot>

    <slot name="image">
      <div>
        <img
          class="inline-block"
          :class="imageClasses"
          :src="props.image"
          alt="featured image"
        />
      </div>
    </slot>

    <slot name="content">
      <div class="columns b-columns-half-tablet-p py-4">
        <div
          v-for="(content, index) in props.text.slice(0, 2)"
          :key="index"
          class="column is-6"
        >
          <p class="paragraph rem-95" :class="textClasses">
            {{ content.paragraph }}
          </p>
          <ActionLink
            v-if="props.links"
            :label="props.linksLabel"
            :link="content.link"
            size="small"
          />
        </div>
      </div>
    </slot>
  </div>
</template>

<style scoped lang="scss">
.image-squared {
  border-radius: 1.5rem;
}
</style>
