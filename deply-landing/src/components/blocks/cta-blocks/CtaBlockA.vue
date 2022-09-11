<script setup lang="ts">
import { computed } from 'vue'

export interface Logo {
  logo: string
}

export type CtaBLockAColor = 'default' | 'primary' | 'darker'

export interface CtaBlockAProps {
  title: string
  subtitle: string
  logosText?: string
  logos?: Logo[]
  ctaPrimary?: string
  ctaPrimaryLink?: string
  ctaSecondary?: string
  ctaSecondaryLink?: string
  inverted?: boolean
  boxed?: boolean
  color?: CtaBLockAColor
  shapes?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<CtaBlockAProps>(), {
  logosText: 'Biggest companies using our product',
  logos: () => [],
  ctaPrimary: undefined,
  ctaSecondary: undefined,
  ctaPrimaryLink: undefined,
  ctaSecondaryLink: undefined,
  inverted: false,
  boxed: false,
  color: 'default',
  shapes: false,
  animated: false,
})

const blockClasses = computed(() => [
  props.inverted && !props.boxed && props.color === 'default' && `is-inverted`,
  props.boxed && `is-boxed`,
  props.animated && `is-animated`,
  props.color && `is-${props.color}`,
])

const textClasses = computed(() => [
  props.boxed && props.color === 'primary' && `has-text-white`,
  props.boxed && props.color === 'darker' && `has-text-white`,
  props.inverted && !props.boxed && props.color === 'default' && `text-light`,
])
</script>

