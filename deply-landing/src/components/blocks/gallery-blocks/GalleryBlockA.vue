<script setup lang="ts">
import { ref, computed } from 'vue'
import Lightbox from 'vue-my-photos'

export type GalleryBlockAFrame = '1x1' | '1x2' | '2x1' | '2x2' | '3x1'

export interface GalleryBlockAItem {
  image: string
  size: string
  frame: GalleryBlockAFrame
}

export interface GalleryBlockAProps {
  items: GalleryBlockAItem[]
  squared?: boolean
  limit?: number
}

const props = withDefaults(defineProps<GalleryBlockAProps>(), {
  squared: false,
  limit: 99,
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

const blockClasses = computed(() => [props.squared && `is-squared`])
</script>

<template>
  <div class="py-6">
    <div class="parent" :class="blockClasses">
      <div
        v-for="(item, index) in props.items.slice(0, props.limit)"
        :key="index"
        v-background="{
          src: item.image,
          placeholder: `https://dummyimage.com/${item.size}/ededed/000000`,
        }"
        class="block has-background-image"
        :class="`frame-${item.frame}`"
      >
        <img
          :src="item.image"
          alt="shadow image"
          aria-hidden="true"
          @click.prevent="showLightbox(item.image)"
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

<style scoped lang="scss">
.parent {
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: row dense;
  grid-gap: 10px;
  box-sizing: border-box;

  .block {
    position: relative;
    padding: 15px;
    font-size: 28px;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 0 !important;
    background-size: cover;
    background-repeat: no-repeat;
    transition: background-size 0.35s ease-in-out;

    img {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }

    &.frame-1x1 {
      grid-column: span 1;
      grid-row: span 1;
    }

    &.frame-2x2 {
      grid-column: span 2;
      grid-row: span 2;
    }

    &.frame-1x2 {
      grid-column: span 1;
      grid-row: span 2;
    }

    &.frame-2x1 {
      grid-column: span 2;
      grid-row: span 1;
    }
  }

  &.is-squared {
    .block {
      border-radius: 0.5rem;
    }
  }
}

@media only screen and (max-width: 767px) {
  .parent {
    .block {
      &.frame-1x1,
      &.frame-2x2,
      &.frame-1x2,
      &.frame-2x1 {
        grid-column: span 1;
        grid-row: span 2;
      }
    }
  }
}
</style>
