<script setup lang="ts">
export interface PricingSoloCenteredProps {
  features: string[]
  price: number
  link: string
  linkLabel: string
}

const props = defineProps<PricingSoloCenteredProps>()
</script>

<template>
  <div class="pricing-solo">
    <div class="pricing-solo-content">
      <div class="pricing-solo-card">
        <div class="left">
          <div class="inner-features">
            <div
              v-for="(feature, index) in props.features.slice(0, 10)"
              :key="index"
              class="feature-item"
            >
              <i-cil-check-circle class="rem-125 text-secondary mr-2" />
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
              <p class="paragraph rem-95">por usuario, por mes</p>
            </div>
            <div class="action">
              <Button :href="props.link" color="primary" bold raised>
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
  max-width: 780px;
  margin: 0 auto 3rem;

  .pricing-solo-content {
    .pricing-solo-card {
      display: flex;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 1rem;
      overflow: hidden;
      transition: box-shadow 0.3s;

      .left {
        display: flex;
        align-items: center;
        width: 50%;
        padding: 3.5rem 2.75rem;
        background: var(--wrap-muted-color-heavy);

        .inner-features {
          display: flex;
          align-items: center;
          flex-wrap: wrap;

          .feature-item {
            display: flex;
            align-items: center;
            font-family: var(--font);
            font-size: 0.95rem;
            color: var(--title-color);
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
        width: 50%;
        padding: 3.5rem 2.75rem;
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
            font-weight: 500;
            font-size: 5.75rem;
            color: var(--title-color);
            line-height: 1;

            span::before {
              position: relative;
              top: -50px;
              content: '€';
              font-weight: 500;
              font-size: 1.5rem;
            }
          }
        }

        .action {
          margin-top: 2rem;

          :deep(.button) {
            min-width: 220px;
          }
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
