<script setup lang="ts">
import { computed } from 'vue'
import type { ImageFeature } from '/@src/types'

export interface PulseCardsProps {
  features: ImageFeature[]
  limit?: number
  links?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<PulseCardsProps>(), {
  limit: 3,
  links: false,
  animated: false,
})
const boxClasses = computed(() => [props.animated && `animated`])
</script>

<template>
  <div class="py-6 mx-auto max-w-9">
    <div class="columns is-multiline b-columns-half-tablet-p">
      <div
        v-for="(feature, index) in props.features.slice(0, props.limit)"
        :key="index"
        class="column"
      >
        <div class="box has-text-centered" :class="boxClasses">
          <slot name="column" :feature="feature" :index="index">
            <div class="pulse-image-wrapper">
              <DarkImage
                :src="feature.image"
                :src-dark="feature.darkImage"
                class="pulse-image"
                alt="featured image"
                width="100"
                height="100"
              />
            </div>

            <Title tag="h3" :size="6" weight="semi" leading>
              <span>{{ feature.title }}</span>
            </Title>
            <p class="paragraph rem-90 mb-4">{{ feature.text }}</p>
            <Button v-if="props.links" :to="feature.link" :long="3">
              <span>Get Started</span>
            </Button>
            <div class="bubble bubble-1"></div>
            <div class="bubble bubble-2"></div>
            <div class="bubble bubble-3"></div>
            <div class="bubble bubble-4"></div>
            <div class="bubble bubble-5"></div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  position: relative;
  overflow: hidden;
  background: var(--feature-block-c-box-bg);
  border: 1px solid var(--feature-block-c-box-border);
  box-shadow: none;
  border-radius: 1rem;
  padding: 2rem;
  transition: transform 0.3s, box-shadow 0.3s;

  .pulse-image-wrapper {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: calc(50% - 15px);
      left: calc(50% - 15px);
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: #ccd7ff;
      animation: wave 1.6s infinite;
      animation-duration: 2s;
      transform-origin: center center;
      z-index: 0;
    }
  }

  .pulse-image {
    position: relative;
    margin: 0 auto 0.75rem;
    height: 100px;
    width: 100px;
    transition: transform 0.3s;
    z-index: 1;
  }

  *:not(.bubble) {
    position: relative;
    z-index: 1;
  }

  :deep(.button) {
    &:hover {
      background: var(--primary);
      border-color: var(--primary);
      color: var(--white);
      box-shadow: var(--primary-box-shadow);
    }
  }

  .bubble {
    position: absolute;
    border-radius: 50%;
    background: var(--feature-block-c-box-bubble-bg);
    transition: transform 0.3s;

    &.bubble-1 {
      top: -1rem;
      left: -1rem;
      height: 65px;
      width: 65px;
      transition-delay: 0.35s;
    }

    &.bubble-2 {
      top: 4rem;
      left: 4rem;
      height: 32px;
      width: 32px;
      transition-delay: 0.15s;
    }

    &.bubble-3 {
      bottom: 3rem;
      left: -3rem;
      height: 80px;
      width: 80px;
      transition-delay: 0.05s;
    }

    &.bubble-4 {
      bottom: 3rem;
      right: 2rem;
      height: 30px;
      width: 30px;
      transition-delay: 0.5s;
    }

    &.bubble-5 {
      top: 1rem;
      right: 2rem;
      height: 20px;
      width: 20px;
      transition-delay: 0.65s;
    }
  }

  &.animated {
    .bubble {
      transform: scale(0);
    }
  }

  &:hover {
    box-shadow: var(--light-box-shadow);

    &.animated {
      .bubble {
        transform: scale(1) !important;
      }
    }
  }
}
</style>
