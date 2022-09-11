<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero
    v-background="{
      src: 'data:image/gif;base64,replace_with_your_image',
      placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
    }"
    overlay
    class="bg-hero"
    alignment="center"
    size="fullheight"
  >
    <template #body>
      <div class="columns is-vcentered mt-12">
        <!--Hero Content-->
        <div class="column is-relative">
          <div class="mx-auto max-w-6 mb-4">
            <Title tag="h1" :size="1" weight="bold" inverted narrow>
              <span>
                The State of
                <span class="text-primary">Javascript</span>
                Summit 2022
              </span>
            </Title>
            <Countdown date="Sep 28, 2022" inverted />
          </div>

          <!--Buttons-->
          <div class="buttons is-relative z-1">
            <Button color="primary" :long="2" raised bold>Get Tickets</Button>
            <Button elevated bold :long="2">Schedule</Button>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-auto max-w-8">
        <p class="paragraph rem-100 is-inverted-light has-text-centered">
          We are supported by
        </p>
        <div class="tabs is-centered pb-6">
          <HeroClients :logos="customerLogos" inverted />
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
:deep(.hero) {
  overflow: hidden !important;
}

:deep(.hero-body) {
  padding-bottom: 2rem !important;
}

.bg-hero {
  position: relative;
  background-size: cover !important;
  background-repeat: no-repeat;
}

.centered-app-wrapper {
  position: relative;

  .centered-app {
    position: relative;
    display: block;
    border-radius: 2rem;
    border: 1px solid var(--border);
    box-shadow: var(--light-box-shadow);
    z-index: 1;
  }

  .centered-app-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    background: var(--card-bg-color);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 2;
  }

  .centered-app-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    z-index: 3;
    cursor: pointer;
    border: none;
    background: var(--primary);
    box-shadow: var(--primary-box-shadow);
    transition: transform 0.3s;

    .iconify {
      position: relative;
      right: -0.15rem;
      vertical-align: middle;
      color: var(--white);

      :deep(path) {
        fill: var(--white);
      }
    }
  }

  &:hover {
    .centered-app-overlay {
      opacity: 0.7;
    }

    .centered-app-button {
      transform: translate(-50%, -50%) scale(1);
    }
  }
}

.is-dark {
  .centered-app-wrapper {
    .centered-app {
      border: none;
    }
  }
}

@media only screen and (max-width: 767px) {
  .centered-app-wrapper {
    .centered-app {
      border-radius: 0.75rem;
    }
  }
}
</style>
