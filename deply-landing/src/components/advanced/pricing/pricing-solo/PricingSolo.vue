<script setup lang="ts">
import { ref } from 'vue'

export interface PricingSoloProps {
  title: string
  subtitle: string
  features: string[]
  monthlyPrice: number
  yearlyPrice: number
  link: string
  linkLabel: string
}

const props = defineProps<PricingSoloProps>()

const activePricing = ref('monthly')
</script>

<template>
  <div class="pricing-solo">
    <div class="pricing-solo-head">
      <div class="billing-selector">
        <div class="billing-selector-inner">
          <button
            :class="activePricing === 'monthly' && 'is-active'"
            @click="activePricing = 'monthly'"
          >
            Monthly Billing
          </button>
          <button
            :class="activePricing === 'yearly' && 'is-active'"
            @click="activePricing = 'yearly'"
          >
            Annual Billing
          </button>
          <div class="naver"></div>
        </div>
      </div>
    </div>
    <div class="pricing-solo-content">
      <div class="pricing-solo-card">
        <div class="left">
          <Title tag="h2" :size="5" leading>
            <span>{{ props.title }}</span>
          </Title>
          <p class="paragraph">
            {{ props.subtitle }}
          </p>
          <div class="inner-features">
            <div
              v-for="(feature, index) in props.features.slice(0, 10)"
              :key="index"
              class="feature-item"
            >
              <span>{{ feature }}</span>
            </div>
          </div>
        </div>
        <div class="right">
          <div>
            <div v-if="activePricing === 'monthly'" class="price">
              <div class="price-value">
                <span>{{ props.monthlyPrice }}</span>
              </div>
              <p class="paragraph rem-95">per member, per month</p>
            </div>
            <div v-else class="price">
              <div class="price-value">
                <span>{{ props.yearlyPrice }}</span>
              </div>
              <p class="paragraph rem-95">per member, per year</p>
            </div>
            <div class="action">
              <Button :to="props.link" color="primary" bold fullwidth raised>
                <span>{{ props.linkLabel }}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pricing-solo {
  position: relative;
  max-width: 940px;
  margin: 0 auto;

  .pricing-solo-head {
    margin-bottom: 2rem;

    .billing-selector {
      max-width: 400px;
      margin: 0 auto;

      .billing-selector-inner {
        position: relative;
        width: 100%;
        display: flex;
        border: 1px solid var(--input-base-border-color);
        border-radius: 50rem;

        button {
          position: relative;
          font-size: 1rem;
          font-family: var(--font);
          color: var(--light-text);
          padding: 0;
          border: none;
          background: none;
          width: 50%;
          min-height: 50px;
          z-index: 1;
          cursor: pointer;

          &.is-active {
            color: var(--title-color);

            &:first-child ~ .naver {
              margin-left: 0;
            }

            &:nth-child(2) ~ .naver {
              margin-left: 50%;
            }
          }
        }

        .naver {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 50%;
          margin-left: 0;
          border-radius: 50rem;
          background: var(--card-bg-color);
          box-shadow: var(--spread-shadow);
          pointer-events: none;
          z-index: 0;
          transition: margin 0.3s ease-in-out;
        }
      }
    }
  }

  .pricing-solo-content {
    .pricing-solo-card {
      display: flex;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 1rem;
      padding: 3rem;
      transition: box-shadow 0.3s;

      .left {
        width: 70%;

        .inner-features {
          display: flex;
          flex-wrap: wrap;
          margin-top: 2.5rem;

          .feature-item {
            font-family: var(--font);
            font-size: 0.95rem;
            color: var(--medium-text);
            width: 50%;

            &:not(:last-child) {
              margin-bottom: 0.75rem;
            }
          }
        }
      }

      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30%;
        padding-left: 3rem;
        border-left: 1px solid var(--card-border-color);
        text-align: center;

        > div {
          width: 100%;
        }

        .price {
          .price-value {
            position: relative;
            left: -12px;
            font-family: var(--font);
            font-weight: 300;
            font-size: 5.75rem;
            color: var(--title-color);
            line-height: 1;

            span::before {
              position: relative;
              top: -50px;
              content: '$';
              font-weight: 500;
              font-size: 1.5rem;
            }
          }
        }

        .action {
          margin-top: 2rem;
        }
      }

      &:hover {
        box-shadow: var(--spread-shadow);
      }
    }
  }
}

@media (max-width: 767px) {
  .pricing-solo {
    .pricing-solo-content {
      .pricing-solo-card {
        flex-direction: column;

        .left {
          width: 100%;
          padding-bottom: 2rem;

          .inner-features {
            .feature-item {
              width: 100%;
            }
          }
        }

        .right {
          width: 100%;
          border-left: none;
          border-top: 1px solid var(--card-border-color);
          padding-left: 0;
          padding-top: 2rem;
        }
      }
    }
  }
}
</style>
