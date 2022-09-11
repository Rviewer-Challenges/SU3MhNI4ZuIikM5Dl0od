<script setup lang="ts">
import { computed } from 'vue'
export type WaveTwoColor =
  | 'grey'
  | 'darker'
  | 'primary'
  | 'white'
  | 'footer-dark'

export interface WaveTwoProps {
  color?: WaveTwoColor
  name: string
}

const props = withDefaults(defineProps<WaveTwoProps>(), {
  color: 'grey',
})

const svgClasses = computed(() => [props.color && `wave-${props.color}`])
</script>

<template>
  <div class="animated-waves">
    <svg
      class="waves"
      :class="svgClasses"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shape-rendering="auto"
    >
      <defs>
        <path
          :id="props.name"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="parallax">
        <use
          :xlink:href="`#${props.name}`"
          x="48"
          y="0"
          fill="rgba(255,255,255,0.7)"
        />
        <use
          :xlink:href="`#${props.name}`"
          x="48"
          y="3"
          fill="rgba(255,255,255,0.5)"
        />
        <use
          :xlink:href="`#${props.name}`"
          x="48"
          y="5"
          fill="rgba(255,255,255,0.3)"
        />
        <use :xlink:href="`#${props.name}`" x="48" y="7" fill="#fff" />
      </g>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.animated-waves {
  .waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 250px;
  }

  .parallax > use {
    animation: move-forever 18s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }

  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
}

.animated-waves {
  .waves {
    &.wave-grey {
      .parallax > use {
        &:first-child {
          fill: var(--section-bg-color-grey) !important;
          opacity: 0.8; //70
        }

        &:nth-child(2) {
          fill: var(--section-bg-color-grey) !important;
          opacity: 0.6; //50
        }

        &:nth-child(3) {
          fill: var(--section-bg-color-grey) !important;
          opacity: 0.4; //30
        }

        &:nth-child(4) {
          fill: var(--section-bg-color-grey) !important;
          opacity: 1; //100
        }

        &:last-child {
          fill: var(--section-bg-color-grey) !important;
          opacity: 0.8; //70
        }
      }
    }

    &.wave-primary {
      .parallax > use {
        &:first-child {
          fill: var(--primary) !important;
          opacity: 0.7;
        }

        &:nth-child(2) {
          fill: var(--primary) !important;
          opacity: 0.5;
        }

        &:nth-child(3) {
          fill: var(--primary) !important;
          opacity: 0.3;
        }

        &:nth-child(4) {
          fill: var(--primary) !important;
          opacity: 1;
        }

        &:last-child {
          fill: var(--primary) !important;
          opacity: 0.7;
        }
      }
    }

    &.wave-darker {
      .parallax > use {
        &:first-child {
          fill: var(--section-bg-color-dark) !important;
          opacity: 0.7;
        }

        &:nth-child(2) {
          fill: var(--section-bg-color-dark) !important;
          opacity: 0.5;
        }

        &:nth-child(3) {
          fill: var(--section-bg-color-dark) !important;
          opacity: 0.3;
        }

        &:nth-child(4) {
          fill: var(--section-bg-color-dark) !important;
          opacity: 1;
        }

        &:last-child {
          fill: var(--section-bg-color-dark) !important;
          opacity: 0.7;
        }
      }
    }

    &.wave-white {
      .parallax > use {
        &:first-child {
          fill: var(--section-bg-color) !important;
          opacity: 0.8;
        }

        &:nth-child(2) {
          fill: var(--section-bg-color) !important;
          opacity: 0.6;
        }

        &:nth-child(3) {
          fill: var(--section-bg-color) !important;
          opacity: 0.4;
        }

        &:nth-child(4) {
          fill: var(--section-bg-color) !important;
          opacity: 1;
        }

        &:last-child {
          fill: var(--section-bg-color) !important;
          opacity: 0.8;
        }
      }
    }

    &.wave-footer-dark {
      .parallax > use {
        &:first-child {
          fill: var(--footer-dark-bg-color) !important;
          opacity: 0.7;
        }

        &:nth-child(2) {
          fill: var(--footer-dark-bg-color) !important;
          opacity: 0.5;
        }

        &:nth-child(3) {
          fill: var(--footer-dark-bg-color) !important;
          opacity: 0.3;
        }

        &:nth-child(4) {
          fill: var(--footer-dark-bg-color) !important;
          opacity: 1;
        }

        &:last-child {
          fill: var(--footer-dark-bg-color) !important;
          opacity: 0.7;
        }
      }
    }
  }
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }

  100% {
    transform: translate3d(85px, 0, 0);
  }
}

@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
}
</style>
