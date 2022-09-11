<script setup lang="ts">
import type { IconBoxColor } from '/@src/components/base/icon/IconBox.vue'
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface MEdiaCardProps {
  icon: string
  iconColor?: IconBoxColor
  metaText: string
  metaSubtext: string
  metaStat: string
  image: string
  imageWidth?: string
  imageHeight?: string
}

const props = withDefaults(defineProps<MEdiaCardProps>(), {
  iconColor: 'primary',
  imageWidth: '800',
  imageHeight: '600',
})
</script>

<template>
  <div class="media-card">
    <div class="media-card-image">
      <img
        :src="props.image"
        alt="Featured image"
        :width="props.imageWidth"
        :height="props.imageHeight"
        @error.once="(event) => viaPlaceholderErrorHandler(event, `600x337`)"
      />
    </div>
    <div class="media-card-meta">
      <IconBox :color="props.iconColor" rounded>
        <i class="iconify" :data-icon="props.icon"></i>
      </IconBox>
      <div class="meta-text">
        <h3>{{ props.metaText }}</h3>
        <p class="paragraph rem-85">{{ props.metaSubtext }}</p>
      </div>
      <div class="meta-stat">
        <p class="paragraph is-uppercase rem-75 w-600">
          {{ props.metaStat }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.media-card {
  display: block;
  background: var(--card-bg-color);
  padding: 1rem;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: var(--spread-shadow);
  max-width: 480px;
  margin: 0 auto;

  .media-card-image {
    img {
      display: block;
      border-radius: 1.25rem;
      width: 100%;
    }
  }

  .media-card-meta {
    display: flex;
    align-items: center;
    padding-top: 0.75rem;

    :deep(.icon-box) {
      margin-right: 0.75rem;
    }

    .meta-text {
      line-height: 1.2;

      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--title-color);
      }
    }

    .meta-stat {
      margin-left: auto;
    }
  }
}
</style>
