<script setup lang="ts">
import { computed, ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'

export type NavbarMode = 'solid' | 'fade' | 'inverted'

export interface NavbarProps {
  fixed?: boolean
  dropdownBoxed?: boolean
  mode?: NavbarMode
}

const props = withDefaults(defineProps<NavbarProps>(), {
  fixed: false,
  dropdownBoxed: false,
  mode: 'fade',
})

const { y } = useWindowScroll()
const isScrolled = computed(() => {
  return y.value > 60
})
const isNavbarOpen = ref(false)
const socialItems = [
  {
    icon: 'fa:twitter',
    label: 'Twitter',
    link: 'https://twitter.com',
  },
  {
    icon: 'fa:linkedin',
    label: 'Linkedin',
    link: 'https://linkedin.com',
  },
  {
    icon: 'fa:github',
    label: 'Github',
    link: 'https://github.com',
  },
]

const navbarClasses = computed(() => [
  props.fixed && `is-fixed-top`,
  props.mode && `is-${props.mode}`,
  props.fixed && isScrolled.value && 'is-scrolled',
  isNavbarOpen.value && `is-solid`,
])

const navbarMenuClasses = computed(() => [isNavbarOpen.value && `is-active`])
</script>

<template>
  <nav class="navbar is-transparent is-centered" :class="navbarClasses">
    <div class="container">
      <div class="navbar-brand">
        <RouterLink :to="{ name: 'index' }" class="navbar-item">
          <img class="navbar-logo" src="/assets/logo/logo.png" alt="logo" />
          <span class="is-sr-only">Vulk</span>
        </RouterLink>
        <div
          class="navbar-burger"
          @click.prevent="isNavbarOpen = !isNavbarOpen"
          @keydown.space.prevent="() => (isNavbarOpen = !isNavbarOpen)"
        >
          <Hamburger :open="isNavbarOpen" />
        </div>
      </div>
      <div
        class="navbar-menu b-centered-mobile b-centered-tablet-p"
        :class="navbarMenuClasses"
      >
        <div class="navbar-start">
          <div class="left-brand">
            <RouterLink :to="{ name: 'index' }" class="navbar-item">
              <img src="/assets/logo/logo.png" alt="logo" />
              <span class="is-sr-only">Vulk</span>
            </RouterLink>
          </div>
        </div>
        <div class="navbar-center">
          <RouterLink :to="{ name: 'index' }" class="navbar-item has-naver">
            Home
          </RouterLink>
          <RouterLink :to="{ name: 'index' }" class="navbar-item has-naver">
            Features
          </RouterLink>
          <RouterLink :to="{ name: 'index' }" class="navbar-item has-naver">
            Pricing
          </RouterLink>
          <RouterLink :to="{ name: 'index' }" class="navbar-item has-naver">
            Team
          </RouterLink>
        </div>
        <div class="navbar-end">
          <div
            class="
              navbar-item
              is-flex is-align-items-center is-justify-content-center
            "
          >
            <ThemeToggle />
          </div>
          <div class="navbar-item">
            <NavbarSocialItem
              v-for="(item, index) in socialItems"
              :key="index"
              :icon="item.icon"
              :label="item.label"
              :link="item.link"
            />
          </div>
          <div class="navbar-item">
            <Button color="primary" raised bold custom>Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  height: 70px;
  transition: all 0.3s;

  .navbar-brand {
    height: 70px;

    .navbar-logo {
      display: block;
      width: 100%;
      max-width: 140px;
      max-height: 38px;
    }

    .navbar-burger {
      display: none;
      align-items: center;
      justify-content: center;
      height: 70px;
      width: 70px;
      background: none;
    }
  }

  .navbar-menu {
    &.is-active {
      text-align: center;
      background: var(--navbar-bg-color);
      box-shadow: rgb(0 0 0 / 8%) 0 1px 12px;
    }
  }

  .navbar-item {
    font-family: var(--font);
    color: var(--navbar-link-color-medium);
    transition: color 0.3s;
    background: none;
    border: none;

    &:hover {
      color: var(--primary);
    }

    &.has-naver {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        transform-origin: right center;
        height: 3px;
        border-radius: 50px;
        background: var(--primary);
        transform: scale(0, 1);
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }

      &:hover {
        color: var(--primary);

        &::before {
          transform-origin: left center;
          transform: scale(1, 1);
        }
      }
    }

    &.has-dropdown {
      .navbar-link {
        color: var(--medium-text);

        &:hover {
          color: var(--primary);
        }
      }

      .navbar-dropdown {
        width: 240px;
      }
    }

    > .button {
      min-height: 44px;
      min-width: 110px;
    }
  }

  &.is-fade {
    background: transparent;

    &.is-scrolled {
      background: var(--navbar-bg-color);
      box-shadow: rgb(0 0 0 / 8%) 0 1px 12px;

      .navbar-item {
        color: var(--navbar-link-color-medium);
      }
    }
  }

  &.is-inverted {
    background: transparent;

    .navbar-item {
      color: var(--navbar-link-color-inverted);
    }

    &.is-scrolled {
      background: var(--navbar-bg-color);
      box-shadow: rgb(0 0 0 / 8%) 0 1px 12px;

      .navbar-item {
        color: var(--navbar-link-color-medium);
      }
    }
  }

  &.is-solid {
    background: var(--navbar-bg-color);
    box-shadow: none;

    .navbar-menu {
      border-bottom: 1px solid var(--navbar-border-color);

      .navbar-item {
        color: var(--navbar-link-color-medium);
      }
    }
  }

  &.is-centered {
    .navbar-brand {
      display: none;
    }

    .navbar-menu {
      justify-content: space-between;

      .navbar-start,
      .navbar-end {
        width: 20%;
      }

      .navbar-start {
        .left-brand {
          display: flex;
          align-items: center;

          .navbar-item {
            img {
              display: block;
              width: 100%;
              max-width: 140px;
              max-height: 38px;
            }
          }
        }
      }

      .navbar-center {
        flex-grow: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        .navbar-item {
          min-height: 70px;
        }

        .centered-brand {
          .navbar-item {
            img {
              display: block;
              width: 100%;
              max-width: 140px;
              max-height: 38px;
              margin: 0 auto;
            }
          }
        }

        .navbar-item {
          &.is-search {
            flex-grow: 2;
            max-width: 450px;
            margin: 0 auto;

            .control {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 980px) {
  .navbar {
    .navbar-brand {
      .navbar-burger {
        display: flex !important;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .navbar {
    .navbar-brand {
      .navbar-burger {
        display: flex;
      }
    }

    .navbar-menu {
      .navbar-start,
      .navbar-end {
        width: 100% !important;
      }
    }

    .navbar-item {
      &.has-naver {
        &::before {
          display: none !important;
        }
      }

      &.has-dropdown {
        .navbar-dropdown {
          width: 100%;
        }
      }

      .button {
        min-height: 46px;
        width: 100%;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .navbar {
    .navbar-brand {
      .navbar-burger {
        display: flex;
      }
    }

    .navbar-menu {
      max-width: 100%;

      .navbar-start,
      .navbar-end {
        width: 100% !important;
      }
    }

    .navbar-item {
      &.has-dropdown {
        .navbar-dropdown {
          width: 100%;
        }
      }

      .button {
        min-height: 46px;
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .navbar {
    &.is-centered {
      &:not(.no-nav) {
        .navbar-brand {
          display: flex;
        }

        .navbar-menu {
          .navbar-center {
            display: none !important;
          }
        }
      }

      &.no-nav {
        .navbar-menu {
          display: flex !important;
          padding: 0 !important;
          box-shadow: none !important;
          background: transparent !important;
        }
      }
    }
  }
}
</style>
