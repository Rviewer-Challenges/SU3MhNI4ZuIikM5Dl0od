<script setup lang="ts">
export interface PremiumFeature {
  title: string
  text: string
}

export interface PricingRegularPlan {
  logo: string
  name: string
  price: string
  priceLabel: string
  features: string[]
}

export interface PricingSplitPropsPremiumPlan {
  logo: string
  name: string
  features: PremiumFeature[]
}

export interface PricingSplitProps {
  regularPlans: PricingRegularPlan[]
  premiumPlan: PricingSplitPropsPremiumPlan
  regularLabel: string
  premiumLabel: string
  regularSublabel: string
  premiumSublabel: string
}

const props = withDefaults(defineProps<PricingSplitProps>(), {
  regularPlans: () => [],
})
</script>

<template>
  <div class="pricing-split">
    <div class="split-card">
      <div class="split-card-left">
        <div class="split-card-head">
          <Title tag="h2" :size="4" weight="semi" leading>
            <span>Entry Level Plans</span>
          </Title>
          <p class="paragraph">Pay as you go pricing</p>
        </div>
        <div class="split-card-body">
          <div class="left-plans">
            <div
              v-for="(plan, index) in props.regularPlans.slice(0, 3)"
              :key="index"
              class="left-plan"
            >
              <div class="plan-logo">
                <img :src="plan.logo" alt="Plan logo" />
              </div>
              <div class="plan-name">
                <span>{{ plan.name }}</span>
              </div>
              <div class="plan-price">
                <span>{{ plan.priceLabel }}</span>
                <h3>{{ plan.price }}</h3>
              </div>
              <div class="plan-features">
                <div
                  v-for="(feature, f) in plan.features"
                  :key="f"
                  class="plan-feature"
                >
                  <p>{{ feature }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="split-card-action">
          <Buttons alignment="centered">
            <Button color="primary" raised bold>
              {{ props.regularLabel }}
            </Button>
          </Buttons>
          <p class="paragraph rem-85">{{ props.regularSublabel }}</p>
        </div>
      </div>
      <div
        v-background="{
          src: '/assets/shapes/lowpoly-pattern.png',
          placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
        }"
        class="split-card-right"
      >
        <div class="split-card-head">
          <Title tag="h2" :size="4" weight="semi" inverted leading>
            <span>{{ props.premiumPlan.name }}</span>
          </Title>
          <p class="paragraph is-inverted-light">
            Feature-rich options at business scale
          </p>
        </div>
        <div class="split-card-body">
          <div class="right-plan">
            <div class="plan-logo">
              <img :src="props.premiumPlan.logo" alt="Plan logo" />
            </div>
            <div class="plan-features">
              <div
                v-for="(item, i) in props.premiumPlan.features.slice(0, 4)"
                :key="i"
                class="plan-feature"
              >
                <h3>{{ item.title }}</h3>
                <p>
                  {{ item.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="split-card-action">
          <Buttons alignment="centered">
            <Button bold>{{ props.premiumLabel }}</Button>
          </Buttons>
          <p class="paragraph rem-85">{{ props.premiumSublabel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pricing-split {
  position: relative;

  .split-card {
    display: flex;
    align-items: stretch;
    overflow: hidden;
    border-radius: 0.65rem;
    border: 1px solid var(--card-border-color);
    box-shadow: var(--spread-shadow);

    .split-card-left {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      height: inherit;
      width: 50%;
      background: var(--card-bg-color);
      padding: 3rem 1rem;
    }

    .split-card-right {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      height: inherit;
      width: 50%;
      background: var(--section-bg-color-dark);
      padding: 3rem 1rem;
    }

    .split-card-head {
      text-align: center;
      margin-bottom: 2rem;
    }

    .left-plans {
      display: flex;
      align-items: stretch;
      margin-bottom: 3rem;

      .left-plan {
        text-align: center;
        width: 33.3%;
        padding: 0 0.75rem;

        .plan-logo {
          margin-bottom: 1rem;

          img {
            display: block;
            max-width: 50px;
            margin: 0 auto;
          }
        }

        .plan-name {
          margin-bottom: 2rem;
          font-family: var(--font-alt);
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--title-color);
          text-transform: uppercase;
        }

        .plan-price {
          margin-bottom: 2rem;

          span {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
          }

          h3 {
            font-family: var(--font);
            font-weight: 500;
            font-size: 1.35rem;
            color: var(--title-color);
          }
        }

        .plan-features {
          .plan-feature {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--medium-text);

            &:not(:last-child) {
              margin-bottom: 1rem;
            }
          }
        }

        &:not(:last-child) {
          border-right: 1px solid var(--card-border-color);
        }
      }
    }

    .right-plan {
      .plan-logo {
        margin-bottom: 2rem;

        img {
          display: block;
          max-width: 50px;
          margin: 0 auto;
        }
      }

      .plan-features {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 3rem;

        .plan-feature {
          width: 50%;
          padding: 1rem;

          h3 {
            font-family: var(--font-alt);
            font-weight: 600;
            font-size: 0.75rem;
            color: var(--white-smoke);
            text-transform: uppercase;
            margin-bottom: 0.25rem;
          }

          p {
            font-size: 0.775rem;
            font-family: var(--font);
            color: var(--light-text);
            opacity: 0.8;
          }

          &:nth-child(odd) {
            border-right: 1px solid var(--dark-bg-light-10);
          }
        }
      }
    }

    .split-card-action {
      margin-top: auto;
      text-align: center;

      :deep(.buttons) {
        margin-bottom: 0;
      }

      :deep(.button) {
        min-height: 52px;
        min-width: 240px;
      }
    }
  }
}

@media (max-width: 767px) {
  .pricing-split {
    .split-card {
      flex-direction: column;

      .split-card-left,
      .split-card-right {
        width: 100%;
      }

      .left-plans {
        flex-wrap: wrap;

        .left-plan {
          min-width: 100%;
          max-width: 100%;
          border-right: none !important;

          &:not(:last-child) {
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 1px solid var(--card-border-color);
          }
        }
      }

      .right-plan {
        .plan-features .plan-feature {
          width: 100%;
          border-right: none !important;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .pricing-split {
    .split-card {
      flex-direction: column;

      .split-card-left,
      .split-card-right {
        width: 100%;
      }
    }
  }
}
</style>
