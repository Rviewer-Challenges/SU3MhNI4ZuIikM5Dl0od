<script setup lang="ts">
import { ref, watch } from 'vue'

export interface PricingBlockItem {
  name: string
  text: string
  monthlyPrice: number
  yearlyPrice: number
  features: string[]
}

export interface PricingBlockProps {
  plans: PricingBlockItem[]
}

const props = defineProps<PricingBlockProps>()

const billing = ref([])

watch(billing, (newVal, oldVal) => {
  console.log('TOGGLE', newVal, oldVal)
})
</script>

<template>
  <div class="pricing-block">
    <div class="billing-switcher-wrapper">
      <div class="by-month" :class="billing.length > 0 ? '' : 'is-active'">
        Monthly
      </div>
      <div class="billing-switcher">
        <NinjaToggle
          v-model="billing"
          name="pricing-toggle"
          flavor="switch"
          color="primary"
          value="Yearly"
        />
      </div>
      <div class="by-year" :class="billing.length > 0 ? 'is-active' : ''">
        Annualy
      </div>

      <div class="discount">
        <img src="/assets/illustrations/text/save-10.svg" alt="Save 10%" />
      </div>
    </div>

    <div class="pricing-wrapper">
      <div class="pricing-card">
        <div class="columns is-gapless b-columns-half-tablet-p">
          <!-- Plan -->
          <div
            v-for="(plan, index) in props.plans.slice(0, 4)"
            :key="index"
            class="column is-3"
          >
            <div class="condensed-plan">
              <div class="plan-header">{{ plan.name }}</div>
              <div class="plan-description">
                {{ plan.text }}
              </div>
              <div class="plan-price">
                <span v-if="billing.length > 0" class="yearly-price">
                  {{ plan.yearlyPrice }}
                </span>

                <span v-else class="monthly-price">
                  {{ plan.monthlyPrice }}
                </span>
                <div v-if="billing.length > 0" class="yearly-billed">
                  (Billed at ${{ plan.yearlyPrice }}/year)
                </div>
                <div v-else class="monthly-billed">
                  (Billed at ${{ plan.monthlyPrice }}/month)
                </div>
              </div>
              <ul class="plan-features">
                <li v-for="(feature, f) in plan.features" :key="f">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img
        class="hr-bg"
        src="/assets/shapes/pricing-blob.svg"
        alt="background shape"
        width="1096"
        height="824"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.pricing-block {
  position: relative;

  .billing-switcher-wrapper {
    position: relative;
    max-width: 200px;
    margin: 0 auto 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font);
    z-index: 1;

    .by-month {
      padding-right: 20px;
    }

    .by-year {
      padding-left: 10px;
    }

    .by-month,
    .by-year {
      color: var(--medium-text);

      &.is-active {
        color: var(--primary);
      }
    }

    .discount {
      position: absolute;
      top: -60px;
      right: -100px;

      img {
        max-height: 70px;
        height: 70px;
      }
    }
  }

  .pricing-wrapper {
    position: relative;
    margin-bottom: 3rem;

    .hr-bg {
      position: absolute;
      top: -50px;
      left: 0;
      right: 0;
      margin: 0 auto;
      max-width: 1096px;
      width: 100%;
      z-index: 0;
    }

    .pricing-card {
      position: relative;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 1rem;
      max-width: 940px;
      margin: 0 auto;
      box-shadow: var(--spread-shadow);
      z-index: 2;

      .condensed-plan {
        padding: 1.75rem 1rem;
        text-align: center;
        border-right: 1px solid var(--card-border-color);

        .plan-header {
          font-family: var(--font-alt);
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--title-color);
          padding-bottom: 1.5rem;
        }

        .plan-description {
          font-family: var(--font);
          font-size: 0.9rem;
          color: var(--medium-text);
          padding-bottom: 20px;

          span {
            font-weight: 500;
            color: var(--primary);
          }
        }

        .plan-price {
          position: relative;
          left: -10px;
          font-family: var(--font);
          font-size: 4.5rem;
          font-weight: 400;
          color: var(--title-color);
          padding-bottom: 0;
          border-bottom: 2px dashed var(--card-border-color);

          span {
            &::after {
              position: relative;
              left: 10px;
              display: block;
              content: 'PER MONTH';
              margin-top: -8px;
              font-size: 0.8rem;
              line-height: 1rem;
              font-family: var(--font);
              font-weight: 500;
              color: var(--light-text);
            }

            &::before {
              position: relative;
              top: -35px;
              content: '$';
              font-weight: 700;
              font-size: 1.75rem;
              margin-right: 0;
            }
          }

          .yearly-billed,
          .monthly-billed {
            position: relative;
            left: 10px;
            padding: 1.5rem 0;
            font-size: 0.8rem;
            color: var(--primary);
          }
        }

        .plan-features {
          padding-top: 2.5rem;

          li {
            font-size: 0.9rem;
            font-family: var(--font);
            color: var(--medium-text);
            padding-bottom: 1rem;
          }
        }
      }
    }

    .column {
      &:last-child {
        .pricing-card {
          border-right: none;
        }
      }
    }
  }
}
</style>
