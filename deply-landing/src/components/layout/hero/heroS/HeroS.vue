<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero color="grey" class="product-hero" size="fullheight" starfall>
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="hero-caption">
            <Title tag="h1" :size="2" weight="bold">
              Sell Digital Goods, Products and Art The
              <span class="heavy-underline">
                <span>Easy-Peasy</span>
              </span>
              Way.
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              classes="b-centered-tablet-p text-medium"
            >
              Selling digital downloads, subscriptions and software licenses has
              never been easier, faster or more secure.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button color="primary" :long="2" raised bold>Free Trial</Button>
              <Button elevated bold :long="2">Demo</Button>
            </div>
          </div>
        </div>
        <div class="column is-6 is-offset-1">
          <div class="hero-image-container">
            <svg
              class="main-svg"
              viewBox="0 0 480 480"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <clipPath id="blob">
                  <path
                    fill="#474bff"
                    d="M359.5,358.5Q240,477,122.5,358.5Q5,240,122.5,125Q240,10,359.5,125Q479,240,359.5,358.5Z"
                  />
                </clipPath>
              </defs>
              <image
                x="0"
                y="0"
                width="100%"
                height="100%"
                clip-path="url(#blob)"
                xlink:href="data:image/gif;base64,replace_with_your_image"
                preserveAspectRatio="xMidYMid slice"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '500x500')
                "
              />
            </svg>
            <svg
              class="sub-svg"
              viewBox="0 0 480 480"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                fill="#7703fc"
                d="M427.5,325.5Q377,411,282,442.5Q187,474,115.5,404Q44,334,37.5,236.5Q31,139,111,83Q191,27,285.5,45.5Q380,64,429,152Q478,240,427.5,325.5Z"
              />
            </svg>
            <div class="half-circle-1 text-success">
              <HalfCircle />
            </div>
            <div class="half-circle-2 text-secondary">
              <HalfCircle />
            </div>
            <div class="full-circle-1 text-yellow">
              <Circle />
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-auto max-w-8">
        <div class="tabs is-centered pb-4">
          <HeroClients :logos="customerLogos" />
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.product-hero {
  .hero-caption {
    :deep(.title) {
      margin-bottom: 2.5rem !important;
    }
  }

  .heavy-underline {
    position: relative;

    > span {
      position: relative;
      color: var(--primary);
      z-index: 1;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 6px;
      background: var(--primary);
      z-index: 0;
    }
  }
}

.hero-image-container {
  position: relative;

  .main-svg {
    position: relative;
    max-width: 540px;
    margin: 0 auto;
    z-index: 1;
  }

  .sub-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0.9;
  }

  .half-circle-1 {
    position: absolute;
    bottom: 70px;
    right: 400px;
    transform: scale(0.8) rotate(195deg);
  }

  .half-circle-2 {
    position: absolute;
    top: 170px;
    right: -40px;
    transform: scale(0.7) rotate(90deg);
  }

  .full-circle-1 {
    position: absolute;
    top: 80px;
    right: 440px;
    transform: scale(1.2);
  }
}

.is-dark {
  .hero-image-container {
    .sub-svg {
      opacity: 0.1;
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

    .hero-image-container {
      .hero-bg-circle {
        top: 3%;
      }
    }
  }
}
</style>
