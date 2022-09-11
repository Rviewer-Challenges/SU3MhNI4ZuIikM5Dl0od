<script setup lang="ts">
import { ref } from 'vue'

export interface carSliderItem {
  brand: string
  name: string
  image: string
  time: number
  acceleration: number
  speed: number
  range: number
}

export interface carSliderProps {
  slides: carSliderItem[]
}

const props = defineProps<carSliderProps>()

const activeSlide = ref(0)
</script>

<template>
  <div class="py-6">
    <div class="vehicle-slider">
      <div class="vehicle-slider-inner">
        <div class="slider-controls">
          <ul>
            <li v-for="(slide, l) in props.slides" :key="l">
              <a
                :class="activeSlide === l ? 'is-active' : ''"
                @click.prevent="activeSlide = l"
                @keydown.space.prevent="() => (activeSlide = l)"
              >
                <img :src="slide.brand" alt="brand logo" />
                <span>{{ slide.name }}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="slider-content">
          <div class="slider-panel">
            <div class="car-container">
              <div
                v-for="(slide, index) in props.slides"
                :key="index"
                class="car-container-inner"
                :class="activeSlide === index ? 'is-active' : ''"
              >
                <img
                  class="car-main-image"
                  :src="slide.image"
                  alt="car image"
                  width="1000"
                  height="485"
                />

                <div class="car-info">
                  <div class="car-acceleration">
                    <h2>{{ slide.time }} s</h2>
                    <p>{{ slide.acceleration }} mph</p>
                  </div>
                  <div class="car-speed">
                    <h2>{{ slide.speed }} mph</h2>
                    <p>Top Speed</p>
                  </div>
                  <div class="car-range">
                    <h2>{{ slide.range }} mi</h2>
                    <p>Max Range</p>
                  </div>
                  <div class="line"></div>
                  <div class="car-name">
                    <h2>{{ slide.name }}</h2>
                  </div>
                </div>
                <div class="car-overlay"></div>
                <div class="car-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.vehicle-slider {
  position: relative;

  .vehicle-slider-inner {
    display: flex;
    flex-direction: row-reverse;
    max-width: 1090px;
    margin: 0 auto;

    .slider-controls {
      max-width: 230px;
      width: 230px;
      margin-left: 20px;

      ul {
        li {
          a {
            display: flex;
            align-items: center;
            background: var(--card-bg-color);
            border: 1px solid var(--card-border-color);
            border-radius: 1rem;
            padding: 1rem;
            font-family: var(--font-alt);
            font-weight: 600;
            font-size: 0.9rem;
            color: var(--light-text);
            transition: box-shadow 0.3s, border-color 0.3s,
              background-color 0.3s;

            img {
              display: block;
              min-width: 36px;
              width: 36px;
              height: 36px;
              border-radius: 50%;
              margin-right: 0.5rem;
            }

            &.is-active {
              border-color: var(--primary);
              background: var(--primary);
              color: var(--white-smoke);
              box-shadow: var(--primary-box-shadow);

              img {
                filter: brightness(0) invert(1);
              }
            }
          }

          &:not(:last-child) {
            margin-bottom: 0.75rem;
          }
        }
      }
    }

    .slider-content {
      flex-grow: 2;

      .slider-panel {
        .car-container {
          position: relative;
          max-width: 840px;
          height: 500px;
          margin: 0 auto;

          .car-container-inner {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            z-index: 2;
            transition: opacity 0.3s;

            .car-main-image {
              position: absolute;
              top: 45%;
              left: 50%;
              transform: translate(-40%, -50%);
              max-width: 540px;
              margin: 0 auto;
              z-index: 3;
              transition: all 0.4s ease-in-out;
            }

            .car-info {
              position: absolute;
              width: 100%;
              padding: 0 7%;
              display: flex;
              align-items: center;
              color: var(--title-color);
              bottom: 50px;
              left: 0;
              z-index: 4;

              div {
                margin: 0 20px;
              }

              div h2 {
                font-family: var(--font-alt);
                font-size: 1.5rem;
                font-weight: 400;
                transition: opacity 0.5s;
              }

              div p {
                font-family: var(--font);
                font-size: 0.85rem;
                color: var(--light-text);
                text-transform: uppercase;
                transition: transform 0.3s, opacity 0.3s;
              }

              .line {
                position: relative;
                flex: 1;

                &::after {
                  position: absolute;
                  top: 0;
                  left: 0;
                  content: '';
                  height: 3px;
                  width: 0;
                  background: var(--title-color);
                  transition: width 0.4s 0.75s;
                }
              }

              .car-acceleration {
                h2 {
                  opacity: 0;
                  transition-delay: 0.35s;
                }

                p {
                  transform: translateY(1rem);
                  opacity: 0;
                  transition-delay: 0.35s;
                }
              }

              .car-speed {
                h2 {
                  opacity: 0;
                  transition-delay: 0.45s;
                }

                p {
                  transform: translateY(1rem);
                  opacity: 0;
                  transition-delay: 0.45s;
                }
              }

              .car-range {
                h2 {
                  opacity: 0;
                  transition-delay: 0.55s;
                }

                p {
                  transform: translateY(1rem);
                  opacity: 0;
                  transition-delay: 0.55s;
                }
              }

              .car-name {
                h2 {
                  opacity: 0;
                  transition-delay: 1s;
                }
              }
            }

            .car-overlay {
              position: absolute;
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;
              background: var(--wrap-muted-color);
              border-radius: 2rem;
              z-index: 0;
              transform: translateX(-4rem);
              opacity: 0;
              transition: transform 0.3s 0.25s, opacity 0.3s 0.25s;
            }

            .car-circle {
              position: absolute;
              top: 45%;
              left: 50%;
              height: 380px;
              width: 380px;
              background: var(--primary-light-45);
              border-radius: 50%;
              z-index: 0;
              transform: translate(-50%, -50%) scale(0);
              transition: transform 0.4s 0.7s;
            }

            &.is-active {
              opacity: 1;

              .car-main-image {
                transform: translate(-50%, -50%);
              }

              .car-overlay {
                transform: translateX(0);
                opacity: 1;
              }

              .car-circle {
                transform: translate(-50%, -50%) scale(1);
              }

              .car-info {
                .car-acceleration,
                .car-speed,
                .car-range,
                .car-name {
                  h2 {
                    opacity: 1;
                  }

                  p {
                    transform: translateY(0);
                    opacity: 1;
                  }
                }

                .line::after {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .vehicle-slider {
    .vehicle-slider-inner {
      .slider-content {
        .slider-panel {
          .car-container {
            .car-container-inner {
              .car-circle {
                opacity: 0.1;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .vehicle-slider {
    .vehicle-slider-inner {
      flex-direction: column;

      .slider-controls {
        width: 100%;
        max-width: 100%;

        ul {
          display: flex;
          overflow-x: scroll;
          padding-bottom: 1.5rem;

          li {
            margin-right: 0.75rem;

            a {
              padding: 0.5rem 1rem;
              min-width: 150px;
            }
          }
        }
      }

      .slider-content {
        .slider-panel {
          .car-container {
            .car-container-inner {
              .car-main-image {
                max-width: 100%;
              }

              .car-info {
                flex-wrap: wrap;
                padding: 0 2%;
                bottom: 1.5rem;

                > div {
                  text-align: center;
                  width: 50%;
                  margin: 0.5rem 0;
                }
              }

              .car-circle {
                height: 260px;
                width: 260px;
              }
            }
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .vehicle-slider {
    .vehicle-slider-inner {
      .slider-controls {
        max-width: 160px;
        width: 160px;

        ul {
          li {
            a {
              img {
                min-width: 28px;
                width: 28px;
                height: 28px;
              }
            }
          }
        }
      }

      .slider-content {
        .slider-panel {
          .car-container {
            .car-container-inner {
              .car-main-image {
                max-width: 420px;
              }

              .car-info {
                flex-wrap: wrap;
                padding: 0 2%;
                bottom: 1.5rem;

                div h2 {
                  font-size: 1.25rem;
                }

                div p {
                  font-size: 0.8rem;
                }

                .line {
                  display: none;
                }
              }

              .car-circle {
                height: 320px;
                width: 320px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
