<script setup lang="ts">
import { advancedGallery } from '/@src/data/blocks/gallery'
import {
  galleryBlockB,
  galleryBlockBProps,
  galleryBlockBSample,
} from '/@src/data/docs/blocks/gallery/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 1"
        link="block-b-props"
      />

      <GalleryBlockB :items="advancedGallery" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 2"
        link="block-b-props"
      />

      <GalleryBlockB :items="advancedGallery" squared />
    </Container>
  </Section>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block B Props" subtitle="Available props for block B" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="galleryBlockB" />
        </template>
        <template #props>
          <DemoProps :props="galleryBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="galleryBlockBSample" />
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
