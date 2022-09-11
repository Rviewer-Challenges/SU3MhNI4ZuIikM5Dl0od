<script setup lang="ts">
import { computed } from 'vue'

export interface SectionTitleProps {
  title: string
  subtitle: string
  inverted?: boolean
  spaced?: boolean
}

const props = withDefaults(defineProps<SectionTitleProps>(), {
  title: undefined,
  subtitle: undefined,
  inverted: false,
  spaced: false,
})

const titleClasses = computed(() => [props.inverted && `is-inverted`])

const blockClasses = computed(() => [props.spaced && 'mb-16'])

const subtitleClasses = computed(() => [
  props.inverted ? `text-white` : 'text-gradient',
])
</script>

<template>
  <div class="has-text-centered" :class="blockClasses">
    <Subtitle tag="h3" :size="5" weight="bold">
      <span :class="subtitleClasses">
        <slot name="subtitle">{{ props.subtitle }}</slot>
      </span>
    </Subtitle>
    <Title tag="h2" :size="3" weight="bold" :class="titleClasses">
      <span>
        <slot>{{ props.title }}</slot>
      </span>
    </Title>
  </div>
</template>
