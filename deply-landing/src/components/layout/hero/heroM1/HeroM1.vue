<script setup lang="ts"></script>

<template>
  <Hero
    color="grey"
    class="product-hero"
    size="fullheight"
    shape="/assets/shapes/hero-shape.svg"
    shape-orientation="right"
    starfall
  >
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-7">
          <div class="hero-image-container">
            <DarkImage
              class="mx-auto max-w-8"
              src="/assets/illustrations/hero/growth.svg"
              src-dark="/assets/illustrations/hero/growth-dark.svg"
              width="640"
              height="550"
              alt="Hero mockup"
            />
          </div>
        </div>
        <div class="column is-5">
          <Title tag="h1" :size="2" weight="bold">
            Managed Business Solutions for your Startup.
          </Title>
          <Subtitle tag="p" :size="5" classes="b-centered-tablet-p text-medium">
            Stop the hassle when looking for agency to build your website or
            your web application project.
          </Subtitle>
          <!--Buttons-->
          <div class="buttons is-relative z-1">
            <Button color="primary" :long="2" raised bold>Sign Up</Button>
            <Button elevated bold :long="2">Learn More</Button>
          </div>
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
      margin-top: -1rem;

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
      margin-top: -2rem;
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
