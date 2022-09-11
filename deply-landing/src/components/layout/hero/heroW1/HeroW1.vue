<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
</script>

<template>
  <Hero
    color="grey"
    class="product-hero"
    size="fullheight"
    shape="/assets/shapes/hero-shape.svg"
    shape-orientation="right"
  >
    <template #body>
      <div class="hero-inner">
        <div class="columns is-vcentered">
          <div class="column is-7">
            <div class="hero-caption">
              <Title tag="h1" :size="2" weight="bold">
                Compare insurances from multiple providers in one place.
              </Title>
              <Subtitle
                tag="p"
                :size="5"
                classes="b-centered-tablet-p text-medium"
              >
                Algorithmically optimize bids, build campaigns, and automate
                your keyword workflows.
              </Subtitle>
            </div>
            <div class="hero-box-grid">
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox color="primary" rounded>
                    <i-ion-medkit-outline />
                  </IconBox>
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    Healthcare
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline />
                  </div>
                </div>
              </div>
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox color="success" rounded>
                    <i-ion-leaf-outline />
                  </IconBox>
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    Life Term
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline />
                  </div>
                </div>
              </div>
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox color="yellow" rounded>
                    <i-ion-briefcase-outline />
                  </IconBox>
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    Business
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline />
                  </div>
                </div>
              </div>
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox color="info" rounded>
                    <i-ion-diamond-outline />
                  </IconBox>
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    Investment
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline />
                  </div>
                </div>
              </div>
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox color="warning" rounded>
                    <i-ion-car-sport-outline />
                  </IconBox>
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    Vehicles
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline />
                  </div>
                </div>
              </div>
              <!--Grid item-->
              <div class="hero-box-item">
                <div class="box-inner">
                  <IconBox color="danger" rounded>
                    <i-ion-thunderstorm-outline />
                  </IconBox>
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    Disasters
                  </Title>
                  <div class="go-icon">
                    <i-ion-arrow-forward-outline />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-5">
            <div class="hero-image-container">
              <img
                src="data:image/gif;base64,replace_with_your_image"
                alt="Hero image"
                width="867"
                height="1300"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, `867x1300`)
                "
              />
              <!--Card-->
              <div class="stat-card stat-card-1">
                <div class="data text-primary">
                  <i-ion-calendar-outline />
                  <span class="metric">4.3K</span>
                  <span class="legend">/per year</span>
                </div>
                <div class="graph text-primary">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 281.3 123.7"
                    style="enable-background: new 0 0 281.3 123.7"
                    xml:space="preserve"
                  >
                    <path
                      d="M6.8,27c38-31.6,57.9-26.4,69.2-14c20.9,22.9,16.4,74.9,35.4,85.2c18.6,10.1,30-35.8,55.6-30.9
	c22.7,4.3,26.4,42.8,49.6,51.5c11.9,4.5,30.5,1.7,57.8-36.5"
                    />
                  </svg>
                </div>
              </div>
              <!--Card-->
              <div class="stat-card stat-card-2">
                <div class="data text-success">
                  <i-ion-business-outline />
                  <span class="metric">2.1K</span>
                  <span class="legend">/per month</span>
                </div>
                <div class="graph text-success">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 281.3 123.7"
                    style="enable-background: new 0 0 281.3 123.7"
                    xml:space="preserve"
                  >
                    <path
                      d="M6.8,96.7c38,31.6,57.9,26.4,69.2,14c20.9-22.9,16.4-74.9,35.4-85.2c18.6-10.1,30,35.8,55.6,30.9
	c22.7-4.3,26.4-42.8,49.6-51.5c11.9-4.5,30.5-1.7,57.8,36.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.hero-inner {
  padding-top: 2.5rem;

  .hero-caption {
    max-width: 480px;
  }
}

.hero-box-grid {
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
  padding-top: 1.5rem;
  max-width: 580px;

  .hero-box-item {
    display: flex;
    align-items: center;
    width: calc(50% - 1rem);
    text-align: center;
    margin: 0.5rem;
    padding: 0.75rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.85rem;
    box-shadow: var(--spread-shadow);
    cursor: pointer;

    .box-inner {
      display: flex;
      align-items: center;
      width: 100%;
    }

    :deep(.icon-box) {
      margin-right: 0.75rem;
    }

    .go-icon {
      margin-left: auto;
      font-size: 0.9rem;
      color: var(--primary);
    }
  }
}

.hero-image-container {
  position: relative;

  img {
    position: relative;
    display: block;
    max-width: 400px;
    margin-left: auto;
    z-index: 1;
  }

  .stat-card {
    position: absolute;
    display: flex;
    align-items: center;
    padding: 1rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.9rem;
    box-shadow: var(--spread-shadow);
    z-index: 2;

    .data {
      span {
        font-family: var(--font);
        display: block;

        &.metric {
          font-weight: 600;
          color: var(--title-color);
        }

        &.legend {
          color: var(--light-text);
          font-size: 0.7rem;
        }
      }
    }

    .graph {
      svg {
        width: 100%;
        max-width: 100px;
        stroke-dasharray: 406;
        stroke-dashoffset: 406;
        animation: dash 1s linear forwards;

        path {
          fill: none;
        }

        stroke: currentcolor;
        stroke-width: 5px;
      }
    }

    &.stat-card-1 {
      bottom: 50px;
      left: 0;
    }

    &.stat-card-2 {
      top: 50px;
      right: -80px;
    }
  }
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}

@media only screen and (max-width: 767px) {
  .product-hero {
    text-align: center;
  }

  .hero-inner {
    .hero-caption {
      :deep(.title) {
        margin-top: 3rem;

        &.is-2 {
          font-size: 2rem;
        }
      }
    }
  }

  .hero-image-container {
    img {
      max-width: 100%;
    }

    .stat-card {
      &.stat-card-1 {
        left: -35px;
      }
    }
  }

  .hero-box-grid {
    max-width: 100%;

    .hero-box-item {
      width: calc(100% - 1rem);
      padding: 1rem;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .product-hero {
    text-align: center;

    .buttons {
      justify-content: center;
    }

    .hero-image-container {
      img {
        margin: 0 auto;
      }

      .stat-card {
        &.stat-card-1 {
          left: 50px;
        }

        &.stat-card-2 {
          right: 50px;
        }
      }
    }
  }

  .hero-inner {
    .hero-caption {
      margin: 0 auto;

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
  }

  .hero-box-grid {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
