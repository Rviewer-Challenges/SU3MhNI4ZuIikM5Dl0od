<script setup lang="ts">
import { computed } from 'vue'

export type FooterColors = 'light' | 'dark' | 'default'

export interface FooterDSocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterDProps {
  text: string
  color?: FooterColors
  socialLinks?: FooterDSocialLink[]
  bubbles?: boolean
  curved?: boolean
  image?: string
}

const props = withDefaults(defineProps<FooterDProps>(), {
  color: 'default',
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
  <footer class="footer" :class="footerClasses">
    <FooterBubbles v-if="props.bubbles" />

    <div class="container footer-inner">
      <div class="columns is-multiline">
        <div class="column is-6 b-centered-tablet-p b-centered-mobile">
          <div class="columns is-flex-tablet is-flex-mobile">
            <div class="column is-6">
              <div class="footer-group">
                <slot name="column-1">
                  <Title
                    tag="h3"
                    :size="6"
                    weight="thin"
                    :inverted="props.color === 'dark'"
                  >
                    <span>Descubre</span>
                  </Title>
                  <ul class="link-list">
                    <li>
                      <RouterLink
                        :to="{ path: '/' }"
                        class="level-item footer-link"
                      >
                        Inicio
                      </RouterLink>
                    </li>
                    <li>
                      <RouterLink
                        :to="{ path: '/pricing' }"
                        class="level-item footer-link"
                      >
                        Planes
                      </RouterLink>
                    </li>
                    <li>
                      <a
                        href="https://status.deply.dev/"
                        target="_blank"
                        class="level-item footer-link"
                      >
                        Status
                    </a>
                    </li>
                    <li>
                      <a
                        href="https://app.deply.dev/register/"
                        class="level-item footer-link"
                      >
                        Regístrate
                    </a>
                    </li>
                    <li>
                      <a
                        href="https://app.deply.dev/login/?next=/"
                        class="level-item footer-link"
                      >
                        Inicia sesión
                    </a>
                    </li>
                  </ul>
                </slot>
              </div>
            </div>
            <div class="column is-6">
              <div class="footer-group">
                <slot name="column-3">
                  <Title
                    tag="h3"
                    :size="6"
                    weight="thin"
                    :inverted="props.color === 'dark'"
                  >
                    <span>Contacto</span>
                  </Title>
                  <ul class="link-list">
                    <li>
                      <a
                        href="https://discord.gg/KSNDpE4Tsv"
                        class="level-item footer-link"
                      >
                        Discord
                    </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/guiolmar"
                        class="level-item footer-link"
                      >
                        Github
                    </a>
                    </li>
                    <li>
                      <a
                        href="mailto:hola@deply.dev"
                        class="level-item footer-link"
                      >
                        Contacto
                    </a>
                    </li>
                    <!-- <li>
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
                    </li> -->
                  </ul>
                </slot>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-6 b-centered-mobile b-centered-tablet-p">
          <div class="footer-group">
            <a
              class="
                is-flex
                j-center-mobile j-center-tablet-p
                footer-logo-left
                css-ninja
              "
              href="#"
            >
              <img
                class="size-44x44"
                src="/assets/logo/logo.png"
                alt="Footer logo"
              />
              <span class="is-sr-only">Logo</span>
            </a>
            <p class="footer-text rem-90 max-w-3 mt-4 b-centered-tablet-p">
              {{ props.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container copyright pt-12">
      <div
        class="
          is-flex is-align-items-center is-justify-content-space-between
          d-column-r-mobile d-column-r-tablet-p
        "
      >
        <div class="py-4">
          <span class="footer-text rem-90">
            <span role="img" aria-label="copyright">©</span>
            2022-2023 Deply. All rights reserved. Made with ❤ by <a href="https://github.com/guiolmar">guiolmar</a> for Day of the Programmer Hackathon by Brais Moure. But it's fully functional. ^^
          </span>
        </div>
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
      //color: var(--white-smoke);
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
}

@media only screen and (max-width: 767px) {
  .footer {
    :deep(.level-item) {
      justify-content: center !important;
    }

    &.footer-curved {
      border-top-left-radius: 80% 20%;
      border-top-right-radius: 80% 20%;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .footer {
    :deep(.level-item) {
      justify-content: center !important;
    }
  }
}
</style>
