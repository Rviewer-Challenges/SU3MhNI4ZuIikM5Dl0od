<script setup lang="ts">
import { computed } from 'vue'

import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface NftSellerItem {
  preview: string
}

export interface NftSeller {
  id: number
  name: string
  picture: string
  url: string
  items: NftSellerItem[]
}

export interface NftSellerCardProps {
  content: NftSeller
  flat?: boolean
}

const props = withDefaults(defineProps<NftSellerCardProps>(), {
  flat: false,
})

const cardClasses = computed(() => [props.flat && 'is-flat'])
</script>

<template>
  <div class="nft-seller-card" :class="cardClasses">
    <div class="card-images">
      <img
        v-for="(item, index) in props.content.items.slice(0, 2)"
        :key="index"
        class="card-image"
        :src="item.preview"
        alt="cover image"
        width="600"
        height="510"
        @error.once="(event) => viaPlaceholderErrorHandler(event, `600x510`)"
      />
      <div class="avatar-holder">
        <AvatarSimple :picture="props.content.picture" size="large" />
      </div>
    </div>
    <div class="card-body">
      <RouterLink :to="props.content.url">
        <Title tag="h3" :size="6" weight="semi" narrow>
          {{ props.content.name }}
        </Title>
      </RouterLink>
      <p class="paragraph rem-90">{{ props.content.items.length }} items</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nft-seller-card {
  position: relative;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 1.25rem;
  padding: 0.75rem;
  text-align: center;
  box-shadow: var(--spread-shadow);
  transition: box-shadow 0.3s;

  .card-images {
    position: relative;
    display: flex;
    justify-content: space-between;

    .card-image {
      display: block;
      width: calc(50% - 0.2rem);
      object-fit: cover;
    }

    .card-image:first-child {
      margin-right: 0.1rem;
      border-radius: 0.75rem 0 0 0.75rem;
    }

    .card-image:nth-child(2) {
      margin-left: 0.1rem;
      border-radius: 0 0.75rem 0.75rem 0;
    }

    .avatar-holder {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      transform: translateY(50%);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 72px;
      width: 72px;
      border-radius: 50%;
      margin: 0 auto;
      background: var(--card-bg-color);
    }
  }

  .card-body {
    padding: 2.75rem 0.25rem 0.5rem;
  }

  &.is-flat {
    box-shadow: none;

    &:hover {
      box-shadow: var(--spread-shadow);
    }
  }
}
</style>
