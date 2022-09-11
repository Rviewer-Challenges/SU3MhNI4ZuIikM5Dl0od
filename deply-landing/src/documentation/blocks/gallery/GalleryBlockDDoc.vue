<script setup lang="ts">
import { simpleGallery } from '/@src/data/blocks/gallery'
import {
  galleryBlockD,
  galleryBlockDProps,
  galleryBlockDSample,
} from '/@src/data/docs/blocks/gallery/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 1"
        link="block-d-props"
      />

      <GalleryBlockD :items="simpleGallery" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 2"
        link="block-d-props"
      />

      <GalleryBlockD :items="simpleGallery" gap="sm" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 3"
        link="block-d-props"
      />

      <GalleryBlockD :items="simpleGallery" gap="xs" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 4"
        link="block-d-props"
      />

      <GalleryBlockD :items="simpleGallery" gap="sm" squared />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 5"
        link="block-d-props"
      />

      <GalleryBlockD :items="simpleGallery" gap="xs" :columns="4" :limit="6" />
    </Container>
  </Section>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block D Props" subtitle="Available props for block D" />

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
