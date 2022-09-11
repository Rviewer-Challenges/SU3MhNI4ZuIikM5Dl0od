<script setup lang="ts">
export interface IimelineFeatureItem {
  icon: string
  title: string
  text: string
}

export interface TimelineFeaturesProps {
  items: IimelineFeatureItem[]
  pulled?: boolean
}

const props = withDefaults(defineProps<TimelineFeaturesProps>(), {
  items: () => [],
  pulled: false,
})
</script>

<template>
  <div class="py-6">
    <div class="timeline-process">
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="process-block has-text-centered"
      >
        <div class="process-icon">
          <i class="iconify" :data-icon="item.icon"></i>
        </div>
        <div class="text-block">
          <Title tag="h3" :size="6" weight="semi" leading>
            {{ item.title }}
          </Title>
          <p class="paragraph rem-90">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline-process {
  display: flex;
  justify-content: center;
  align-items: center;

  .process-block {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 20%;
      right: 0;
      height: 2px;
      width: 50%;
      background: var(--wrap-muted-color);
    }

    &::before {
      content: '';
      position: absolute;
      top: 20%;
      left: 0;
      height: 2px;
      width: 50%;
      background: var(--wrap-muted-color);
    }

    &:first-child {
      &::before {
        display: none;
      }
    }

    &:last-child {
      &::after {
        display: none;
      }
    }

    .process-icon {
      position: relative;
      height: 70px;
      width: 70px;
      border-radius: 50%;
      background: var(--wrap-muted-color);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      z-index: 2;

      .iconify {
        font-size: 1.75rem;
        color: var(--primary);
      }
    }

    .text-block {
      padding: 16px;

      p {
        margin-top: 2px;
        padding: 0 16px;
        color: var(--light-text);
      }
    }
  }
}

@media (max-width: 767px) {
  .timeline-process {
    display: block;

    .process-block {
      margin-bottom: 20px;

      &::before,
      &::after {
        display: block !important;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .timeline-process {
    flex-wrap: wrap;

    .process-block {
      width: 50%;

      &::before,
      &::after {
        display: none !important;
      }
    }
  }
}
</style>
