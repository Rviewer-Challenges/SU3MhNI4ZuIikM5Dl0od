<script setup lang="ts">
import type { SocialLink } from '/@src/types'

export interface TestimonialBlockDItem {
  content: string
  avatar: string
  name: string
  position: string
  logo: string
  socialLinks: SocialLink[]
}

export interface TestimonialBlockDProps {
  testimonials: TestimonialBlockDItem[]
  squared?: boolean
  limit?: number
}

const props = withDefaults(defineProps<TestimonialBlockDProps>(), {
  squared: false,
  limit: 4,
})
</script>

<template>
  <div class="py-6">
    <div class="testimonials">
      <div class="columns is-multiline">
        <div
          v-for="(testimonial, index) in props.testimonials.slice(
            0,
            props.limit
          )"
          :key="index"
          class="column is-6"
        >
          <div class="testimonial-box">
            <div class="testimonial-content">
              <div class="mb-4">
                <Title tag="h3" :size="6" weight="semi" narrow>
                  <span>{{ testimonial.name }}</span>
                </Title>
                <p class="paragraph rem-80 text-light">
                  {{ testimonial.position }}
                </p>
              </div>
              <p class="paragraph rem-85 mb-4">
                <i
                  class="iconify mr-2 text-light"
                  data-icon="fa:quote-left"
                ></i>
                {{ testimonial.content }}
              </p>
              <div class="social">
                <RouterLink
                  v-for="(link, i) in testimonial.socialLinks"
                  :key="i"
                  :to="link.url"
                  target="_blank"
                  class="px-1"
                >
                  <i class="iconify" :data-icon="link.icon"></i>
                  <span class="is-sr-only">{{ link.name }}</span>
                </RouterLink>
              </div>
            </div>
            <div class="image">
              <AvatarSimple
                size="xl"
                :picture="testimonial.avatar"
                :squared="props.squared"
              />
              <img
                class="testimonial-logo"
                :src="testimonial.logo"
                alt="company logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.testimonial-box {
  position: relative;
  display: flex;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  box-shadow: var(--light-box-shadow);
  padding: 2.5rem;
  border-radius: 1.25rem;

  .image {
    position: relative;
    margin-left: 2rem;
  }

  .testimonial-logo {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    max-width: 75px;
  }

  .social {
    a {
      &:hover {
        color: var(--primary-light-12);
      }
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

    .image {
      margin: 1.5rem 0 0;

      :deep(.avatar) {
        .avatar-image {
          height: 60px;
          width: 60px;
          min-width: 60px;
        }
      }
    }

    .testimonial-logo {
      bottom: 20px;
    }
  }
}
</style>
