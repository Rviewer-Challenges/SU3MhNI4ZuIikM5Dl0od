<script setup lang="ts">
import { resources, resources2 } from '/@src/data/pages/blog'
import {
  blogPostsBlockB,
  blogPostsBlockBProps,
  blogPostsBlockBSample,
} from '/@src/data/docs/advanced/blog/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Advanced block B variation 1"
        link="block-b-props"
      />

      <div class="py-4"></div>

      <ResourceGrid :posts="resources" :limit="3" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Advanced block B variation 2"
        link="block-b-props"
      />

      <div class="py-4"></div>

      <ResourceGrid :posts="resources2" :limit="3" upside-down />
    </Container>
  </Section>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block B Props" subtitle="Available props for block B" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="blogPostsBlockB" />
        </template>
        <template #props>
          <DemoProps :props="blogPostsBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="blogPostsBlockBSample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with stunning advanced Feature blocks that you can use in
            any page. Each block comes with it's own styles and props. Use the
            props to build your own examples or use one of the prebuilt
            examples. Every block is natively supporting dark mode. See markup
            and props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
