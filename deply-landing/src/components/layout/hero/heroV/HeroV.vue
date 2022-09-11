<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
</script>

<template>
  <Hero
    color="grey"
    class="product-hero"
    shape="/assets/shapes/hero-shape.svg"
    shape-orientation="right"
    size="fullheight"
  >
    <template #body>
      <div class="columns is-vcentered">
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
        <div class="column is-7">
          <div class="hero-image-composition">
            <div class="image-wrap">
              <img
                class="inner-image"
                src="data:image/gif;base64,replace_with_your_image"
                alt="Hero image"
                width="687"
                height="960"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `687x960`)
                "
              />
              <!--Floating disks-->
              <div class="perspective bg-gradient-primary"></div>
              <div class="half-circle half-circle-1 text-success">
                <HalfCircle />
              </div>
              <div class="half-circle half-circle-2 text-secondary">
                <HalfCircle />
              </div>

              <div class="person-bubble person-bubble-1">
                <AvatarSimple
                  picture="data:image/gif;base64,replace_with_your_image"
                  size="medium"
                />
                <div class="bubble-content">
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div class="person-bubble person-bubble-2">
                <AvatarSimple
                  picture="data:image/gif;base64,replace_with_your_image"
                  size="medium"
                />
                <div class="bubble-content">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
:deep(.container) {
  position: static;
}

:deep(.hero-body) {
  padding-bottom: 0 !important;
}

.hero-image-composition {
  .image-wrap {
    min-height: 580px;
    margin: 0 auto;
    width: 100%;

    .inner-image {
      position: absolute;
      bottom: 0;
      right: 10%;
      display: block;
      margin: 0 auto;
      width: 100%;
      max-width: 480px;
      z-index: 2;
    }

    .perspective {
      position: absolute;
      top: 25%;
      right: 7.5%;
      width: 100%;
      max-width: 620px;
      min-height: 410px;
      //background: var(--primary);
      border-radius: 2rem;
      box-shadow: var(--primary-box-shadow);
      transform-origin: center center;
      transform: perspective(600px) rotatey(-18deg);
      z-index: 1;
    }

    .person-bubble {
      position: absolute;
      background: var(--card-bg-color);
      padding: 0.75rem 1.25rem 0.75rem 0.75rem;
      border: 1px solid var(--card-border-color);
      border-radius: 50rem;
      box-shadow: var(--light-box-shadow);
      display: flex;
      align-items: center;
      min-width: 230px;
      z-index: 4;

      &.person-bubble-1 {
        bottom: 30%;
        right: 2%;
      }

      &.person-bubble-2 {
        top: 44%;
        right: 38%;
      }

      img {
        height: 40px;
        width: 40px;
        min-width: 40px;
        border-radius: 50%;
      }

      .bubble-content {
        flex-grow: 2;
        margin-left: 0.75rem;

        span {
          display: block;
          border-radius: 5rem;
          height: 0.75rem;
          background: var(--wrap-muted-color);

          &:first-child {
            margin-bottom: 0.25rem;
            max-width: 80%;
          }

          &:nth-child(2) {
            max-width: 50%;
          }
        }
      }
    }

    .half-circle {
      position: absolute;
      z-index: 3;

      &.half-circle-1 {
        top: 32%;
        right: 49%;
        transform: rotate(20deg) scale(0.8);
      }

      &.half-circle-2 {
        top: 52%;
        right: 3%;
        transform: rotate(65deg) scale(0.8);
      }
    }
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

  .hero-image-composition {
    .image-wrap {
      min-height: 280px;

      .inner-image {
        right: 0;
        left: 0;
        max-width: 250px;
      }

      .perspective {
        min-height: 225px;
        top: initial;
        right: 5%;
        bottom: 5%;
      }

      .half-circle {
        z-index: 0;

        &.half-circle-1 {
          top: 27%;
          left: -15%;
          right: initial;
        }

        &.half-circle-2 {
          top: 12%;
          right: 5%;
        }
      }

      .person-bubble {
        transform: scale(0.6);

        &.person-bubble-1 {
          bottom: 17%;
          right: -25%;
        }

        &.person-bubble-2 {
          top: initial;
          bottom: 5%;
          right: 50%;
        }
      }
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

    .hero-image-composition {
      .image-wrap {
        .inner-image {
          right: 0;
          left: 0;
          max-width: 450px;
        }

        .perspective {
          top: 50%;
          right: 17.5%;
        }

        .person-bubble {
          &.person-bubble-2 {
            top: 75%;
            left: 2%;
            right: initial;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .hero-image-composition {
    .image-wrap {
      .inner-image {
        max-width: 440px;
        right: 4%;
      }

      .perspective {
        top: 30%;
        right: 4%;
        max-width: 520px;
        min-height: 360px;
      }

      .person-bubble {
        transform: scale(0.8);

        &.person-bubble-1 {
          right: -5%;
        }

        &.person-bubble-2 {
          top: 50%;
          right: 34%;
        }
      }
    }
  }
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

@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: landscape) {
  .hero {
    &.is-fullheight {
      max-height: 840px !important;
      min-height: 840px !important;
    }
  }
}
/* stylelint-enable */
</style>
