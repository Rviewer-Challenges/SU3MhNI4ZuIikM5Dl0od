<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

const benefits = [
  'Upgrade your customer experience instantly',
  'Retain more, happier customers',
  'Start with done-for-you account setup',
  'Track results in real-time',
]
</script>

<template>
  <div class="mx-auto max-w-9">
    <Tabs
      alignment="centered"
      selected="javascript"
      :tabs="[
        { label: 'Javascript', value: 'javascript' },
        { label: 'Development', value: 'development' },
        { label: 'UI/UX Design', value: 'design' },
      ]"
    >
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'javascript'">
          <div class="columns is-vcentered b-columns-half-tablet-p">
            <div class="column is-6">
              <div class="image-block">
                <img
                  class="main-image"
                  src="data:image/gif;base64,replace_with_your_image"
                  alt="featured image"
                  width="400"
                  height="400"
                  @error.once="
                    (event) => viaPlaceholderErrorHandler(event, `400x400`)
                  "
                />
                <div class="small-image-holder">
                  <img
                    src="data:image/gif;base64,replace_with_your_image"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  />
                </div>
                <div class="tiny-image-holder">
                  <img
                    src="data:image/gif;base64,replace_with_your_image"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  />
                </div>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <Title tag="h2" :size="4" weight="bold">A Rich Ecosystem</Title>
              <p class="paragraph rem-100 mb-4">
                To grow your business on today’s dynamic marketplaces, you need
                an advantage. With our AI working continually behind the scenes,
                you can unlock growth opportunities and compete at the highest
                level 24/7.
              </p>
              <hr />
              <div
                v-for="(benefit, index) in benefits"
                :key="index"
                class="benefit mb-2"
              >
                <i class="iconify" data-icon="feather:check"></i>
                <span class="is-weight-500 pl-2 pr-4">{{ benefit }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeValue === 'development'">
          <div class="columns is-vcentered b-columns-half-tablet-p">
            <div class="column is-6">
              <div class="image-block">
                <img
                  class="main-image"
                  src="data:image/gif;base64,replace_with_your_image"
                  alt="featured image"
                  width="400"
                  height="400"
                  @error.once="
                    (event) => viaPlaceholderErrorHandler(event, `400x400`)
                  "
                />
                <div class="small-image-holder">
                  <img
                    src="data:image/gif;base64,replace_with_your_image"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  />
                </div>
                <div class="tiny-image-holder">
                  <img
                    src="data:image/gif;base64,replace_with_your_image"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  />
                </div>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <Title tag="h2" :size="4" weight="bold">
                The Future of Development
              </Title>
              <p class="paragraph rem-100 mb-4">
                To grow your business on today’s dynamic marketplaces, you need
                an advantage. With our AI working continually behind the scenes,
                you can unlock growth opportunities and compete at the highest
                level 24/7.
              </p>
              <hr />
              <div
                v-for="(benefit, index) in benefits"
                :key="index"
                class="benefit mb-2"
              >
                <i class="iconify" data-icon="feather:check"></i>
                <span class="is-weight-500 pl-2 pr-4">{{ benefit }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeValue === 'design'">
          <div class="columns is-vcentered b-columns-half-tablet-p">
            <div class="column is-6">
              <div class="image-block">
                <img
                  class="main-image"
                  src="data:image/gif;base64,replace_with_your_image"
                  alt="featured image"
                  width="400"
                  height="400"
                  @error.once="
                    (event) => viaPlaceholderErrorHandler(event, `400x400`)
                  "
                />
                <div class="small-image-holder">
                  <img
                    src="data:image/gif;base64,replace_with_your_image"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  />
                </div>
                <div class="tiny-image-holder">
                  <img
                    src="data:image/gif;base64,replace_with_your_image"
                    alt="featured image"
                    width="400"
                    height="400"
                    @error.once="
                      (event) => viaPlaceholderErrorHandler(event, `400x400`)
                    "
                  />
                </div>
              </div>
            </div>
            <div class="column is-5 is-offset-1">
              <Title tag="h2" :size="4" weight="bold">New Design Systems</Title>
              <p class="paragraph rem-100 mb-4">
                To grow your business on today’s dynamic marketplaces, you need
                an advantage. With our AI working continually behind the scenes,
                you can unlock growth opportunities and compete at the highest
                level 24/7.
              </p>
              <hr />
              <div
                v-for="(benefit, index) in benefits"
                :key="index"
                class="benefit mb-2"
              >
                <i class="iconify" data-icon="feather:check"></i>
                <span class="is-weight-500 pl-2 pr-4">{{ benefit }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<style scoped lang="scss">
:deep(.tabs) {
  margin-bottom: 2rem;
}

.benefit {
  font-family: var(--font);
  color: var(--medium-text);
}

.image-block {
  position: relative;

  .main-image {
    display: block;
    width: 400px;
    height: 400px;
    object-fit: cover;
  }

  .small-image-holder {
    position: absolute;
    bottom: -40px;
    right: -15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    background: var(--section-bg-color);

    img {
      display: block;
      width: 180px;
      height: 180px;
      object-fit: cover;
    }
  }

  .tiny-image-holder {
    position: absolute;
    top: 25px;
    left: -50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    background: var(--section-bg-color);

    img {
      display: block;
      width: 105px;
      height: 105px;
      object-fit: cover;
    }
  }
}

@media only screen and (max-width: 767px) {
  .image-block {
    .main-image {
      max-width: 100%;
    }

    .small-image-holder {
      bottom: -20px;
      right: -50px;
      width: 140px;
      height: 140px;

      img {
        width: 120px;
        height: 120px;
      }
    }

    .tiny-image-holder {
      width: 100px;
      height: 100px;

      img {
        width: 85px;
        height: 85px;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .image-block {
    .main-image {
      max-width: 100%;
      height: 350px;
    }

    .small-image-holder {
      bottom: -70px;
      right: 40px;
      width: 140px;
      height: 140px;

      img {
        width: 120px;
        height: 120px;
      }
    }

    .tiny-image-holder {
      width: 100px;
      height: 100px;

      img {
        width: 85px;
        height: 85px;
      }
    }
  }
}
</style>
