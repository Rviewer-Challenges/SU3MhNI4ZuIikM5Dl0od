<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type ButtonSize = 'medium' | 'large' | 'form'
export type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'

export interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  long?: 1 | 2 | 3
  rounded?: boolean
  outlined?: boolean
  raised?: boolean
  elevated?: boolean
  bold?: boolean
  fullwidth?: boolean
  to?: RouteLocationRaw
  href?: string
  loading?: boolean
  disabled?: boolean
  iconLeft?: string
  iconRight?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
  color: undefined,
  size: undefined,
  long: undefined,
  rounded: false,
  outlined: false,
  raised: false,
  elevated: false,
  fullwidth: false,
  to: undefined,
  href: undefined,
  loading: false,
  disabled: false,
  iconLeft: undefined,
  iconRight: undefined,
})

const buttonClasses = computed(() => [
  props.size && `is-${props.size}`,
  props.color && `is-${props.color}`,
  props.rounded && `is-rounded`,
  props.outlined && `is-outlined`,
  props.raised && `is-raised`,
  props.elevated && `is-elevated`,
  props.bold && `is-bold`,
  props.long && `is-long-${props.long}`,
  props.fullwidth && `is-fullwidth`,
  props.loading && `is-loading`,
])
</script>

<template>
  <RouterLink
    v-if="props.to"
    :to="props.to"
    class="button"
    :class="buttonClasses"
  >
    <i
      v-if="props.iconLeft"
      class="iconify mr-1"
      :data-icon="props.iconLeft"
    ></i>
    <slot></slot>
    <i
      v-if="props.iconRight"
      class="iconify ml-2"
      :data-icon="props.iconRight"
    ></i>
  </RouterLink>
  <a
    v-else-if="props.href"
    :href="props.href"
    class="button"
    :class="buttonClasses"
  >
    <i
      v-if="props.iconLeft"
      class="iconify mr-1"
      :data-icon="props.iconLeft"
    ></i>
    <slot></slot>
    <i
      v-if="props.iconRight"
      class="iconify ml-2"
      :data-icon="props.iconRight"
    ></i>
  </a>
  <button
    v-else
    class="button"
    :class="buttonClasses"
    :disabled="props.disabled"
  >
    <i
      v-if="props.iconLeft"
      class="iconify mr-1"
      :data-icon="props.iconLeft"
    ></i>
    <slot></slot>
    <i
      v-if="props.iconRight"
      class="iconify ml-2"
      :data-icon="props.iconRight"
    ></i>
  </button>
</template>

