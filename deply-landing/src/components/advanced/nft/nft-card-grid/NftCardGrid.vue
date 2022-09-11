<script setup lang="ts">
import { computed } from 'vue'
import type { Nft } from '/@src/types'

export interface NftGridProps {
  items: Nft[]
  pulled?: boolean
  sideGrid?: boolean
}

const props = withDefaults(defineProps<NftGridProps>(), {
  items: () => [],
  pulled: false,
  sideGrid: false,
})

const blockClasses = computed(() => [props.sideGrid && 'is-side-grid'])

const columnClasses = computed(() => [props.sideGrid ? 'is-4' : 'is-3'])
</script>

<template>
  <div class="py-6">
    <div class="nft-grid" :class="blockClasses">
      <slot name="title"></slot>

      <div class="grid-inner">
        <TransitionGroup
          name="list"
          tag="div"
          class="
            columns
            is-multiline
            b-columns-half-tablet-p b-columns-third-tablet-l
          "
        >
          <div
            v-for="(item, index) in props.items"
            :key="index"
            class="column"
            :class="columnClasses"
          >
            <NftCard :content="item" flat />
          </div>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nft-grid {
  position: relative;

  :deep(.collection-title) {
    margin-bottom: 1.5rem;
  }

  .column {
    &.is-4 {
      padding: 0.35rem;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1000px) and (orientation: landscape) {
  .nft-grid {
    &.is-side-grid {
      .column {
        width: 50% !important;
        min-width: 50% !important;
      }
    }
  }
}
</style>
