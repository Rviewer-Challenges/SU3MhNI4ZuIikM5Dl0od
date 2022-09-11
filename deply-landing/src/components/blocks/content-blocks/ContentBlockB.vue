<script setup lang="ts">
import Popper from 'vue3-popper'
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface ContentBlockBImage {
  url: string
  name: string
  position: string
  description: string
}

export interface ContentBlockBText {
  paragraph: string
}

export interface ContentBlockBProps {
  title: string
  subtitle: string
  text: ContentBlockBText[]
  images?: ContentBlockBImage[]
  squared?: boolean
  link?: RouteLocationRaw
  linkLabel?: string
  inverted?: boolean
}

const props = withDefaults(defineProps<ContentBlockBProps>(), {
  images: () => [],
  squared: false,
  link: undefined,
  linkLabel: 'Learn More',
  inverted: false,
})

const imageClasses = computed(() => [props.squared && `is-squared`])

const textClasses = computed(() => [props.inverted && 'text-light'])
</script>

<template>
  <div class="py-6 mx-auto max-w-8">
    <slot name="title">
      <div class="has-text-centered mb-8">
        <SectionTitle
          :title="props.title"
          :subtitle="props.subtitle"
          :inverted="props.inverted"
        />
      </div>
    </slot>
    <div class="columns m-0">
      <slot name="content">
        <div
          v-for="(content, index) in props.text.slice(0, 2)"
          :key="index"
          class="column is-6"
        >
          <p class="paragraph mobile:text-centered" :class="textClasses">
            {{ content.paragraph }}
          </p>
        </div>
      </slot>
    </div>

    <div class="mx-auto max-w-6 is-flex is-justify-content-center pt-8">
      <slot name="images">
        <div
          v-for="(image, index) in props.images.slice(0, 5)"
          :key="index"
          class="image-wrap"
          :class="imageClasses"
        >
          <ClientOnly>
            <Popper placement="top" arrow hover offset-distance="20">
              <AvatarSimple
                :picture="image.url"
                :squared="props.squared"
                size="large"
              />
              <template #content>
                <div class="popover-head">
                  <AvatarSimple
                    :picture="image.url"
                    :squared="props.squared"
                    size="small"
                  />
                  <div class="meta">
                    <span class="meta-title">{{ image.name }}</span>
                    <span class="meta-subtitle">{{ image.position }}</span>
                  </div>
                </div>
                <div class="popover-body">
                  <p class="paragraph rem-75">{{ image.description }}</p>
                </div>
              </template>
            </Popper>
          </ClientOnly>
        </div>
      </slot>
    </div>

    <div
      v-if="props.link"
      class="
        bottom-action
        is-flex is-align-items-center is-justify-content-center
        pt-8
      "
    >
      <Buttons v-if="props.link" alignment="centered">
        <Button :to="props.link" color="primary" bold raised>Learn More</Button>
      </Buttons>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  width: calc(20% - 1rem);
  transition: transform 0.3s;

  :deep(.avatar) {
    position: relative;
    z-index: 1;
    pointer-events: none;

    img {
      background: var(--section-bg-color-grey);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: 21px;
    border-radius: 50%;
    border: 2px solid var(--primary);
    width: 70px;
    height: 70px;
    transform: scale(0);
    transition: transform 0.3s;
    pointer-events: none;
    z-index: 0;
  }

  &:hover {
    transform: scale(1.1);

    &::after {
      transform: scale(1.1);
    }
  }

  &.is-squared {
    &::after {
      border-radius: 1.25rem !important;
    }
  }
}

:deep(.popper) {
  border-radius: 1rem;
  min-width: 200px;
  padding: 0.75rem;
  border-color: var(--wrap-border-color);

  .popover-head {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    .meta {
      margin-left: 0.5rem;

      span {
        display: block;
        line-height: 1.2;
      }

      .meta-title {
        font-family: var(--font-alt);
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--title-color);
      }

      .meta-subtitle {
        font-family: var(--font);
        font-size: 0.7rem;
        color: var(--light-text);
      }
    }
  }

  .popover-body {
    .paragraph {
      line-height: 1.4;
    }
  }
}

.bottom-action {
  :deep(.button) {
    min-width: 160px;
  }
}

@media only screen and (max-width: 767px) {
  .image-wrap {
    &::after {
      display: none !important;
    }
  }
}
</style>
