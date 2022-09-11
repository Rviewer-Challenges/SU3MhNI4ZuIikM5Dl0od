<script setup lang="ts">
import type { NftCollection } from '/@src/components/advanced/nft/nft-collection-card/NftCollectionCard.vue'

export interface NftCollectionGridProps {
  items: NftCollection[]
  pulled?: boolean
}

const props = withDefaults(defineProps<NftCollectionGridProps>(), {
  items: () => [],
  inverted: false,
})
</script>

<template>
  <div class="py-6">
    <div class="nft-collection-grid">
      <slot name="title"></slot>

      <div class="grid-inner">
        <div class="columns is-multiline b-columns-half-tablet-p">
          <div
            v-for="(item, index) in props.items"
            :key="index"
            class="column is-3"
          >
            <NftCollectionCard :content="item" flat />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nft-collection-grid {
  position: relative;

  :deep(.collection-title) {
    margin-bottom: 1.5rem;
  }
}
</style>
