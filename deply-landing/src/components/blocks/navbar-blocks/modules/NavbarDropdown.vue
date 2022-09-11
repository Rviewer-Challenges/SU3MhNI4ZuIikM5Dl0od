<script setup lang="ts">
import { computed } from 'vue'

export interface NavbarDropdownProps {
  label: string
  boxed?: boolean
}

const props = withDefaults(defineProps<NavbarDropdownProps>(), {
  boxed: false,
})

const dropdownClasses = computed(() => [props.boxed && `is-boxed`])
</script>

<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link is-arrowless">
      <span>{{ props.label }}</span>
      <i class="iconify" data-icon="feather:chevron-down"></i>
    </a>

    <div class="navbar-dropdown" :class="dropdownClasses">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar-item {
  &.has-dropdown {
    .navbar-link {
      color: var(--navbar-link-color-medium);

      .iconify {
        margin-left: 0.25rem;
        transition: transform 0.3s;
      }

      &:hover {
        .iconify {
          transform: rotate(180deg);
        }
      }
    }

    .navbar-dropdown {
      background: var(--navbar-bg-color);
      border: 1px solid var(--navbar-border-color);
      box-shadow: var(--light-box-shadow);
      min-width: 210px;
      padding: 0.75rem 0;

      :deep(.navbar-item) {
        margin: 0 0.75rem;
        padding: 0.5rem 0.75rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s;
        color: var(--navbar-link-color-medium);

        &:hover {
          background: var(--navbar-dropdown-item-hover-bg) !important;
          color: var(--primary);
        }
      }

      :deep(.navbar-divider) {
        background: var(--navbar-border-color);
      }

      &.is-boxed {
        border-radius: 0.75rem;
      }
    }
  }
}

.is-inverted {
  .navbar-item {
    &.has-dropdown {
      .navbar-link {
        color: var(--navbar-link-color-inverted);
      }
    }
  }
}

.is-scrolled,
.is-solid {
  .navbar-item {
    &.has-dropdown {
      .navbar-link {
        color: var(--navbar-link-color-medium);
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .navbar-item {
    &.has-dropdown {
      .navbar-link {
        display: none;
      }

      .navbar-dropdown {
        border: none;
        box-shadow: none;
        padding-top: 0;

        :deep(.navbar-item) {
          font-size: 1rem;

          &.is-flex {
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .navbar-item {
    &.has-dropdown {
      .navbar-link {
        display: none;
      }

      .navbar-dropdown {
        border: none;
        box-shadow: none;
        padding-top: 0;

        :deep(.navbar-item) {
          font-size: 1rem;

          &.is-flex {
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
