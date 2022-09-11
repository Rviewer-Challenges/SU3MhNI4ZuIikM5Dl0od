<script setup lang="ts">
import { computed } from 'vue'

export type TestimonialBgColor = 'default' | 'grey' | 'darker' | 'gradient'

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

export interface TestimonialsProps {
  testimonials: TestimonialItem[]
  color?: TestimonialBgColor
  compact?: boolean
}

const props = withDefaults(defineProps<TestimonialsProps>(), {
  testimonials: () => [],
  color: 'default',
  compact: false,
})

const testimonialClasses = computed(() => [props.color && `is-${props.color}`])
</script>

<template>
  <div class="marquee-testimonials" :class="testimonialClasses">
    <MarqueeText :repeat="10" :duration="40">
      <div class="marquee-testimonials-inner">
        <div class="row">
          <div
            v-for="(testimonial, index) in props.testimonials"
            :key="index"
            class="box"
          >
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
                alt="Testimonial logo"
                width="90"
                height="38"
              />
            </div>
            <div class="body">
              <p>{{ testimonial.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </MarqueeText>

    <div v-if="!compact" class="buttons is-centered is-relative z-1 py-6">
      <Button color="primary" :long="2" elevated bold custom>Free Trial</Button>
      <Button :long="2" outlined-light bold custom>Let's Talk</Button>
      <img
        class="text"
        src="/assets/illustrations/text/text.svg"
        alt="No credit card"
        width="440"
        height="150"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin section-gradient {
  background: var(--primary);
  background: linear-gradient(
    to right,
    var(--primary),
    var(--primary-dark-22)
  ) !important;
}

.marquee-testimonials {
  position: relative;

  &.is-default {
    background: --section-bg-color;
  }

  &.is-darker {
    background: var(--section-bg-color-dark);
  }

  &.is-grey {
    background: var(--section-bg-color-grey);
  }

  &.is-gradient {
    @include section-gradient();
  }

  .marquee-testimonials-inner {
    white-space: nowrap;
    will-change: transform;
    padding: 1rem 0 3rem;

    .row {
      display: flex;
      flex-wrap: wrap;
      min-width: 2520px;
      max-width: 2520px;
      white-space: normal;

      .box {
        width: 480px;
        min-width: 480px;
        padding: 2rem;
        border-radius: 0.75rem;
        background: var(--testimonial-card-bg-color);
        border: 1px solid var(--testimonial-card-border-color);
        display: block;
        margin: 12px;

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
            top: 0;
            right: 0;
            display: block;
            max-width: 90px;
          }
        }

        .body {
          p {
            font-family: var(--font);
            font-size: 0.95rem;
            white-space: normal;
            color: var(--medium-text);
          }
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
  .marquee-testimonials {
    .marquee-testimonials-inner {
      .row {
        .box {
          .head .logo {
            filter: invert(1);
          }
        }
      }
    }
  }
}
</style>
