<script setup lang="ts">
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

          <!--Hero Faces-->
          <div class="hero-faces mt-4">
            <div class="face-column">
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/1024x682',
                }"
                class="face-element"
              ></div>
            </div>
            <div class="face-column">
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/1024x682',
                }"
                class="face-element"
              ></div>
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/1024x682',
                }"
                class="face-element is-size-md"
              ></div>
            </div>
            <div class="face-column is-2x">
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/1024x682',
                }"
                class="face-element"
              ></div>
              <div class="hero-faces">
                <div class="face-column is-4x">
                  <div
                    v-background="{
                      src: 'data:image/gif;base64,replace_with_your_image',
                      placeholder: 'https://dummyimage.com/1024x682',
                    }"
                    class="face-element is-size-sm"
                  ></div>
                </div>
                <div class="face-column is-2x">
                  <div
                    v-background="{
                      src: 'data:image/gif;base64,replace_with_your_image',
                      placeholder: 'https://dummyimage.com/1024x682',
                    }"
                    class="face-element is-size-xs"
                  ></div>
                </div>
              </div>
            </div>
            <div class="face-column">
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/1024x682',
                }"
                class="face-element is-size-md"
              ></div>
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/1024x682',
                }"
                class="face-element"
              ></div>
            </div>
            <div class="face-column">
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/1024x682',
                }"
                class="face-element is-size-sm"
              ></div>
              <div
                v-background="{
                  src: 'data:image/gif;base64,replace_with_your_image',
                  placeholder: 'https://dummyimage.com/1024x682',
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

@media only screen and (max-width: 767px) {
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
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
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
</style>
