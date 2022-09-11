<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
</script>

<template>
  <Hero color="grey" class="product-hero" size="fullheight">
    <template #body>
      <div class="hero-cylinder">
        <div class="hero-cylinder-inner">
          <div class="inner-square"></div>
        </div>
      </div>
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
            <div class="buttons is-relative z-1 mb-4">
              <Button color="primary" :long="2" raised bold>Free Trial</Button>
              <Button elevated bold :long="2">Demo</Button>
            </div>
          </div>
          <!--Testimonial-->
          <div class="hero-testimonial">
            <p class="paragraph rem-90 mb-2 max-w-4">
              "Vulk made it incredibly simple for me to start earning money with
              online selling. It's a game changer!"
            </p>
            <div class="testimonial-author">
              <AvatarSimple picture="data:image/gif;base64,replace_with_your_image" />
              <div class="meta">
                <Title tag="h3" :size="7" weight="semi" narrow>
                  Christina Chu
                </Title>
                <p class="paragraph rem-85">CEO @MyWay</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-7">
          <div class="hero-character">
            <img
              src="data:image/gif;base64,replace_with_your_image"
              alt="Girl image"
              width="677"
              height="993"
              @error.once="
                (event) => viaPlaceholderErrorHandler(event, '677x993')
              "
            />
            <div class="half-circle-1 text-success">
              <HalfCircle />
            </div>
            <div class="half-circle-2 text-info">
              <HalfCircle />
            </div>
            <div class="full-circle-1 text-yellow">
              <Circle />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.product-hero {
  .columns {
    position: relative;
    z-index: 2;
  }

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

  .hero-testimonial {
    text-align: left;

    .testimonial-author {
      display: flex;
      align-items: center;

      .meta {
        margin-left: 0.75rem;
      }
    }
  }
}

.hero-cylinder {
  position: absolute;
  top: -50vh;
  right: -40vw;
  height: 640px;
  width: 1300px;
  background: var(--primary-light-30);
  border-radius: 500rem;
  transform: rotate(-65deg);
  overflow: hidden;
  box-shadow: var(--primary-box-shadow);

  .hero-cylinder-inner {
    position: relative;
    height: 100%;
    width: 100%;

    .inner-square {
      position: absolute;
      transform: rotate(52deg);
      bottom: -87px;
      left: -250px;
      height: 600px;
      width: 1000px;
      border-radius: 0;
      background: var(--primary);
    }
  }
}

.hero-character {
  position: relative;

  img {
    display: block;
    max-width: 320px;
    margin-left: auto;
  }

  .half-circle-1 {
    position: absolute;
    bottom: 70px;
    right: 440px;
    transform: scale(1.2);
  }

  .half-circle-2 {
    position: absolute;
    top: 170px;
    right: -80px;
    transform: scale(1.1);
    transform: rotate(90deg);
  }

  .full-circle-1 {
    position: absolute;
    top: 70px;
    right: 440px;
    transform: scale(1.6);
  }
}

.is-dark {
  .hero-cylinder {
    background: var(--button-base-bg-color);
  }
}

@media only screen and (max-width: 767px) {
  .product-hero {
    text-align: center;

    .hero-caption {
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

    .hero-testimonial {
      text-align: center;

      .testimonial-author {
        justify-content: center;
        text-align: left;
      }
    }
  }

  .hero-cylinder {
    top: initial;
    bottom: -30vh;
    width: 800px;
    transform: rotate(30deg);
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .product-hero {
    text-align: center;

    .hero-caption {
      .columns {
        flex-direction: column !important;

        .column {
          width: 100%;
        }
      }

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
    }

    .hero-testimonial {
      text-align: center;

      .paragraph {
        margin-left: auto;
        margin-right: auto;
      }

      .testimonial-author {
        justify-content: center;
        text-align: left;
      }
    }
  }

  .hero-cylinder {
    top: initial;
    bottom: -30vh;
    right: -60vw;
    height: 580px;
    width: 1200px;
    transform: rotate(30deg);
  }

  .hero-character {
    img {
      margin: 0 auto;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .hero-cylinder {
    top: -42vh;
    right: -58vw !important;
    height: 580px;
  }
}

/* stylelint-disable */

//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero-cylinder {
    right: -70vw;
    height: 580px;
  }

  .hero-character {
    .full-circle-1 {
      right: 75%;
    }

    .half-circle-1 {
      right: 366px;
      transform: scale(0.8);
    }

    .half-circle-2 {
      top: 134px;
      right: -15px;
      transform: scale(0.8) rotate(135deg);
    }
  }

  .product-hero {
    min-height: 65vh;
    height: 90vh;

    .hero-caption {
      text-align: center;
      .columns {
        flex-direction: column;
      }

      .buttons {
        justify-content: center;
      }
    }

    .hero-testimonial {
      justify-content: center;
      text-align: center;

      .testimonial-author {
        justify-content: center;
      }
    }
  }
}

@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: landscape) {
  .hero-cylinder {
    top: -44vh !important;
    right: -53vw !important;
  }
}

//IPad Pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero-cylinder {
    right: -45vw;
    height: 580px;
  }

  .hero-character {
    .full-circle-1 {
      right: 75%;
    }
  }

  .product-hero {
    min-height: 65vh;
    height: 80vh;

    .hero-caption {
      text-align: center;
      .columns {
        flex-direction: column;
      }

      .buttons {
        justify-content: center;
      }
    }

    .hero-testimonial {
      justify-content: center;
      text-align: center;

      .testimonial-author {
        justify-content: center;
      }
    }
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: landscape) {
  .hero-cylinder {
    top: -35vh;
    right: -44vw;
  }
}
/* stylelint-enable */
</style>
