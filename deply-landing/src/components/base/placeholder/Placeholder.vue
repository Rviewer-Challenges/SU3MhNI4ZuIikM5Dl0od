<script setup lang="ts">
import { computed } from 'vue'

export interface PlaceholderProps {
  title: string
  subtitle?: string
  larger?: boolean
}

const props = withDefaults(defineProps<PlaceholderProps>(), {
  subtitle: undefined,
})

const placeholderClasses = computed(() => [props.larger && 'is-larger'])
</script>

<template>
  <div class="placeholder">
    <div class="placeholder-content">
      <slot name="image"></slot>
      <Title tag="h3" :size="5" weight="semi" leading>{{ props.title }}</Title>
      <p v-if="props.subtitle" :class="placeholderClasses" class="mb-4">
        {{ props.subtitle }}
      </p>
      <slot name="action"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.placeholder {
  min-height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  &.is-wider {
    .placeholder-content {
      > p {
        font-size: 1rem;
        max-width: 420px;
      }
    }
  }

  .placeholder-content {
    text-align: center;

    img {
      display: block;
      max-width: 340px;
      margin: 0 auto 12px;

      &.is-larger {
        max-width: 440px;
      }
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 600;
      font-family: var(--font-alt);
      color: var(--dark-text);
    }

    p {
      font-size: 1.1rem;
      max-width: 440px;
      margin: 0 auto 12px;
      color: var(--light-text);

      &.is-larger {
        max-width: 620px;
      }
    }

    .btn {
      margin-bottom: 8px;
    }
  }
}

@media (max-width: 767px) {
  .placeholder {
    .placeholder-content {
      img {
        max-width: 280px;
      }
    }
  }
}
</style>