<style lang="scss" scoped>
.button {
  font-size: 0.95rem;
  font-family: var(--font);
  color: var(--button-base-color);
  background: var(--button-base-bg-color);
  border-color: var(--button-base-border-color);
  min-height: 48px;
  border-radius: 0.65rem;
  transition: all 0.3s;

  .iconify {
    vertical-align: middle;
  }

  &:active,
  &:focus {
    color: var(--button-base-color);
    box-shadow: var(--button-base-shadow);
    border-color: var(--button-base-border-color-hover);
  }

  &:focus:not(:active) {
    box-shadow: var(--button-base-shadow);
  }

  &:hover {
    border-color: var(--button-base-border-color-hover);
  }

  &.is-bold {
    font-weight: 500;
  }

  &.is-long-1 {
    min-width: 110px;
  }

  &.is-long-2 {
    min-width: 130px;
  }

  &.is-long-3 {
    min-width: 150px;
  }

  &.is-medium {
    font-size: 1.1rem;
    padding-bottom: calc(0.6em - 1px);
  }

  &.is-large {
    font-size: 1.25rem;
    padding-bottom: calc(0.6em - 1px);
  }

  &.is-form {
    min-height: 40px;
    height: 40px;
  }

  &.is-rounded {
    border-radius: 500rem;
    padding-right: calc(1em + 0.5em);
    padding-left: calc(1em + 0.5em);
  }

  &.is-light {
    color: var(--button-light-color);
    background: var(--button-light-bg-color);
    border-color: var(--button-light-border-color);

    &:hover {
      opacity: 0.6;
    }

    &.is-outlined {
      background: transparent;
      color: var(--button-light-color-inverted);
      border-color: var(--button-light-border-color-inverted);

      &:hover {
        opacity: 1;
        background: var(--button-light-bg-color-inverted);
        color: var(--button-light-color-inverted-hover);
      }
    }
  }

  &.is-primary {
    color: var(--button-primary-color);
    background: var(--button-primary-bg-color);
    border-color: var(--button-primary-border-color);

    &:hover {
      color: var(--button-primary-color);
      border-color: var(--button-primary-border-color-hover);
      background: var(--button-primary-bg-color-hover);
    }

    &.is-outlined {
      background: transparent;
      color: var(--button-primary-color-inverted);

      &:hover {
        background: var(--button-primary-bg-color);
        color: var(--white-smoke);
      }
    }

    &.is-raised:hover,
    &.is-elevated {
      box-shadow: var(--primary-box-shadow);
    }
  }

  &.is-secondary {
    color: var(--button-secondary-color);
    background: var(--button-secondary-bg-color);
    border-color: var(--button-secondary-border-color);

    &:hover {
      color: var(--button-secondary-color);
      border-color: var(--button-secondary-border-color-hover);
      background: var(--button-secondary-bg-color-hover);
    }

    &.is-outlined {
      background: transparent;
      color: var(--button-secondary-color-inverted);

      &:hover {
        background: var(--button-secondary-bg-color);
        color: var(--white-smoke);
      }
    }

    &.is-raised:hover,
    &.is-elevated {
      box-shadow: var(--secondary-box-shadow);
    }
  }

  &.is-success {
    color: var(--button-success-color);
    background: var(--button-success-bg-color);
    border-color: var(--button-success-border-color);

    &:hover {
      color: var(--button-success-color);
      border-color: var(--button-success-border-color-hover);
      background: var(--button-success-bg-color-hover);
    }

    &.is-outlined {
      background: transparent;
      color: var(--button-success-color-inverted);

      &:hover {
        background: var(--button-success-bg-color);
        color: var(--white-smoke);
      }
    }

    &.is-raised:hover,
    &.is-elevated {
      box-shadow: var(--success-box-shadow);
    }
  }

  &.is-info {
    color: var(--button-info-color);
    background: var(--button-info-bg-color);
    border-color: var(--button-info-border-color);

    &:hover {
      color: var(--button-info-color);
      border-color: var(--button-info-border-color-hover);
      background: var(--button-info-bg-color-hover);
    }

    &.is-outlined {
      background: transparent;
      color: var(--button-info-color-inverted);

      &:hover {
        background: var(--button-info-bg-color);
        color: var(--white-smoke);
      }
    }

    &.is-raised:hover,
    &.is-elevated {
      box-shadow: var(--info-box-shadow);
    }
  }

  &.is-warning {
    color: var(--button-warning-color);
    background: var(--button-warning-bg-color);
    border-color: var(--button-warning-border-color);

    &:hover {
      color: var(--button-warning-color);
      border-color: var(--button-warning-border-color-hover);
      background: var(--button-warning-bg-color-hover);
    }

    &.is-outlined {
      background: transparent;
      color: var(--button-warning-color-inverted);

      &:hover {
        background: var(--button-warning-bg-color);
        color: var(--white-smoke);
      }
    }

    &.is-raised:hover,
    &.is-elevated {
      box-shadow: var(--warning-box-shadow);
    }
  }

  &.is-danger {
    color: var(--button-danger-color);
    background: var(--button-danger-bg-color);
    border-color: var(--button-danger-border-color);

    &:hover {
      color: var(--button-danger-color);
      border-color: var(--button-danger-border-color-hover);
      background: var(--button-danger-bg-color-hover);
    }

    &.is-outlined {
      background: transparent;
      color: var(--button-danger-color-inverted);

      &:hover {
        background: var(--button-danger-bg-color);
        color: var(--white-smoke);
      }
    }

    &.is-raised:hover,
    &.is-elevated {
      box-shadow: var(--danger-box-shadow);
    }
  }
}
</style>
