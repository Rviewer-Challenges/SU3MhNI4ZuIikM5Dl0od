<script setup lang="ts">
import { imageRatioProps, imageRatioRounded } from '/@src/data/docs/base/images'
</script>

<template>
  <Section id="image-rounded-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Rounded Ratio" subtitle="Rounded ratio feature" />
          <div class="is-flex pt-4">
            <div class="w-full max-w-1/4 px-1">
              <p class="paragraph rem-90">4by3 ratio</p>
              <ImageRatio ratio="4by3" rounded>
                <img
                  src="https://dummyimage.com/640x480/ededed/000000"
                  alt="ratio image"
                  width="640"
                  height="480"
                />
              </ImageRatio>
            </div>
            <div class="w-full max-w-1/4 px-1">
              <p class="paragraph rem-90">3by4 ratio</p>
              <ImageRatio ratio="3by4" rounded>
                <img
                  src="https://dummyimage.com/480x640/ededed/000000"
                  alt="ratio image"
                  width="480"
                  height="640"
                />
              </ImageRatio>
            </div>
            <div class="w-full max-w-1/4 px-1">
              <p class="paragraph rem-90">5by4 ratio</p>
              <ImageRatio ratio="5by4" rounded>
                <img
                  src="https://dummyimage.com/600X480/ededed/000000"
                  alt="ratio image"
                  width="640"
                  height="480"
                />
              </ImageRatio>
            </div>
            <div class="w-full max-w-1/4 px-1">
              <p class="paragraph rem-90">16by9 ratio</p>
              <ImageRatio ratio="16by9" rounded>
                <img
                  src="https://dummyimage.com/640x360/ededed/000000"
                  alt="ratio image"
                  width="640"
                  height="360"
                />
              </ImageRatio>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="imageRatioRounded" />
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
              to see al available ratios. You can also make the images rounded
              by using the
              <code>rounded</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
