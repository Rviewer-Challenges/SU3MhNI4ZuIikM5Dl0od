<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero class="car-hero" alignment="center" size="fullheight" color="grey">
    <template #body>
      <div class="columns is-vcentered">
        <!--Hero Content-->
        <div class="column is-relative">
          <div class="mx-auto max-w-6 mb-4">
            <Title tag="h1" :size="1" weight="bold">
              <span>
                The Modern Community Rideshare For
                <span class="text-primary">Drivers</span>
              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="thin"
              class="mx-auto max-w-6 b-centered-tablet-p pt-2"
            >
              Bring together your destinations , trips, and road trips.
              Integrate a thriving community and forget about the hassle.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button color="primary" :long="2" raised bold>Free Trial</Button>
              <Button elevated bold :long="2">Learn More</Button>
            </div>
          </div>

          <!--Hero Car-->
          <div class="hero-car">
            <img
              class="main-car"
              src="/assets/illustrations/car/car-profile-full.png"
              alt="Car hero image"
              width="1049"
              height="389"
            />
            <DarkImage
              class="main-car-overlay"
              src="/assets/illustrations/car/car-profile-cut.png"
              src-dark="assets/illustrations/car/car-profile-cut-dark.png"
              alt="Car hero image"
              width="1049"
              height="389"
            />
            <img
              class="wheel-left"
              src="/assets/illustrations/car/car-profile-wheel-left.png"
              alt="Car hero image"
              width="280"
              height="280"
            />
            <img
              class="wheel-right"
              src="/assets/illustrations/car/car-profile-wheel-right.png"
              alt="Car hero image"
              width="280"
              height="280"
            />
            <div class="road">
              <div class="road-inner"></div>
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
.car-hero {
  overflow: hidden !important;
}

:deep(.hero-body) {
  padding-bottom: 2rem !important;
}

:deep(.title) {
  &.is-1 {
    margin-top: 3rem;
    font-size: 2.5rem;
  }
}

.hero-car {
  position: relative;
  width: 640px;
  margin: 1rem auto 0;

  .main-car {
    width: 100%;
    opacity: 0;
  }

  .main-car-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }

  .wheel-left,
  .wheel-right {
    position: absolute;
    height: 105px;
    width: 105px;
    z-index: 2;
    animation: rotation 1.5s infinite linear reverse;
  }

  .wheel-left {
    bottom: 22px;
    left: 79px;
  }

  .wheel-right {
    bottom: 22px;
    right: 55px;
  }

  .road {
    position: absolute;
    bottom: 1rem;
    left: -10%;
    margin: 0 auto;
    width: 100vw;

    .road-inner {
      position: relative;
      width: 100%;
      height: 0.75rem;
      transform: rotateX(45deg) translate(-20vw) skew(-60deg);
      background: repeating-linear-gradient(
        to right,
        var(--light-text),
        var(--light-text) 8vw,
        transparent 8vw,
        transparent 20vw
      );
      opacity: 0.3;
      animation: stripemove 0.5s linear infinite;
    }
  }
}

@keyframes stripemove {
  to {
    transform: rotateX(45deg) translate(0) skew(-60deg);
  }
}

@media only screen and (max-width: 767px) {
  :deep(.title) {
    &.is-1 {
      margin-top: 3rem;
    }
  }

  .hero-car {
    width: 320px;
    margin-top: 2rem;

    .road {
      left: 0;
      bottom: 0.5rem;

      .road-inner {
        height: 0.35rem;
      }
    }

    .wheel-left,
    .wheel-right {
      height: 57px;
      width: 57px;
    }

    .wheel-left {
      bottom: 10px;
      left: 36px;
    }

    .wheel-right {
      bottom: 10px;
      right: 24px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .hero-car {
    .road {
      left: 0;
    }
  }
}
</style>
