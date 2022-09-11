<script setup lang="ts">
import { ref, watch } from 'vue'

export interface PricingPlanPrice {
  monthly: number
  yearly: number
}

export interface PricingPlanBenefit {
  id: number
  content: string
}

export interface PricingPlanFeature {
  id: number
  content: string
}

export interface PricingPlan {
  id: number
  icon: string
  title: string
  subtitle: string
  price: PricingPlanPrice
  benefits: PricingPlanBenefit[]
  features: PricingPlanFeature[]
}

export interface PricingPlanProps {
  plans: PricingPlan[]
}

const props = defineProps<PricingPlanProps>()

const activeSection = ref(0)

const billing = ref([])

watch(billing, (newVal, oldVal) => {
  console.log('TOGGLE', newVal, oldVal)
})
</script>

<template>
  <div>
    <div class="billing-toggle">
      <NinjaToggle v-model="billing" name="billing_toggle" icon value="Yearly">
        <img
          class="text"
          src="/assets/illustrations/text/text-color.svg"
          alt="help text"
        />
      </NinjaToggle>
    </div>
    <div class="side-pricing">
      <div class="plans-wrapper">
        <div class="plans-wrapper-inner">
          <div class="plans">
            <div
              v-for="(plan, index) in props.plans"
              :key="index"
              class="plan"
              :class="[activeSection === index && 'is-active']"
              @click="activeSection = index"
              @keydown.space.prevent="() => (activeSection = index)"
            >
              <img :src="plan.icon" alt="Pricing plan icon" />
              <div class="description">
                <h3>{{ plan.title }}</h3>
                <p>{{ plan.subtitle }}</p>
              </div>
              <div class="price">
                <div v-if="billing.length > 0">
                  <span>{{ plan.price.yearly }}</span>
                  <small>/year</small>
                </div>
                <div v-else>
                  <span>{{ plan.price.monthly }}</span>
                  <small>/month</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="plan-details">
        <img
          class="girl"
          src="/assets/illustrations/pricing/sitting-girl.svg"
          alt="Pricing plan illustration"
        />
        <div
          v-for="(plan, index) in props.plans"
          :key="index"
          class="plan-details-inner"
          :class="[activeSection === index && 'is-active']"
        >
          <div class="inner">
            <h3>Benefits</h3>
            <div class="feature-list">
              <div
                v-for="(benefit, b) in plan.benefits"
                :key="b"
                class="feature-list-item"
              >
                <div class="dot">
                  <div class="dot-inner">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
                <span>{{ benefit.content }}</span>
              </div>
            </div>
          </div>
          <div class="inner">
            <h3>Features</h3>
            <div class="feature-list is-last">
              <div
                v-for="(feature, f) in plan.features"
                :key="f"
                class="feature-list-item is-feature"
              >
                <div class="dot">
                  <div class="dot-inner">
                    <i class="iconify" data-icon="feather:check"></i>
                  </div>
                </div>
                <span>{{ feature.content }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="button-wrap pt-5">
          <Button color="primary" elevated bold fullwidth>
            Start your Free Trial
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:global(.pricing-container) {
  overflow-x: visible !important;
}

.billing-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 180px;

  .ninja-toggle {
    position: relative;
    transform: scale(1.25);
  }

  .text {
    position: absolute;
    min-width: 225px;
    top: -50px;
    right: -230px;
  }
}

.side-pricing {
  display: flex;
  align-items: flex-start;

  .plans-wrapper {
    position: sticky;
    top: 100px;
    flex-grow: 2;

    .plans-wrapper-inner {
      width: 100%;
      height: 100%;
      display: flex;
      will-change: opacity;
      flex-direction: row;
    }
  }

  .plans {
    position: sticky;
    width: 100%;
    max-width: 100%;
    margin-right: 60px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
  }

  .plan {
    border: 1px solid var(--plan-border-color);
    background: var(--plan-bg-color);
    display: flex;
    align-items: center;
    padding: 2rem 1.5rem;
    border-radius: 0.75rem;
    align-content: center;
    position: relative;
    margin-bottom: 0.75rem;
    transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
    cursor: pointer;

    &:not(.is-active):hover {
      box-shadow: var(--light-box-shadow);
    }

    &.is-active {
      transform: scale(1.05);
      border-color: var(--primary);
      box-shadow: var(--light-box-shadow);

      img {
        filter: grayscale(0);
        opacity: 1;
      }
    }

    img {
      display: block;
      width: 100%;
      max-width: 60px;
      margin-right: 1rem;
      filter: grayscale(1);
      opacity: 0.6;
      transition: opacity 0.3s, filter 0.3s;
    }

    .description {
      h3 {
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--plan-heading-color);
      }

      p {
        font-size: 0.95rem;
        font-family: var(--font);
        color: var(--light-text);
      }
    }

    .price {
      margin-left: auto;

      span {
        font-family: var(--font);
        font-weight: 600;
        font-size: 2rem;
        color: var(--plan-heading-color);

        &::before {
          content: '$';
        }
      }

      small {
        font-family: var(--font);
        color: var(--light-text);
      }
    }
  }

  .plan-details {
    position: relative;
    min-width: 380px;
    padding: 2.5rem;
    border-radius: 1rem;
    border: 1px solid var(--plan-border-color);
    background: var(--plan-bg-color);

    .plan-details-inner {
      display: none;

      &.is-active {
        display: block;
      }
    }

    .girl {
      position: absolute;
      top: -158px;
      right: -28px;
      width: 130px;
    }

    .inner {
      + .inner {
        padding-top: 2rem;
        border-top: 1.6px dashed var(--plan-border-color);
      }

      h3 {
        font-size: 1.1rem;
        font-family: var(--font-alt);
        font-weight: 600;
        color: var(--plan-heading-color);
        margin-bottom: 1.5rem;
      }

      .feature-list {
        padding-bottom: 2rem;

        &.is-last {
          padding-bottom: 0;
        }

        .feature-list-item {
          display: flex;
          align-items: center;

          &:not(:last-child) {
            margin-bottom: 0.75rem;
          }

          &.is-feature {
            .dot {
              background: var(--success-light-28);

              .dot-inner {
                background: var(--success);
              }
            }
          }

          .dot {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            width: 32px;
            border-radius: 50%;
            background: var(--primary-light-40);
            margin-right: 0.75rem;

            .dot-inner {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 22px;
              width: 22px;
              border-radius: 50%;
              background: var(--primary-light-28);

              .iconify {
                height: 14px;
                width: 14px;
                color: var(--white);
                stroke-width: 3px;
              }
            }
          }

          span {
            display: block;
            font-size: 0.95rem;
            font-family: var(--font);
            color: var(--light-text);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .pricing-container {
    overflow-x: hidden !important;

    .side-pricing {
      flex-direction: column;

      .plans-wrapper {
        width: 100%;

        .plans-wrapper-inner {
          .plans {
            margin-right: 0;

            .plan {
              flex-direction: column;
              align-items: flex-start;

              img {
                margin-bottom: 1rem;
              }

              .price {
                margin-left: 0;
              }
            }
          }
        }
      }

      .plan-details {
        min-width: 100%;
        margin-top: 5rem;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .pricing-container {
    .side-pricing {
      .plans-wrapper {
        .plans-wrapper-inner {
          .plans {
            margin-right: 30px;

            .plan {
              flex-direction: column;
              align-items: flex-start;

              img {
                margin-bottom: 1rem;
              }

              .price {
                margin-left: 0;
              }
            }
          }
        }
      }

      .plan-details {
        min-width: 340px;
      }
    }
  }
}
</style>
