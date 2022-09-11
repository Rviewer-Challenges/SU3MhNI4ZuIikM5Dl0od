<script setup lang="ts"></script>

<template>
  <Hero
    v-background="{
      src: 'data:image/gif;base64,replace_with_your_image',
      placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
    }"
    overlay
    class="product-hero"
    size="fullheight"
    mask="circle"
  >
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <Title tag="h1" :size="2" weight="bold" inverted>
            Managed Business Solutions for your Startup.
          </Title>
          <Subtitle
            tag="p"
            :size="5"
            classes="b-centered-tablet-p text-medium"
            inverted
          >
            Stop the hassle when looking for agency to build your website or
            your web application project.
          </Subtitle>
          <!--Buttons-->
          <div class="buttons is-relative z-1">
            <Button color="primary" :long="2" raised bold>Sign Up</Button>
            <Button elevated bold :long="2">Learn More</Button>
          </div>
        </div>
        <div class="column is-6 is-offset-1">
          <div class="hero-form-container">
            <div class="hero-form">
              <Title tag="h2" :size="4" weight="semi">Register Now</Title>
              <form>
                <Field>
                  <FieldLabel label="Full Name" />
                  <Control icon="feather:user">
                    <VInput placeholder="First and last name" />
                  </Control>
                </Field>
                <Field>
                  <FieldLabel label="Email Address" />
                  <Control icon="feather:mail">
                    <VInput placeholder="Your email address" />
                  </Control>
                </Field>
                <Field>
                  <FieldLabel label="Password" />
                  <Control icon="feather:lock">
                    <VInput type="password" placeholder="Enter a password" />
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
                        <span>Register Now</span>
                      </Button>
                    </div>
                  </Control>
                </Field>
              </form>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.hero-form-container {
  position: relative;

  .hero-form {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1rem;
    padding: 2.5rem;
    width: 100%;
    max-width: 420px;
    margin: 0 auto;
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
  }
}
</style>
