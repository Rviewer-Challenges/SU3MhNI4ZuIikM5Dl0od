<script setup lang="ts">
import { computed } from 'vue'

export type PricingColumns = 2 | 3 | 4

export interface PricingPlan {
  name: string
  price: number
  comment: string
  features: string[]
  featured: boolean
}

export interface PricingCardsProps {
  plans: PricingPlan[]
  columns?: PricingColumns
  label?: string
  pulled?: boolean
  rounded?: boolean
  polkaDots?: boolean
}

const props = withDefaults(defineProps<PricingCardsProps>(), {
  plans: () => [],
  columns: 3,
  label: 'Sign Up',
  pulled: false,
  rounded: false,
  polkaDots: false,
})

const blockClasses = computed(() => [
  props.pulled && 'is-pulled',
  props.rounded && 'is-rounded',
  props.columns === 4 && 'max-w-8',
  props.columns === 2 && 'max-w-6',
])

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])
</script>

<template>
  <div class="py-6">
    <div class="pricing-cards mx-auto" :class="blockClasses">
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
          <div class="pricing-card" :class="plan.featured && 'is-featured'">
            <div class="plan-name">
              <span>{{ plan.name }}</span>
            </div>
            <div class="plan-price">
              <Title
                tag="h3"
                :size="2"
                weight="bold"
                leading
                :inverted="plan.featured"
              >
                <span>{{ plan.price }}</span>
              </Title>
              <p
                class="paragraph"
                :class="plan.featured && 'is-inverted-light'"
              >
                {{ plan.comment }}
              </p>
            </div>
            <div class="plan-features">
              <ul>
                <li v-for="(feature, f) in plan.features" :key="f">
                  {{ feature }}
                </li>
              </ul>
            </div>
            <div class="plan-action">
              <Button to="/pricing" color="primary" raised :long="3">
                {{ props.label }}
              </Button>
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

<style lang="scss" scoped>
.pricing-cards {
  position: relative;

  .pricing-card {
    position: relative;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    padding: 2.5rem;
    text-align: center;
    z-index: 1;

    .plan-name {
      font-family: var(--font-alt);
      font-weight: 600;
      color: var(--title-color);
    }

    .plan-price {
      padding: 3rem 0;

      :deep(.title) {
        &::before {
          position: relative;
          top: -10px;
          content: '$';
          font-size: 1.5rem;
        }
      }
    }

    .plan-features {
      margin-bottom: 3rem;

      ul li {
        color: var(--light-text);
        font-family: var(--font);
      }
    }

    &.is-featured {
      background: var(--primary);
      border-color: var(--primary);

      .plan-name {
        color: var(--white-smoke);
      }

      .plan-features {
        ul li {
          color: var(--white-smoke);
        }
      }

      .plan-action {
        :deep(.button) {
          background: var(--white-smoke);
          border-color: var(--white-smoke);
          color: var(--primary);
        }
      }
    }
  }

  .polka-wrap {
    position: absolute;
    z-index: 0;

    &.polka-1 {
      top: -20px;
      left: -56px;
    }

    &.polka-2 {
      bottom: -20px;
      right: -56px;
    }
  }

  &.is-pulled {
    margin-top: -3rem;
  }

  &.is-rounded {
    .pricing-card {
      border-radius: 0.75rem;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .pricing-cards {
    .column {
      &.is-3 {
        .pricing-card {
          padding: 1.75rem !important;
        }
      }
    }
  }
}
</style>
