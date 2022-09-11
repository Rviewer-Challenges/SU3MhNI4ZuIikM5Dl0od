<script setup lang="ts">
import { computed } from 'vue'

export interface CtaBlockGProps {
  title: string
  subtitle: string
  image: string
  darkImage: string
  inverted?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<CtaBlockGProps>(), {
  inverted: false,
  rounded: false,
})

const textClasses = computed(() => [props.inverted && `has-text-white`])

const imageClasses = computed(() => [props.rounded && `is-rounded`])
</script>

<template>
  <div class="py-6">
    <div class="columns is-vcentered b-columns-half-tablet-p b-centered-mobile">
      <div class="column is-6">
        <div class="cta-block">
          <Title
            tag="h3"
            :size="3"
            weight="bold"
            leading
            :inverted="props.inverted"
          >
            <span>{{ props.title }}</span>
          </Title>
          <p class="paragraph rem-115 mb-4 max-w-4" :class="textClasses">
            {{ props.subtitle }}
          </p>
          <div class="max-w-4">
            <slot></slot>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <DarkImage
          class="block mx-auto"
          :class="imageClasses"
          :src="props.image"
          :src-dark="props.darkImage"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.control) {
  .form-icon {
    height: 48px !important;
    width: 48px !important;
    font-size: 1.15rem !important;
  }
}

:deep(.input) {
  height: 48px !important;
  padding-left: 48px !important;
  font-size: 1.1rem !important;
}

:deep(.button) {
  height: 48px !important;
}

:deep(.buttons) {
  .button {
    margin-bottom: 0 !important;
  }
}

img {
  &.is-rounded {
    border-radius: 1.75rem;
  }
}

@media only screen and (max-width: 767px) {
  :deep(.buttons) {
    justify-content: center;
  }
}
</style>
