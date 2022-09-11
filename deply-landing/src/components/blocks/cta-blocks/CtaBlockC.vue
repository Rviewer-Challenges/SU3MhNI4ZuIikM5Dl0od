<script setup lang="ts">
import { computed } from 'vue'

export interface CtaBlockCProps {
  title: string
  subtitle: string
  minimal?: boolean
  inverted?: boolean
  shapes?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<CtaBlockCProps>(), {
  minimal: false,
})

const blockClasses = computed(() => [
  props.minimal && !props.inverted && `is-minimal`,
  props.inverted && !props.minimal && `is-inverted`,
  props.shapes && `has-shapes`,
  props.animated && `is-animated`,
])
</script>

<template>
  <div class="py-6">
    <div class="cta-block mx-auto max-w-7" :class="blockClasses">
      <div class="cta-content">
        <Title
          tag="h3"
          :size="5"
          weight="semi"
          leading
          :inverted="props.inverted"
        >
          <span>{{ props.title }}</span>
        </Title>
        <p class="paragraph rem-95 max-w-4 text-medium mb-4">
          {{ props.subtitle }}
        </p>
        <slot></slot>
      </div>

      <div class="circle-shape circle-shape-1"></div>
      <div class="circle-shape circle-shape-2"></div>
      <div class="circle-shape circle-shape-3"></div>
      <div class="circle-shape circle-shape-4"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cta-block {
  position: relative;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 1.5rem;
  padding: 3rem;
  overflow: hidden;

  .cta-content {
    position: relative;
    z-index: 1;
  }

  :deep(.control) {
    .form-icon {
      height: 48px !important;
      width: 48px !important;
      font-size: 1.15rem !important;
    }
  }

  :deep(.input) {
    height: 48px !important;
    padding-left: 48px !important;
    font-size: 1.1rem !important;
  }

  :deep(.button) {
    height: 48px !important;
  }

  :deep(.buttons) {
    .button {
      margin-bottom: 0 !important;
    }
  }

  .circle-shape {
    display: none;
    position: absolute;
    border-radius: 50%;
    z-index: 0;
    border: 4px solid;
    transition: opacity 0.1s, transform 0.3s ease;

    &.circle-shape-1 {
      top: -200px;
      right: -200px;
      height: 400px;
      width: 400px;
      transition-delay: 0.45s;
    }

    &.circle-shape-2 {
      top: -150px;
      right: -150px;
      height: 300px;
      width: 300px;
      transition-delay: 0.35s;
    }

    &.circle-shape-3 {
      top: -100px;
      right: -100px;
      height: 200px;
      width: 200px;
      transition-delay: 0.25s;
    }

    &.circle-shape-4 {
      top: -50px;
      right: -50px;
      height: 100px;
      width: 100px;
      transition-delay: 0.15s;
    }
  }

  &:not(.is-minimal) {
    .circle-shape {
      border-color: var(--cta-boxed-circle-bg-color);
    }
  }

  &.is-minimal {
    border: none;
    background: var(--cta-boxed-minimal-bg-color);

    .circle-shape {
      border-color: var(--cta-boxed-circle-inverted-bg-color);
    }
  }

  &.is-inverted {
    background: var(--cta-boxed-inverted-bg-color);
    border-color: var(--cta-boxed-inverted-border-color);

    .circle-shape {
      border-color: var(--cta-boxed-circle-dark-bg-color);
    }
  }

  &.has-shapes {
    .circle-shape {
      display: block;
    }

    &.is-animated {
      .circle-shape {
        transform: scale(0);
      }

      &:hover {
        .circle-shape {
          transform: scale(1);
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .cta-block {
    padding: 2.25rem;
  }
}
</style>
