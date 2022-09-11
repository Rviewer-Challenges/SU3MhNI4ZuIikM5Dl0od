<script setup lang="ts">
export interface BoxedSectionProps {
  minititle: string
  title: string
  subtitle: string
  content: string
  image: string
  darkImage?: string
  imageWidth?: string
  imageHeight?: string
  to: string
  cta: string
  inverted?: boolean
}

const props = withDefaults(defineProps<BoxedSectionProps>(), {
  minititle: undefined,
  title: undefined,
  subtitle: undefined,
  content: undefined,
  image: undefined,
  darkImage: undefined,
  imageWidth: '800',
  imageHeight: '625',
  to: undefined,
  cta: undefined,
  inverted: false,
})
</script>

<template>
  <div class="boxed-section" :class="props.inverted && 'is-inverted'">
    <div class="section-pill">
      <span role="img" aria-label="Ok Hand">👌</span>
      <span>{{ props.minititle }}</span>
    </div>
    <div class="columns is-vcentered">
      <div class="column is-6">
        <Subtitle tag="h3" :size="6" weight="bold" class="pb-4">
          <span class="text-gradient">{{ props.subtitle }}</span>
        </Subtitle>
        <Title tag="h2" :size="3" weight="bold">
          <span>{{ props.title }}</span>
        </Title>
        <p class="paragraph rem-115 mb-4 max-w-4">{{ props.content }}</p>
        <RouterLink :to="{ name: props.to }" class="rem-115">
          <span class="action-link">{{ cta }}</span>
          <i class="iconify" data-icon="feather:arrow-right"></i>
        </RouterLink>
      </div>
      <div class="column is-6">
        <DarkImage
          class="is-relative mx-auto"
          :src="props.image"
          :src-dark="props.darkImage"
          alt="box illustration"
          :width="props.imageWidth"
          :height="props.imageHeight"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.boxed-section {
  position: relative;
  background: var(--boxed-section-bg);
  padding: 50px;
  border-radius: 2.5rem;

  .section-pill {
    position: absolute;
    top: -1.5rem;
    left: 4rem;
    display: flex;
    align-items: center;
    background: var(--boxed-section-pill-bg-color);
    padding: 0.5rem 1.75rem 0.5rem 1rem;
    font-family: var(--font);
    border-radius: 0.75rem;
    border: 1px solid var(--boxed-section-pill-border-color);
    box-shadow: var(--light-box-shadow);

    span {
      display: inline-block;

      &:first-child {
        font-size: 1.5rem;
        margin-right: 0.5rem;
      }

      &:nth-child(2) {
        font-weight: 500;
        color: var(--boxed-section-pill-color);
      }
    }
  }

  .paragraph {
    color: var(--boxed-section-paragraph-color);
  }

  .action-link {
    font-weight: 500;
    margin-right: 0.75rem;

    &:hover {
      opacity: 0.7;
      color: var(--primary);

      + .iconify {
        opacity: 0.7;
        color: var(--primary);
        transform: translateX(5px) !important;
      }
    }
  }

  .iconify {
    vertical-align: middle;
    transition: transform 0.3s;
  }

  &.is-inverted {
    background: var(--card-bg-color);
  }
}

@media only screen and (max-width: 767px) {
  .boxed-section {
    padding: 4rem 2rem 2rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .boxed-section {
    .columns {
      display: flex;
    }

    :deep(.title) {
      &.is-3 {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
