<script setup lang="ts">
import { computed } from 'vue'

export interface TestimonialBlockBItem {
  content: string
  avatar: string
  name: string
  position: string
  logo: string
}

export interface TestimonialBlockBProps {
  testimonials: TestimonialBlockBItem[]
  squared?: boolean
  limit?: number
}

const props = withDefaults(defineProps<TestimonialBlockBProps>(), {
  squared: false,
  limit: 3,
})

const blockClasses = computed(() => [props.squared && `is-squared`])
</script>

<template>
  <div class="py-6">
    <div
      v-for="(testimonial, index) in props.testimonials.slice(0, props.limit)"
      :key="index"
      class="testimonial-box max-w-7 mx-auto"
      :class="blockClasses"
    >
      <div>
        <img
          class="testimonial-avatar small:mx-auto small:mb-4"
          :src="testimonial.avatar"
          alt="Testimonial image"
        />
      </div>

      <div class="is-relative max-w-5 px-4 small:px-0 small:mx-auto">
        <p class="paragraph rem-90 mb-4">
          <i class="iconify mr-2 text-light" data-icon="fa:quote-left"></i>
          {{ testimonial.content }}
        </p>
        <Title tag="h3" :size="7" weight="semi" narrow>
          <span>{{ testimonial.name }}</span>
        </Title>
        <p class="paragraph rem-90 text-light">{{ testimonial.position }}</p>
        <img
          class="testimonial-logo"
          :src="testimonial.logo"
          alt="company logo"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../../scss/abstracts/mixins';

.testimonial-box {
  display: flex;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  box-shadow: var(--light-box-shadow);
  padding: 2rem;
  @include magic-border(2px, var(--primary), 0.3s, 0);

  .testimonial-avatar {
    display: block;
    border-radius: 50%;
    width: 100px;
    min-width: 100px;
    height: 100px;
    object-fit: cover;
  }

  .testimonial-logo {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 80px;
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  &.is-squared {
    .testimonial-avatar {
      border-radius: 1.25rem;
    }
  }
}

.is-dark {
  .testimonial-box {
    .testimonial-logo {
      filter: invert(1);
    }
  }
}

@media only screen and (max-width: 767px) {
  .testimonial-box {
    flex-direction: column;

    .testimonial-avatar {
      margin: 0 auto 1.5rem;
    }
  }
}
</style>
