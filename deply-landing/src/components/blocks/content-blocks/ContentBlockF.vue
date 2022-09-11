<script setup lang="ts">
import { computed } from 'vue'

export interface ContentBlockFLogo {
  url: string
  label: string
}

export interface ContentBlockFProps {
  title: string
  image: string
  text: string
  logos?: ContentBlockFLogo[]
  imageSquared?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<ContentBlockFProps>(), {
  logos: () => [],
  imageSquared: false,
  inverted: false,
})

const blockClasses = computed(() => [props.inverted && 'is-inverted'])

const imageClasses = computed(() => [props.imageSquared && `image-squared`])

const textClasses = computed(() => [props.inverted && 'text-light'])
</script>

<template>
  <div class="py-6 mx-auto max-w-8" :class="blockClasses">
    <div class="columns is-vcentered b-only-tablet-p-flex">
      <div class="column is-6">
        <slot name="image">
          <img :src="props.image" :class="imageClasses" alt="featured image" />
        </slot>
      </div>
      <div class="column is-6">
        <slot name="content">
          <Title
            tag="h3"
            :size="5"
            weight="semi"
            leading
            :inverted="props.inverted"
          >
            <span>{{ props.title }}</span>
          </Title>
          <p class="paragraph" :class="textClasses">{{ props.text }}</p>
          <div class="is-flex is-align-items-center pt-4">
            <img
              v-for="(logo, index) in props.logos.slice(0, 5)"
              :key="index"
              class="small-logo mx-2 max-w-1/5"
              :src="logo.url"
              :alt="logo.label"
            />
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-squared {
  border-radius: 1.5rem;
}

.is-inverted {
  .small-logo {
    filter: invert(1);
  }
}
</style>
