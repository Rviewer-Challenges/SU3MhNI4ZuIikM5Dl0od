<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface ContentBlockJCounter {
  icon: string
  number: number
  text: string
}

export interface ContentBlockJProps {
  title: string
  text: string
  image: string
  imageSquared?: boolean
  counters: ContentBlockJCounter[]
  link?: RouteLocationRaw
  linkLabel?: string
  inverted?: boolean
}

const props = withDefaults(defineProps<ContentBlockJProps>(), {
  imageSquared: false,
  link: undefined,
  linkLabel: 'Learn More',
  inverted: false,
})

const imageClasses = computed(() => [props.imageSquared && `image-squared`])

const textClasses = computed(() => [props.inverted && 'text-light'])
</script>

<template>
  <div class="py-6 mx-auto max-w-10">
    <div class="columns is-vcentered b-only-tablet-p-flex">
      <div class="column is-6">
        <Title
          tag="h2"
          :size="4"
          weight="semi"
          leading
          :inverted="props.inverted"
        >
          <span>{{ props.title }}</span>
        </Title>
        <p class="paragraph">{{ props.text }}</p>

        <div class="py-4">
          <div
            class="
              columns
              b-flex-mobile b-columns-third-tablet-p
              is-multiline
              m-0
              has-text-centered
            "
          >
            <div
              v-for="(counter, index) in props.counters"
              :key="index"
              class="column is-4"
            >
              <div class="counter-icon">
                <i class="iconify" :data-icon="counter.icon"></i>
              </div>
              <div class="pb-4">
                <Title
                  tag="h3"
                  :size="4"
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
          <div v-if="props.link">
            <Buttons alignment="centered">
              <Button :to="props.link" color="primary" bold raised>
                {{ props.linkLabel }}
              </Button>
            </Buttons>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <img :src="props.image" :class="imageClasses" alt="featured image" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counter-icon {
  font-size: 1.75rem;
  color: var(--primary);
}

.image-squared {
  border-radius: 1.5rem;
}

:deep(.button) {
  min-width: 160px;
}

@media only screen and (max-width: 767px) {
  :deep(.button) {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  :deep(.button) {
    width: 100%;
  }
}
</style>
