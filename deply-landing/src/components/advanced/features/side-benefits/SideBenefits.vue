<script setup lang="ts">
import { computed } from 'vue'

export interface SideBenefitsProps {
  title: string
  subtitle: string
  content: string
  benefits?: string[]
  image: string
  darkImage?: string
  imageWidth?: string
  imageHeight?: string
  bordered?: boolean
  inverted?: boolean
  reverse?: boolean
}

const props = withDefaults(defineProps<SideBenefitsProps>(), {
  benefits: () => [],
  darkImage: undefined,
  imageWidth: '800',
  imageHeight: '600',
  bordered: false,
  inverted: false,
  reverse: false,
})

const sideBenefitsClasses = computed(() => [
  props.bordered && `is-bordered`,
  props.inverted && `is-inverted`,
  props.reverse && `is-reverse`,
])

const textClasses = computed(() => [props.inverted && `is-inverted`])
</script>

<template>
  <div
    class="side-benefits mobile:py-0 small:py-6 z-1"
    :class="sideBenefitsClasses"
  >
    <div class="columns is-vcentered">
      <div class="column is-5">
        <Subtitle tag="h3" :size="6" weight="bold" class="pb-4" leading>
          <span class="text-gradient">{{ subtitle }}</span>
        </Subtitle>
        <Title tag="h2" :size="2" weight="bold" :inverted="props.inverted">
          {{ title }}
        </Title>
        <p class="paragraph rem-115 mb-4" :class="textClasses">
          {{ props.content }}
        </p>
        <hr :class="props.inverted && 'is-inverted'" />
        <div
          v-for="(benefit, index) in props.benefits"
          :key="index"
          class="benefit mb-2"
        >
          <i class="iconify" data-icon="feather:check"></i>
          <span class="is-weight-500 pl-2 pr-4">{{ benefit }}</span>
        </div>
      </div>
      <div class="column is-6 has-text-centered is-relative">
        <div class="featured-image-container">
          <DarkImage
            class="is-relative mx-auto"
            :src="props.image"
            :src-dark="props.darkImage"
            alt="side section image"
            :width="props.imageWidth"
            :height="props.imageHeight"
          />
          <div class="featured-bg-circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.side-benefits {
  .benefit {
    font-family: var(--font);
    color: var(--medium-text);
  }

  .featured-image-container {
    position: relative;

    img {
      position: relative;
      z-index: 1;
    }

    .featured-bg-circle {
      position: absolute;
      top: 10%;
      left: -30%;
      height: 550px;
      width: 550px;
      border-radius: 50%;
      background: rgb(var(--primary-rgb));
      background: linear-gradient(
        98deg,
        rgb(var(--primary-rgb) / 100%) 0%,
        rgb(var(--primary-rgb) / 28.9%) 35%,
        rgb(var(--primary-rgb) / 0%) 100%
      );
      transform: rotate(180deg);
      z-index: 0;
    }
  }

  .action-link {
    font-weight: 500;
    margin-right: 0.75rem;

    &:hover {
      color: var(--primary);

      + .iconify {
        color: var(--primary);
        transform: translateX(5px) !important;
      }
    }
  }

  .iconify {
    transition: transform 0.3s;
    vertical-align: middle;
  }

  &.is-bordered {
    border-bottom: 1px solid var(--border);
  }

  &.is-reverse {
    .columns {
      flex-direction: row-reverse;
    }
  }

  &.is-inverted {
    &.is-bordered {
      border-bottom-color: var(--dark-border);
    }
  }
}

@media only screen and (max-width: 767px) {
  .side-benefits {
    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .field {
      &.is-grouped {
        flex-direction: column;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .side-benefits {
    .column {
      &.is-5 {
        max-width: 660px;
        margin: 0 auto 2rem;
      }
    }

    img {
      max-width: 490px !important;
    }

    .featured-image-container {
      .featured-bg-circle {
        top: 2%;
        left: -5%;
        height: 500px;
        width: 500px;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .side-benefits {
    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .featured-image-container {
      .featured-bg-circle {
        top: -5%;
        height: 500px;
        width: 500px;
      }
    }
  }
}

/* stylelint-disable */
//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .side-benefits {
    .columns {
      display: block;

      .column {
        width: 100% !important;
      }
    }
  }
}
/* stylelint-enable */
</style>
