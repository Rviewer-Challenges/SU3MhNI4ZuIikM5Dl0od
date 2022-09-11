<script setup lang="ts">
import { heroAvatars } from '/@src/data/pages/marketing'
</script>

<template>
  <Hero
    alignment="center"
    size="fullheight"
    shape="/assets/shapes/hero-shape.svg"
    shape-orientation="right"
  >
    <template #body>
      <div class="columns is-vcentered mt-12">
        <!--Hero Content-->
        <div class="column is-relative">
          <Title tag="h1" :size="1" weight="bold">
            <span class="text-gradient">Empower your digital marketing</span>
          </Title>
          <Subtitle
            tag="p"
            :size="5"
            weight="thin"
            class="mx-auto max-w-6 b-centered-tablet-p pt-2"
          >
            The AI-powered platform to optimize and grow your ecommerce business
            on all online marketplaces.
          </Subtitle>

          <!--Hero Benefits-->
          <HeroCenteredBenefits
            :benefits="[
              'Reach customers',
              'Save hours of time',
              'Be more profitable',
            ]"
          />

          <!--Buttons-->
          <div class="buttons is-relative z-1">
            <Button color="primary" elevated bold>Free Trial</Button>
            <Button elevated bold>Learn More</Button>
          </div>

          <!--Hero Avatars-->
          <HeroAvatars :avatars="heroAvatars" />

          <!--Customer logos -->
          <HeroDualLogos
            left="/assets/brands/vonmo.svg"
            right="/assets/brands/bobcot.svg"
          />

          <!--Hero App Mockup-->
          <DarkImage
            class="centered-app is-relative mx-auto max-w-9 my-4 z-1"
            src="/assets/illustrations/apps/hero-app-screen.png"
            src-dark="/assets/illustrations/apps/hero-app-screen-dark.png"
            alt="Hero mockup"
            width="1519"
            height="949"
          />

          <!--Hero Circle Shape-->
          <img
            class="app-circle-1 rotating"
            src="/assets/shapes/hero-shape-2.svg"
            alt="Circle shape"
            width="150"
            height="150"
          />
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
:deep(.hero) {
  overflow: hidden !important;
}

.app-circle-1 {
  position: absolute;
  bottom: 270px;
  left: -60px;
  height: 440px;
  width: 440px;
  z-index: 0;
}

.app-circle-2 {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 180px;
  width: 180px;
  z-index: 0;
}

.centered-app {
  display: block;
  border-radius: 2rem;
  border: 1px solid var(--border);
  box-shadow: var(--light-box-shadow);
}

.is-dark {
  .centered-app {
    border: none;
  }
}

@media only screen and (max-width: 767px) {
  .app-circle-1 {
    display: none;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .app-circle-1 {
    bottom: 125px;
    left: -140px;
  }
}
</style>
