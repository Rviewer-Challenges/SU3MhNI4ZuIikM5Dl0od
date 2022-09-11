<script setup lang="ts">
import { ref } from 'vue'

export interface ProcessStep {
  icon: string
  title: string
  content: string
  image: string
  imageDark: string
}

export interface ProcessSectionProps {
  steps: ProcessStep[]
  imageWidth?: string
  imageHeight?: string
}

const props = withDefaults(defineProps<ProcessSectionProps>(), {
  steps: () => [],
  imageWidth: '800',
  imageHeight: '800',
})

const activeTab = ref('process-tab-0')
</script>

<template>
  <div class="process-section py-6">
    <div class="columns">
      <div class="column is-5 is-offset-1">
        <div
          v-for="(step, index) in props.steps"
          :key="index"
          class="process-item"
          :class="[activeTab === `process-tab-${index}` && 'is-active']"
          data-content="1"
          @click="activeTab = `process-tab-${index}`"
          @keydown.space.prevent="() => (activeTab = `process-tab-${index}`)"
        >
          <div class="box">
            <div class="box-header">
              <img :src="step.icon" alt="process image" />
              <Title tag="h3" :size="6" weight="bold">{{ step.title }}</Title>
            </div>
            <div class="box-body">
              <p>{{ step.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-5 is-relative">
        <img
          class="process-image is-base is-relative is-block mx-auto"
          src="/assets/illustrations/workflow/workflow.png"
          alt="process image"
          :width="props.imageWidth"
          :height="props.imageHeight"
        />
        <template v-for="(step, index) in props.steps" :key="index">
          <DarkImage
            class="process-image is-slide mx-auto"
            :class="[activeTab === `process-tab-${index}` && 'is-active']"
            :src="step.image"
            :src-dark="step.imageDark"
            alt="process image"
            :width="props.imageWidth"
            :height="props.imageHeight"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.process-section {
  .process-item {
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
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .process-section {
    .columns {
      display: flex;
    }
  }
}
</style>
