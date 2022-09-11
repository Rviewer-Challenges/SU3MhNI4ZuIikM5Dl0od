<script setup lang="ts">
import { computed } from 'vue'

export type CtaBlockFAlign = 'left' | 'centered' | 'right'

export interface CtaBlockFProps {
  title: string
  subtitle: string
  background: string
  cta: string
  ctaLink: string
  alignment?: CtaBlockFAlign
  inverted?: boolean
  overlay?: boolean
}

const props = withDefaults(defineProps<CtaBlockFProps>(), {
  inverted: false,
  overlay: false,
  alignment: 'left',
})

const blockClasses = computed(() => [
  props.alignment === 'centered' && `mx-auto has-text-centered`,
  props.alignment === 'right' && `ml-auto`,
])

const textClasses = computed(() => [
  props.alignment === 'centered' && `mx-auto`,
  props.alignment === 'right' && `ml-auto`,
])
</script>

<template>
  <div class="py-6">
    <div
      v-background="{
        src: props.background,
        placeholder: 'https://dummyimage.com/1000x563/ededed/000000',
      }"
      class="cta-block mx-auto max-w-9"
    >
      <div v-if="props.overlay" class="cta-overlay"></div>
      <div class="cta-content" :class="blockClasses">
        <Title tag="h3" :size="3" weight="bold" inverted leading>
          <span>{{ props.title }}</span>
        </Title>
        <p
          class="paragraph has-text-white rem-115 mb-4 max-w-4"
          :class="textClasses"
        >
          {{ props.subtitle }}
        </p>
        <Buttons :alignment="props.alignment != 'right' && props.alignment">
          <Button :to="props.ctaLink" color="primary" :long="2" bold raised>
            {{ props.cta }}
          </Button>
        </Buttons>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cta-block {
  position: relative;
  background: var(--card-bg-color);
  border-radius: 1.75rem;
  box-shadow: var(--light-box-shadow);
  padding: 6rem 3rem;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  .cta-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--dark);
    opacity: 0.6;
  }

  .cta-content {
    position: relative;
    z-index: 2;
    max-width: 40%;
  }
}

@media only screen and (max-width: 767px) {
  .cta-block {
    .cta-content {
      max-width: 100%;

      :deep(.button) {
        width: 100%;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .cta-block {
    .cta-content {
      max-width: 55%;
    }
  }
}
</style>
