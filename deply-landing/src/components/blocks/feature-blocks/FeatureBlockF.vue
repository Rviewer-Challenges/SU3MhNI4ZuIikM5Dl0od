<script setup lang="ts">
import { computed } from 'vue'
import type { SimpleFeature } from '/@src/types'

export interface FeatureBlockFProps {
  title: string
  features: SimpleFeature[]
  image: string
  darkImage: string
  links?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<FeatureBlockFProps>(), {
  links: false,
  inverted: false,
})

const textClasses = computed(() => [props.inverted && `text-light`])
</script>

<template>
  <div class="py-6">
    <div class="columns is-multiline is-vcentered">
      <div class="column is-6">
        <slot name="image">
          <DarkImage
            :src="props.image"
            :src-dark="props.darkImage"
            :class="['block', 'mx-auto']"
            alt="featured image"
          />
        </slot>
      </div>

      <div class="column is-6">
        <slot name="title">
          <div class="mb-6">
            <Title
              tag="h2"
              :size="3"
              weight="bold"
              narrow
              :inverted="props.inverted"
            >
              <span>{{ props.title }}</span>
            </Title>
          </div>
        </slot>

        <slot name="features">
          <div class="columns is-multiline b-columns-half-tablet-p">
            <div
              v-for="(feature, index) in props.features.slice(0, 4)"
              :key="index"
              class="column is-6"
            >
              <div class="py-2 medium:py-4">
                <Title
                  tag="h3"
                  :size="6"
                  weight="semi"
                  leading
                  :inverted="props.inverted"
                >
                  <span>{{ feature.title }}</span>
                </Title>
                <p class="paragraph max-w-3" :class="textClasses">
                  {{ feature.text }}
                </p>
                <ActionLink
                  v-if="props.links"
                  :link="feature.link"
                  size="small"
                />
              </div>
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
