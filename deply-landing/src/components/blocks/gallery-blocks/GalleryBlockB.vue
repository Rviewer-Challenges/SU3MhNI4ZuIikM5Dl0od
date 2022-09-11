<script setup lang="ts">
import { ref, computed } from 'vue'
import Lightbox from 'vue-my-photos'

export type GalleryBlockBSize = 1 | 2 | 3

export interface GalleryBlockBOwner {
  avatar: string
  name: string
}

export interface GalleryBlockBItem {
  image: string
  size: GalleryBlockBSize
  date: string
  liked: boolean
  owner: GalleryBlockBOwner
}

export interface GalleryBlockBRow {
  items: GalleryBlockBItem[]
}

export interface GalleryBlockBProps {
  items: GalleryBlockBRow[]
  squared?: boolean
  limit?: number
}

const props = withDefaults(defineProps<GalleryBlockBProps>(), {
  squared: false,
  limit: 99,
})

const galleryFilter = ref('all')
const currentImageName = ref('')

const mappedImages = props.items?.map(
  (items) =>
    items.items.map((image: any) => ({
      name: image.image,
    })) ?? []
)

const images = mappedImages.flat(1)

const showLightbox = (url: string) => {
  currentImageName.value = url
}

const onLightboxClose = () => {
  currentImageName.value = ''
}

const blockClasses = computed(() => [props.squared && `is-squared`])
</script>

<template>
  <div>
    <div class="image-grid-wrap" :class="blockClasses">
      <div class="image-grid">
        <div
          v-for="(row, index) in props.items.slice(0, props.limit)"
          :key="index"
          class="image-row"
        >
          <div
            v-for="(item, i) in row.items"
            :key="i"
            v-background="{
              src: item.image,
              placeholder: 'https://dummyimage.com/800x600/ededed/000000',
            }"
            class="has-background-image"
            :class="`flex-${item.size}`"
            @click.prevent="showLightbox(item.image)"
            @keydown.space.prevent="() => showLightbox(item.image)"
          >
            <div class="overlay"></div>
            <div class="image-owner">
              <img
                class="avatar"
                :src="item.owner.avatar"
                alt="featured image"
              />
              <div class="name">{{ item.owner.name }}</div>
            </div>
            <div class="photo-time">{{ item.date }}</div>
            <a class="photo-like" :class="item.liked && 'is-liked'">
              <div class="inner">
                <div class="like-overlay"></div>
                <i class="iconify" data-icon="feather:heart"></i>
              </div>
              <span class="is-sr-only">Like photo</span>
            </a>
          </div>
        </div>
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
.image-grid-wrap {
  .flex-1 {
    flex: 1;
  }

  .flex-2 {
    flex: 2;
  }

  .flex-3 {
    flex: 3;
  }

  .image-row {
    display: flex;
  }

  .image-row > div {
    position: relative;
    margin: 4px;
    height: 280px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    cursor: pointer;

    &:hover {
      .overlay {
        opacity: 0.6;
        //pointer-events: all;
      }

      .image-owner {
        .avatar {
          transform: scale(1);
        }

        .name {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .photo-time {
        transform: translateY(0);
        opacity: 1 !important;
      }

      .photo-like {
        transform: scale(1);
      }
    }

    .overlay {
      position: absolute;
      top: -4px;
      left: -4px;
      height: 100%;
      width: 100%;
      margin: 4px;
      background: var(--dark-text);
      opacity: 0;
      pointer-events: none;
      z-index: 1;
      transition: all 0.3s;
    }

    .image-owner {
      position: absolute;
      bottom: 14px;
      left: 14px;
      max-height: 40px;
      display: flex;
      align-items: center;
      z-index: 2;

      .avatar {
        display: block;
        height: 38px;
        width: 38px;
        border-radius: 50%;
        border: 1.4px solid var(--white);
        transform: scale(0);
        transition: all 0.3s;
      }

      .name {
        color: var(--white);
        font-family: var(--font);
        font-size: 0.9rem;
        margin-left: 8px;
        opacity: 0;
        transform: translateY(5px);
        transition: all 0.3s;
      }
    }

    .photo-time {
      position: absolute;
      top: 20px;
      left: 14px;
      color: var(--white);
      font-family: var(--font);
      font-size: 0.85rem;
      margin-left: 8px;
      opacity: 0;
      transform: translateY(5px);
      z-index: 2;
      transition: all 0.3s;
    }

    .photo-like {
      position: absolute;
      top: 14px;
      right: 14px;
      height: 38px;
      width: 38px;
      border-radius: 50%;
      background: var(--gallery-like-bg-color);
      z-index: 2;
      transform: scale(0);
      transition: all 0.3s;

      &:not(.is-liked):hover {
        .inner {
          svg,
          .iconify {
            color: var(--danger);
          }
        }
      }

      &.is-liked {
        box-shadow: var(--danger-box-shadow);

        .inner {
          .like-overlay {
            transform: scale(1);
          }

          svg,
          .iconify {
            color: var(--gallery-like-icon-color-active);

            :deep(path) {
              fill: var(--gallery-like-icon-color-active);
            }
          }
        }
      }

      .inner {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        overflow: hidden;

        .like-overlay {
          position: absolute;
          top: -2px;
          left: -2px;
          height: calc(100% + 4px);
          width: calc(100% + 4px);
          border-radius: 50%;
          background: var(--danger);
          transform: scale(0);
          transition: all 0.3s;
          z-index: 1;
        }

        svg,
        .iconify {
          position: relative;
          height: 16px;
          width: 16px;
          color: var(--gallery-like-icon-color);
          z-index: 2;
          transition: all 0.3s;
        }
      }
    }
  }

  &.is-squared {
    .image-row > div {
      border-radius: 0.5rem;
    }
  }
}

@media (max-width: 767px) {
  .image-grid-wrap .image-row > div {
    min-height: 280px;
  }
}

@media screen and (max-width: 400px) {
  .image-row {
    flex-direction: column;
  }
}
</style>
