<script setup lang="ts">
import { content3, content4 } from '/@src/data/blocks/content'
import {
  contentBlockB,
  contentBlockBProps,
  contentBlockBSample,
} from '/@src/data/docs/blocks/content/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 1"
        link="block-b-props"
      />

      <ContentBlockB
        :title="content3.title"
        :subtitle="content3.subtitle"
        :text="content3.text"
        :images="content3.images"
        link="index"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 2"
        link="block-b-props"
        inverted
      />

      <ContentBlockB
        :title="content3.title"
        :subtitle="content3.subtitle"
        :text="content3.text"
        :images="content3.images"
        link="index"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 3"
        link="block-b-props"
      />

      <ContentBlockB
        :title="content4.title"
        :subtitle="content4.subtitle"
        :text="content4.text"
        :images="content4.images"
        link="index"
        squared
      />
    </Container>
  </Section>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block B Props" subtitle="Available props for block B" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockB" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="contentBlockBSample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with highly customizable and versatile Content blocks
            that you can use in any page. Each block comes with it's own styles
            and props. Use the props to build your own examples or use one of
            the prebuilt examples. Every block is natively supporting dark mode.
            However, there are some cases when even in light mode, the section
            background is dark or colored. In that case, you can use the
            <code>inverted</code>
            prop to invert the component when in light mode. See markup and
            props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
