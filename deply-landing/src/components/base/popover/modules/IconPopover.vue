<script setup lang="ts">
import type { IconBoxColor } from '/@src/components/base/icon/IconBox.vue'

export interface IconPopoverProps {
  icon: string
  color?: IconBoxColor
  heading: string
  subheading?: string
  content: string
  rounded?: boolean
}

const props = withDefaults(defineProps<IconPopoverProps>(), {
  subheading: undefined,
  color: 'primary',
  rounded: false,
})
</script>

<template>
  <div class="popover-wrap">
    <div class="popover-head">
      <IconBox :color="props.color" :rounded="props.rounded">
        <i class="iconify" :data-icon="props.icon"></i>
      </IconBox>
      <div class="meta">
        <span class="meta-title">{{ props.heading }}</span>
        <span v-if="props.subheading" class="meta-subtitle">
          {{ props.subheading }}
        </span>
      </div>
    </div>
    <div class="popover-body">
      <p class="paragraph rem-80">{{ props.content }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.popover-wrap {
  min-width: 200px;
  max-width: 200px;
  text-align: left;
}

.popover-head {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  :deep(.icon-box) {
    .iconify {
      font-size: 1.25rem;
    }
  }

  .meta {
    margin-left: 0.5rem;

    span {
      display: block;
      line-height: 1.2;
    }

    .meta-title {
      font-family: var(--font-alt);
      font-size: 0.9rem;
      font-weight: 600;
      color: var(--title-color);
    }

    .meta-subtitle {
      font-family: var(--font);
      font-size: 0.8rem;
      color: var(--light-text);
    }
  }
}

.popover-body {
  .paragraph {
    line-height: 1.4;
  }
}
</style>
