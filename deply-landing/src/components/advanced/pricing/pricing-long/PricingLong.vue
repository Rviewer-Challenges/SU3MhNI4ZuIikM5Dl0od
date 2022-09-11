<script setup lang="ts">
import { computed } from 'vue'

export type PricingColor = 'primary' | 'secondary' | 'info' | 'yellow'

export type PricingColumns = 2 | 3 | 4

export interface PricingLongFeature {
  value: string
  label: string
}

export interface PricingPlan {
  name: string
  logo: string
  price: number
  color: PricingColor
  features: PricingLongFeature[]
  featured: boolean
  popular: boolean
}

export interface PricingLongProps {
  plans: PricingPlan[]
  columns?: PricingColumns
  limit?: number
  pulled?: boolean
  rounded?: boolean
  polkaDots?: boolean
  shadow?: boolean
}

const props = withDefaults(defineProps<PricingLongProps>(), {
  plans: () => [],
  columns: 3,
  limit: 4,
  pulled: false,
  rounded: false,
  polkaDots: false,
  shadow: false,
})

const blockClasses = computed(() => [
  props.pulled && 'is-pulled',
  props.rounded && 'is-rounded',
  props.shadow && 'has-shadow',
  props.columns === 4 && 'max-w-9',
  props.columns === 2 && 'max-w-6',
])

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])
</script>

<template>
  <div class="py-6">
    <div class="pricing-long mx-auto" :class="blockClasses">
      <div v-if="props.polkaDots" class="polka-wrap polka-1">
        <PolkaDots />
      </div>
      <div class="columns b-columns-half-tablet-p">
        <div
          v-for="(plan, index) in props.plans.slice(0, props.limit)"
          :key="index"
          class="column"
          :class="columnClasses"
        >
          <div class="pricing-long-card">
            <div
              class="pricing-long-card-header"
              :class="plan.color && `is-${plan.color}`"
            >
              <div class="pricing-name">
                <img :src="plan.logo" alt="pricing logo" />
                <span>{{ plan.name }}</span>
              </div>
              <div class="pricing-price">
                <div class="price-value">
                  <span>{{ plan.price }}</span>
                </div>
                <p class="paragraph rem-95 is-inverted-light">
                  per user, per month
                </p>
              </div>
            </div>
            <div class="pricing-long-card-body">
              <div class="pricing-features">
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
      </div>
      <div v-if="props.polkaDots" class="polka-wrap polka-2">
        <PolkaDots />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pricing-long {
  position: relative;

  .pricing-long-card {
    position: relative;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    text-align: center;
    overflow: hidden;
    z-index: 1;

    .pricing-long-card-header {
      padding: 2.5rem;

      .pricing-name {
        margin-bottom: 3rem;

        img {
          display: block;
          max-width: 110px;
          min-height: 52px;
          margin: 0 auto;
        }

        span {
          font-family: var(--font-alt);
          color: var(--white-smoke);
        }
      }

      .pricing-price {
        .price-value {
          position: relative;
          left: -12px;
          font-family: var(--font);
          font-weight: 300;
          font-size: 3.5rem;
          color: var(--white-smoke);
          line-height: 1;

          span::before {
            position: relative;
            top: -20px;
            content: '$';
            font-weight: 500;
            font-size: 1.5rem;
          }
        }
      }

      &.is-primary {
        background: var(--primary);
      }

      &.is-secondary {
        background: var(--secondary);
      }

      &.is-info {
        background: var(--info);
      }

      &.is-yellow {
        background: var(--yellow);

        .pricing-name {
          span {
            color: var(--title-color);
          }
        }

        .pricing-price {
          .price-value {
            color: var(--title-color);
          }

          .paragraph {
            color: var(--title-color);
          }
        }
      }
    }

    .pricing-long-card-body {
      padding: 2.5rem;

      .pricing-features {
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
      bottom: -40px;
      right: -56px;
    }
  }

  &.is-pulled {
    margin-top: -3rem;
  }

  &.is-rounded {
    .pricing-long-card {
      border-radius: 1rem;
    }
  }

  &.has-shadow {
    .pricing-long-card {
      box-shadow: var(--spread-shadow);
    }
  }
}
</style>
