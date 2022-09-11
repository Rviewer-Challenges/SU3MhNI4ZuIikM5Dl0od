<script setup lang="ts">
import type { NftSeller } from '/@src/components/advanced/nft/nft-seller-card/NftSellerCard.vue'

export interface NftSellerGridProps {
  items: NftSeller[]
  pulled?: boolean
}

const props = withDefaults(defineProps<NftSellerGridProps>(), {
  items: () => [],
  inverted: false,
})
</script>

<template>
  <div class="py-6">
    <div class="nft-seller-grid">
      <slot name="title"></slot>

      <div class="grid-inner">
        <div class="columns is-multiline b-columns-half-tablet-p">
          <div
            v-for="(item, index) in props.items"
            :key="index"
            class="column is-3"
          >
            <NftSellerCard :content="item" flat />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nft-seller-grid {
  position: relative;

  :deep(.collection-title) {
    margin-bottom: 1.5rem;
  }
}
</style>
