<script setup lang="ts">
import { computed } from 'vue'
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface TestimonialBlockEProps {
  content: string
  image: string
  name: string
  position: string
  logo?: string
  curved?: boolean
  reversed?: boolean
}

const props = withDefaults(defineProps<TestimonialBlockEProps>(), {
  logo: undefined,
  curved: false,
  reversed: false,
})

const boxClasses = computed(() => [
  props.curved && 'is-curved',
  props.reversed && 'is-reversed',
])
</script>

<template>
  <div class="py-6">
    <div class="testimonials-box mx-auto max-w-9" :class="boxClasses">
      <div class="testimonials-logo-setion">
        <img
          :src="props.image"
          alt="testimonial image"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '500x333')"
        />
      </div>
      <div class="testimonials-story">
        <div class="testimonials-content">
          <div class="star-ratings">
            <i class="iconify mr-1 text-yellow" data-icon="uiw:star-on"></i>
            <i class="iconify mr-1 text-yellow" data-icon="uiw:star-on"></i>
            <i class="iconify mr-1 text-yellow" data-icon="uiw:star-on"></i>
            <i class="iconify mr-1 text-yellow" data-icon="uiw:star-on"></i>
            <i class="iconify mr-1 text-yellow" data-icon="uiw:star-on"></i>
          </div>
          <p class="paragraph rem-90 mb-5">
            <i class="iconify mr-2 text-light" data-icon="fa:quote-left"></i>
            {{ props.content }}
          </p>
          <div class="is-relative is-flex is-align-items-center">
            <div class="ml-2">
              <Title tag="h3" :size="6" weight="semi" narrow>
                <span>{{ props.name }}</span>
              </Title>
              <p class="paragraph rem-85 text-light">{{ props.position }}</p>
            </div>
          </div>
          <img
            v-if="props.logo"
            class="testimonial-logo"
            :src="props.logo"
            alt="company logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.testimonials-box {
  display: flex;
  align-items: stretch;
  position: relative;
  width: 100%;
  min-height: 380px;
  border-radius: 4px;
  background-color: var(--card-bg-color);
  box-shadow: var(--light-box-shadow-lg);
  overflow: hidden;

  .testimonials-logo-setion {
    position: absolute;
    top: 0;
    left: -10%;
    width: 50%;
    height: 100%;
    transform: skewX(-10deg);
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 50px;
      transform: skewX(10deg);
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .testimonials-story {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55%;
    min-height: 100%;
    margin-left: 45%;
    padding: 2.5rem;

    .testimonials-content {
      position: relative;

      .testimonial-logo {
        display: block;
        position: absolute;
        bottom: 0.25rem;
        right: 0;
        max-width: 75px;
      }
    }

    .star-ratings {
      font-size: 1.15rem;
      margin-bottom: 0.75rem;
    }
  }

  &.is-reversed {
    flex-direction: row-reverse;

    .testimonials-logo-setion {
      left: initial;
      right: -10%;
      transform: skewX(10deg);

      img {
        left: initial;
        right: 50px;
        transform: skewX(-10deg);
      }
    }

    .testimonials-story {
      margin-left: 0;
      margin-right: 45%;
    }
  }

  &.is-curved {
    border-radius: 1.5rem;
  }
}

.is-dark {
  .testimonials-box {
    .testimonials-story {
      .testimonials-content {
        .testimonial-logo {
          filter: invert(1);
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .testimonials-box {
    flex-direction: column;

    .testimonials-logo-setion {
      left: -30%;
      width: 125%;
    }

    .testimonials-story {
      width: calc(100% - 2rem);
      margin: 1rem;
      padding: 1.5rem;
      background: var(--card-bg-color);
      opacity: 0.9;
    }

    &.is-curved {
      .testimonials-story {
        border-radius: 1rem;
      }
    }

    &.is-reversed {
      .testimonials-logo-setion {
        left: initial;
        right: -30%;
      }

      .testimonials-story {
        margin: 1rem;
      }
    }
  }
}
</style>
