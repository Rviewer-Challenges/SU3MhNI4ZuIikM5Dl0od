<script setup lang="ts">
export interface PricingExtensionProps {
  title: string
  subtitle: string
  features: string[]
  price: number
}

const props = defineProps<PricingExtensionProps>()
</script>

<template>
  <div class="py-6">
    <div class="pricing-solo-extension">
      <div class="pricing-solo-extension-head">
        <Title tag="h2" :size="3" leading>
          <span>
            Expand with
            <span class="text-primary">additional features</span>
          </span>
        </Title>
        <p class="paragraph rem-115">
          Get some additional tools for your solution at a very fair price.
        </p>
      </div>
      <div class="pricing-solo-extension-body">
        <div class="pricing-extension-card">
          <div class="left">
            <Title tag="h2" :size="5" leading>
              <span>{{ props.title }}</span>
            </Title>
            <p class="paragraph rem-95">
              {{ props.subtitle }}
            </p>
            <div class="inner-features">
              <div
                v-for="(feature, index) in props.features.slice(0, 8)"
                :key="index"
                class="feature-item"
              >
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>
          <div class="right">
            <div>
              <div class="price">
                <div class="price-value">
                  <span>{{ props.price }}</span>
                </div>
                <p class="paragraph rem-95">per member,</p>
                <p class="paragraph rem-95">per month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.py-6 {
  border-bottom: 1px solid var(--card-border-color);
}

.pricing-solo-extension {
  position: relative;
  padding-bottom: 3rem;

  .pricing-solo-extension-head {
    text-align: center;
    margin-bottom: 2rem;
  }

  .pricing-solo-extension-body {
    .pricing-extension-card {
      display: flex;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 1rem;
      padding: 2rem;
      max-width: 480px;
      margin: 0 auto;
      transition: box-shadow 0.3s;

      .left {
        width: 65%;

        .inner-features {
          display: flex;
          flex-wrap: wrap;
          margin-top: 2.5rem;

          .feature-item {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--medium-text);
            width: 100%;

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
        width: 35%;
        padding-left: 2rem;
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
  .pricing-solo-extension {
    .pricing-solo-extension-body {
      .pricing-extension-card {
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

          .paragraph {
            display: inline-block;
            padding: 0.15rem;
          }
        }
      }
    }
  }
}
</style>
