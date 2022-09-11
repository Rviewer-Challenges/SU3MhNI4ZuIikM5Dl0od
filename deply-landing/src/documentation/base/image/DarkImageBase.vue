<script setup lang="ts">
import { darkImageProps, darkImage } from '/@src/data/docs/base/images'
</script>

<template>
  <Section id="image-dark-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Dark Image" subtitle="Dark image feature" />
          <div class="is-flex is-justify-content-center mx-auto max-w-4 pt-4">
            <DarkImage
              src="/assets/illustrations/features/vr.svg"
              src-dark="/assets/illustrations/features/vr-dark.svg"
              alt="dark image"
              width="800"
              height="600"
            />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="darkImage" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="darkImageProps" />
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
              Vulk's dark image component let's you setup images for both light
              and dark mode, removing the hassle. The dark image component
              receives 2 image sources with the
              <code>src</code>
              and the
              <code>dark-src</code>
              prop. It also provides a
              <code>width</code>
              and a
              <code>height</code>
              prop as well as a way to set the image display to
              <code>inline</code>
              .
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
