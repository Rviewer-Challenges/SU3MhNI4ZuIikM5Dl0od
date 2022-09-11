<script setup lang="ts">
export interface AvatarPopoverProps {
  avatar: string
  heading: string
  subheading?: string
  content: string
  squared?: boolean
}

const props = withDefaults(defineProps<AvatarPopoverProps>(), {
  subheading: undefined,
  squared: false,
})
</script>

<template>
  <div class="popover-wrap">
    <div class="popover-head">
      <AvatarSimple
        :picture="props.avatar"
        :squared="props.squared"
        size="medium"
      />
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
  min-width: 250px;
  max-width: 250px;
  text-align: left;
}

.popover-head {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  :deep(.avatar) {
    position: relative;
    z-index: 1;
    pointer-events: none;

    img {
      background: var(--section-bg-color-grey);
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
