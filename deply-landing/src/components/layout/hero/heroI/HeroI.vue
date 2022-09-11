<script setup lang="ts">
import { heroMentors } from '/@src/data/pages/mentors'
</script>

<template>
  <div class="hero-wrapper">
    <div class="hero-grid">
      <div class="strip"></div>
      <div class="strip"></div>
      <div class="strip"></div>
      <div class="strip"></div>
      <div class="strip"></div>
      <div class="strip"></div>
    </div>
    <Hero alignment="center" size="fullheight">
      <template #body>
        <div class="columns is-vcentered mt-12">
          <!--Hero Content-->
          <div class="column is-relative">
            <div class="hero-caption mx-auto max-w-6 mb-4">
              <Title tag="h1" :size="1" weight="bold" inverted>
                <span>Find a Mentor to Boost Your Business Growth</span>
              </Title>
              <Subtitle
                tag="p"
                :size="5"
                weight="thin"
                inverted
                class="mx-auto max-w-6 b-centered-tablet-p pt-2"
              >
                Have 1-on-1 conversations about growth, marketing, and
                everything in between with the world's top 3% of startup and
                marketing mentors.
              </Subtitle>
            </div>

            <!--Subscribe-->
            <div class="mx-auto max-w-4">
              <SubscriptionCompact
                label="Start for Free"
                placeholder="Enter your email"
              />
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <HeroPeople :people="heroMentors" />
      </template>
    </Hero>
  </div>
</template>

<style lang="scss" scoped>
@mixin gradientAngle($start-color, $end-color, $angle) {
  background: $start-color;
  background: linear-gradient($angle, $start-color, $end-color);
  background: linear-gradient($angle, $start-color, $end-color);
}

.hero-wrapper {
  position: relative;
  z-index: 1;

  .hero {
    position: relative;
    background: transparent;
    z-index: 1;

    .hero-caption {
      margin-top: -2rem;
    }
  }
}

.hero-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 800px;
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  -webkit-box-flex: 0;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  transform: skewY(-12deg);
  transform-origin: 0;
  z-index: 0;
  @include gradientAngle(
    var(--hero-nuance-main),
    var(--hero-nuance-sub),
    90deg
  );

  &::after {
    display: table;
    content: ' ';
    clear: both;
  }

  .strip {
    display: flex;
    min-height: 180px;
    max-height: 180px;
    align-self: stretch;
    flex-grow: 1;
    width: 33.3333%;
    max-width: 33.3333%;
    transition: background-color 0.3s;

    &.is-half {
      width: 50%;
      max-width: 50%;
    }

    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3) {
      align-self: flex-start;
    }

    &:nth-of-type(4),
    &:nth-of-type(5),
    &:nth-of-type(6) {
      align-self: flex-end;
    }

    &:nth-of-type(1) {
      background: var(--hero-nuance-main);
    }

    &:nth-of-type(2) {
      @include gradientAngle(transparent, var(--hero-nuance-12), 90deg);
    }

    &:nth-of-type(3) {
      background: var(--hero-nuance-20);
    }

    &:nth-of-type(4) {
      align-self: flex-end;
      background: var(--hero-nuance-12);
    }

    &:nth-of-type(6) {
      align-self: flex-end;
      background: var(--hero-nuance-6);
    }
  }
}

@media only screen and (max-width: 767px) {
  .hero-wrapper {
    .hero-caption {
      :deep(.title) {
        margin-top: 3rem;

        &.is-1 {
          font-size: 2.5rem;
        }
      }
    }

    .buttons {
      justify-content: center;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .hero-wrapper {
    .hero-grid {
      height: 940px;
    }
  }
}

/* stylelint-disable */
//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      max-height: 1024px !important;
      min-height: 1024px !important;
    }
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      max-height: 1024px !important;
      min-height: 1024px !important;
    }
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: landscape) {
  :deep(.hero-people-marquee) {
    top: -5rem;
  }

  .hero-grid {
    height: 90vh;
  }
}
/* stylelint-enable */
</style>
