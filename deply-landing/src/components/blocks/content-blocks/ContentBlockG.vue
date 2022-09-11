<script setup lang="ts">
import { computed } from 'vue'

export interface ContentBlockGImage {
  url: string
  label: string
}

export interface ContentBlockGProps {
  title: string
  images: ContentBlockGImage[]
  text: string
  logos?: ContentBlockGImage[]
  imageSquared?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<ContentBlockGProps>(), {
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
    <div class="columns is-vcentered b-columns-half-tablet-p">
      <div class="column is-5">
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
          <div
            class="
              is-flex is-align-items-center
              py-4
              small:mx-auto small:max-w-4
              j-center-tablet-p j-center-mobile
            "
          >
            <img
              v-for="(logo, index) in props.logos.slice(0, 4)"
              :key="index"
              class="small-logo mx-2 max-w-1/5"
              :src="logo.url"
              :alt="logo.label"
            />
          </div>
        </slot>
      </div>
      <div class="column is-7">
        <slot name="images">
          <div
            class="
              columns
              is-multiline
              image-columns
              b-columns-half-mobile b-only-tablet-p-flex
            "
          >
            <div
              v-for="(image, index) in props.images.slice(0, 4)"
              :key="index"
              class="column is-6 p-2"
            >
              <img
                class="block"
                :class="imageClasses"
                :src="image.url"
                :alt="image.label"
              />
            </div>
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

.image-columns {
  .column {
    padding: 0.25rem !important;
  }
}

.is-inverted {
  .small-logo {
    filter: invert(1);
  }
}
</style>
