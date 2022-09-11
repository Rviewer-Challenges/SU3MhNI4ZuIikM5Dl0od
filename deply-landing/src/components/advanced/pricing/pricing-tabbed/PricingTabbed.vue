<script setup lang="ts">
import { ref } from 'vue'

export interface PricingPlanTab {
  icon: string
  name: string
}

export interface PricingPlanHighlight {
  title: string
  subtitle: string
  image: string
  darkImage?: string
}

export interface PricingPersonalPlan {
  icon: string
  name: string
  price: number
  priceBilling: string
  planText: string
  buttonLabel: string
  features: string[]
}

export interface PricingPremiumPlan {
  icon: string
  name: string
  price: number
  priceBilling: string
  planText: string
  buttonLabel: string
  features: string[]
  highlight: PricingPlanHighlight
}

export interface PricingTabbedProps {
  plans: PricingPlanTab[]
  personalPlans: PricingPersonalPlan[]
  premiumPlans: PricingPremiumPlan[]
}

const props = withDefaults(defineProps<PricingTabbedProps>(), {
  plans: () => [],
  personalPlans: () => [],
  premiumPlans: () => [],
})

const activeTab = ref(0)
</script>

<template>
  <div class="pricing-wrapper">
    <div class="pricing-tabs">
      <a
        v-for="(plan, index) in props.plans"
        :key="index"
        class="tab-item"
        :class="activeTab === index && 'is-active'"
        @click.prevent="activeTab = index"
        @keydown.space.prevent="() => (activeTab = index)"
      >
        <img :src="plan.icon" alt="Pricing icon" />
        <span>{{ plan.name }}</span>
      </a>
      <div class="naver">
        <div class="naver-inner">
          <div class="naver-naver"></div>
        </div>
      </div>
    </div>

    <div class="pricing-container" :class="activeTab === 0 && 'is-active'">
      <div class="container-inner">
        <div class="solo-plans">
          <!--Plan-->
          <div
            v-for="(plan, p) in props.personalPlans"
            :key="p"
            class="solo-plan"
          >
            <div class="header">
              <img :src="plan.icon" alt="Pricing icon" />
              <span>{{ plan.name }}</span>
            </div>
            <div class="price">
              <div class="amount">{{ plan.price }}</div>
              <p>/{{ plan.priceBilling }}</p>
            </div>
            <div class="plan-tagline">
              <p>
                {{ plan.planText }}
              </p>
            </div>
            <div class="button-wrap">
              <Button to="/" color="primary" fullwidth bold raised>
                {{ plan.buttonLabel }}
              </Button>
            </div>
            <div class="benefits content">
              <ul>
                <li v-for="(feature, f) in plan.features" :key="f">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-for="(plan, s) in props.premiumPlans"
      :key="s"
      class="pricing-container"
      :class="activeTab === s + 1 && 'is-active'"
    >
      <div class="container-inner no-padding">
        <div class="plan-focus">
          <div class="left-side">
            <div class="header">
              <img :src="plan.icon" alt="Pricing icon" />
              <span>{{ plan.name }}</span>
            </div>
            <div class="plan-tagline">
              <p>
                {{ plan.planText }}
              </p>
            </div>
            <div class="price">
              <Control icon="feather:users">
                <VInput placeholder="Your team size..." rounded />
              </Control>
              <div class="amount">{{ plan.price }}</div>
            </div>
            <div class="price-info">
              <p>
                {{ plan.priceBilling }}
              </p>
            </div>
            <div class="button-wrap">
              <Button to="/" color="primary" fullwidth bold raised>
                {{ plan.buttonLabel }}
              </Button>
            </div>
            <div class="benefits content">
              <ul>
                <li v-for="(feature, f) in plan.features" :key="f">
                  {{ feature }}
                </li>
              </ul>
            </div>
          </div>
          <div class="right-side">
            <div class="feature-highlight">
              <!--Carousel item-->
              <div class="highlight-item">
                <div class="header">
                  <div class="header-inner">
                    <div class="title-wrap">
                      <h3>{{ plan.highlight.title }}</h3>
                    </div>
                  </div>
                  <div class="subheader">
                    <p>
                      {{ plan.highlight.subtitle }}
                    </p>
                  </div>
                </div>
                <DarkImage
                  class="highlight-image"
                  :src="plan.highlight.image"
                  :src-dark="plan.highlight.darkImage"
                  alt="Feature highlight"
                  image-width="668"
                  image-height="454"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pricing-wrapper {
  margin-bottom: 3rem;

  .pricing-tabs {
    position: relative;
    display: flex;
    background: var(--wrap-muted-color);
    border-radius: 100px;
    margin-bottom: 40px;

    .tab-item {
      position: relative;
      width: 25%;
      height: 40px;
      margin: 16px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      border-right: 1px solid var(--wrap-border-color);
      z-index: 1;

      &.is-active,
      + .is-active {
        border-color: transparent;

        span {
          color: var(--title-color);
        }

        img {
          filter: grayscale(0);
          opacity: 1;
        }
      }

      &.is-active {
        &:first-child {
          ~ .naver {
            margin-left: 0;
          }
        }

        &:nth-child(2) {
          ~ .naver {
            margin-left: 25%;
          }
        }

        &:nth-child(3) {
          ~ .naver {
            margin-left: 50%;
          }
        }

        &:nth-child(4) {
          ~ .naver {
            margin-left: 75%;
          }
        }
      }

      &:nth-child(4) {
        border: none !important;
      }

      img {
        display: block;
        height: 28px;
        width: 28px;
        margin-right: 4px;
        filter: grayscale(1);
        opacity: 0.5;
        transition: all 0.3s;
      }

      span {
        display: block;
        font-weight: 500;
        color: var(--medium-text);
        transition: color 0.3s;
      }
    }

    .naver {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 25%;
      border-radius: 100px;
      background: var(--card-bg-color);
      box-shadow: var(--spread-shadow);
      margin: 0;
      transition: all 0.4s ease-in-out;

      .naver-inner {
        position: relative;
        height: 100%;
        width: 100%;

        .naver-naver {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          height: 4px;
          width: 30px;
          border-radius: 50px;
          background: var(--primary);
        }
      }
    }
  }

  .pricing-container {
    display: none;
    animation: fadeIn 0.5s;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.85rem;
    animation-name: fadeInLeft;
    animation-duration: 0.5s;
    box-shadow: var(--spread-shadow);

    &.is-active {
      display: block;
    }

    .container-inner {
      padding: 40px 0;

      &.no-padding {
        padding: 0;
      }

      .solo-plans {
        display: flex;

        .solo-plan {
          min-height: 200px;
          width: 33.3%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          padding: 0 40px;

          &:nth-child(2) {
            border-left: 1px solid var(--card-border-color);
            border-right: 1px solid var(--card-border-color);
          }

          .header {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;

            img {
              display: block;
              height: 40px;
              width: 40px;
              margin-right: 6px;
            }

            span {
              display: block;
              font-size: 1.4rem;
              font-family: var(--font-alt);
              color: var(--title-color);
              transition: color 0.3s;
            }
          }

          .price {
            width: 100%;
            text-align: center;
            padding: 1rem 0;

            .amount {
              position: relative;
              left: -8px;
              font-family: var(--font);
              font-size: 3rem;
              font-weight: bold;
              color: var(--title-color);

              &::before {
                content: '$';
                position: relative;
                top: -20px;
                font-size: 1.2rem;
                font-weight: 600;
              }
            }

            p {
              font-family: var(--font);
              text-transform: lowercase;
              color: var(--medium-text);
            }
          }

          .plan-tagline {
            text-align: center;
            padding: 1rem 0;

            p {
              font-family: var(--font);
              color: var(--medium-text);
            }
          }

          .button-wrap {
            width: 100%;
            padding: 1.5rem 0;
          }

          .benefits {
            li {
              padding: 0.5rem 0;
              color: var(--light-text);

              span {
                color: var(--title-color);
                font-weight: 500;
              }
            }
          }
        }
      }

      .plan-focus {
        display: flex;

        .left-side {
          width: 35%;
          padding: 40px;
          border-right: 1px solid var(--card-border-color);

          .header {
            display: flex;
            align-items: center;
            width: 100%;

            img {
              display: block;
              height: 40px;
              width: 40px;
              margin-right: 0.5rem;
            }

            span {
              display: block;
              font-size: 1.4rem;
              font-family: var(--font-alt);
              color: var(--title-color);
              transition: color 0.3s;
            }
          }

          .plan-tagline {
            padding: 1rem 0;

            p {
              font-family: var(--font);
              color: var(--medium-text);
            }
          }

          .price {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 0;

            :deep(.control) {
              flex-grow: 2;
              margin-right: 1rem;
            }

            :deep(.input) {
              height: 40px;
              background: var(--wrap-muted-color);
              border-color: var(--wrap-muted-color);

              &:focus {
                background: var(--input-base-bg-color);
                border-color: var(--input-base-border-color-hover);
                box-shadow: var(--light-box-shadow);
              }
            }

            .amount {
              font-family: var(--font);
              font-size: 3rem;
              font-weight: bold;
              color: var(--title-color);

              &::before {
                content: '$';
                position: relative;
                top: -20px;
                font-size: 1.2rem;
                font-weight: 600;
              }
            }
          }

          .price-info {
            padding: 8px 0 16px;

            p {
              color: var(--light-text);
            }
          }

          .button-wrap {
            width: 100%;
            padding: 1.5rem 0;
          }

          .benefits {
            padding-bottom: 1.5rem;

            li {
              padding: 0.5rem 0;
              color: var(--light-text);

              span {
                color: var(--title-color);
                font-weight: 500;
              }
            }
          }
        }

        .right-side {
          width: 65%;

          .feature-highlight {
            position: relative;

            .highlight-item {
              padding: 40px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              .header {
                .header-inner {
                  .title-wrap {
                    h3 {
                      font-family: var(--font-alt);
                      font-size: 1.4rem;
                      font-weight: 600;
                      color: var(--title-color);
                    }
                  }
                }

                .subheader {
                  p {
                    font-family: var(--font);
                    font-size: 1rem;
                    color: var(--medium-text);
                  }
                }
              }

              .highlight-image {
                display: block;
                margin-top: 30px;
              }
            }
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .pricing-wrapper {
    .pricing-tabs {
      .tab-item {
        span {
          display: none;
        }
      }
    }

    .pricing-container {
      .container-inner {
        .solo-plans {
          flex-direction: column;

          .solo-plan {
            width: 100%;

            &:nth-child(2),
            &:nth-child(3) {
              margin-top: 40px;
              padding-top: 40px;
              border-top: 1px solid var(--card-border-color);
            }
          }
        }

        .plan-focus {
          flex-direction: column;

          .left-side {
            width: 100%;

            .price {
              .control {
                max-width: 150px;
              }
            }
          }

          .right-side {
            width: 100%;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .pricing-container {
    .container-inner {
      .plan-focus {
        .left-side {
          width: 45% !important;
        }

        .right-side {
          width: 55% !important;
        }
      }
    }
  }
}
</style>
