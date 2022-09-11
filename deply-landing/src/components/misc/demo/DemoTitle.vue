<script setup lang="ts">
import VueScrollTo from 'vue-scrollto'

export interface DemoTitleProps {
  title: string
  subtitle: string
  link?: string
  inverted?: boolean
}

const props = withDefaults(defineProps<DemoTitleProps>(), {
  link: undefined,
  inverted: false,
})

const scrollTo = VueScrollTo.scrollTo
</script>

<template>
  <div class="py-4">
    <div class="is-flex is-align-items-center">
      <div>
        <Title tag="h2" :size="4" weight="bold" :inverted="props.inverted">
          <span>
            <slot name="title">{{ props.title }}</slot>
          </span>
        </Title>
        <Subtitle tag="p" :size="6" weight="thin">
          <span>
            <slot name="subtitle">{{ props.subtitle }}</slot>
          </span>
        </Subtitle>
      </div>
      <div v-if="link" class="ml-auto weight-5">
        <a
          class="link"
          @click.prevent="scrollTo(`#${props.link}`, 800)"
          @keydown.space.prevent="() => scrollTo(`#${props.link}`, 800)"
        >
          <slot>View Props</slot>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (max-width: 767px) {
  :deep(.subtitle) {
    font-size: 1.1rem !important;
  }
}
</style>
