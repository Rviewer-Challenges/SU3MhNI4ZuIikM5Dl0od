<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
</script>

<template>
  <Hero color="grey" class="cylinders-hero" type="side" size="fullheight">
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="hero-caption">
            <Title tag="h1" :size="2" weight="bold">
              Find a Mentor to Boost Your Business Growth.
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              classes="b-centered-tablet-p text-medium"
            >
              Have 1-on-1 conversations about growth, marketing, and everything
              in between with the world's top 3% of startup and marketing
              mentors.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button color="primary" :long="2" raised bold>Free Trial</Button>
              <Button elevated bold :long="2">Learn More</Button>
            </div>
          </div>
        </div>
        <div class="column is-6 is-offset-1">
          <!-- Hero composition -->
          <div class="hero-image-composition">
            <div class="polka-wrap polka-1">
              <PolkaDots />
            </div>
            <div class="image-wrap">
              <img
                class="thin-image-first"
                src="data:image/gif;base64,replace_with_your_image"
                alt="hero cylinder"
                width="231"
                height="533"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `231x533`)
                "
              />
              <img
                class="thin-image-second"
                src="data:image/gif;base64,replace_with_your_image"
                alt="hero cylinder"
                width="231"
                height="533"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `231x533`)
                "
              />
              <img
                class="thin-image-third"
                src="data:image/gif;base64,replace_with_your_image"
                alt="hero cylinder"
                width="231"
                height="533"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `231x533`)
                "
              />
            </div>
            <div class="polka-wrap polka-2">
              <PolkaDots />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.cylinders-hero {
  .hero-image-composition {
    position: relative;

    .polka-wrap {
      position: absolute;
      z-index: 3;

      &.polka-1 {
        top: 25px;
        left: -25px;
      }

      &.polka-2 {
        bottom: 25px;
        right: -25px;
      }
    }

    .image-wrap {
      position: relative;
      display: flex;
      align-items: center;
      z-index: 2;

      .thin-image-first,
      .thin-image-second,
      .thin-image-third {
        display: block;
        margin: 0 0.5rem;
        width: calc(33.3% - 1rem);
        border-radius: 50rem;
        object-fit: cover;
      }

      .thin-image-first,
      .thin-image-third {
        min-height: 420px;
      }

      .thin-image-second {
        min-height: 560px;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .cylinders-hero {
    .hero-caption {
      padding-top: 3rem;
      text-align: center;
    }

    .buttons {
      justify-content: center;
    }

    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .hero-image-composition {
      .image-wrap {
        .thin-image-first,
        .thin-image-third {
          min-height: 360px;
        }

        .thin-image-second {
          min-height: 460px;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .cylinders-hero {
    .hero-caption {
      text-align: center;
      max-width: 560px;
      margin: 0 auto;
    }

    .buttons {
      justify-content: center;
    }

    .hero-image-composition {
      .image-wrap {
        .thin-image-first,
        .thin-image-third {
          min-height: 360px;
          max-height: 440px;
        }
      }
    }
  }
}
</style>
