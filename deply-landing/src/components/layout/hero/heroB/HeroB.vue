<script setup lang="ts">
import { heroAvatars } from '/@src/data/pages/marketing/'
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
        <div class="column is-relative has-text-centered">
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
            on every single store provider.
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
            <Button color="primary" raised bold>Free Trial</Button>
            <Button bold>Learn More</Button>
          </div>

          <!--Hero Avatars-->
          <HeroAvatars :avatars="heroAvatars" />

          <!--Hero Illustration-->
          <DarkImage
            class="centered-illustration is-relative mx-auto max-w-6 my-4 z-1"
            src="/assets/illustrations/hero/working-laptop.svg"
            src-dark="/assets/illustrations/hero/working-laptop-dark.svg"
            width="254"
            height="150"
            alt="illustration"
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

/* stylelint-disable */
//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      max-height: 1024px !important;
      min-height: 1024px !important;
    }
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      max-height: 1024px !important;
      min-height: 1024px !important;
    }
  }
}
/* stylelint-enable */
</style>
