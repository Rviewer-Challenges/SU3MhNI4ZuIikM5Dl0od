<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type LayerExtension = 'jpg' | 'jpeg' | 'png' | 'svg'

export interface SpinnerSectionProps {
  title: string
  subtitle: string
  content: string
  to: RouteLocationRaw
  cta?: string
  image: string
  layerBase: string
  layerExtension: LayerExtension
  imageWidth?: string
  imageHeight?: string
  legend?: string
  bordered?: boolean
  inverted?: boolean
  blob?: boolean
  reverse?: boolean
}

const props = withDefaults(defineProps<SpinnerSectionProps>(), {
  cta: undefined,
  imageWidth: '150',
  imageHeight: '150',
  legend: undefined,
  bordered: false,
  inverted: false,
  blob: false,
  reverse: false,
})

const spinnerSectionClasses = computed(() => [
  props.bordered && `is-bordered`,
  props.inverted && `is-inverted`,
  props.reverse && `is-reverse`,
])

const textClasses = computed(() => [props.inverted && `is-inverted`])
</script>

<template>
  <div class="side-section py-6 z-1" :class="spinnerSectionClasses">
    <div class="columns is-vcentered">
      <div class="column is-5">
        <Subtitle tag="h3" :size="5" weight="bold" class="pb-4">
          <span class="text-gradient">{{ props.subtitle }}</span>
        </Subtitle>
        <Title tag="h2" :size="2" weight="bold" :class="textClasses">
          {{ props.title }}
        </Title>
        <p class="paragraph rem-115 mb-4" :class="textClasses">{{ content }}</p>
        <RouterLink :to="{ name: 'index' }" class="rem-115">
          <span class="action-link">{{ props.cta }}</span>
          <i class="iconify" data-icon="feather:arrow-right"></i>
        </RouterLink>
      </div>
      <div class="column is-6 is-offset-1 has-text-centered is-relative">
        <Blob v-if="props.blob" />
        <Title
          v-if="props.legend"
          tag="h3"
          :size="5"
          weight="bold"
          class="text-white"
        >
          {{ props.legend }}
        </Title>
        <div class="spinner-container">
          <img
            class="is-relative spinner-base is-block mx-auto"
            :src="props.image"
            alt="spinner layer"
            :width="props.imageWidth"
            :height="props.imageHeight"
          />
          <img
            class="spinner-layer layer-1 is-block mx-auto"
            :src="`${props.layerBase}-1.${props.layerExtension}`"
            alt="spinner layer"
            :width="props.imageWidth"
            :height="props.imageHeight"
          />
          <img
            class="spinner-layer layer-2 is-block mx-auto"
            :src="`${props.layerBase}-3.${props.layerExtension}`"
            alt="spinner layer"
            :width="props.imageWidth"
            :height="props.imageHeight"
          />
          <img
            class="spinner-layer layer-3 is-block mx-auto"
            :src="`${props.layerBase}-4.${props.layerExtension}`"
            alt="spinner layer"
            :width="props.imageWidth"
            :height="props.imageHeight"
          />
          <img
            class="spinner-layer is-block mx-auto"
            :src="`${props.layerBase}-2.${props.layerExtension}`"
            alt="spinner layer"
            :width="props.imageWidth"
            :height="props.imageHeight"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-section {
  &.is-bordered {
    border-bottom: 1px solid var(--border);
  }

  &.is-inverted {
    &.is-bordered {
      border-bottom-color: var(--dark-border);
    }
  }
}

.spinner-container {
  position: relative;

  .spinner-base {
    opacity: 0;
  }

  .spinner-layer {
    position: absolute;
    top: 0;
    left: 0;

    &.layer-1 {
      animation: rotation 48s linear infinite;
    }

    &.layer-2 {
      animation: rotation 34s linear infinite;
    }

    &.layer-3 {
      animation: rotation 21s linear infinite;
    }
  }
}

.iconify {
  transition: transform 0.3s;
  vertical-align: middle;
}

.action-link {
  font-weight: 500;
  margin-right: 0.75rem;

  &:hover {
    opacity: 0.7;
    color: var(--primary);

    + .iconify {
      opacity: 0.7;
      color: var(--primary);
      transform: translateX(5px) !important;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .spinner-container {
    max-width: 580px;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .side-section {
    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }
  }
}
</style>
