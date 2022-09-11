<script setup lang="ts">
import { computed } from 'vue'

export type PricingColumns = 2 | 3 | 4

export interface PricingPlanFeature {
  value: string
  label: string
}

export interface PricingPlan {
  logo: string
  features: PricingPlanFeature[]
  featured: boolean
  popular: boolean
}

export interface PricingCompareProps {
  plans: PricingPlan[]
  columns?: PricingColumns
  pulled?: boolean
  rounded?: boolean
  polkaDots?: boolean
  shadow?: boolean
}

const props = withDefaults(defineProps<PricingCompareProps>(), {
  plans: () => [],
  columns: 3,
  pulled: false,
  rounded: false,
  polkaDots: false,
  shadow: false,
})

const blockClasses = computed(() => [
  props.pulled && 'is-pulled',
  props.rounded && 'is-rounded',
  props.shadow && 'has-shadow',
  props.columns === 4 && 'max-w-8',
  props.columns === 2 && 'max-w-6',
])

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])
</script>

<template>
  <div class="py-6">
    <div class="compare-cards mx-auto" :class="blockClasses">
      <div v-if="props.polkaDots" class="polka-wrap polka-1">
        <PolkaDots />
      </div>
      <div class="columns b-columns-half-tablet-p">
        <div
          v-for="(plan, index) in props.plans"
          :key="index"
          class="column"
          :class="columnClasses"
        >
          <div
            class="compare-card"
            :class="[
              plan.featured && 'is-featured',
              plan.popular && 'is-popular',
            ]"
          >
            <div class="plan-logo">
              <img :src="plan.logo" alt="Plan logo" />
            </div>
            <div class="plan-features">
              <ul>
                <li v-for="(feature, f) in plan.features" :key="f">
                  <span>{{ feature.value }}</span>
                  <p>{{ feature.label }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p class="paragraph max-w-6">
        Prices and/or product specifications are as published by named suppliers
        on their own website(s) on the date(s) shown and may be varied at any
        time without notice..
      </p>
      <div v-if="props.polkaDots" class="polka-wrap polka-2">
        <PolkaDots />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.compare-cards {
  position: relative;

  .compare-card {
    position: relative;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    padding: 2.5rem;
    text-align: center;
    z-index: 1;

    .plan-logo {
      margin-bottom: 3rem;

      img {
        display: block;
        max-width: 110px;
        min-height: 52px;
        margin: 0 auto;
      }
    }

    .plan-features {
      margin-bottom: 1.5rem;

      ul li {
        color: var(--light-text);
        font-family: var(--font);

        span {
          color: var(--title-color);
          font-weight: 500;
        }

        p {
          font-size: 0.9rem;
        }

        &:not(:last-child) {
          margin-bottom: 2rem;
        }
      }
    }

    &.is-featured,
    &.is-popular {
      .plan-logo {
        img {
          filter: brightness(0) invert(1);
        }
      }

      .plan-features {
        ul li {
          color: var(--white-smoke);

          span {
            color: var(--white-smoke);
          }
        }
      }
    }

    &.is-featured {
      background: var(--primary);
      border-color: var(--primary);
      box-shadow: var(--primary-box-shadow);
    }

    &.is-popular {
      background: var(--secondary);
      border-color: var(--secondary);
      box-shadow: var(--secondary-box-shadow);
    }
  }

  .polka-wrap {
    position: absolute;
    z-index: 0;

    &.polka-1 {
      top: -35px;
      left: -56px;
    }

    &.polka-2 {
      bottom: 18px;
      right: -56px;
    }
  }

  &.is-pulled {
    margin-top: -3rem;
  }

  &.is-rounded {
    .compare-card {
      border-radius: 1rem;
    }
  }

  &.has-shadow {
    .compare-card {
      box-shadow: var(--spread-shadow);
    }
  }
}

.is-dark {
  .compare-cards {
    .compare-card:not(.is-featured):not(.is-popular) {
      .plan-logo {
        img {
          filter: invert(1);
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .compare-cards {
    .column {
      &.is-3 {
        .compare-card {
          padding: 1.75rem !important;
        }
      }
    }
  }
}
</style>
