<script setup lang="ts">
import { computed } from 'vue'
import type { IconFeature } from '/@src/types'

export type FeatureBlockAlign = 'centered'
export type FeatureBlockSize = 'small' | 'medium'

export interface FeatureBlockAProps {
  alignment?: FeatureBlockAlign
  features: IconFeature[]
  columns?: number
  limit?: number
  size?: FeatureBlockSize
  rounded?: boolean
  links?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<FeatureBlockAProps>(), {
  alignment: undefined,
  columns: 4,
  limit: 6,
  size: undefined,
  rounded: false,
  links: false,
  inverted: false,
})

const blockClasses = computed(() => [props.alignment && `has-text-centered`])

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])

const textClasses = computed(() => [
  props.alignment === 'centered' && 'mx-auto',
  props.size === 'small' && 'rem-90',
  props.columns != 6 && 'max-w-3',
  props.columns === 6 && 'max-w-4',
  props.columns === 3 && 'rem-90',
  props.inverted && 'text-light',
])
</script>

<template>
  <div class="py-6">
    <div
      class="columns is-multiline b-columns-half-tablet-p"
      :class="blockClasses"
    >
      <div
        v-for="(feature, index) in props.features.slice(0, props.limit)"
        :key="index"
        class="column"
        :class="columnClasses"
      >
        <div class="py-4">
          <slot name="column" :feature="feature" :index="index">
            <IconBox
              :color="feature.color"
              :size="props.size"
              :rounded="props.rounded"
              :inverted="props.inverted"
            >
              <i class="iconify" :data-icon="feature.icon"></i>
            </IconBox>
            <Title
              tag="h3"
              :size="6"
              weight="semi"
              leading
              :inverted="props.inverted"
            >
              <span>{{ feature.title }}</span>
            </Title>
            <p class="paragraph" :class="textClasses">{{ feature.text }}</p>
            <ActionLink v-if="props.links" :link="feature.link" size="small" />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.has-text-centered {
  :deep(.icon-box) {
    margin: 0 auto 0.75rem;
  }

  .feature-link {
    justify-content: center;
  }
}

:deep(.icon-box) {
  margin-bottom: 0.75rem;
}
</style>
