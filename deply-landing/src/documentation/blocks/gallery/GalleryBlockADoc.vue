<script setup lang="ts">
import { masonryGallery } from '/@src/data/blocks/gallery'
import {
  galleryBlockA,
  galleryBlockAProps,
  galleryBlockASample,
} from '/@src/data/docs/blocks/gallery/blockA'
</script>

<template>
  <Section id="block-a-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 1"
        link="block-a-props"
      />

      <GalleryBlockA :items="masonryGallery" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 2"
        link="block-a-props"
      />

      <GalleryBlockA :items="masonryGallery" squared />
    </Container>
  </Section>

  <Section id="block-a-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block A Props" subtitle="Available props for block A" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="galleryBlockA" />
        </template>
        <template #props>
          <DemoProps :props="galleryBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="galleryBlockASample" />
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
