<script setup lang="ts">
import { ref } from 'vue'
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface TabbedStep {
  icon: string
  title: string
  content: string
}

export interface TabbedImage {
  url: string
  darkUrl: string
}

export interface TabbedSectionProps {
  steps: TabbedStep[]
  images: TabbedImage[]
  imageWidth?: string
  imageHeight?: string
}

const props = withDefaults(defineProps<TabbedSectionProps>(), {
  steps: () => [],
  images: () => [],
  imageWidth: '800',
  imageHeight: '1011',
})

const activeTab = ref('process-tab-0')
</script>

<template>
  <div class="tabbed-section py-6">
    <div class="columns is-vcentered b-columns-half-tablet-p">
      <div class="column is-5 is-offset-1">
        <div
          v-for="(item, index) in props.steps"
          :key="index"
          class="tabbed-item"
          :class="[activeTab === `process-tab-${index}` && 'is-active']"
          data-content="1"
          @click="activeTab = `process-tab-${index}`"
          @keydown.space.prevent="() => (activeTab = `process-tab-${index}`)"
        >
          <div class="box">
            <div class="box-header">
              <DarkImage :src="item.icon" alt="header icon" />
              <Title tag="h3" :size="6" weight="bold">{{ item.title }}</Title>
            </div>
            <div class="box-body">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-5 is-relative">
        <img
          class="tabbed-image is-base is-relative is-block mx-auto"
          src="/assets/illustrations/placeholder/placeholder-process.png"
          alt="Process illustration"
          @error.once="
            (event) =>
              viaPlaceholderErrorHandler(
                event,
                `${props.imageWidth}x${props.imageHeight}`
              )
          "
        />

        <DarkImage
          v-for="(item, i) in props.images"
          :key="i"
          class="tabbed-image is-slide mx-auto"
          :class="[activeTab === `process-tab-${i}` && 'is-active']"
          :src="item.url"
          :src-dark="item.darkUrl"
          alt="Process illustration"
          :width="props.imageWidth"
          :height="props.imageHeight"
        />
        <MockupFirst v-if="activeTab === 'process-tab-0'" />
        <MockupSecond v-if="activeTab === 'process-tab-1'" />
        <MockupThird v-if="activeTab === 'process-tab-2'" />
        <MockupFourth
          v-if="activeTab === 'process-tab-3'"
          :loaded="activeTab === 'process-tab-3'"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabbed-section {
  .tabbed-item {
    position: relative;
    cursor: pointer;

    &.is-active {
      .box {
        box-shadow: var(--light-box-shadow);
        border-color: var(--border);
        padding: 1.5rem;
        margin: 1.5rem 0;

        .box-header {
          img {
            opacity: 1;
            filter: grayscale(0);
          }
        }

        .box-body {
          p {
            display: block;
          }
        }
      }
    }

    .box {
      border-radius: 0.75rem;
      max-width: 90%;
      background: transparent;
      box-shadow: none;
      border-color: transparent;
      padding: 0.75rem 1.5rem;
      transition: all 0.3s;

      .box-header {
        display: flex;
        align-items: center;

        img {
          display: block;
          height: 50px;
          width: 50px;
          margin-right: 1rem;
          filter: grayscale(1);
          opacity: 0.6;
          transition: filter 0.3s, opacity 0.3s;
        }
      }

      .box-body {
        p {
          display: none;
          font-size: 0.9rem;
          color: var(--medium-text);
        }
      }
    }
  }

  .tabbed-image {
    transition: opacity 0.3s;

    &.is-base {
      opacity: 0 !important;
    }

    &.is-slide {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      opacity: 0;

      &.is-active {
        opacity: 1;
      }
    }
  }
}

:deep(.ui-mockup) {
  --tw-ring-offset-shadow: 0 0 transparent;
  --tw-ring-shadow: 0 0 transparent;
  --tw-shadow: 0 12px 24px rgb(55 65 81 / 12%);

  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background: var(--ui-mockup-bg-color);
  border: 1px solid var(--ui-mockup-border-color);
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
    var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
  min-width: 340px;
  max-width: 340px;
  z-index: 3;

  &.is-keywords {
    min-width: 420px;
    max-width: 420px;
  }

  &.is-chart {
    min-width: 440px;
    max-width: 440px;
  }

  h3 {
    font-family: var(--font-alt);
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--ui-mockup-heading-color);
  }

  label {
    font-family: var(--font);
    font-size: 0.9rem;
    color: var(--ui-mockup-label-color);
  }

  input {
    font-family: var(--font);
    border-radius: 0.5rem;
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .field {
      margin-bottom: 0;
    }
  }

  .keywords {
    .keyword {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1rem 0;
      padding-bottom: 0.75rem;

      &:not(:last-child) {
        border-bottom: 1px solid var(--ui-mockup-line-color);
      }

      .word {
        font-family: var(--font);
        font-size: 0.9rem;
        color: var(--light-text);
      }

      .sales {
        font-family: var(--font);
        color: var(--ui-mockup-value-color);
        font-weight: 500;
      }
    }
  }
}

.process-image {
  transition: opacity 0.3s;

  &.is-base {
    opacity: 0 !important;
  }

  &.is-slide {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    opacity: 0;

    &.is-active {
      opacity: 1;
    }
  }
}

@media only screen and (max-width: 767px) {
  .tabbed-section {
    .tabbed-item {
      .box {
        max-width: 100%;
      }
    }
  }

  :deep(.ui-mockup) {
    transform: scale(0.8);
    top: -40px;

    &.is-keywords {
      top: 60px;
      left: -30px;
    }

    &.is-chart {
      top: 90px;
      left: -42px;
    }
  }
}
</style>
