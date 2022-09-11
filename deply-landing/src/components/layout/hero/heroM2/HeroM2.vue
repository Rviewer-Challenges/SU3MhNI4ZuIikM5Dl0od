<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero color="grey" class="product-hero" size="fullheight">
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <Title tag="h1" :size="2" weight="bold">
            Find a job in a world leading company.
          </Title>
          <Subtitle tag="p" :size="5" classes="b-centered-tablet-p text-medium">
            More than 7,879 IT job offers are currently available.
          </Subtitle>
          <!--Search-->
          <QuickJobSearch />
        </div>
        <div class="column is-6 is-offset-1">
          <div class="hero-image-container">
            <DarkImage
              class="mx-auto max-w-4"
              src="data:image/gif;base64,replace_with_your_image"
              alt="Hero image"
              height="800"
              width="800"
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
