<script setup lang="ts">
import { computed } from 'vue'

export type TitleGradient = 'primary' | 'secondary' | 'accent'

export interface TimelineTitleProps {
  title: string
  subtitle: string
  minititle?: string
  inverted?: boolean
  spaced?: boolean
  color?: TitleGradient
  step: number
}

const props = withDefaults(defineProps<TimelineTitleProps>(), {
  title: undefined,
  subtitle: undefined,
  minititle: undefined,
  inverted: false,
  spaced: false,
  color: 'primary',
})

const titleClasses = computed(() => [props.inverted && `is-inverted`])

const blockClasses = computed(() => [props.spaced && 'mb-16'])

const subtitleClasses = computed(() => [
  props.color && `text-gradient-${props.color}-static`,
])

const lineClasses = computed(() => [
  props.color && `bg-gradient-${props.color}-fade`,
])

const stepClasses = computed(() => [
  props.color && `bg-gradient-${props.color}`,
])
</script>

<template>
  <div>
    <div class="has-text-centered" :class="blockClasses">
      <p
        v-if="props.minititle"
        class="paragraph text-upper rem-80 weight-6 has-text-centered"
      >
        {{ props.minititle }}
      </p>
      <slot name="subheading"></slot>
      <div class="line" :class="lineClasses"></div>
      <div class="step" :class="stepClasses">
        <span>{{ props.step }}</span>
      </div>
      <Subtitle tag="h3" :size="3" weight="bold">
        <span :class="subtitleClasses">
          <slot name="subtitle">{{ props.subtitle }}</slot>
        </span>
      </Subtitle>
      <Title tag="h2" :size="8" weight="bold" :class="titleClasses">
        <span>
          <slot>{{ props.title }}</slot>
        </span>
      </Title>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<style lang="scss" scoped>
.line {
  height: 100px;
  width: 1px;
  padding-right: 1px;
  margin: 0 auto;
}

.step {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem;
  color: var(--white-smoke);
  font-family: var(--font);
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 50%;
}

@media only screen and (max-width: 767px) {
  :deep(.title) {
    &.is-8 {
      font-size: 3rem !important;
    }
  }
}
</style>
