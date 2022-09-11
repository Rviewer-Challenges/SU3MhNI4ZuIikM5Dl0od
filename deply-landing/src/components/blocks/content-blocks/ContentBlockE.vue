<script setup lang="ts">
import { computed } from 'vue'

export interface ContentBlockEIcon {
  url: string
  label: string
}

export interface ContentBlockDProps {
  title: string
  image: string
  text: string
  icons?: ContentBlockEIcon[]
  iconSquared?: boolean
  imageSquared?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<ContentBlockDProps>(), {
  icons: () => [],
  iconSquared: false,
  imageSquared: false,
  inverted: false,
})

const imageClasses = computed(() => [props.imageSquared && `image-squared`])

const textClasses = computed(() => [props.inverted && 'text-light'])
</script>

<template>
  <div class="py-6 mx-auto max-w-8">
    <div class="columns is-vcentered b-only-tablet-p-flex">
      <div class="column is-6">
        <slot name="content">
          <p class="paragraph mb-4" :class="textClasses">{{ props.text }}</p>
          <div class="py-2">
            <Title
              tag="h3"
              :size="6"
              weight="semi"
              narrow
              :inverted="props.inverted"
            >
              <span>{{ props.title }}</span>
            </Title>
          </div>
          <div class="is-flex pt-4">
            <div
              v-for="(icon, index) in props.icons.slice(0, 5)"
              :key="index"
              class="icon-wrapper px-2"
            >
              <AvatarSimple :picture="icon.url" :squared="props.iconSquared" />
            </div>
          </div>
        </slot>
      </div>
      <div class="column is-6">
        <slot name="image">
          <img :src="props.image" :class="imageClasses" alt="featured image" />
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-squared {
  border-radius: 1.5rem;
}

.icon-wrapper {
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
