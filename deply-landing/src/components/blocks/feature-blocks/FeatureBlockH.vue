<script setup lang="ts">
import { computed } from 'vue'
import type { IconFeature } from '/@src/types'

export interface FeatureBlockHProps {
  features: IconFeature[]
  columns?: number
  limit?: number
  rounded?: boolean
  links?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<FeatureBlockHProps>(), {
  columns: 4,
  limit: 6,
  rounded: false,
  links: false,
  inverted: false,
})

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])

const textClasses = computed(() => [
  props.columns != 6 && 'max-w-3 rem-80',
  props.columns === 6 && 'max-w-4 rem-90',
  props.inverted && 'text-light',
])
</script>

<template>
  <div class="py-6">
    <div class="columns is-multiline b-columns-half-tablet-p">
      <div
        v-for="(feature, index) in props.features.slice(0, props.limit)"
        :key="index"
        class="column"
        :class="columnClasses"
      >
        <div class="is-flex items-start py-4">
          <IconBox
            :color="feature.color"
            size="small"
            :rounded="props.rounded"
            :inverted="props.inverted"
          >
            <i class="iconify" :data-icon="feature.icon"></i>
          </IconBox>
          <div class="ml-4">
            <Title
              tag="h3"
              :size="6"
              weight="semi"
              narrow
              :inverted="props.inverted"
            >
              <span>{{ feature.title }}</span>
            </Title>
            <p class="paragraph small:max-w-2 pt-2" :class="textClasses">
              {{ feature.text }}
            </p>

            <ActionLink v-if="props.links" :link="feature.link" size="small" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
