<script setup lang="ts">
import { computed } from 'vue'
import type { BlobFeature } from '/@src/types'

export interface FeatureBlockLProps {
  features: BlobFeature[]
  blob?: boolean
  dots?: boolean
  links?: boolean
  inverted?: boolean
}

const props = withDefaults(defineProps<FeatureBlockLProps>(), {
  links: false,
  blob: false,
  dots: false,
  inverted: false,
})

const textClasses = computed(() => [props.inverted && 'text-light'])
</script>

<template>
  <div class="py-0">
    <div
      v-for="(feature, index) in props.features"
      :key="index"
      class="columns is-vcentered b-columns-half-tablet-p"
    >
      <div v-if="index % 2" class="column is-6">
        <Blob v-if="props.blob" />
        <div v-if="props.dots" class="dot dot-primary dot-1 levitate"></div>
        <div
          v-if="props.dots"
          class="dot dot-success dot-2 levitate delay-3"
        ></div>
        <div
          v-if="props.dots"
          class="dot dot-info dot-3 levitate delay-2"
        ></div>
        <svg
          id="mask-type-1"
          class="svg-mask"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath :id="`blob-${index}`">
              <path
                fill="#474bff"
                d="M421.5,289.5Q376,339,334.5,371.5Q293,404,241.5,399Q190,394,118.5,387Q47,380,34.5,310Q22,240,44,177Q66,114,121,78Q176,42,244,29.5Q312,17,351,74Q390,131,428.5,185.5Q467,240,421.5,289.5Z"
              />
            </clipPath>
          </defs>
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            :clip-path="`url(#blob-${index})`"
            :xlink:href="feature.image"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>

      <div v-if="index % 2" class="column is-5">
        <Subtitle tag="h4" :size="5" weight="bold">
          <span class="text-gradient">{{ feature.subtitle }}</span>
        </Subtitle>
        <Title
          tag="h3"
          :size="3"
          weight="bold"
          narrow
          :inverted="props.inverted"
        >
          <span>{{ feature.title }}</span>
        </Title>
        <p class="paragraph py-2 max-w-4 small:mx-auto" :class="textClasses">
          {{ feature.text }}
        </p>
        <ActionLink
          v-if="props.links"
          :link="feature.link"
          label="Learn more about it"
        />
      </div>

      <div
        v-if="!(index % 2)"
        class="column is-6 b-hidden-tablet-p b-hidden-tablet-l b-hidden-desktop"
      >
        <Blob v-if="props.blob" />
        <div v-if="props.dots" class="dot dot-primary dot-4 levitate"></div>
        <div
          v-if="props.dots"
          class="dot dot-success dot-5 levitate delay-3"
        ></div>
        <div
          v-if="props.dots"
          class="dot dot-info dot-3 levitate delay-2"
        ></div>
        <svg
          id="mask-type-2a"
          class="svg-mask"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath :id="`blob-${index}-a`">
              <path
                fill="#474bff"
                d="M439.5,310.5Q409,381,341.5,407Q274,433,202.5,430.5Q131,428,101.5,364.5Q72,301,74,240.5Q76,180,105.5,119.5Q135,59,207.5,35.5Q280,12,333,64.5Q386,117,428,178.5Q470,240,439.5,310.5Z"
              />
            </clipPath>
          </defs>
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            :clip-path="`url(#blob-${index}-a)`"
            :xlink:href="feature.image"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>

      <div v-if="!(index % 2)" class="column is-5 is-offset-1">
        <Subtitle tag="h4" :size="5" weight="bold">
          <span class="text-gradient">{{ feature.subtitle }}</span>
        </Subtitle>
        <Title
          tag="h3"
          :size="3"
          weight="bold"
          narrow
          :inverted="props.inverted"
        >
          <span>{{ feature.title }}</span>
        </Title>
        <p class="paragraph py-2 max-w-4 small:mx-auto" :class="textClasses">
          {{ feature.text }}
        </p>
        <ActionLink
          v-if="props.links"
          :link="feature.link"
          label="Learn more about it"
        />
      </div>

      <div v-if="!(index % 2)" class="column is-6 b-hidden-mobile">
        <Blob v-if="props.blob" />
        <div v-if="props.dots" class="dot dot-primary dot-4 levitate"></div>
        <div
          v-if="props.dots"
          class="dot dot-success dot-5 levitate delay-3"
        ></div>
        <div
          v-if="props.dots"
          class="dot dot-info dot-3 levitate delay-2"
        ></div>
        <svg
          id="mask-type-2b"
          class="svg-mask"
          viewBox="0 0 480 480"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <clipPath :id="`blob-${index}-b`">
              <path
                fill="#474bff"
                d="M439.5,310.5Q409,381,341.5,407Q274,433,202.5,430.5Q131,428,101.5,364.5Q72,301,74,240.5Q76,180,105.5,119.5Q135,59,207.5,35.5Q280,12,333,64.5Q386,117,428,178.5Q470,240,439.5,310.5Z"
              />
            </clipPath>
          </defs>
          <image
            x="0"
            y="0"
            width="100%"
            height="100%"
            :clip-path="`url(#blob-${index}-b)`"
            :xlink:href="feature.image"
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.column {
  position: relative;

  .svg-mask {
    position: relative;
    z-index: 2;
  }

  .morphing-blob-wrapper {
    position: absolute;
    top: 35px;
    left: 50px;
    transform: scale(1.5);
    opacity: 0.15;
    z-index: 1;
  }

  .dot {
    position: absolute;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    z-index: 3;

    &.dot-primary {
      background: var(--primary);
      box-shadow: var(--primary-box-shadow);
    }

    &.dot-success {
      background: var(--success);
      box-shadow: var(--success-box-shadow);
    }

    &.dot-info {
      background: var(--info);
      box-shadow: var(--info-box-shadow);
    }

    &.dot-1 {
      bottom: 20%;
      left: 15%;
      animation-delay: 0.25s;
    }

    &.dot-2 {
      bottom: 44%;
      right: 4%;
      height: 54px;
      width: 54px;
      animation-delay: 1s;
    }

    &.dot-3 {
      top: 10%;
      left: 30%;
      height: 32px;
      width: 32px;
      animation-delay: 0.75s;
    }

    &.dot-4 {
      top: 20%;
      left: 18%;
      animation-delay: 1s;
    }

    &.dot-5 {
      bottom: 35%;
      right: 5%;
      height: 54px;
      width: 54px;
      animation-delay: 0.25s;
    }

    &.dot-6 {
      top: 15%;
      left: 2%;
      animation-delay: 0.75s;
    }
  }
}
</style>
