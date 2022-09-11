<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
</script>

<template>
  <Hero
    class="car-hero"
    alignment="left"
    size="fullheight"
    mask="slant"
    shape="/assets/shapes/hero-shape-reverse.svg"
    shape-orientation="left"
  >
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="hero-form-container">
            <div class="hero-form">
              <Title tag="h2" :size="4" weight="semi">Need a Ride?</Title>
              <form>
                <Field>
                  <FieldLabel label="Full Name" />
                  <Control icon="ph:user-duotone">
                    <VInput placeholder="First and last name" />
                  </Control>
                </Field>
                <Field>
                  <FieldLabel label="Email Address" />
                  <Control icon="ph:envelope-duotone">
                    <VInput placeholder="Your email address" />
                  </Control>
                </Field>
                <Field>
                  <FieldLabel label="Destination" />
                  <Control icon="ph:map-pin-duotone">
                    <VInput placeholder="Where are you heading?" />
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <div class="py-2">
                      <Checkbox
                        name="checkbox-1"
                        label="I accept the Terms and Conditions"
                        color="default"
                      />
                    </div>
                  </Control>
                </Field>
                <Field>
                  <Control>
                    <div class="py-2">
                      <Button color="primary" fullwidth bold raised>
                        <span>Find My Ride Now</span>
                      </Button>
                    </div>
                  </Control>
                </Field>
              </form>
            </div>
          </div>
        </div>
        <div class="column is-7">
          <div class="car-hero-solo">
            <img
              src="/assets/illustrations/hero/car-hero-solo.png"
              alt="Car hero image"
              width="1000"
              height="712"
            />
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-auto max-w-8">
        <p class="paragraph rem-100 text-light has-text-centered">
          Helping people work faster at
        </p>
        <div class="tabs is-centered pb-2">
          <HeroClients :logos="customerLogos" />
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.car-hero-solo {
  position: relative;
  top: 2rem;

  img {
    display: block;
    max-width: 580px;
    margin: 0 auto;
  }
}

.hero-form-container {
  position: relative;
  top: 2rem;

  .hero-form {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    box-shadow: var(--light-box-shadow);
    border-radius: 1rem;
    padding: 2.5rem;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 767px) {
  .car-hero {
    text-align: center;

    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .buttons {
      justify-content: center;
    }
  }

  .hero-form-container {
    margin-top: 3rem;
  }

  .car-hero-solo {
    img {
      max-width: 100%;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .car-hero {
    text-align: center;

    :deep(.title) {
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

  .hero-form-container {
    margin-top: 3rem;
  }
}
</style>
