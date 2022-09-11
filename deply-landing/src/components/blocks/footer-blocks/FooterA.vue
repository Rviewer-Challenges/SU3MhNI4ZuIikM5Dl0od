<script setup lang="ts">
import { computed } from 'vue'

export type FooterColors = 'light' | 'dark'

export interface FooterASocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterAProps {
  color?: FooterColors
  socialLinks?: FooterASocialLink[]
  bubbles?: boolean
  curved?: boolean
}

const props = withDefaults(defineProps<FooterAProps>(), {
  color: undefined,
  socialLinks: undefined,
  bubbles: false,
  curved: false,
})

const footerClasses = computed(() => [
  props.color && `footer-${props.color}`,
  props.curved && `footer-curved`,
  props.bubbles && 'footer-overflow',
])
</script>

<template>
  <footer class="footer" :class="footerClasses">
    <FooterBubbles v-if="props.bubbles" />

    <div class="container">
      <div class="columns is-vcentered b-flex-tablet-p">
        <div class="column is-4">
          <div class="level is-mobile mobile:mb-4">
            <slot name="leftLinks">
              <RouterLink
                :to="{ name: 'index' }"
                class="level-item footer-link"
              >
                Product
              </RouterLink>
              <RouterLink
                :to="{ name: 'index' }"
                class="level-item footer-link"
              >
                Features
              </RouterLink>
              <RouterLink
                :to="{ name: 'index' }"
                class="level-item footer-link"
              >
                Docs
              </RouterLink>
            </slot>
          </div>
        </div>
        <div class="column is-4 has-text-centered">
          <RouterLink class="footer-logo-centered" :to="{ name: 'index' }">
            <img
              class="is-block size-44x44"
              src="/assets/logo/logo.png"
              alt="Footer logo"
            />
            <span class="is-sr-only">Logo</span>
          </RouterLink>
          <div
            v-if="props.socialLinks"
            class="level is-mobile py-4 mx-auto max-w-1"
          >
            <RouterLink
              v-for="(link, index) in props.socialLinks"
              :key="index"
              :to="link.url"
              class="level-item footer-link"
            >
              <span class="icon">
                <i class="iconify" :data-icon="link.icon"></i>
              </span>
              <span class="is-sr-only">{{ link.name }}</span>
            </RouterLink>
          </div>
        </div>
        <div class="column is-4 has-text-right">
          <div class="level is-mobile">
            <slot name="rightLinks">
              <RouterLink
                :to="{ name: 'index' }"
                class="level-item footer-link"
              >
                Company
              </RouterLink>
              <RouterLink
                :to="{ name: 'index' }"
                class="level-item footer-link"
              >
                About
              </RouterLink>
              <RouterLink
                :to="{ name: 'index' }"
                class="level-item footer-link"
              >
                Support
              </RouterLink>
            </slot>
          </div>
        </div>
      </div>
      <p class="paragraph rem-90 footer-text has-text-centered is-6">
        <span role="img" aria-label="copyright">©</span>
        2020-2021 Vulk. All rights reserved.
      </p>
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
    }

    .footer-text {
      color: var(--white-smoke);
    }
  }

  &.footer-left {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .footer-link {
    position: relative;
    font-family: var(--font);
    color: var(--medium-text);
    transition: color 0.3s;

    &::before {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 35%;
      transform-origin: right center;
      height: 3px;
      border-radius: 50px;
      background: var(--primary);
      transform: scale(0, 1);
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:hover {
      color: var(--primary-light-5);
      opacity: 1;

      &::before {
        transform-origin: left center;
        transform: scale(1, 1);
      }
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
}

@media only screen and (max-width: 767px) {
  .footer {
    .footer-link {
      margin-right: 0 !important;
    }

    &.footer-curved {
      border-top-left-radius: 80% 20%;
      border-top-right-radius: 80% 20%;
    }
  }
}
</style>
