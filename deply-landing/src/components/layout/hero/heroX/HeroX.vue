<script setup lang="ts"></script>

<template>
  <Hero class="scape-hero" alignment="center" size="fullheight">
    <template #body>
      <div class="columns is-vcentered mt-12">
        <!--Hero Content-->
        <div class="column is-relative">
          <div class="hero-caption mx-auto max-w-6 mb-4">
            <Title tag="h1" :size="1" weight="bold">
              <span>
                Find a Job in a
                <span class="text-primary">World Leading</span>
                Company.
              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              classes="b-centered-tablet-p text-medium"
            >
              More than 87,879 job offers are currently available.
            </Subtitle>
          </div>
          <div class="mx-auto max-w-8">
            <!--Search-->
            <FullJobSearch compact />

            <!--Stats-->
            <div class="has-text-centered mx-auto max-w-5">
              <div
                class="columns b-columns-half-mobile b-columns-half-tablet-p"
              >
                <div class="column is-3">
                  <div>
                    <Title tag="h3" :size="3" weight="thin" narrow>
                      <Counter :number="87" />
                      k
                    </Title>
                    <p class="paragraph rem-80 is-uppercase">Job Offers</p>
                  </div>
                </div>
                <div class="column is-3">
                  <div>
                    <Title tag="h3" :size="3" weight="thin" narrow>
                      <Counter :number="230" />
                      k
                    </Title>
                    <p class="paragraph rem-80 is-uppercase">Candidates</p>
                  </div>
                </div>
                <div class="column is-3">
                  <div>
                    <Title tag="h3" :size="3" weight="thin" narrow>
                      <Counter :number="800" />
                      +
                    </Title>
                    <p class="paragraph rem-80 is-uppercase">Companies</p>
                  </div>
                </div>
                <div class="column is-3">
                  <div>
                    <Title tag="h3" :size="3" weight="thin" narrow>
                      +
                      <Counter :number="25" />
                      %
                    </Title>
                    <p class="paragraph rem-80 is-uppercase">Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="bg-circle"></div>
      <DarkImage
        class="cityscape"
        src="/assets/illustrations/hero/hr-cityscape.svg"
        src-dark="/assets/illustrations/hero/hr-cityscape-dark.svg"
        width="1220"
        height="250"
        alt="hero-image"
      />
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.hero-caption {
  padding-top: 3rem;
}

.cityscape {
  position: relative;
  margin-top: -6rem;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}

.bg-circle {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 0;
  height: 80vw;
  width: 80vw;
  border-radius: 50%;
  background: var(--wrap-muted-color);
  transform: translateY(50%);
}

:deep(.hero) {
  overflow: hidden !important;
}

:deep(.hero-body) {
  position: relative;
  z-index: 3;
  padding-bottom: 0 !important;
}

.scape-hero {
  position: relative;
}

@media only screen and (max-width: 767px) {
  .hero-caption {
    padding-top: 0;
  }

  .cityscape {
    margin-top: 3rem;
  }

  :deep(.title) {
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .hero-caption {
    padding-top: 0;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .hero-caption {
    padding-top: 0;
  }
}

/* stylelint-disable */

//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      max-height: 1024px !important;
      min-height: 1024px !important;

      .columns {
        display: flex !important;

        .column {
          width: initial !important;
          margin: 0 !important;
        }
      }
    }
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      max-height: 1024px !important;
      min-height: 1024px !important;

      .columns {
        display: flex !important;

        .column {
          width: initial !important;
          margin: 0 !important;
        }
      }
    }
  }
}

/* stylelint-enable */
</style>
