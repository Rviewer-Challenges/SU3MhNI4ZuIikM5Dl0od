<script setup lang="ts">
import { imageRatioProps, imageRatioSquare } from '/@src/data/docs/base/images'
</script>

<template>
  <Section id="image-square-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Square Ratio" subtitle="Square ratio feature" />
          <div class="is-flex pt-4">
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="48">
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="48">
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="48">
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="48">
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
          </div>

          <div class="is-flex pt-4">
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="64" rounded>
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="64" rounded>
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="64" rounded>
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="64" rounded>
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
          </div>

          <div class="is-flex pt-4">
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="96" rounded>
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="96" rounded>
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="96" rounded>
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
            <div class="px-1">
              <ImageRatio ratio="1by1" :square-dimensions="96" rounded>
                <img
                  src="https://dummyimage.com/250x250/ededed/000000"
                  alt="ratio image"
                  width="250"
                  height="250"
                />
              </ImageRatio>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="imageRatioSquare" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="imageRatioProps" />
          </template>
          <template #sample>
            <div class="empty-text">
              <p class="paragraph rem-95">
                No data sample available for this component
              </p>
            </div>
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              Images play a central part of every web and mobile application.
              Vulk's dark image ratio component let's you create images with the
              perfect ratio just by using the
              <code>ratio</code>
              prop. Take a look at the
              <a
                href="https://bulma.io/documentation/elements/image/"
                class="link"
              >
                Bulma documentation
              </a>
              to see al available ratios. When using the
              <code>1by1</code>
              ratio, you have access to an additional
              <code>square-dimensions</code>
              that gives you control over the images dimensions.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
