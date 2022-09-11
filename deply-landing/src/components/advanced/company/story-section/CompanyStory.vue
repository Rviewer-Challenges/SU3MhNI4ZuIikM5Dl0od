<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface CompanyStoryImages {
  imageOne: string
  imageTwo: string
  imageThree: string
  imageFour: string
  imageFive: string
  imageSix: string
}

export interface CompanyStoryProps {
  mainTitle: string
  secondaryTitle: string
  mainText: string
  secondaryText: string
  images: CompanyStoryImages
  reverse?: boolean
}

const props = withDefaults(defineProps<CompanyStoryProps>(), {
  reverse: false,
})
</script>

<template>
  <div class="company-story">
    <div class="columns b-columns-half-tablet-p">
      <div class="column is-6">
        <div class="company-story-block">
          <div v-if="!props.reverse" class="text-block is-start">
            <Title tag="h2" :size="1" weight="bold">
              <span>{{ props.mainTitle }}</span>
            </Title>
            <p class="paragraph">
              {{ props.mainText }}
            </p>
          </div>
          <div class="images-block">
            <div class="left">
              <img
                class="pushed"
                :src="props.images.imageOne"
                alt="story image"
                width="375"
                height="562"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '375x562')
                "
              />
            </div>
            <div class="right">
              <img
                :src="props.images.imageTwo"
                alt="story image"
                width="400"
                height="400"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '400x400')
                "
              />
              <img
                :src="props.images.imageThree"
                alt="story image"
                width="375"
                height="562"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '375x562')
                "
              />
            </div>
          </div>
          <div v-if="props.reverse" class="text-block is-start">
            <Title tag="h2" :size="1" weight="bold">
              <span>{{ props.secondaryTitle }}</span>
            </Title>
            <p class="paragraph">
              {{ props.secondaryText }}
            </p>
          </div>
        </div>
      </div>
      <div class="column is-6">
        <div class="company-story-block">
          <div v-if="props.reverse" class="text-block is-end">
            <Title tag="h2" :size="1" weight="bold">
              <span>{{ props.mainTitle }}</span>
            </Title>
            <p class="paragraph">
              {{ props.mainText }}
            </p>
          </div>
          <div class="images-block">
            <div class="left">
              <img
                class="pushed"
                :src="props.images.imageFour"
                alt="story image"
                width="375"
                height="562"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '375x562')
                "
              />
            </div>
            <div class="right">
              <img
                :src="props.images.imageFive"
                alt="story image"
                width="400"
                height="400"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '400x400')
                "
              />
              <img
                :src="props.images.imageSix"
                alt="story image"
                width="375"
                height="562"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '375x562')
                "
              />
            </div>
          </div>
          <div v-if="!props.reverse" class="text-block is-end">
            <Title tag="h2" :size="1" weight="bold">
              <span>{{ props.secondaryTitle }}</span>
            </Title>
            <p class="paragraph">
              {{ props.secondaryText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.company-story {
  position: relative;
  margin-top: 4rem;

  .company-story-block {
    .text-block {
      &.is-start {
        margin-bottom: 3rem;
      }

      &.is-end {
        margin-top: 3rem;
      }
    }

    .images-block {
      display: flex;
      margin-left: -0.5rem;
      margin-right: -0.5rem;

      .left,
      .right {
        width: 50%;
      }

      img {
        display: block;
        width: calc(100% - 1rem);
        margin: 1rem 0.5rem;
        object-fit: cover;

        &.pushed {
          margin-top: 40%;
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .company-story {
    .columns {
      .column {
        .company-story-block {
          display: flex;
          flex-direction: column;
        }

        &:last-child {
          .company-story-block {
            flex-direction: column-reverse;

            .text-block {
              margin-top: 0;
              margin-bottom: 3rem;
            }
          }
        }
      }
    }
  }
}
</style>