<template>
  <div class="py-6">
    <div class="cta-block" :class="blockClasses">
      <div class="cta-content mx-auto max-w-4">
        <Title
          tag="h3"
          :size="3"
          weight="semi"
          :inverted="
            (props.boxed && props.color === 'primary') ||
            props.color === 'darker' ||
            props.inverted
          "
        >
          <span>{{ props.title }}</span>
        </Title>

        <Subtitle
          tag="h3"
          :size="5"
          weight="thin"
          :inverted="
            (props.boxed && props.color === 'primary') ||
            props.color === 'darker' ||
            props.inverted
          "
          class="opacity-70"
        >
          <span>{{ props.subtitle }}</span>
        </Subtitle>
      </div>
      <div v-if="props.ctaPrimary" class="buttons cta-content is-centered mt-5">
        <Button color="primary" :long="2" :to="props.ctaPrimaryLink" elevated>
          {{ $props.ctaPrimary }}
        </Button>
        <Button
          v-if="props.ctaSecondary"
          color="light"
          :to="props.ctaPrimaryLink"
          :long="2"
          :outlined="props.color === 'primary' || props.color === 'darker'"
        >
          {{ $props.ctaSecondary }}
        </Button>
      </div>

      <p
        v-if="props.logos.length > 0"
        class="cta-content paragraph rem-95 opacity-70 my-5"
        :class="textClasses"
      >
        {{ props.logosText }}
      </p>
      <div
        v-if="props.logos.length > 0"
        class="cta-content mx-auto max-w-5 max-w-tablet-p max-w-tp-4"
      >
        <div class="columns b-columns-half-mobile b-columns-third-tablet-p">
          <div
            v-for="(logo, index) in props.logos.slice(0, 5)"
            :key="index"
            class="column px-5"
          >
            <img :src="logo.logo" alt="Client logo" width="65" height="30" />
          </div>
        </div>
      </div>

      <div v-if="props.shapes" class="box-shape box-shape-1"></div>
      <div v-if="props.shapes" class="box-shape box-shape-2"></div>
      <div v-if="props.shapes" class="box-shape box-shape-3"></div>
      <div v-if="props.shapes" class="box-shape box-shape-4"></div>
      <div v-if="props.shapes" class="box-shape box-shape-5"></div>
      <div v-if="props.shapes" class="box-shape box-shape-6"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cta-block {
  text-align: center;

  .cta-content {
    position: relative;
    z-index: 1;
  }

  img {
    display: block;
  }

  &.is-boxed {
    position: relative;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    padding: 3.5rem;
    max-width: 740px;
    margin: 0 auto;
    border-radius: 1.5rem;
    overflow: hidden;

    .box-shape {
      position: absolute;
      height: 50px;
      width: 300px;
      border-radius: 50rem;
      background: var(--widget-grey);
      transition: transform 0.3s ease;

      &.box-shape-1 {
        top: 0;
        right: 0;
        transform: rotate(-45deg) translate(50px, 100px);
        transition-delay: 0.25s;
      }

      &.box-shape-2 {
        top: 0;
        right: 0;
        transform: rotate(-45deg) translate(150px, 20px);
        transition-delay: 0.05s;
      }

      &.box-shape-3 {
        top: 0;
        right: 0;
        transform: rotate(-45deg) translate(100px, 180px);
        transition-delay: 0.15s;
      }

      &.box-shape-4 {
        bottom: 0;
        left: 0;
        transform: rotate(-45deg) translate(-50px, -100px);
        transition-delay: 0.7s;
      }

      &.box-shape-5 {
        bottom: 0;
        left: 0;
        transform: rotate(-45deg) translate(-150px, -20px);
        transition-delay: 0.55s;
      }

      &.box-shape-6 {
        bottom: 0;
        left: 0;
        transform: rotate(-45deg) translate(-100px, -180px);
        transition-delay: 0.35s;
      }
    }

    &.is-default {
      box-shadow: var(--light-box-shadow);
    }

    &.is-animated {
      .box-shape {
        &.box-shape-1 {
          transform: rotate(-45deg) translate(280px, 100px);
        }

        &.box-shape-2 {
          transform: rotate(-45deg) translate(220px, 20px);
        }

        &.box-shape-3 {
          transform: rotate(-45deg) translate(220px, 180px);
        }

        &.box-shape-4 {
          transform: rotate(-45deg) translate(-280px, -100px);
        }

        &.box-shape-5 {
          transform: rotate(-45deg) translate(-220px, -20px);
        }

        &.box-shape-6 {
          transform: rotate(-45deg) translate(-220px, -180px);
        }
      }

      &:hover {
        .box-shape {
          &.box-shape-1 {
            transform: rotate(-45deg) translate(50px, 100px);
          }

          &.box-shape-2 {
            transform: rotate(-45deg) translate(150px, 20px);
          }

          &.box-shape-3 {
            transform: rotate(-45deg) translate(100px, 180px);
          }

          &.box-shape-4 {
            transform: rotate(-45deg) translate(-50px, -100px);
          }

          &.box-shape-5 {
            transform: rotate(-45deg) translate(-150px, -20px);
          }

          &.box-shape-6 {
            transform: rotate(-45deg) translate(-100px, -180px);
          }
        }
      }
    }

    &.is-primary {
      background: var(--primary);
      box-shadow: var(--primary-box-shadow);
      border: none;

      .box-shape {
        opacity: 0.2;
      }
    }

    &.is-darker {
      background: var(--dark);
      border: none;

      .box-shape {
        opacity: 0.05;
      }

      img {
        filter: invert(1);
      }
    }
  }

  &.is-inverted {
    img {
      filter: invert(1);
    }
  }
}

.is-dark {
  .cta-block {
    img {
      filter: invert(1);
    }

    &.is-boxed:not(.is-primary):not(.is-darker) {
      .box-shape {
        opacity: 0.05;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .cta-block {
    img {
      max-width: 75px;
      margin: 0 auto;
    }

    &.is-boxed {
      padding: 2.75rem;

      :deep(.subtitle) {
        font-size: 1.15rem;
      }

      :deep(.button) {
        min-width: 220px;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .cta-block {
    img {
      max-width: 75px;
      margin: 0 auto;
    }
  }
}
</style>
