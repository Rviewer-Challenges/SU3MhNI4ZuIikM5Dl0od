<script setup lang="ts">
import type { IconFeature } from '/@src/types'

export interface VideoBlockBProps {
  title: string
  features: IconFeature[]
  source: string
  poster: string
  links?: boolean
}

const props = withDefaults(defineProps<VideoBlockBProps>(), {
  links: false,
})
</script>

<template>
  <div class="columns is-multiline py-6">
    <div class="column is-12">
      <div class="block mb-4 has-text-centered mx-auto max-w-8">
        <div class="video-player-container-wrapper">
          <Player
            ratio="16by9"
            :source="props.source"
            :poster="props.poster"
            :title="props.title"
          />
        </div>

        <div class="columns b-columns-third-tablet-p has-text-left mt-4">
          <slot name="features">
            <div
              v-for="(feature, index) in props.features.slice(0, 3)"
              :key="index"
              class="column is-4"
            >
              <div class="media">
                <div class="media-left">
                  <IconBox :color="feature.color" size="small">
                    <i class="iconify" :data-icon="feature.icon"></i>
                  </IconBox>
                </div>
                <div class="media-content">
                  <Title tag="h3" :size="6" weight="semi" leading>
                    <span>{{ feature.title }}</span>
                  </Title>
                  <p class="paragraph rem-90">{{ feature.text }}</p>
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
  </div>
</template>
