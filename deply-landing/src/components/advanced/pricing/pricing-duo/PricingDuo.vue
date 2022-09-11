<script setup lang="ts">
import { ref, computed } from 'vue'

export interface PricingPrice {
  monthly: number
  yearly: number
}

export interface PricingPlan {
  icon: string
  name: string
  price: PricingPrice
  features: string[]
  featured: boolean
}

export interface PricingDuoProps {
  title: string
  subtitle: string
  plans: PricingPlan[]
  pulled?: boolean
  rounded?: boolean
  polkaDots?: boolean
}

const props = withDefaults(defineProps<PricingDuoProps>(), {
  plans: () => [],
  pulled: false,
  rounded: false,
  polkaDots: false,
})

const blockClasses = computed(() => [props.pulled && 'is-pulled'])

const cardClasses = computed(() => [props.rounded && 'is-rounded'])

const toggle = ref(false)
</script>

<template>
  <div class="py-6" :class="blockClasses">
    <div class="pricing-duo">
      <div class="columns is-vcentered">
        <div class="column is-5 is-centered-mobile">
          <Title tag="h2" :size="3" weight="semi" leading>
            {{ props.title }}
          </Title>
          <p class="paragraph mb-4 max-w-4">
            {{ props.subtitle }}
          </p>
          <!-- Pricing switcher -->
          <div class="button-wrap">
            <div class="combo-button">
              <Button :class="!toggle && 'is-active'" @click="toggle = !toggle">
                Mensual
              </Button>
              <Button :class="toggle && 'is-active'" @click="toggle = !toggle">
                Anual
              </Button>
            </div>
          </div>
        </div>
        <!-- Pricing card -->
        <div
          v-for="(plan, index) in props.plans.slice(0, 2)"
          :key="index"
          class="column"
        >
          <div v-if="props.polkaDots && index === 0" class="polka-wrap polka-1">
            <PolkaDots />
          </div>
          <div class="pricing-card" :class="cardClasses">
            <div class="pricing-icon">
              <i class="iconify" :data-icon="plan.icon"></i>
            </div>
            <div class="plan-name">{{ plan.name }}</div>
            <ul class="features-list">
              <li v-for="(feature, f) in plan.features" :key="f">
                {{ feature }}
              </li>
            </ul>
            <div v-if="!toggle">
              <div class="plan-price">
                <div v-if="plan.name === 'Pro'" class="plan-badge">
                  <Title tag="h3" :size="4" weight="bold" narrow>
                  -
                </Title>
                </div>
                <div v-else class="plan-badge">
                  <Title tag="h3" :size="4" weight="bold" narrow>
                  {{ plan.price.monthly.toFixed(2) }} €
                </Title>
                </div>
              </div>
              <div class="price-per">por mes</div>
            </div>
            <div v-else>
              <div class="plan-price">
                <div v-if="plan.name === 'Pro'" class="plan-badge">
                  <Title tag="h3" :size="4" weight="bold" narrow>
                  -
                </Title>
                </div>
                <div v-else class="plan-badge">
                  <Title tag="h3" :size="4" weight="bold" narrow>
                  {{ plan.price.yearly.toFixed(2) }} €
                </Title>
                </div>
              </div>
              <div class="price-per">por año</div>
            </div>
            <div v-if="plan.name === 'Free'" class="plan-badge">
              <div class="plan-action">
              <Button color="primary" :long="3" raised href="https://app.deply.dev/">Pruébalo</Button>
            </div>
            </div>
            <div v-if="plan.name === 'Pro'" class="plan-badge">
              <div class="plan-action">
              <Button disabled color="primary" :long="3" raised>Próximamente</Button>
            </div>
            </div>
          </div>
          <div v-if="props.polkaDots && index === 1" class="polka-wrap polka-2">
            <PolkaDots />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pricing-duo {
  .column {
    position: relative;
  }
}

.pricing-card {
  position: relative;
  border-radius: 0.5rem;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  padding: 2.5rem;
  text-align: center;
  z-index: 1;

  .pricing-icon {
    position: relative;
    height: 80px;
    width: 80px;
    border-radius: 50%;
    background: var(--wrap-muted-color);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    z-index: 2;

    .iconify {
      font-size: 2rem;
      color: var(--primary);
    }
  }

  .plan-name {
    font-family: var(--font-alt);
    font-size: 1.1rem;
    color: var(--title-color);
    padding: 20px 0;
    border-bottom: 1px solid var(--card-border-color);
  }

  .features-list {
    padding: 1rem 0;

    li {
      padding: 0.25rem 0;
      color: var(--light-text);
    }
  }

  .price-per {
    font-size: 0.9rem;
    color: var(--light-text);
  }

  .plan-action {
    margin-top: 20px;
  }

  &.is-rounded {
    border-radius: 1.25rem;
  }
}

.polka-wrap {
  position: absolute;
  z-index: 0;

  &.polka-1 {
    top: -20px;
    left: -40px;
  }

  &.polka-2 {
    bottom: -20px;
    right: -40px;
  }
}

.is-pulled {
  margin-top: -3rem;
}

.combo-button {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  :deep(.button) {
    display: block;
    line-height: 1;
    width: 140px;
    min-height: 44px;
    pointer-events: all;

    &.is-active {
      pointer-events: none;
    }

    &:first-child {
      border-radius: 0.75rem 0 0 0.75rem;
    }

    &:last-child {
      border-radius: 0 0.75rem 0.75rem 0;
      border-left: none;
    }

    &.is-active {
      background: var(--primary);
      border-color: var(--primary);
      color: var(--white-smoke);
    }
  }
}

@media only screen and (max-width: 767px) {
  .pricing-duo {
    text-align: center;

    .button-wrap {
      display: flex;
      justify-content: center;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .pricing-duo {
    text-align: center;

    .paragraph {
      margin-left: auto;
      margin-right: auto;
    }

    .button-wrap {
      display: flex;
      justify-content: center;
    }

    .pricing-card {
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
