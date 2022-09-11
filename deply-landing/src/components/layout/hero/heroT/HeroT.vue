<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { heroStacks } from '/@src/data/hero'

const current = ref(0)
const gradientClass = 'gradient-opaque'

let timeout: any
const interval = setInterval(() => {
  if (timeout) {
    clearTimeout(timeout)
  }
  timeout = setTimeout(() => {
    if (current.value < 2) {
      current.value++
    } else {
      current.value = 0
    }
  }, 1500)
}, 3000)

onUnmounted(() => {
  clearInterval(interval)
  if (timeout) {
    clearTimeout(timeout)
  }
})
</script>

<template>
  <Hero
    class="illustration-hero"
    alignment="center"
    size="fullheight"
    color="grey"
  >
    <template #body>
      <!--Hero Stacks-->
      <HeroStacks :stacks="heroStacks" />
      <div class="columns is-vcentered mt-12">
        <!--Hero Content-->
        <div class="column is-relative">
          <div class="hero-caption mx-auto max-w-8 mb-4">
            <Title tag="h1" :size="1" weight="bold">
              <span
                class="text-gradient-secondary-pseudo px-2"
                :class="current === 0 && gradientClass"
                data-content="Sube."
              >
                Sube.
              </span>
              <span
                class="text-gradient-primary-pseudo px-2"
                :class="current === 1 && gradientClass"
                data-content="Copia."
              >
                Copia.
              </span>
              <span
                class="text-gradient-accent-pseudo px-2"
                :class="current === 2 && gradientClass"
                data-content="Pega."
              >
                Pega.
              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="thin"
              class="mx-auto max-w-6 b-centered-tablet-p pt-2"
            >
              Sube tu logotipo, tus imágenes, los avatares de tus usuarios y,
              ¡listo! Copia la URL de tu archivo y pégala en tu código.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button href="https://app.deply.dev" target="_blank" color="primary" :long="2" raised bold>Pruébalo</Button>
            </div>
          </div>

          <div class="hero-image-composition mb-5">
            <DarkImage
              src="/assets/illustrations/hero/developer.svg"
              width="600"
              height="400"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style>
:root {
  --start-color: #007cf0;
  --end-color: #00dfd8;
}
</style>

<style lang="scss" scoped>
:deep(.hero) {
  overflow: hidden !important;
}

:deep(.hero-body) {
  padding-bottom: 0 !important;
}

/* stylelint-disable */
.illustration-hero {
  .hero-caption {
    :deep(.title) {
      &.is-1 {
        font-size: 4.5rem;
        font-weight: 900;
      }

      span {
        position: relative;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;

        &::before {
          display: inline-block;
          content: attr(data-content);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          color: var(--title-color);
          transition: opacity 0.75s;
        }

        &::after {
          display: inline-block;
          content: attr(data-content);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        &.gradient-opaque::before {
          opacity: 0;
        }
      }
    }
  }

  .hero-image-composition {
    img {
      display: block;
      max-width: 600px;
      margin: 0 auto;
    }
  }
}

/* stylelint-enable */

@media only screen and (max-width: 767px) {
  .illustration-hero {
    .hero-caption {
      :deep(.title) {
        span {
          display: block;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .illustration-hero {
    .hero-caption {
      :deep(.title) {
        > span:first-child {
          display: block;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .illustration-hero {
    .hero-caption {
      :deep(.title) {
        > span:first-child {
          display: block;
        }
      }
    }
  }
}
</style>
