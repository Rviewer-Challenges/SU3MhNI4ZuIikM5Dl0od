<script setup lang="ts">
import { ref, computed } from 'vue'
import Lightbox from 'vue-my-photos'

export type GalleryBlockDGap = 'xs' | 'sm' | 'default'
export type GalleryBlockDColumn = 3 | 4 | 6

export interface GalleryBlockDItem {
  image: string
}

export interface GalleryBlockCProps {
  items: GalleryBlockDItem[]
  columns?: GalleryBlockDColumn
  limit?: number
  gap?: GalleryBlockDGap
  squared?: boolean
}

const props = withDefaults(defineProps<GalleryBlockCProps>(), {
  columns: 3,
  limit: 32,
  gap: 'default',
  squared: false,
})

const galleryFilter = ref('all')
const currentImageName = ref('')

const images =
  props.items?.map((image) => ({
    name: image.image,
  })) ?? []

const showLightbox = (url: string) => {
  currentImageName.value = url
}

const onLightboxClose = () => {
  currentImageName.value = ''
}

const galleryClasses = computed(() => [
  props.gap && `gap-${props.gap}`,
  props.squared && `is-squared`,
])

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])
</script>

<template>
  <div class="gallery py-6" :class="galleryClasses">
    <div class="columns is-multiline b-columns-half-tablet-p">
      <div
        v-for="(item, i) in props.items.slice(0, props.limit)"
        :key="i"
        class="column"
        :class="columnClasses"
      >
        <img
          class="block"
          :src="item.image"
          alt="featured image"
          @click.prevent="showLightbox(item.image)"
          @keydown.space.prevent="() => showLightbox(item.image)"
        />
      </div>
    </div>
    <teleport to="body">
      <lightbox
        :images="images"
        :current-image-name="currentImageName"
        :filter="galleryFilter"
        :timeout-duration="5000"
        :close-on-backdrop-click="true"
        @on-lightbox-close="onLightboxClose"
      ></lightbox>
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
.gallery {
  img {
    width: 100%;
    cursor: pointer;
  }

  &.gap-sm {
    .columns .column {
      padding: 0.5rem;
    }
  }

  &.gap-xs {
    .columns .column {
      padding: 0.25rem;
    }
  }

  &.is-squared {
    img {
      border-radius: 1.25rem;
    }
  }
}
</style>
