<script setup lang="ts">
import { computed } from 'vue'

export type CtaBLockBColor = 'default' | 'primary' | 'darker'

export interface CtaBlockBProps {
  titlePrimary: string
  contentPrimary: string
  titleSecondary: string
  contentSecondary: string
  ctaPrimary: string
  ctaPrimaryLink: string
  ctaSecondary: string
  ctaSecondaryLink: string
  inverted?: boolean
  boxed?: boolean
  color?: CtaBLockBColor
  shapes?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<CtaBlockBProps>(), {
  inverted: false,
  boxed: false,
  color: 'default',
  shapes: false,
  animated: false,
})

const blockClasses = computed(() => [
  props.inverted && !props.boxed && props.color === 'default' && `is-inverted`,
  props.boxed && `is-boxed`,
  props.shapes && `has-shapes`,
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
  <div class="mx-auto max-w-8 py-6">
    <div class="columns is-vcentered b-flex-tablet-p">
      <div class="column is-6">
        <div class="cta-block mobile:mb-6" :class="blockClasses">
          <div class="cta-content">
            <Title
              tag="h3"
              :size="4"
              weight="semi"
              :inverted="
                (props.boxed && props.color === 'primary') ||
                props.color === 'darker' ||
                (props.inverted && props.color === 'default')
              "
              leading
            >
              <span>{{ props.titlePrimary }}</span>
            </Title>
            <p
              class="paragraph mx-auto max-w-3 mb-4 opacity-70"
              :class="textClasses"
            >
              {{ props.contentPrimary }}
            </p>
            <Buttons alignment="centered">
              <Button
                color="primary"
                :long="3"
                :to="props.ctaPrimaryLink"
                raised
              >
                {{ props.ctaPrimary }}
              </Button>
            </Buttons>
          </div>

          <div class="moving-shape moving-shape-1"></div>
          <div class="moving-shape moving-shape-2"></div>
          <div class="moving-shape moving-shape-3"></div>
          <div class="moving-shape moving-shape-4"></div>
          <div class="moving-shape moving-shape-5"></div>
        </div>
      </div>
      <div class="column is-6">
        <div class="cta-block" :class="blockClasses">
          <div class="cta-content">
            <Title
              tag="h3"
              :size="4"
              weight="semi"
              :inverted="
                (props.boxed && props.color === 'primary') ||
                props.color === 'darker' ||
                (props.inverted && props.color === 'default')
              "
              leading
            >
              <span>{{ props.titleSecondary }}</span>
            </Title>
            <p
              class="paragraph mx-auto max-w-3 mb-4 opacity-70"
              :class="textClasses"
            >
              {{ props.contentSecondary }}
            </p>
            <Buttons alignment="centered">
              <Button
                color="light"
                :to="props.ctaSecondaryLink"
                :long="3"
                :outlined="
                  props.color === 'primary' || props.color === 'darker'
                "
              >
                {{ props.ctaSecondary }}
              </Button>
            </Buttons>
          </div>

          <div class="moving-shape moving-shape-1"></div>
          <div class="moving-shape moving-shape-2"></div>
          <div class="moving-shape moving-shape-3"></div>
          <div class="moving-shape moving-shape-4"></div>
          <div class="moving-shape moving-shape-5"></div>
        </div>
      </div>
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

  &.is-boxed {
    position: relative;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    padding: 3.5rem;
    max-width: 740px;
    margin: 0 auto;
    border-radius: 1.5rem;
    overflow: hidden;

    .moving-shape {
      display: none;
      position: absolute;
      height: 50px;
      border-radius: 50rem;
      background: var(--widget-grey);
      transition: transform 0.4s ease, opacity 0.15s, width 0.6s;
      z-index: 0;

      &.moving-shape-1 {
        top: 30px;
        left: 80px;
        width: 90px;
      }

      &.moving-shape-2 {
        bottom: 30px;
        right: 40px;
        width: 110px;
      }

      &.moving-shape-3 {
        bottom: 80px;
        left: 10px;
        width: 70px;
      }

      &.moving-shape-4 {
        bottom: -20px;
        left: 80px;
        width: 80px;
      }

      &.moving-shape-5 {
        top: 60px;
        right: -20px;
        width: 70px;
      }
    }

    &.has-shapes {
      .moving-shape {
        display: block;
      }
    }

    &.is-animated {
      .moving-shape {
        opacity: 0;

        &.moving-shape-1 {
          transform: translateX(-350px);
          width: 250px;
          transition-delay: 0.15s;
        }

        &.moving-shape-2 {
          transform: translateX(-400px);
          width: 250px;
          transition-delay: 0.55s;
        }

        &.moving-shape-3 {
          transform: translateX(-280px);
          width: 250px;
          transition-delay: 0.35s;
        }

        &.moving-shape-4 {
          transform: translateX(-350px);
          width: 250px;
          transition-delay: 0.65s;
        }

        &.moving-shape-5 {
          transform: translateX(-450px);
          width: 250px;
          transition-delay: 0.4s;
        }
      }

      &:hover {
        .moving-shape {
          opacity: 1;
          transform: translateX(0) !important;

          &.moving-shape-1 {
            width: 90px;
          }

          &.moving-shape-2 {
            width: 110px;
          }

          &.moving-shape-3 {
            width: 70px;
          }

          &.moving-shape-4 {
            width: 80px;
          }

          &.moving-shape-5 {
            width: 70px;
          }
        }
      }
    }

    &.is-primary {
      background: var(--cta-boxed-primary-bg-color);
      border: none;

      .moving-shape {
        opacity: 0.2;
      }

      &.is-animated:hover {
        .moving-shape {
          opacity: 0.1;
        }
      }
    }

    &.is-darker {
      background: var(--cta-boxed-darker-bg-color);
      border: none;

      .moving-shape {
        opacity: 0.05;
      }

      &.is-animated:hover {
        .moving-shape {
          opacity: 0.05;
        }
      }
    }
  }
}

.is-dark {
  .cta-block {
    &.is-boxed:not(.is-primary):not(.is-darker) {
      .moving-shape {
        opacity: 0.05;
      }
    }

    &.is-boxed {
      &.is-animated:hover {
        .moving-shape {
          opacity: 0.05;
        }
      }
    }
  }
}
</style>
