<script setup lang="ts">
import { computed } from 'vue'

export type ContactInfoColumns = 6 | 3 | 4

export interface ContactInfo {
  icon: string
  color: string
  title: string
  info: string
  text: string
}

export interface ContactInfosProps {
  infos: ContactInfo[]
  columns?: ContactInfoColumns
  limit?: number
  polkaDots?: boolean
}

const props = withDefaults(defineProps<ContactInfosProps>(), {
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
    <div class="contact-info" :class="blockClasses">
      <div v-if="props.polkaDots" class="polka-wrap polka-1">
        <PolkaDots />
      </div>
      <div class="contact-info-card">
        <div class="columns b-columns-half-tablet-p">
          <div
            v-for="(info, index) in props.infos.slice(0, props.limit)"
            :key="index"
            class="column"
            :class="columnClasses"
          >
            <i
              class="iconify"
              :data-icon="info.icon"
              :class="`text-${info.color}`"
            ></i>
            <Title tag="h3" :size="6" weight="semi" narrow>
              <span>{{ info.title }}</span>
            </Title>
            <span class="info-block">
              {{ info.info }}
            </span>
            <p class="paragraph rem-85">
              {{ info.text }}
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
.contact-info {
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

  .contact-info-card {
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

    .info-block {
      display: inline-block;
      font-family: var(--font);
      font-weight: 500;
      font-size: 0.9rem;
      color: var(--primary);
      margin: 0.5rem 0;
    }
  }
}
</style>
