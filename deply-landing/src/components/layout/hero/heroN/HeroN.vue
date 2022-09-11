<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero alignment="center" size="fullheight" color="grey">
    <template #body>
      <div class="columns is-vcentered mt-12">
        <!--Hero Content-->
        <div class="column is-relative">
          <div class="mx-auto max-w-6 mb-4">
            <Title tag="h1" :size="1" weight="bold">
              <span>
                The Modern Community Platform For
                <span class="text-primary">Creators</span>
              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="thin"
              class="mx-auto max-w-6 b-centered-tablet-p pt-2"
            >
              Bring together your discussions , memberships, and content.
              Integrate a thriving community all under your own brand.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button color="primary" :long="2" raised bold>Free Trial</Button>
              <Button elevated bold :long="2">Learn More</Button>
            </div>
          </div>

          <!--Hero App Mockup-->
          <div class="centered-app-wrapper mx-auto max-w-8 mt-6">
            <DarkImage
              class="centered-app is-relative mx-auto max-w-8"
              src="/assets/illustrations/apps/creator-app.png"
              src-dark="/assets/illustrations/apps/creator-app-dark.png"
              width="1200"
              height="724"
              alt="Hero mockup"
            />
            <div class="centered-app-overlay"></div>
            <button class="centered-app-button">
              <i class="iconify" data-icon="feather:play"></i>
            </button>
            <!--Centered app faces-->
            <div class="centered-app-face face-1">
              <img
                src="data:image/gif;base64,replace_with_your_image"
                alt="Person image"
                width="300"
                height="400"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '300x400')
                "
              />
            </div>
            <div class="centered-app-face face-2">
              <img
                src="data:image/gif;base64,replace_with_your_image"
                alt="Person image"
                width="300"
                height="400"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '300x400')
                "
              />
            </div>
            <div class="centered-app-face face-3">
              <img
                src="data:image/gif;base64,replace_with_your_image"
                alt="Person image"
                width="300"
                height="400"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '300x400')
                "
              />
            </div>
            <div class="centered-app-face face-4">
              <img
                src="data:image/gif;base64,replace_with_your_image"
                alt="Person image"
                width="300"
                height="400"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '300x400')
                "
              />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-auto max-w-8">
        <p class="paragraph rem-100 text-light has-text-centered">
          Helping creators work faster at
        </p>
        <div class="tabs is-centered pb-6">
          <HeroClients :logos="customerLogos" />
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

:deep(.title) {
  &.is-1 {
    font-size: 2.5rem;
  }
}

.centered-app-wrapper {
  position: relative;

  .centered-app {
    position: relative;
    display: block;
    border-radius: 1rem;
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
    border-radius: 1rem;
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

  .centered-app-face {
    position: absolute;
    z-index: 0;

    img {
      display: block;
      max-width: 100%;
      border-radius: 1.25rem;
      object-fit: cover;
    }

    &.face-1 {
      right: -240px;
      top: -80px;
      width: 180px;
    }

    &.face-2 {
      left: -100px;
      top: -120px;
      width: 140px;
    }

    &.face-3 {
      right: -140px;
      bottom: 120px;
      width: 100px;
    }

    &.face-4 {
      left: -180px;
      bottom: 40px;
      width: 120px;
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

    .centered-app-face {
      &.face-1 {
        right: -58px;
        top: 130px;
        width: 85px;
      }

      &.face-2 {
        left: -55px;
        top: -45px;
        width: 80px;
      }

      &.face-3,
      &.face-4,
      &.face-5 {
        display: none;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .centered-app-wrapper {
    .centered-app-face {
      &.face-1 {
        right: -8px;
        top: 325px;
        z-index: 3;
        width: 118px;
      }

      &.face-2 {
        left: -40px;
        top: -100px;
        width: 118px;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .centered-app-wrapper {
    .centered-app-face {
      &.face-1 {
        right: -60px;
        top: 90px;
        width: 118px;
      }

      &.face-2 {
        left: -80px;
        top: -100px;
        width: 118px;
      }

      &.face-3 {
        bottom: 40px;
      }

      &.face-4 {
        left: -75px;
        width: 100px;
      }
    }
  }
}
</style>
