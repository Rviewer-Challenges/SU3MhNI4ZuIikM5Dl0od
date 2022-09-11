<script setup lang="ts">
import { computed } from 'vue'
export interface ContentBlockICounter {
  icon: string
  number: number
  text: string
}

export interface ContentBlockIProps {
  counters: ContentBlockICounter[]
  icons?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<ContentBlockIProps>(), {
  icons: true,
  inverted: false,
})

const textClasses = computed(() => [props.inverted && 'text-light'])
</script>

<template>
  <div class="py-6">
    <div class="columns b-columns-half-tablet-p is-multiline has-text-centered">
      <div
        v-for="(counter, index) in props.counters"
        :key="index"
        class="column is-3"
      >
        <div class="py-4">
          <div v-if="props.icons" class="counter-icon">
            <i class="iconify" :data-icon="counter.icon"></i>
          </div>
          <Title
            tag="h3"
            :size="3"
            weight="bold"
            narrow
            :inverted="props.inverted"
          >
            <Counter :number="counter.number" />
          </Title>
          <p class="paragraph pt-2 max-w-3 rem-95" :class="textClasses">
            {{ counter.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counter-icon {
  font-size: 2.25rem;
  color: var(--primary);
}
</style>
