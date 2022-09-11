<script setup lang="ts">
export interface TestimonialCustomer {
  name: string
  photo: string
  position: string
}

export interface TestimonialItem {
  logo: string
  content: string
  customer: TestimonialCustomer
}

export interface TestimonialsGridProps {
  testimonials: TestimonialItem[]
  blobs: boolean
}

const props = withDefaults(defineProps<TestimonialsGridProps>(), {
  testimonials: () => [],
  blobs: false,
})
</script>

<template>
  <div class="testimonials-grid py-6">
    <Blob v-if="blobs" class="blob-1" color="primary" />
    <Blob v-if="blobs" class="blob-2" color="primary" />
    <Blob v-if="blobs" class="blob-3" color="primary" />
    <div class="testimonials-grid-inner">
      <div class="columns is-multiline b-columns-half-tablet-p">
        <div
          v-for="(testimonial, index) in props.testimonials"
          :key="index"
          class="column is-4"
        >
          <div class="box">
            <div class="head">
              <AvatarSimple
                :picture="testimonial.customer.photo"
                size="medium"
              />
              <div class="meta">
                <span>{{ testimonial.customer.name }}</span>
                <span>{{ testimonial.customer.position }}</span>
              </div>
              <img
                class="logo"
                :src="testimonial.logo"
                alt="testimonial logo"
                width="300"
                height="113"
              />
            </div>
            <div class="body">
              <p>{{ testimonial.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.testimonials-grid {
  position: relative;

  .morphing-blob-wrapper {
    position: absolute;
    opacity: 0.15;
    z-index: 0;

    &.blob-1 {
      top: 0;
      left: 0;
      transform: scale(2.1);
    }

    &.blob-2 {
      bottom: 10%;
      right: -5%;
      transform: scale(1.3);
    }

    &.blob-3 {
      top: -12%;
      right: -12%;
      transform: scale(0.7);
    }
  }

  .testimonials-grid-inner {
    position: relative;
    z-index: 1;

    .box {
      padding: 2rem;
      background: var(--testimonial-card-bg-color);
      border-radius: 0.75rem;
      border: 1px solid var(--testimonial-card-border-color);
      display: block;

      .head {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;

        .meta {
          margin-left: 0.75rem;

          span {
            display: block;

            &:first-child {
              font-family: var(--font-alt);
              font-weight: 600;
              font-size: 0.9rem;
              color: var(--testimonial-card-name-color);
            }

            &:nth-child(2) {
              font-family: var(--font);
              font-size: 0.9rem;
              color: var(--light-text);
            }
          }
        }

        .logo {
          position: absolute;
          top: -1rem;
          right: -0.75rem;
          display: block;
          max-width: 80px;
        }
      }

      .body {
        p {
          font-size: 0.95rem;
          white-space: normal;
          font-family: var(--font);
          color: var(--medium-text);
          overflow: hidden;
          display: block;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }

  .buttons {
    .text {
      position: absolute;
      top: 0;
      left: calc(50% - 640px);
      width: 440px;
    }
  }
}

.is-dark {
  .testimonials-grid {
    .testimonials-grid-inner {
      .box {
        .head {
          .logo {
            filter: invert(1);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .testimonials-grid {
    .morphing-blob-wrapper {
      &.blob-1 {
        top: -75px;
        left: -100px;
        transform: scale(1.6);
      }

      &.blob-2 {
        bottom: -2%;
        right: -22%;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .testimonials-grid {
    .testimonials-grid-inner {
      .box {
        padding: 3rem 1rem 1rem;

        .head {
          .avatar img {
            height: 28px !important;
            width: 28px !important;
            min-width: 28px !important;
          }

          .logo {
            top: -2rem;
            left: 0;
            right: initial;
            max-width: 65px;
          }
        }
      }
    }
  }
}
</style>
