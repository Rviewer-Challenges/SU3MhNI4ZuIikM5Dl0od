<script setup lang="ts">
export interface JumboBlockProps {
  title: string
  subtitle: string
  punchline?: string
}

const props = withDefaults(defineProps<JumboBlockProps>(), {
  punchline: undefined,
})
</script>

<template>
  <div class="py-6">
    <div class="jumbo-block">
      <div class="has-text-centered mb-6">
        <span v-if="props.punchline" class="top-tag">
          {{ props.punchline }}
        </span>
        <Title tag="h2" :size="2" weight="bold">
          <span>{{ props.title }}</span>
        </Title>
        <Subtitle tag="p" :size="6" weight="semi" class="mx-auto max-w-6">
          <span>{{ props.subtitle }}</span>
        </Subtitle>
      </div>

      <div class="inner-block">
        <div class="columns b-colums-half-tablet-p">
          <div class="column is-6">
            <slot name="left"></slot>
          </div>
          <div class="column is-6">
            <slot name="right"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.jumbo-block {
  position: relative;
  padding: 4rem;
  background: var(--wrap-muted-color);
  border-radius: 1.75rem;
  max-width: 1040px;
  margin: 0 auto;

  .top-tag {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: var(--wrap-bg-color);
    margin-bottom: 1rem;
    font-family: var(--font);
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--title-color);
    box-shadow: var(--spread-shadow);
    border-radius: 5rem;
  }
}

@media only screen and (max-width: 767px) {
  .jumbo-block {
    padding: 1.5rem;

    :deep(.media-card) {
      padding: 0.5rem;

      .media-card-meta {
        padding-bottom: 0.5rem;

        .meta-text {
          h3 {
            font-size: 0.9rem;
          }
        }

        .meta-stat {
          display: none;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .jumbo-block {
    .columns {
      display: flex;
    }

    :deep(.media-card) {
      padding: 0.5rem;

      .media-card-meta {
        padding-bottom: 0.5rem;

        .meta-stat {
          display: none;
        }
      }
    }
  }
}
</style>
