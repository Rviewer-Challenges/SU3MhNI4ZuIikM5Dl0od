<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero color="grey" class="product-hero" size="fullheight" starfall>
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="hero-caption">
            <Title tag="h1" :size="2" weight="bold">
              Sell Digital Goods, Products and Art The
              <span class="heavy-underline">
                <span>Easy-Peasy</span>
              </span>
              Way.
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              classes="b-centered-tablet-p text-medium"
            >
              Selling digital downloads, subscriptions and software licenses has
              never been easier, faster or more secure.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button color="primary" :long="2" raised bold>Free Trial</Button>
              <Button elevated bold :long="2">Demo</Button>
            </div>
          </div>
        </div>
        <div class="column is-6 is-offset-1">
          <div class="hero-image-container">
            <DarkImage
              class="mx-auto max-w-6"
              src="/assets/illustrations/hero/commerce.svg"
              src-dark="/assets/illustrations/hero/commerce-dark.svg"
              width="550"
              height="390"
              alt="Hero image"
            />
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-auto max-w-8">
        <div class="tabs is-centered pb-4">
          <HeroClients :logos="customerLogos" />
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.product-hero {
  .hero-caption {
    :deep(.title) {
      margin-bottom: 2.5rem !important;
    }
  }

  .heavy-underline {
    position: relative;

    > span {
      position: relative;
      color: var(--primary);
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 6px;
      background: var(--primary);
      z-index: 0;
    }
  }
}

.hero-image-container {
  position: relative;

  img {
    position: relative;
    z-index: 1;
  }
}

@media only screen and (max-width: 767px) {
  .product-hero {
    text-align: center;

    .hero-caption {
      text-align: center;
    }

    :deep(.title) {
      margin-top: 3rem;

      &.is-2 {
        font-size: 2rem;
      }
    }

    .buttons {
      justify-content: center;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .product-hero {
    text-align: center;

    :deep(.title) {
      margin-top: 3rem;
      font-size: 2.25rem;
      margin-left: auto;
      margin-right: auto;
      max-width: 580px;
    }

    :deep(.subtitle) {
      margin-left: auto;
      margin-right: auto;
      max-width: 580px;
    }

    .buttons {
      justify-content: center;
    }

    .hero-image-container {
      .hero-bg-circle {
        top: 3%;
      }
    }
  }
}
</style>
