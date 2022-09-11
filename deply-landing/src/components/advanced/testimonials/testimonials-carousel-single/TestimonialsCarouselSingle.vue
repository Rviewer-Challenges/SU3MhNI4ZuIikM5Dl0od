<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export interface Testifier {
  picture: string
  name: string
  role: string
}

export interface TestimonialsCarouselSlide {
  logo: string
  text: string
  sales: number
  conversions: number
  testifier: Testifier
}

export interface TestimonialsCarouselProps {
  slides: TestimonialsCarouselSlide[]
  inverted?: boolean
  pulled?: boolean
}

const props = withDefaults(defineProps<TestimonialsCarouselProps>(), {
  slides: () => [],
  inverted: false,
  pulled: false,
})
</script>

<template>
  <div class="py-6">
    <div class="carousel-wrap">
      <div class="testimonials-solo-carousel">
        <carousel :items-to-show="1" :autoplay="3000">
          <slide v-for="(slide, index) in props.slides" :key="index">
            <!--Carousel item-->
            <div class="testimonial-item">
              <div class="left-side">
                <div class="avatar-container">
                  <div class="dots is-top">
                    <PolkaDots />
                  </div>
                  <img
                    class="avatar"
                    :src="slide.testifier.picture"
                    alt="testifier image"
                  />
                  <div class="dots is-bottom">
                    <PolkaDots />
                  </div>
                </div>
                <div class="avatar-info">
                  <h3>{{ slide.testifier.name }}</h3>
                  <p>{{ slide.testifier.role }}</p>
                </div>
              </div>
              <div class="right-side">
                <img
                  class="company-logo"
                  :src="slide.logo"
                  alt="company logo"
                />
                <div class="testimonial-content">
                  <p class="text-content">"{{ slide.text }}"</p>
                  <div class="metrics">
                    <div class="metric">
                      <i-ph-lightning-duotone />
                      <div class="meta">
                        <span>More Sales</span>
                        <span>Increased by {{ slide.sales }}%</span>
                      </div>
                    </div>
                    <div class="metric">
                      <i-ph-crown-duotone />
                      <div class="meta">
                        <span>More Conversions</span>
                        <span>Increased by {{ slide.conversions }}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </slide>

          <template #addons>
            <navigation />
          </template>
        </carousel>
      </div>
      <!--Carousel footer-->
      <div class="carousel-footer">
        <div class="rating-block">
          <div class="stars">
            <i class="iconify" data-icon="uiw:star-on"></i>
            <i class="iconify" data-icon="uiw:star-on"></i>
            <i class="iconify" data-icon="uiw:star-on"></i>
            <i class="iconify" data-icon="uiw:star-on"></i>
            <i class="iconify" data-icon="uiw:star-on"></i>
          </div>
          <p>4.9 Rating based on 849 votes</p>
        </div>
        <div class="support-block">
          <i class="iconify" data-icon="ph:chat-circle-duotone"></i>
          <div class="meta">
            <span>Dedicated Support Team</span>
            <span class="rem-90">2 min response time</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.carousel-wrap {
  max-width: 840px;
  margin: 0 auto;

  .testimonials-solo-carousel {
    .testimonial-item {
      background: var(--card-bg-color);
      padding: 2.5rem;
      border: 1px solid var(--card-border-color);
      border-radius: 0.75rem;
      box-shadow: var(--light-box-shadow);
      display: flex;

      .left-side {
        .avatar-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 220px;
          height: 175px;
          margin: 0 auto;

          img {
            display: block;

            &.avatar {
              position: relative;
              height: 140px;
              width: 140px;
              border-radius: 50%;
              z-index: 1;
            }
          }

          .dots {
            position: absolute;
            width: 100%;
            max-width: 90px;
            transform: scale(0.9);
            z-index: 0;

            &.is-top {
              top: 0;
              left: 0;
            }

            &.is-bottom {
              bottom: 0;
              right: 0;
            }
          }
        }

        .avatar-info {
          text-align: center;
          padding: 16px 0;

          h3 {
            font-family: var(--font-alt);
            font-size: 1.2rem;
            color: var(--title-color);
          }

          p {
            color: var(--light-text);
          }
        }
      }

      .right-side {
        padding: 0 40px;
        text-align: left;

        .company-logo {
          display: block;
          width: 100%;
          max-width: 100px;
          margin-bottom: 1rem;
          margin-left: -0.5rem;
        }

        .testimonial-content {
          .text-content {
            font-family: var(--font);
            text-align: left;
            color: var(--medium-text);
            margin-bottom: 10px;
          }

          .metrics {
            display: flex;
            padding-top: 16px;

            svg {
              color: var(--primary);
              font-size: 1.25rem;
              margin-right: 0.75rem;
            }

            .metric {
              display: flex;
              align-items: center;
              margin-right: 30px;

              .meta {
                span {
                  font-family: var(--font);
                  display: block;
                  line-height: 1.2;

                  &:first-child {
                    font-weight: 600;
                    color: var(--title-color);
                  }

                  &:nth-child(2) {
                    color: var(--medium-text);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .carousel-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 540px;
    margin: 0 auto;
    padding: 30px 0;
    font-family: var(--font);

    > div {
      width: 50%;
      padding: 0 20px;

      &.rating-block {
        text-align: center;
        border-right: 1px solid var(--light-text);

        .stars {
          svg {
            font-size: 1.1rem;
            color: var(--yellow);
            margin: 0.2rem;
          }
        }

        p {
          color: var(--light-text);
        }
      }

      &.support-block {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 1.5rem;
          color: var(--primary);
        }

        .meta {
          margin-left: 12px;

          span {
            display: block;
            line-height: 1.2;
            color: var(--light-text);
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .carousel-wrap {
    .testimonials-solo-carousel {
      .testimonial-item {
        flex-direction: column;

        .left-side,
        .right-side {
          width: 100%;
        }

        .right-side {
          padding: 0;

          .testimonial-content {
            .learn-more {
              margin-bottom: 20px;
            }

            .metrics {
              .metric {
                flex-direction: column;
                width: 50%;
                margin: 0 auto;

                .meta {
                  margin: 0;
                  padding-top: 12px;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
}

:deep(.carousel__next--in-active),
:deep(.carousel__prev--in-active) {
  opacity: 0.7;
}

:deep(.carousel__next) {
  right: 25px;

  svg {
    right: -1px;
  }
}

:deep(.carousel__prev) {
  right: 35px;

  svg {
    left: -1px;
  }
}

:deep(.carousel__next),
:deep(.carousel__prev) {
  position: absolute;
  top: -35px;
  left: initial;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  color: var(--light-text);
  box-shadow: var(--light-box-shadow);
  transition: border-color 0.3s, color 0.3s;

  svg {
    position: relative;
    width: 1em;
  }

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
}

.is-dark {
  .carousel-wrap {
    .testimonials-solo-carousel {
      .testimonial-item {
        .right-side .company-logo {
          filter: invert(1);
        }
      }
    }
  }
}
</style>
