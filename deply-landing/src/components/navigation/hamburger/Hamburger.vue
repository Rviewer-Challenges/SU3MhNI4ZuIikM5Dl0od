<script setup lang="ts">
import { computed } from 'vue'

export type HamburgerStyle = 1 | 2 | 3 | 4 | 5
export type HamburgerState = boolean

export interface HamburgerProps {
  style?: HamburgerStyle
  open: HamburgerState
}

const props = withDefaults(defineProps<HamburgerProps>(), {
  style: 1,
  open: false,
})

const hamburgerClasses = computed(() => [
  props.style && `style-${props.style}`,
  props.open && `open`,
])
</script>

<template>
  <button class="hamburger" :class="hamburgerClasses">
    <span></span>
  </button>
</template>

<style lang="scss" scoped>
@use 'sass:math';

$hamburger-size: 1.6rem;
$hamburger-dash-width: 0.75em;
$hamburger-dash-height: 0.05em;
$hamburger-dash-gutter: $hamburger-dash-height * 10;
$hamburger-dash-border-radius: 0;

%menu-dash {
  display: block;
  position: absolute;
  top: 50%;
  left: math.div((1em - $hamburger-dash-width), 2);
  background-color: var(--light-text);
  width: $hamburger-dash-width;
  height: $hamburger-dash-height;
  border-radius: $hamburger-dash-border-radius;
}

.hamburger {
  font-size: $hamburger-size;
  width: 1em;
  height: 1em;
  display: inline-block;
  position: relative;
  background-color: transparent;
  border: 0;
  padding: 0;
  outline: none;
  user-select: none;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  cursor: pointer;

  span {
    @extend %menu-dash;

    margin-top: math.div($hamburger-dash-height, -2);
  }

  &::before {
    content: '';

    @extend %menu-dash;

    margin-top: math.div(-$hamburger-dash-gutter + $hamburger-dash-height, -2);
  }

  &::after {
    content: '';

    @extend %menu-dash;

    margin-top: math.div($hamburger-dash-gutter + $hamburger-dash-height, -2);
  }
}

.style-1 {
  &::before,
  &::after,
  span {
    transition: 0.25s ease-in-out;
  }

  &.open {
    &::before {
      transform: rotate(135deg);
      margin-top: math.div($hamburger-dash-height, -2);
    }

    &::after {
      transform: rotate(-135deg);
      margin-top: math.div($hamburger-dash-height, -2);
    }

    span {
      opacity: 0;
      transform: translateX(150%);
    }
  }
}

.style-2 {
  &::before,
  &::after {
    display: none;
  }

  span {
    transition: 0.25s ease;

    &::before,
    &::after {
      @extend %menu-dash;

      content: '';
      transition: 0.25s ease;
      top: 0;
      left: 0;
    }

    &::before {
      transform: translateY(-$hamburger-dash-gutter);
    }

    &::after {
      transform: translateY($hamburger-dash-gutter);
    }
  }

  &.open {
    span {
      transform: rotate(45deg);

      &::before,
      &::after {
        transform: rotate(90deg);
      }
    }
  }
}

.style-3 {
  &::before,
  &::after {
    transition: 0.2s ease 0.2s;
  }

  &::after {
    left: auto;
    right: math.div((1em - $hamburger-dash-width), 2);
  }

  span {
    transition: 0.2s;

    &::before {
      @extend %menu-dash;

      content: '';
      transition: inherit;
      left: 0;
      top: 0;
    }
  }

  &.open {
    &::before,
    &::after {
      transition: 0.2s ease;
      width: 0;
    }

    span {
      transform: rotate(45deg);
      transition: 0.2s ease 0.2s;

      &::before {
        transform: rotate(-90deg);
      }
    }
  }
}

.style-4 {
  &::before,
  &::after {
    display: none;
  }

  span {
    transition: 0.25s ease;

    &::before,
    &::after {
      @extend %menu-dash;

      content: '';
      top: 0;
      left: 0;
      transition: inherit;
      margin: 0;
    }

    &::before {
      transform: translateY(-$hamburger-dash-gutter);
    }

    &::after {
      transform: translateY($hamburger-dash-gutter);
    }
  }

  &.open {
    span {
      transform: rotate(180deg);

      &::before,
      &::after {
        width: math.div($hamburger-dash-width, 2);
        left: 0.02em;
      }

      &::before {
        transform: rotate(-45deg) translateY(-0.17em);
      }

      &::after {
        transform: rotate(45deg) translateY(0.17em);
      }
    }
  }
}

.style-5 {
  &::before,
  &::after {
    display: none;
  }

  span {
    transition: 0.25s ease;

    &::before,
    &::after {
      @extend %menu-dash;

      content: '';
      top: 0;
      right: 0;
      left: auto;
      transition: inherit;
      margin: 0;
    }

    &::before {
      transform: translateY(-$hamburger-dash-gutter);
    }

    &::after {
      transform: translateY($hamburger-dash-gutter);
    }
  }

  &.open {
    span {
      transform: rotate(-180deg);

      &::before,
      &::after {
        width: math.div($hamburger-dash-width, 2);
        right: 0.02em;
      }

      &::before {
        transform: rotate(-45deg) translateY(0.17em);
      }

      &::after {
        transform: rotate(45deg) translateY(-0.17em);
      }
    }
  }
}
</style>
