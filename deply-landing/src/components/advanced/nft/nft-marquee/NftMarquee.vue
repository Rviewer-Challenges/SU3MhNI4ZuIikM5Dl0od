<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface NftMarqueeItem {
  preview: string
  size: number
  url: string
}

export interface NftMarqueeProps {
  items: NftMarqueeItem[]
}

const props = defineProps<NftMarqueeProps>()
</script>

<template>
  <div class="nft-marquee-wrapper">
    <MarqueeText :repeat="10" :duration="40">
      <div class="nft-marquee">
        <RouterLink
          v-for="(item, index) in props.items"
          :key="index"
          to="/"
          class="nft-marquee-item"
          :class="`is-${item.size}`"
        >
          <img
            :src="item.preview"
            alt="marquee image"
            width="600"
            height="510"
            @error.once="
              (event) => viaPlaceholderErrorHandler(event, `600x510`)
            "
          />
        </RouterLink>
      </div>
    </MarqueeText>
  </div>
</template>

<style scoped lang="scss">
.nft-marquee-wrapper {
  padding-bottom: 3rem;

  .nft-marquee {
    max-width: 1600px;
    column-count: 8;
    column-gap: 0;

    .nft-marquee-item {
      position: relative;
      display: inline-block;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      padding: 0.75rem;
      border-radius: 0.85rem;
      margin: 0.5rem;

      img {
        display: block;
        width: 100%;
        object-fit: cover;
      }

      &.is-1 {
        img {
          min-height: 90px;
          border-radius: 0.65rem;
        }
      }

      &.is-2 {
        img {
          min-height: 260px;
          border-radius: 0.65rem;
        }
      }

      &.is-3 {
        img {
          min-height: 110px;
          border-radius: 0.65rem;
        }
      }

      &.is-4 {
        img {
          min-height: 350px;
          border-radius: 0.65rem;
        }
      }

      &.is-5 {
        img {
          min-height: 180px;
          border-radius: 0.65rem;
        }
      }

      &.is-6 {
        img {
          min-height: 110px;
          border-radius: 0.65rem;
        }
      }
    }
  }
}
</style>
