<script setup lang="ts">
import { computed } from 'vue'
import type { ImageFeature } from '/@src/types'

export interface FeatureBlockIProps {
  title: string
  content: string
  features: ImageFeature[]
  columns?: number
  limit?: number
  links?: boolean
  rounded?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<FeatureBlockIProps>(), {
  columns: 4,
  limit: 3,
  rounded: false,
  links: false,
  inverted: false,
})

const imageClasses = computed(() => [props.rounded && `image-rounded`])

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])

const subtitleClasses = computed(() => [props.inverted && 'text-light'])

const textClasses = computed(() => [
  props.columns != 6 && 'rem-90',
  props.columns === 6 && 'rem-95',
  props.inverted && 'text-light',
])
</script>

<template>
  <div class="py-6">
    <slot name="title">
      <div class="pb-6">
        <Title
          tag="h2"
          :size="3"
          weight="bold"
          leading
          :inverted="props.inverted"
        >
          <span>{{ props.title }}</span>
        </Title>
        <p class="paragraph max-w-7 pt-2" :class="subtitleClasses">
          {{ props.content }}
        </p>
      </div>
    </slot>

    <div class="columns is-multiline b-columns-half-tablet-p">
      <div
        v-for="(feature, index) in props.features.slice(0, props.limit)"
        :key="index"
        class="column mobile:mb-6"
        :class="columnClasses"
      >
        <DarkImage
          :class="[...imageClasses]"
          :src="feature.image"
          :src-dark="feature.darkImage"
          alt="featured image"
        />
        <div>
          <Title
            tag="h3"
            :size="6"
            weight="semi"
            narrow
            :inverted="props.inverted"
          >
            <span>{{ feature.title }}</span>
          </Title>
          <p class="paragraph pt-2" :class="textClasses">{{ feature.text }}</p>
          <ActionLink v-if="props.links" :link="feature.link" size="small" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-rounded {
  border-radius: 1.5rem;
}

:deep(.action-link) {
  margin-top: 0.25rem;
}
</style>
