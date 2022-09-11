<script setup lang="ts">
import { computed } from 'vue'

export type IconValuesColumns = 6 | 3 | 4

export interface IconValue {
  icon: string
  color: string
  title: string
  text: string
}

export interface IconValuesProps {
  values: IconValue[]
  columns?: IconValuesColumns
  limit?: number
  polkaDots?: boolean
}

const props = withDefaults(defineProps<IconValuesProps>(), {
  columns: 3,
  limit: 4,
  polkaDots: false,
})

const columnClasses = computed(() => [props.columns && `is-${props.columns}`])

const blockClasses = computed(() => [
  props.columns === 6 && 'mx-auto max-w-7',
  props.columns === 4 && 'mx-auto max-w-9',
])
</script>

<template>
  <div class="py-6">
    <div class="icon-values" :class="blockClasses">
      <div v-if="props.polkaDots" class="polka-wrap polka-1">
        <PolkaDots />
      </div>
      <div class="icon-values-card">
        <div class="columns b-columns-half-tablet-p">
          <div
            v-for="(value, index) in props.values.slice(0, props.limit)"
            :key="index"
            class="column"
            :class="columnClasses"
          >
            <i
              class="iconify"
              :data-icon="value.icon"
              :class="`text-${value.color}`"
            ></i>
            <Title tag="h3" :size="6" weight="semi" leading>
              <span>{{ value.title }}</span>
            </Title>
            <p class="paragraph rem-85">
              {{ value.text }}
            </p>
          </div>
        </div>
      </div>
      <div v-if="props.polkaDots" class="polka-wrap polka-2">
        <PolkaDots />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icon-values {
  position: relative;

  .polka-wrap {
    position: absolute;
    z-index: 0;

    &.polka-1 {
      top: -54px;
      left: -54px;
    }

    &.polka-2 {
      bottom: -54px;
      right: -54px;
    }
  }

  .icon-values-card {
    position: relative;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    padding: 4rem 3rem;
    border-radius: 1rem;
    box-shadow: var(--spread-shadow);
    z-index: 1;

    .iconify {
      font-size: 2rem;
      margin-bottom: 0.75rem;
    }
  }
}
</style>
