<script setup lang="ts">
export interface CaseStudyProps {
  background: string
}

const props = defineProps<CaseStudyProps>()
</script>

<template>
  <div class="case-study">
    <img class="case-study-bg" :src="props.background" alt="Background image" />
    <div class="case-study-overlay"></div>
    <div class="case-study-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.case-study {
  position: relative;
  padding: 3rem;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: var(--primary-box-shadow);

  .case-study-bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .case-study-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--primary);
    opacity: 0.85;
    z-index: 1;
  }

  .case-study-content {
    position: relative;
    z-index: 2;

    h3 span,
    p,
    .action-link,
    .action-link:hover,
    .iconify {
      color: var(--white) !important;

      &::after {
        border-color: var(--white) !important;
      }
    }
  }

  :deep(.paragraph),
  :deep(.text-gradient) {
    color: var(--white-smoke);
    background: none;
    animation: none;
    -webkit-text-fill-color: initial;
  }

  :deep(a) {
    color: var(--white-smoke) !important;

    &:hover {
      span,
      .iconify {
        color: var(--white-smoke) !important;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .case-study {
    padding: 2rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .case-study {
    h2 {
      font-size: 2rem !important;
    }

    .columns {
      display: flex;
      text-align: left;
    }
  }
}
</style>
