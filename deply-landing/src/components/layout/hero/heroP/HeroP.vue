<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero color="grey" class="product-hero" size="fullheight">
    <template #body>
      <div class="columns is-vcentered faces-side-wrapper">
        <div class="column is-5">
          <Title tag="h1" :size="2" weight="bold">
            The Modern Community Platform For
            <span class="text-primary">Creators</span>
          </Title>
          <Subtitle tag="p" :size="5" classes="b-centered-tablet-p text-medium">
            Bring together your discussions , memberships, and content.
            Integrate a thriving community all under your own brand.
          </Subtitle>
          <!--Buttons-->
          <div class="buttons is-relative z-1">
            <Button color="primary" :long="2" raised bold>Free Trial</Button>
            <Button elevated bold :long="2">Demo</Button>
          </div>
        </div>
        <div class="column is-8">
          <div class="hero-faces is-side">
            <div class="face-column is-2x">
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/600x800',
                }"
                class="face-element is-size-md"
              ></div>
            </div>
            <div class="face-column is-2x">
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/600x800',
                }"
                class="face-element"
              ></div>
              <div class="hero-faces">
                <div class="face-column is-4x">
                  <div
                    v-background="{
                      src: 'data:image/gif;base64,replace_with_your_image',
                      placeholder: 'https://dummyimage.com/600x800',
                    }"
                    class="face-element is-size-sm"
                  ></div>
                </div>
                <div class="face-column is-2x">
                  <div
                    v-background="{
                      src: 'data:image/gif;base64,replace_with_your_image',
                      placeholder: 'https://dummyimage.com/600x800',
                    }"
                    class="face-element is-size-xs"
                  ></div>
                </div>
              </div>
            </div>
            <div class="face-column is-2x">
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/600x800',
                }"
                class="face-element is-size-sm"
              ></div>
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/600x800',
                }"
                class="face-element"
              ></div>
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
.hero-faces {
  display: flex;
  align-items: center;

  .face-column {
    width: 16.6%;
    padding: 0 0.75rem;

    &.is-2x {
      width: 33.2%;
    }

    &.is-4x {
      width: 66.4%;
    }

    .face-element {
      position: relative;
      min-height: 280px;
      width: 100%;
      border-radius: 1.5rem;
      box-shadow: var(--light-box-shadow);
      background-size: cover;
      background-repeat: no-repeat;

      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }

      &.is-size-xs {
        min-height: 100px;
      }

      &.is-size-sm {
        min-height: 180px;
      }

      &.is-size-md {
        min-height: 340px;
      }
    }
  }
}

.product-hero {
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
}

@media only screen and (max-width: 767px) {
  .faces-side-wrapper {
    padding-top: 4rem;

    .hero-text {
      text-align: center;
    }
  }

  .hero-faces {
    .face-column {
      &:first-child,
      &:nth-child(2),
      &:nth-child(4) {
        display: none;
      }

      &:nth-child(3),
      &:nth-child(5) {
        min-width: 50% !important;
      }

      .hero-faces {
        .face-column {
          &:nth-child(2) {
            display: block;
            min-width: 100% !important;

            .face-element {
              border-radius: 1rem;
            }
          }
        }
      }
    }

    &.is-side {
      .face-column {
        &:first-child {
          display: block;
          min-width: 50% !important;
        }
      }
    }
  }

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
  .faces-side-wrapper {
    .hero-text {
      text-align: center;
    }
  }

  .hero-faces {
    .face-column {
      &:nth-child(2) {
        display: none;
      }

      &:nth-child(4) {
        min-width: 33.3% !important;
      }

      .hero-faces {
        .face-column {
          &:nth-child(2) {
            display: block;

            .face-element {
              border-radius: 1rem;
            }
          }
        }
      }
    }

    &.is-side {
      padding-top: 2rem;

      .face-column {
        &:nth-child(2) {
          min-width: 33.3% !important;
          display: block;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .faces-side-wrapper {
    .hero-text {
      .button {
        min-width: 120px !important;
      }
    }
  }
}
</style>
