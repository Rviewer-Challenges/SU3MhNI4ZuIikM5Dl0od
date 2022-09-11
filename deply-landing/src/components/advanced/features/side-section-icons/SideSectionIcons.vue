<script setup lang="ts">
import type { SimpleIconFeature } from '/@src/types'
import { computed } from 'vue'

export interface SideSectionProps {
  title: string
  subtitle: string
  content: string
  features: SimpleIconFeature[]
  image: string
  darkImage?: string
  imageWidth?: string
  imageHeight?: string
  inverted?: boolean
  blob?: boolean
  reverse?: boolean
}

const props = withDefaults(defineProps<SideSectionProps>(), {
  darkImage: undefined,
  imageWidth: '900',
  imageHeight: '788',
  inverted: false,
  blob: false,
  reverse: false,
})

const sideSectionClasses = computed(() => [
  props.inverted && `is-inverted`,
  props.reverse && `is-reverse`,
])

const textClasses = computed(() => [props.inverted && `is-inverted`])
</script>

<template>
  <div
    class="side-section mobile:py-0 small:py-6 z-1"
    :class="sideSectionClasses"
  >
    <div class="columns is-vcentered b-columns-half-tablet-p">
      <div class="column is-6">
        <div class="max-w-5">
          <Subtitle tag="h3" :size="6" weight="bold" class="pb-4" leading>
            <span class="text-gradient">{{ subtitle }}</span>
          </Subtitle>
          <Title
            tag="h2"
            :size="3"
            weight="semi"
            :inverted="props.inverted"
            leading
          >
            {{ title }}
          </Title>
          <slot name="content">
            <p class="paragraph rem-95 mb-4" :class="textClasses">
              {{ props.content }}
            </p>
          </slot>
          <slot name="features">
            <div class="columns is-multiline b-columns-half-tablet-p">
              <div
                v-for="(feature, index) in props.features.slice(0, 4)"
                :key="index"
                class="column is-6"
              >
                <div class="py-2 medium:py-3">
                  <i class="iconify" :data-icon="feature.icon"></i>
                  <Title
                    tag="h3"
                    :size="6"
                    weight="semi"
                    leading
                    :inverted="props.inverted"
                  >
                    <span>{{ feature.title }}</span>
                  </Title>
                  <p class="paragraph rem-85 max-w-3" :class="textClasses">
                    {{ feature.text }}
                  </p>
                </div>
              </div>
            </div>
          </slot>
        </div>
      </div>
      <div class="column is-6 has-text-centered is-relative">
        <Blob v-if="props.blob" />

        <DarkImage
          class="is-relative mx-auto"
          :src="props.image"
          :src-dark="props.darkImage"
          alt="side section image"
          :width="props.imageWidth"
          :height="props.imageHeight"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-section {
  text-align: left !important;

  .morphing-blob-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(1.9) translate(-25%, -25%);
    opacity: 0.15;
  }

  .iconify {
    font-size: 1.5rem;
    color: var(--primary);
    transition: transform 0.3s;
    vertical-align: middle;
    margin-bottom: 1rem;
  }

  &.is-bordered {
    border-bottom: 1px solid var(--border);
  }

  &.is-reverse {
    .columns {
      flex-direction: row-reverse;

      .column {
        &.is-offset-1 {
          margin-left: 0;
          margin-right: 8.3333%;
        }
      }
    }
  }

  &.is-inverted {
    &.is-bordered {
      border-bottom-color: var(--dark-border);
    }
  }
}

@media only screen and (max-width: 767px) {
  .side-section {
    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .field {
      &.is-grouped {
        flex-direction: column;
      }
    }

    .morphing-blob-wrapper {
      transform: scale(1.3) translate(-35%, -35%);
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .side-section {
    text-align: center;

    .morphing-blob-wrapper {
      transform: scale(1.4) translate(-35%, -35%);
    }

    .column {
      &.is-5 {
        max-width: 660px;
        margin: 0 auto 2rem;
      }
    }

    img {
      max-width: 490px !important;
    }

    .spinner-container {
      max-width: 490px;
      margin: 0 auto;
    }
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
