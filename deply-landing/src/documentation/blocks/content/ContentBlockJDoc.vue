<script setup lang="ts">
import { content16 } from '/@src/data/blocks/content'
import {
  contentBlockJ,
  contentBlockJProps,
  contentBlockJSample,
} from '/@src/data/docs/blocks/content/blockJ'
</script>

<template>
  <Section id="block-j-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block J"
        subtitle="Block J variation 1"
        link="block-j-props"
      />

      <ContentBlockJ
        :title="content16.title"
        :text="content16.text"
        :image="content16.image"
        :counters="content16.counters"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block J"
        subtitle="Block J variation 1"
        link="block-j-props"
        inverted
      />

      <ContentBlockJ
        :title="content16.title"
        :text="content16.text"
        :image="content16.image"
        :counters="content16.counters"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block J"
        subtitle="Block J variation 2"
        link="block-j-props"
      />

      <ContentBlockJ
        :title="content16.title"
        :text="content16.text"
        :image="content16.image"
        :counters="content16.counters"
        link="index"
        image-squared
      />
    </Container>
  </Section>

  <Section id="block-j-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block J Props" subtitle="Available props for block J" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockJ" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockJProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="contentBlockJSample" />
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
