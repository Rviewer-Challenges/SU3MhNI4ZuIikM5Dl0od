<script setup lang="ts"></script>

<template>
  <Hero class="mobile-hero" alignment="center" size="fullheight" mask="wave">
    <template #body>
      <div class="columns is-vcentered mt-12">
        <!--Hero Content-->
        <div class="column is-relative">
          <div class="mx-auto max-w-6 mb-4">
            <Title tag="h1" :size="1" weight="bold">
              <span>
                The Mobile Application Platform For
                <span class="text-primary">Runners</span>
              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="thin"
              class="mx-auto max-w-6 b-centered-tablet-p pt-2"
            >
              Work hard. Bring together your discussions , memberships, and
              content. Integrate a thriving community all under your own
              motivation.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button color="primary" :long="2" raised bold>Download</Button>
              <Button elevated bold :long="2">Learn More</Button>
            </div>
          </div>

          <!--Hero App-->
          <div class="hero-app">
            <DarkImage
              src="/assets/illustrations/apps/mobile-app-group.png"
              src-dark="/assets/illustrations/apps/mobile-app-group-dark.png"
              alt="Hero app"
              width="1200"
              height="814"
            />
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.hero-app {
  img {
    display: block;
    max-width: 640px;
    margin: 0 auto;
  }
}

:deep(.hero) {
  overflow: hidden !important;
}

:deep(.hero-body) {
  padding-bottom: 0 !important;
}

:deep(.title) {
  &.is-1 {
    font-size: 2.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .mobile-hero {
    &.is-fullheight {
      min-height: auto !important;
      height: auto;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .mobile-hero {
    &.is-fullheight {
      min-height: auto !important;
      height: auto;
    }
  }
}
</style>
