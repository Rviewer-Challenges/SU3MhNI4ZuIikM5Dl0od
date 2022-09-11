<script setup lang="ts">
export interface CtaBlockHProps {
  title: string
  subtitle: string
  smallText: string
  image?: string
  darkImage?: string
  imageWidth?: string
  imageHeight?: string
  background?: string
  inverted?: boolean
  rounded?: boolean
}

const props = withDefaults(defineProps<CtaBlockHProps>(), {
  image: undefined,
  darkImage: undefined,
  imageWidth: '800',
  imageHeight: '532',
  background: undefined,
  inverted: false,
  rounded: false,
})
</script>

<template>
  <div class="py-6">
    <div class="cta-block p-0 d-column-mobile">
      <div class="cta-content mobile:mb-6">
        <div color="cta-content-inner">
          <Subtitle
            tag="h4"
            :size="6"
            weight="bold"
            :inverted="props.inverted"
            narrow
            class="pb-5"
          >
            <span class="text-gradient">
              <slot name="subtitle">{{ props.smallText }}</slot>
            </span>
          </Subtitle>
          <Title tag="h3" :size="3" weight="bold" leading>
            <span>{{ props.title }}</span>
          </Title>
          <p class="paragraph rem-115 mb-4 max-w-4">{{ props.subtitle }}</p>
          <slot></slot>
        </div>
      </div>
      <div
        v-if="props.image && props.darkImage && !props.background"
        class="cta-image ml-auto"
      >
        <DarkImage
          :src="props.image"
          :src-dark="props.darkImage"
          :width="props.imageWidth"
          :height="props.imageHeight"
          alt="Cta image"
        />
      </div>
      <div
        v-if="!props.image && !props.darkImage && props.background"
        v-background="{
          src: props.background,
          placeholder: 'https://dummyimage.com/800x600/ededed/000000',
        }"
        class="cta-image ml-auto"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cta-block {
  position: relative;
  display: flex;
  align-items: stretch;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 1.75rem;
  box-shadow: var(--light-box-shadow);
  padding: 6rem 3rem;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  max-width: 1040px;
  margin: 0 auto;

  .cta-content {
    padding: 3.5rem;
    width: 45%;
    display: flex;
    align-items: center;
  }

  .cta-image {
    position: relative;
    width: 55%;
    min-height: 480px;
    background: var(--cta-boxed-minimal-bg-color);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50 50;

    img {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

@media only screen and (max-width: 767px) {
  .cta-block {
    .cta-content {
      width: 100%;
      padding: 2.25rem;

      :deep(.button) {
        min-width: 115px;
      }
    }

    .cta-image {
      width: 100%;
      min-height: 340px;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .cta-block {
    .cta-content {
      width: 55%;
    }

    .cta-image {
      width: 45%;
    }
  }
}
</style>
