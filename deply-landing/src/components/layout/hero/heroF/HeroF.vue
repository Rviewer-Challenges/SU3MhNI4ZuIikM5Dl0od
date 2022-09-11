<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'
import { heroScreenshots } from '/@src/data/demo'

const scrollTo = VueScrollTo.scrollTo
</script>

<template>
  <div class="product-screenshots">
    <!--Flying particles-->
    <div class="flying-particles">
      <div
        v-for="index in 25"
        :key="index"
        class="dot-wrapper"
        :class="`dot-wrapper-${index + 1}`"
      >
        <div class="dot" :class="`dot-${index + 1}`"></div>
      </div>
    </div>
    <!--Hero Content-->
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="py-6">
            <div class="hero-text">
              <Title tag="h1" :size="1" weight="bold" leading>
                <span class="text-gradient">Hello, Iam Vulk.</span>
              </Title>
              <h4 class="midtitle">
                Vue 3 Landing Page UI - v1.0
                <Tag color="danger" label="SSR Ready" outlined class="ml-2" />
              </h4>
              <p class="subtitle is-left">
                Vulk is a premium toolkit that lets you build powerful,
                SSR-Ready memorable websites.
              </p>
              <Buttons>
                <Button
                  color="primary"
                  :long="2"
                  raised
                  bold
                  @click.prevent="
                    scrollTo(`#template-demos`, 800, { offset: -100 })
                  "
                  @keydown.space.prevent="
                    () => scrollTo(`#template-demos`, 800, { offset: -100 })
                  "
                >
                  Demos
                </Button>
                <Button
                  elevated
                  bold
                  :long="2"
                  @click.prevent="
                    scrollTo(`#template-components`, 800, { offset: -100 })
                  "
                  @keydown.space.prevent="
                    () =>
                      scrollTo(`#template-components`, 800, { offset: -100 })
                  "
                >
                  Components
                </Button>
              </Buttons>

              <div class="stack-icons">
                <div class="stack-icon px-4">
                  <i class="iconify" data-icon="logos:vue"></i>
                </div>
                <div class="stack-icon px-4">
                  <i class="iconify" data-icon="logos:vitejs"></i>
                </div>
                <div class="stack-icon px-4">
                  <i class="iconify" data-icon="logos:sass"></i>
                </div>
                <div class="stack-icon px-4">
                  <i class="iconify" data-icon="logos:docker-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-6 is-offset-1">
          <div class="screenshots-wrap">
            <div class="bg-circle"></div>
            <div class="screenshots-group">
              <DarkImage
                v-for="(screenshot, index) in heroScreenshots.slice(0, 11)"
                :key="index"
                :src="screenshot.image"
                :src-dark="screenshot.darkImage"
                class="screenshot"
                alt="Hero screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'sass:math';

.product-screenshots {
  position: relative;
  overflow: hidden;
  background: var(--hero-grey-bg-color);

  .flying-particles {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;

    .dot-wrapper {
      position: absolute;

      @for $i from 1 through 75 {
        &-#{$i} {
          top: random(100) * 1%;
          left: random(100) * 1%;
          animation: flying
            (random(50) + 20) +
            s
            ease-in-out
            (math.div(random(100), -10)) +
            s
            infinite
            alternate;
        }
      }
    }

    .dot {
      width: 6px;
      height: 6px;
      background: var(--primary);
      border-radius: 50%;

      @for $i from 1 through 50 {
        &-#{$i} {
          transform-origin: (random(30) -15) + px (random(30) -15) + px;
          animation: rotating
            (random(20) + 10) +
            s
            ease-in-out
            (math.div(random(100), -10)) +
            s
            infinite;
        }
      }
    }
  }

  .container {
    position: relative;
    z-index: 1;
  }

  .midtitle {
    font-family: var(--font);
    font-weight: 500;
    font-size: 1rem;
    color: var(--light-text);
    text-transform: uppercase;
    padding: 0.25rem 0;
  }

  .subtitle {
    color: var(--medium-text);
  }

  .buttons {
    .button {
      height: 48px;
      min-width: 140px;
    }
  }

  .stack-icons {
    display: flex;

    .stack-icon {
      font-size: 1.75rem;
    }
  }
}

.screenshots-wrap {
  position: relative;
  min-height: 100vh;

  .bg-circle {
    position: absolute;
    top: 50%;
    right: -30%;
    height: 650px;
    width: 650px;
    transform: translateY(-45%);
    border-radius: 50%;
    background: rgb(var(--primary-rgb));
    background: linear-gradient(
      98deg,
      rgb(var(--primary-rgb) / 100%) 0%,
      rgb(var(--primary-rgb) / 28.9%) 35%,
      rgb(var(--primary-rgb) / 0%) 100%
    );
    z-index: 0;
  }
}

.screenshots-group {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
  transform: rotate(-45deg);
  z-index: 2;

  .screenshot {
    position: relative;
    display: block;
    width: 340px;
    height: auto;
    margin: 0.5rem;
    object-fit: contain;
    cursor: pointer;
    border-radius: 0.65rem;
    transition: transform 0.3s, box-shadow 0.3s;

    &:first-child {
      visibility: hidden;
    }

    &:first-child,
    &:nth-child(4),
    &:nth-child(7),
    &:nth-child(10) {
      top: -3.5rem;
    }

    &:nth-child(2),
    &:nth-child(5),
    &:nth-child(8),
    &:nth-child(11) {
      top: 2rem;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--light-box-shadow);
    }
  }
}

@media only screen and (max-width: 767px) {
  .product-screenshots {
    .columns {
      padding-top: 4rem;
      text-align: center;
    }

    .column {
      .py-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-bottom: 0 !important;
      }
    }

    .subtitle {
      max-width: 540px;
      margin-left: auto;
      margin-right: auto;
    }

    .buttons {
      justify-content: center;
    }
  }

  .screenshots-wrap {
    min-height: 90vh;

    .bg-circle {
      top: initial;
      bottom: -34%;
    }

    .screenshots-group {
      right: -100%;
      bottom: -50%;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) and (orientation: portrait) {
  .product-screenshots {
    .columns {
      padding-top: 4rem;
      text-align: center;
    }

    .subtitle {
      max-width: 540px;
      margin-left: auto;
      margin-right: auto;
    }

    .buttons {
      justify-content: center;
    }

    .stack-icons {
      justify-content: center;
    }
  }

  .screenshots-wrap {
    min-height: 75vh;

    .bg-circle {
      top: initial;
      height: 750px;
      width: 750px;
      bottom: -50%;
      right: -7% !important;
    }

    .screenshots-group {
      bottom: -30%;
    }

    .columns {
      display: flex;

      .py-6 {
        padding-left: 2.5rem;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .product-screenshots {
    .bg-circle {
      right: -53% !important;
    }
  }
}

@media only screen and (max-width: 1300px) {
  .product-screenshots {
    .bg-circle {
      right: -35%;
    }
  }
}
</style>
