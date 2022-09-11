<script setup lang="ts">
import { computed } from 'vue'
import type { IconFeature } from '/@src/types'

export interface StackedSectionProps {
  features: IconFeature[]
  image: string
  darkImage: string
  imageWidth?: string
  imageHeight?: string
  rounded?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<StackedSectionProps>(), {
  imageWidth: '500',
  imageHeight: '500',
  rounded: false,
  inverted: false,
})

const shapeClasses = computed(() => [props.inverted && 'opacity-10'])
</script>

<template>
  <div class="py-6">
    <div class="stacked-section">
      <div class="columns is-vcentered b-columns-half-tablet-p">
        <div class="column is-5 is-offset-1">
          <div
            v-for="(feature, index) in props.features.slice(0, 3)"
            :key="index"
            class="media max-w-4"
          >
            <div class="media-left">
              <IconBox
                :color="feature.color"
                size="medium"
                :rounded="props.rounded"
                :inverted="props.inverted"
              >
                <i class="iconify" :data-icon="feature.icon"></i>
              </IconBox>
            </div>
            <div class="media-content">
              <Title
                tag="h3"
                :size="6"
                weight="semi"
                leading
                :inverted="props.inverted"
              >
                <span>{{ feature.title }}</span>
              </Title>
              <p class="paragraph rem-85">{{ feature.text }}</p>
            </div>
          </div>
        </div>
        <div class="column is-6">
          <div class="color-box">
            <div class="color-box-inner" :class="shapeClasses"></div>
            <div class="character">
              <DarkImage
                :src="props.image"
                :src-dark="props.darkImage"
                alt="Featured Image"
                :width="props.imageWidth"
                :height="props.imageHeight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stacked-section {
  position: relative;

  .media {
    border: none;
  }

  .color-box {
    position: relative;
    min-height: 480px;
    min-width: 400px;
    max-width: 100%;

    .color-box-inner {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 430px;
      width: 430px;
      background: var(--primary-light-45);
      border-radius: 50%;
      z-index: 0;
    }

    .character {
      position: absolute;
      bottom: 0;
      right: -3rem;
      height: 100%;
      display: block;
      z-index: 1;

      :deep(img) {
        height: 100%;
      }
    }
  }
}

.is-dark {
  .stacked-section {
    .color-box {
      .color-box-inner {
        opacity: 0.1;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .stacked-section {
    .color-box {
      .color-box-inner {
        right: -2.5rem;
      }
    }
  }
}
</style>
