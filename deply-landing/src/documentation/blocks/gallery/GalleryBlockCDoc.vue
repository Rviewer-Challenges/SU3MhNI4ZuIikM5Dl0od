<script setup lang="ts">
import { boxedGallery } from '/@src/data/blocks/gallery'
import {
  galleryBlockD,
  galleryBlockDProps,
  galleryBlockDSample,
} from '/@src/data/docs/blocks/gallery/blockD'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 1"
        link="block-c-props"
      />

      <GalleryBlockC :items="boxedGallery" />
    </Container>
  </Section>

  <Section id="block-c-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block C Props" subtitle="Available props for block C" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="galleryBlockD" />
        </template>
        <template #props>
          <DemoProps :props="galleryBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="galleryBlockDSample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with highly customizable and versatile Gallery blocks
            that you can use in any page. Each block comes with it's own styles
            and props. Use the props to build your own examples or use one of
            the prebuilt examples.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
