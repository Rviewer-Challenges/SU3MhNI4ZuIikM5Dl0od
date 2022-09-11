<script setup lang="ts">
import { computed } from 'vue'

export interface PageTitleProps {
  title: string
  subtitle: string
  text?: string
  inverted?: boolean
  aligned?: boolean
  leading?: boolean
}

const props = withDefaults(defineProps<PageTitleProps>(), {
  title: undefined,
  subtitle: undefined,
  text: undefined,
  inverted: false,
  aligned: false,
  leading: false,
})

const blockClasses = computed(() => [
  props.aligned && 'is-aligned',
  props.leading && 'is-leading',
])

const subtitleClasses = computed(() => [
  props.inverted ? `text-white` : 'text-gradient',
])

const textClasses = computed(() => [props.aligned ? `` : 'mx-auto'])
</script>

<template>
  <div class="page-title" :class="blockClasses">
    <Subtitle
      tag="h3"
      :size="5"
      weight="bold"
      :inverted="props.inverted"
      class="m-0 pb-5"
    >
      <span :class="subtitleClasses">
        <slot name="subtitle">{{ subtitle }}</slot>
      </span>
    </Subtitle>
    <Title tag="h1" :size="2" weight="bold" :inverted="props.inverted" leading>
      <span>
        <slot>{{ title }}</slot>
      </span>
    </Title>
    <div v-if="props.text" class="max-w-5" :class="textClasses">
      <p class="paragraph rem-125">{{ props.text }}</p>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  padding: 5rem 0;
  text-align: center;

  &.is-leading {
    padding-bottom: 2rem;
  }

  &.is-aligned {
    text-align: left;
  }
}

@media only screen and (max-width: 767px) {
  :deep(.title) {
    &.is-2 {
      font-size: 2rem !important;
    }
  }
}
</style>
