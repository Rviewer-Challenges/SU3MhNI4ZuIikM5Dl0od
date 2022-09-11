<script setup lang="ts">
import { computed, useSlots } from 'vue'
import HeroCircleMask from '../../misc/masks/HeroCircleMask.vue'

export type HeroSize = 'medium' | 'large' | 'fullheight'
export type HeroAlign = 'left' | 'center' | 'right'
export type HeroShapeAlign = 'left' | 'right'
export type HeroColor = 'grey'
export type HeroMask = 'circle' | 'wave' | 'slant'

export interface HeroProps {
  size?: HeroSize
  alignment?: HeroAlign
  color?: HeroColor
  shape?: string
  shapeOrientation?: HeroShapeAlign
  overlay?: boolean
  starfall?: boolean
  mask?: HeroMask
}

const slots = useSlots()
const props = withDefaults(defineProps<HeroProps>(), {
  size: undefined,
  alignment: undefined,
  color: undefined,
  shape: undefined,
  shapeOrientation: undefined,
  overlay: false,
  starfall: false,
  mask: undefined,
})

const heroClasses = computed(() => [
  props.shape && `has-top-bg`,
  props.shapeOrientation && `top-bg-${props.shapeOrientation}`,
  props.size && `is-${props.size}`,
  props.alignment && `is-${props.alignment}`,
  props.color && `is-${props.color}`,
  props.mask && 'has-mask',
])
</script>

<template>
  <section class="hero" :class="heroClasses">
    <div v-if="props.starfall" class="starfall">
      <div v-for="index in 40" :key="index" class="falling-star"></div>
    </div>
    <img
      v-if="props.shape"
      class="top-bg"
      :src="props.shape"
      alt="hero shape"
      width="240"
      height="150"
    />

    <div v-if="props.mask === 'circle'" class="hero-mask-circle">
      <HeroCircleMask :color="props.color" />
    </div>

    <div v-if="props.mask === 'wave'" class="hero-mask-wave">
      <HeroWaveMask :color="props.color" />
    </div>

    <div v-if="props.mask === 'slant'" class="hero-mask-slant">
      <HeroSlantMask :color="props.color" />
    </div>

    <div v-if="props.overlay" class="hero-overlay"></div>

    <slot name="background"></slot>

    <div v-if="'body' in slots" class="hero-body">
      <Container>
        <slot name="body"></slot>
      </Container>
    </div>
    <div v-if="'footer' in slots" class="hero-foot">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  position: relative;
  background-color: var(--hero-bg-color);
  transition: background-color 0.3s;
  overflow: hidden;

  &.is-grey {
    background: var(--hero-grey-bg-color);
  }

  &.is-side {
    &.is-right,
    &.is-left {
      .buttons {
        .button {
          min-width: 140px;
        }
      }
    }
  }

  &.is-center {
    text-align: center;

    .hero-image-center {
      display: block;
      margin: 0 auto;
      max-height: 380px;
      width: auto;
    }

    .buttons {
      justify-content: center;

      .button {
        min-width: 140px;
      }
    }
  }

  &.has-top-bg {
    position: relative;

    &.top-bg-left {
      .top-bg,
      .top-bg-alt {
        left: 0;
      }
    }

    &.top-bg-right {
      .top-bg,
      .top-bg-alt {
        right: 0;
      }
    }

    .top-bg,
    .top-bg-alt {
      position: absolute;
      top: 0;
      display: block;
      width: 80%;
      height: auto;
      z-index: 0;
    }
  }

  &.has-mask {
    .hero-body {
      position: relative;
      z-index: 2;
    }
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--dark-text);
    opacity: 0.6;
    z-index: 0;
  }

  .hero-mask-circle {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 1;
  }

  .hero-mask-wave {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 1;
  }

  .hero-mask-slant {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 1;
  }

  .hero-foot {
    position: relative;
    z-index: 2;

    .tabs {
      ul li {
        padding: 0 1rem;

        img {
          display: block;
          width: 110px;
          margin: 0 auto;
        }
      }
    }
  }
}

$size: 8;
$total: 40;

.starfall {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  perspective: 1000px;
  z-index: 0;

  .falling-star {
    width: $size + px;
    height: $size + px;
    background: var(--primary);
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
  }
}

/* stylelint-disable */
@for $i from 1 through $total {
  $x: random(100);

  .falling-star:nth-child(#{$i}) {
    transform: translateX($x + vw) translateY(-$size + px);
    animation: anim#{$i} 4s infinite;
    animation-delay: $i * 0.3s;
  }

  @keyframes anim#{$i} {
    10% {
      opacity: 50%;
    }

    12% {
      opacity: 100%;
      box-shadow: 0 0 3px 0 white;
    }

    15% {
      opacity: 50%;
    }

    50% {
      opacity: 0%;
    }

    100% {
      transform: translateX($x + 20 + vw) translateY(100vh);
      opacity: 0%;
    }
  }
}
/* stylelint-enable */

@media only screen and (max-width: 767px) {
  .hero {
    &.is-side {
      .title,
      .subtitle {
        text-align: center;
      }

      .buttons {
        justify-content: center;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      max-height: initital !important;
      min-height: 100vh;
    }

    &.is-side {
      .title,
      .subtitle {
        text-align: center;
      }

      .buttons {
        justify-content: center;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .hero {
    &.is-fullheight {
      max-height: initital !important;
      min-height: 100vh !important;
    }
  }
}

/* stylelint-disable */

//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      //max-height: 1024px !important;
      //min-height: 1024px !important;

      .columns {
        display: block;

        .column {
          width: 100%;
          margin: 0 !important;
        }
      }
    }
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      //max-height: 1024px !important;
      //min-height: 1024px !important;

      .columns {
        display: block;

        .column {
          width: 100%;
          margin: 0 !important;
        }
      }
    }
  }
}

@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: landscape) {
  .hero {
    &.is-fullheight {
      //max-height: 770px !important;
      //min-height: 770px !important;
    }
  }
}
/* stylelint-enable */
</style>
