<script setup lang="ts">
import type { BaseFeature } from '/@src/types'

export interface AppSectionProps {
  features: BaseFeature[]
  image: string
  darkImage: string
  imageWidth?: string
  imageHeight?: string
  inverted?: boolean
  blob?: boolean
}

const props = withDefaults(defineProps<AppSectionProps>(), {
  imageWidth: '1519',
  imageHeight: '949',
  inverted: false,
  blob: false,
})
</script>

<template>
  <div class="app-section">
    <Blob v-if="props.blob" class="blob-1" />
    <Blob v-if="props.blob" class="blob-2" />
    <div class="columns is-multiline py-6">
      <div class="column is-12">
        <div class="block mb-4 has-text-centered mx-auto max-w-8">
          <div>
            <DarkImage
              :src="props.image"
              :src-dark="props.darkImage"
              class="is-16by9 is-relative z-1 has-light-shadow app-mockup"
              alt="App mockup"
              :width="props.imageWidth"
              :height="props.imageHeight"
            />
          </div>

          <div class="columns has-text-left b-columns-third-tablet-p mt-4">
            <div
              v-for="(feature, index) in props.features.slice(0, 3)"
              :key="index"
              class="column is-4"
            >
              <div class="media">
                <div class="media-content">
                  <Title
                    tag="h3"
                    :size="5"
                    weight="semi"
                    :inverted="props.inverted"
                  >
                    <span>{{ feature.title }}</span>
                  </Title>
                  <p class="subtitle is-6 text-medium">{{ feature.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-mockup {
  border-radius: 1.5rem;
  border: 1px solid var(--border);
}

.app-section {
  position: relative;

  .morphing-blob-wrapper {
    position: absolute;
    opacity: 0.15;
    z-index: 0;

    &.blob-1 {
      top: 0;
      left: 0;
      transform: scale(1.8);
    }

    &.blob-2 {
      bottom: 10%;
      right: 0;
      transform: scale(1.3);
    }
  }

  .media {
    .media-content {
      overflow: hidden;

      .subtitle {
        color: var(--medium-text);
      }
    }
  }
}

.is-dark {
  .app-mockup {
    border: none;
  }
}

@media only screen and (max-width: 767px) {
  .app-section {
    .morphing-blob-wrapper {
      &.blob-1 {
        transform: scale(1.3);
        top: -55px;
        left: -125px;
      }

      &.blob-2 {
        transform: scale(0.8);
        bottom: 36%;
        right: -50%;
      }
    }
  }
}
</style>
