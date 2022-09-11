<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export interface BoxCarouselSlide {
  icon: string
  title: string
  link: string
}

export interface BoxCarouselProps {
  slides: BoxCarouselSlide[]
}

const props = withDefaults(defineProps<BoxCarouselProps>(), {
  slides: () => [],
})
</script>

<template>
  <div class="py-6">
    <div class="box-carousel">
      <div class="box-carousel-title max-w-7 mb-6">
        <Subtitle tag="h3" :size="6" weight="bold" class="pb-2">
          <span class="text-gradient">WE MAKE IT EASY</span>
        </Subtitle>
        <Title tag="h2" :size="3" weight="bold">
          <span>No more second-guessing every decision you need to make</span>
        </Title>
        <p class="paragraph rem-115">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam te
          quidem video minime esse deterritum. Quae cum dixisset, finem ille cum
          dolor.
        </p>
      </div>
      <carousel :items-to-show="9">
        <slide v-for="(slide, index) in props.slides" :key="index">
          <RouterLink :to="slide.link" class="box-carousel-box">
            <div class="box-inner">
              <i class="iconify" :data-icon="slide.icon"></i>
            </div>
            <div class="title-inner">
              <span>{{ slide.title }}</span>
            </div>
          </RouterLink>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>

      <div class="carousel-action mt-6">
        <Button color="primary" raised>Get Started Now</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.box-carousel {
  position: relative;

  .box-carousel-box {
    width: calc(100% - 1rem);
    margin: 0 0.5rem;

    .box-inner {
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 0.85rem;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      max-width: 100px;
      margin: 0 auto;
      padding: 1.75rem;
      transition: box-shadow 0.3s;

      .iconify {
        font-size: 2rem;
        color: var(--primary);
      }
    }

    .title-inner {
      text-align: left;
      max-width: 100px;
      margin: 0.75rem auto 0;
      line-height: 1.2;
      font-family: var(--font-main);
      font-weight: 600;
      color: var(--title-color);
      user-select: none;
    }

    &:hover {
      .box-inner {
        box-shadow: var(--light-box-shadow-md);
      }
    }
  }

  .carousel-action {
    :deep(.button) {
      min-width: 180px;
    }
  }
}

:deep(.carousel__next--in-active),
:deep(.carousel__prev--in-active) {
  opacity: 0.7;
}

:deep(.carousel__next) {
  right: 25px;

  svg {
    right: -1px;
  }
}

:deep(.carousel__prev) {
  right: 35px;

  svg {
    left: -1px;
  }
}

:deep(.carousel__next),
:deep(.carousel__prev) {
  position: absolute;
  top: -35px;
  left: initial;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  color: var(--light-text);
  box-shadow: var(--light-box-shadow);
  transition: border-color 0.3s, color 0.3s;

  svg {
    position: relative;
    width: 1em;
  }

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
  }
}
</style>
