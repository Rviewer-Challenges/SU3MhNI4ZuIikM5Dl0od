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
            Find a job in a world leading company.
          </Title>
          <Subtitle tag="p" :size="5" classes="b-centered-tablet-p text-medium">
            More than 7,879 IT job offers are currently available.
          </Subtitle>
          <!--Search-->
          <QuickJobSearch />
        </div>
        <div class="column is-7">
          <div class="hero-image-composition">
            <div class="image-wrap">
              <img
                class="inner-image"
                src="data:image/gif;base64,replace_with_your_image"
                alt="Hero image"
                width="800"
                height="1200"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `800x1200`)
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

              <div class="job-bubble job-bubble-1">
                <AvatarSimple
                  picture="/assets/apps/gitlab-light.svg"
                  size="medium"
                />
                <div class="bubble-content">
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div class="job-bubble job-bubble-2">
                <AvatarSimple
                  picture="/assets/apps/airbnb-light.svg"
                  size="medium"
                />
                <div class="bubble-content">
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div class="job-bubble job-bubble-3">
                <AvatarSimple
                  picture="/assets/apps/atlassian-light.svg"
                  size="medium"
                />
                <div class="bubble-content">
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div class="job-bubble job-bubble-4">
                <AvatarSimple
                  picture="/assets/apps/google-light.svg"
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
      top: 20%;
      right: 10%;
      width: 100%;
      max-width: 510px;
      min-height: 510px;
      border-radius: 50%;
      box-shadow: var(--primary-box-shadow);
      transform-origin: center center;
      z-index: 1;
    }

    .job-bubble {
      position: absolute;
      background: var(--card-bg-color);
      padding: 0.5rem 1rem 0.5rem 0.5rem;
      border: 1px solid var(--card-border-color);
      border-radius: 1rem;
      box-shadow: var(--spread-shadow);
      display: flex;
      align-items: center;
      min-width: 210px;
      z-index: 4;

      &.job-bubble-1 {
        bottom: 30%;
        right: 5%;
      }

      &.job-bubble-2 {
        top: 44%;
        right: 35%;
      }

      &.job-bubble-3 {
        bottom: 19%;
        right: 2%;
      }

      &.job-bubble-4 {
        top: 55%;
        right: 32%;
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
        transform: rotate(-15deg) scale(0.8);
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
        min-height: 250px;
        max-width: 250px;
        top: initial;
        right: 17%;
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

      .job-bubble {
        transform: scale(0.6);

        &.job-bubble-1 {
          bottom: 17%;
          right: -18%;
        }

        &.job-bubble-2 {
          top: initial;
          bottom: 5%;
          right: 50%;
        }

        &.job-bubble-3 {
          bottom: 11%;
          right: -23%;
        }

        &.job-bubble-4 {
          top: 81%;
          right: 54%;
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

        .half-circle {
          z-index: 0;

          &.half-circle-1 {
            top: 55%;
            left: 10%;
            right: initial;
          }
        }

        .job-bubble {
          &.job-bubble-2 {
            top: 75%;
            left: 2%;
            right: initial;
          }

          &.job-bubble-3 {
            bottom: 22%;
            right: 1%;
          }

          &.job-bubble-4 {
            top: 67%;
            right: 64%;
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
        max-width: 500px;
        min-height: 500px;
      }

      .job-bubble {
        transform: scale(0.8);

        &.job-bubble-1 {
          right: -5%;
        }

        &.job-bubble-2 {
          top: 50%;
          right: 34%;
        }

        &.job-bubble-3 {
          bottom: 22%;
          right: -1%;
        }

        &.job-bubble-4 {
          top: 58%;
        }
      }
    }
  }
}

/* stylelint-disable */
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero-image-composition {
    .image-wrap {
      .perspective {
        margin: 0 auto !important;
        left: 0 !important;
        right: 0 !important;
      }

      .job-bubble {
        &.job-bubble-1 {
          right: 15% !important;
        }

        &.job-bubble-2 {
          left: 12% !important;
        }

        &.job-bubble-3 {
          right: 11% !important;
        }
      }
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
