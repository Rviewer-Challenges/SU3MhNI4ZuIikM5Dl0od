<script setup lang="ts">
import { ref, computed } from 'vue'

import { allNfts } from '/@src/data/pages/nft/all'

const statusOptions = [
  {
    value: 'New',
    label: 'New',
  },
  {
    value: 'Trending',
    label: 'Trending',
  },
  {
    value: 'Popular',
    label: 'Popular',
  },
]

const rarityOptions = [
  {
    value: 'Epic',
    label: 'Epic',
  },
  {
    value: 'Very Rare',
    label: 'Very Rare',
  },
  {
    value: 'Rare',
    label: 'Rare',
  },
  {
    value: 'Common',
    label: 'Common',
  },
]

const themeOptions = [
  {
    value: 'Characters',
    label: 'Characters',
  },
  {
    value: 'Cyberpunk',
    label: 'Cyberpunk',
  },
  {
    value: 'Photo',
    label: 'Photo',
  },
  {
    value: 'Graphics',
    label: 'Graphics',
  },
]

const items = ref(allNfts)

const textFilter = ref('')
const priceValue = ref(0)
const statusSelect = ref('All')
const raritySelect = ref('All')
const themeSelect = ref('All')

const filteredData = computed(() => {
  if (!textFilter.value) {
    return items.value
  } else {
    return items.value.filter((item) => {
      return (
        item.name.match(new RegExp(textFilter.value, 'i')) ||
        item.collection.name.match(new RegExp(textFilter.value, 'i')) ||
        item.seller.name.match(new RegExp(textFilter.value, 'i'))
      )
    })
  }
})

const resetFilters = () => {
  priceValue.value = 0
  statusSelect.value = 'All'
  raritySelect.value = 'All'
  themeSelect.value = 'All'
}
</script>

<template>
  <div>
    <form class="mt-6">
      <div class="flex-form is-relative z-1">
        <div>
          <Title tag="h1" :size="3" weight="bold" narrow>
            <span>Explore</span>
          </Title>
        </div>
        <Control icon="feather:search" expanded>
          <VInput v-model="textFilter" placeholder="Search items..." />
        </Control>
      </div>
    </form>
    <div class="columns -mt-6">
      <div class="column is-3 b-hidden-mobile b-hidden-tablet-p">
        <div class="nft-list-filters">
          <div class="py-6">
            <div class="nft-list-filters-inner">
              <div class="mb-5">
                <label class="small-label">Price Range</label>
                <Control>
                  <Slider
                    v-model="priceValue"
                    :min="0"
                    :max="1"
                    :step="-1"
                    show-tooltip="drag"
                  />
                  <div class="slider-tics">
                    <span v-for="index in 8" :key="index"></span>
                  </div>
                  <div class="slider-labels">
                    <span>0 ETH</span>
                    <span>2 ETH</span>
                  </div>
                </Control>
              </div>

              <div class="mb-5">
                <label class="small-label">Status</label>
                <Control>
                  <VSelect
                    v-model="statusSelect"
                    :options="statusOptions"
                    placeholder="All"
                  />
                </Control>
              </div>

              <div class="mb-5">
                <label class="small-label">Rarity</label>
                <Control>
                  <VSelect
                    v-model="raritySelect"
                    :options="rarityOptions"
                    placeholder="All"
                  />
                </Control>
              </div>

              <div class="mb-5">
                <label class="small-label">Theme</label>
                <Control>
                  <VSelect
                    v-model="themeSelect"
                    :options="themeOptions"
                    placeholder="All"
                  />
                </Control>
              </div>

              <div>
                <Button fullwidth bold @click="resetFilters">
                  Reset Filters
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-9">
        <NftCardGrid :items="filteredData" side-grid></NftCardGrid>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nft-list-filters {
  position: sticky;
  top: 50px;
  margin-right: 1.5rem;

  .small-label {
    display: inline-block;
    margin-bottom: 0.5rem;
    font-family: var(--font);
    font-weight: 500;
    font-size: 0.7rem;
    text-transform: uppercase;
    color: var(--medium-text);
  }

  .slider-tics {
    display: flex;

    span {
      position: relative;
      display: block;
      flex: 1 1 0;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 0.5rem;
        width: 1px;
        border-right: 1px solid var(--light-text);
      }

      &:last-child::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        height: 0.5rem;
        width: 1px;
        border-right: 1px solid var(--light-text);
      }
    }
  }

  .slider-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 0.75rem;

    span {
      display: block;
      font-family: var(--font);
      font-size: 0.75rem;
      font-weight: 500;
      color: var(--light-text);
    }
  }
}

.flex-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  margin: 0 auto 1rem;

  :deep(.control) {
    .form-icon {
      height: 48px;
      width: 48px;

      .iconify {
        font-size: 1.25rem;
      }
    }
  }

  :deep(.input) {
    height: 48px;
    padding-left: 48px;
  }

  :deep(.select) {
    height: 48px;

    select {
      height: 48px;
    }

    &::after {
      top: 58%;
    }
  }

  &.is-compact {
    background: none;
    box-shadow: none;
  }
}

@media only screen and (max-width: 767px) {
  .flex-form {
    flex-direction: column;

    :deep(.control) {
      margin-top: 2rem;
      margin-right: 0 !important;
      margin-bottom: 0.75rem !important;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .flex-form {
    flex-direction: column;

    :deep(.field) {
      flex-wrap: wrap;
    }

    :deep(.control) {
      margin-top: 2rem;
      margin-bottom: 0.75rem !important;
      min-width: 340px;
    }
  }
}
</style>
