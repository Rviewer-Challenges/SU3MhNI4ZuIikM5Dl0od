<script setup lang="ts">
import { computed } from 'vue'

export interface BlobProps {
  size?: number
  color?: string
}

const props = withDefaults(defineProps<BlobProps>(), {
  size: 300,
  color: undefined,
})

const blobClasses = computed(() => [props.color && `is-${props.color}`])
</script>

<template>
  <div class="morphing-blob-wrapper" :class="blobClasses">
    <div class="blob-inner levitate">
      <svg
        class="organic-blob"
        width="300"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter class="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
        <circle class="circle-1" cx="150" cy="145" r="100" />
        <circle class="circle-2" cx="150" cy="155" r="100" />
        <circle class="circle-3" cx="145" cy="150" r="100" />
        <circle class="circle-4" cx="155" cy="150" r="100" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.morphing-blob-wrapper {
  &.is-secondary {
    svg,
    svg circle {
      fill: var(--wrap-muted-color);
    }
  }

  svg,
  svg circle {
    fill: var(--primary);
  }

  .circle-1 {
    animation: from0to360 3s linear infinite;
    transform-origin: 145px 150px;
  }

  .circle-2 {
    animation: from360to0 4s linear infinite;
    transform-origin: 155px 150px;
  }

  .circle-3 {
    animation: from0to360 5s linear infinite;
    transform-origin: 150px 145px;
  }

  .circle-4 {
    animation: from360to0 4.5s linear infinite;
    transform-origin: 150px 155px;
  }

  @keyframes from0to360 {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes from360to0 {
    from {
      transform: rotate(360deg);
    }

    to {
      transform: rotate(0deg);
    }
  }
}
</style>
