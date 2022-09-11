<script setup lang="ts">
import { computed } from 'vue'

export interface NumberBlock {
  prefix: string
  suffix: string
  value: number
  text: string
}

export interface NumberBlocksProps {
  numbers: NumberBlock[]
  title: string
  subtitle: string
  content: string
  inverted?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<NumberBlocksProps>(), {
  numbers: () => [],
  title: undefined,
  subtitle: undefined,
  content: undefined,
  inverted: false,
  animated: false,
})

const textClasses = computed(() => [props.inverted && `is-inverted`])
</script>

<template>
  <div class="py-6 z-1">
    <div class="columns is-multiline">
      <div class="column is-12">
        <Subtitle tag="h3" :size="5" weight="bold" narrow class="pb-5">
          <span class="text-gradient">{{ props.subtitle }}</span>
        </Subtitle>
        <Title tag="h3" :size="2" weight="bold" :class="textClasses">
          {{ props.title }}
        </Title>
        <p
          class="paragraph rem-115 mb-4 text-light max-w-6"
          :class="textClasses"
        >
          {{ props.content }}
        </p>
      </div>
      <div
        v-for="(number, index) in props.numbers"
        :key="index"
        class="column is-3"
      >
        <div class="py-4">
          <Title tag="h3" :size="1" weight="bold" :class="textClasses">
            <span>{{ number.prefix }}</span>
            <Counter v-if="props.animated" :number="number.value" />
            <span v-else>{{ number.value }}</span>
            <span>{{ number.suffix }}</span>
          </Title>
          <Subtitle tag="h3" :size="6" class="pb-4 text-light">
            {{ number.text }}
          </Subtitle>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .columns {
    display: flex;

    .column {
      &.is-12 {
        width: 100%;
        min-width: 100%;
      }

      &.is-3 {
        :deep(.title) {
          &.is-1 {
            font-size: 2.25rem;
          }
        }
      }
    }
  }
}
</style>
