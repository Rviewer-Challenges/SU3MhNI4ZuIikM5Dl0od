<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero color="grey" class="product-hero" size="fullheight">
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <Title tag="h1" :size="2" weight="bold">
            A Modular Banking Platform REST API for your projects.
          </Title>
          <Subtitle tag="p" :size="5" classes="b-centered-tablet-p text-medium">
            Algorithmically optimize bids, build campaigns, and automate your
            keyword workflows.
          </Subtitle>
          <!--Buttons-->
          <div class="buttons is-relative z-1">
            <Button color="primary" :long="2" raised bold>Free Trial</Button>
            <Button elevated bold :long="2">Demo</Button>
          </div>
        </div>
        <div class="column is-7">
          <div class="hero-image-container">
            <DarkImage
              class="mx-auto max-w-8"
              src="/assets/illustrations/hero/laptop-woman.svg"
              src-dark="/assets/illustrations/hero/laptop-woman-dark.svg"
              alt="Hero mockup"
              width="650"
              height="450"
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
