<script setup lang="ts">
import type { SimpleIconFeature } from '/@src/types'

export interface BoxedFeaturesProps {
  features: SimpleIconFeature[]
}

const props = defineProps<BoxedFeaturesProps>()
</script>

<template>
  <div class="py-6">
    <div class="boxed-features">
      <div class="card light-bordered hover-inset">
        <div
          v-for="(feature, index) in props.features.slice(0, 8)"
          :key="index"
          class="flex-cell"
          :class="[
            index <= 3 && 'is-bordered',
            index === 3 && 'no-border-edge',
            index === 7 && 'no-border-edge',
          ]"
        >
          <i aria-hidden="true" class="iconify" :data-icon="feature.icon"></i>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.boxed-features {
  .card {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    border-radius: 1rem;
    border: 1px solid var(--card-border-color);
    background: var(--card-bg-color);

    .flex-cell {
      width: 25%;
      border-right: 1px solid var(--card-border-color);
      text-align: center;
      padding: 24px 16px;

      &.is-bordered {
        border-bottom: 1px solid var(--card-border-color);
      }

      &.no-border-edge {
        border-right: none;
      }

      i,
      .iconify {
        font-size: 2rem;
        color: var(--primary);
      }

      h3 {
        font-family: var(--font-main);
        font-weight: 500;
        color: var(--title-color);
      }

      p {
        font-family: var(--font);
        font-size: 0.9rem;
        color: var(--light-text);
        max-width: 200px;
        margin: 0 auto;
      }
    }
  }
}

@media (max-width: 767px) {
  .boxed-features {
    .card {
      .flex-cell {
        width: 100%;
        border-right: none;
        border-bottom: 1px solid var(--card-border-color);

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .boxed-features {
    .card {
      padding: 1rem;
    }
  }
}
</style>
