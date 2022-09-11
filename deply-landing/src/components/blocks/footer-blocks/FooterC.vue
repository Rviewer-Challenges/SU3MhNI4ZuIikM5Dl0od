<script setup lang="ts">
import { computed } from 'vue'

export type FooterColors = 'light' | 'dark'

export interface FooterCSocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterCProps {
  text: string
  color?: FooterColors
  socialLinks?: FooterCSocialLink[]
  bubbles?: boolean
  curved?: boolean
  image?: string
}

const props = withDefaults(defineProps<FooterCProps>(), {
  color: undefined,
  socialLinks: undefined,
  bubbles: false,
  curved: false,
  image: undefined,
})

const footerClasses = computed(() => [
  props.color && `footer-${props.color}`,
  props.curved && `footer-curved`,
  props.bubbles && 'footer-overflow',
])
</script>

<template>
  <footer class="footer footer-bottom-illustration" :class="footerClasses">
    <FooterBubbles v-if="props.bubbles" />

    <div class="container footer-inner">
      <div class="columns is-multiline b-only-tablet-p-flex">
        <div class="column is-3">
          <div class="footer-group">
            <a class="footer-logo-left css-ninja" href="#">
              <img
                class="size-44x44"
                src="/assets/logo/logo.png"
                alt="Footer logo"
              />
              <span class="is-sr-only">Footer logo</span>
            </a>
            <p class="footer-text rem-90 max-w-3 mt-4">{{ props.text }}</p>
            <div class="level is-mobile py-4 max-w-1">
              <RouterLink
                v-for="(link, index) in props.socialLinks"
                :key="index"
                class="level-item footer-link"
                :to="link.url"
              >
                <span class="icon">
                  <i class="iconify" :data-icon="link.icon"></i>
                  <span class="is-sr-only">{{ link.name }}</span>
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="column is-8 is-offset-1">
          <div class="columns b-only-tablet-p-flex b-columns-half-mobile">
            <div class="column is-4">
              <div class="footer-group">
                <slot name="column-1">
                  <Title
                    tag="h3"
                    :size="6"
                    weight="thin"
                    :inverted="props.color === 'dark'"
                  >
                    <span>Discover</span>
                  </Title>
                  <ul>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Get Started
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Product
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Features
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Sign Up
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Sign In
                      </RouterLink>
                    </li>
                  </ul>
                </slot>
              </div>
            </div>
            <div class="column is-4">
              <div class="footer-group">
                <slot name="column-2">
                  <Title
                    tag="h3"
                    :size="6"
                    weight="thin"
                    :inverted="props.color === 'dark'"
                  >
                    <span>Company</span>
                  </Title>
                  <ul>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Company
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        About
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Training
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        FAQs
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Contact
                      </RouterLink>
                    </li>
                  </ul>
                </slot>
              </div>
            </div>
            <div class="column is-4">
              <div class="footer-group xs:pt-6">
                <slot name="column-3">
                  <Title
                    tag="h3"
                    :size="6"
                    weight="thin"
                    :inverted="props.color === 'dark'"
                  >
                    <span>Support</span>
                  </Title>
                  <ul>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Help Center
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Guides
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        API Docs
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Terms
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ name: 'index' }"
                        class="level-item footer-link"
                      >
                        Privacy
                      </RouterLink>
                    </li>
                  </ul>
                </slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="props.image" class="footer-img" role="presentation">
      <img :src="props.image" alt="footer-image" />
    </div>
    <div class="container copyright">
      <div class="has-text-centered">
        <span class="footer-text rem-90">
          <span role="img" aria-label="copyright">©</span>
          2020-2021 Vulk. All rights reserved.
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  position: relative;
  padding-top: 6rem;
  padding-bottom: 3rem;
  background: var(--footer-default-bg-color);

  &.footer-overflow {
    :global(body) {
      //overflow-x: hidden;
    }
  }

  &.footer-curved {
    border-top-left-radius: 50% 20%;
    border-top-right-radius: 50% 20%;
  }

  &.footer-light {
    background: var(--footer-light-bg-color);
  }

  &.footer-dark {
    background: var(--footer-dark-bg-color);

    .title {
      color: var(--white-smoke);
      opacity: 0.6;
    }

    .footer-link {
      color: var(--white-smoke);
      opacity: 0.8;

      &:hover {
        color: var(--primary-light-10) !important;
        opacity: 1;
      }
    }

    .footer-text {
      color: var(--white-smoke);
    }
  }

  .footer-group {
    text-align: left;
  }

  .footer-link,
  :deep(.footer-link) {
    font-family: var(--font);
    color: var(--medium-text);
    transition: color 0.3s;
    justify-content: flex-start;
    font-size: 0.95rem;

    &:hover {
      color: var(--primary);
    }
  }

  .footer-text {
    font-family: var(--font);
    color: var(--medium-text);
  }

  .footer-logo-centered {
    display: block;
    width: 100%;

    img {
      margin: 0 auto;
    }
  }

  .footer-logo-left {
    img {
      display: block;
    }
  }

  .footer-img {
    margin: 20px auto 18px;
    height: 140px;
    width: 100%;
    max-width: 640px;

    img {
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}

@media only screen and (max-width: 767px) {
  .footer {
    &.footer-curved {
      border-top-left-radius: 80% 20%;
      border-top-right-radius: 80% 20%;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .b-only-tablet-p-flex {
    .column {
      &.is-3 {
        width: 40%;
        max-width: 40%;
        padding-right: 2rem;
      }
    }
  }
}
</style>
