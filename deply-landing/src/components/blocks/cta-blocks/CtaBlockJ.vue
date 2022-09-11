<script setup lang="ts">
import { computed } from 'vue'

export interface CtaBlockJProps {
  title: string
  subtitle: string
  smallText: string
  inverted?: boolean
}

const props = withDefaults(defineProps<CtaBlockJProps>(), {
  inverted: false,
})

const textClasses = computed(() => [props.inverted && `text-white`])
</script>

<template>
  <div class="py-6">
    <div class="mx-auto max-w-7">
      <div class="has-text-centered">
        <Subtitle
          tag="h4"
          :size="6"
          weight="bold"
          :inverted="props.inverted"
          narrow
          class="pb-5"
        >
          <span class="text-gradient">
            <slot name="subtitle">{{ props.smallText }}</slot>
          </span>
        </Subtitle>
        <Title
          tag="h3"
          :size="3"
          weight="bold"
          leading
          :inverted="props.inverted"
        >
          <span>{{ props.title }}</span>
        </Title>
        <p class="paragraph rem-115 mb-5 max-w-4 mx-auto" :class="textClasses">
          {{ props.subtitle }}
        </p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.control) {
  .form-icon {
    height: 48px !important;
    width: 48px !important;
    font-size: 1.15rem !important;
  }
}

:deep(.input) {
  height: 48px !important;
  padding-left: 48px !important;
  font-size: 1.1rem !important;
}

:deep(.button) {
  height: 48px !important;
}

:deep(.buttons) {
  .button {
    margin-bottom: 0 !important;
  }
}
</style>
