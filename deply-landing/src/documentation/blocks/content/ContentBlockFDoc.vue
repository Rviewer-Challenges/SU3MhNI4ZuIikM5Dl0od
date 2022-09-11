<script setup lang="ts">
import { content10, content11 } from '/@src/data/blocks/content'
import {
  contentBlockF,
  contentBlockFProps,
  contentBlockFSample,
} from '/@src/data/docs/blocks/content/blockF'
</script>

<template>
  <Section id="block-f-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 1"
        link="block-f-props"
      />

      <ContentBlockF
        :title="content10.title"
        :text="content10.text"
        :image="content10.image"
        :logos="content10.logos"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 2"
        link="block-f-props"
        inverted
      />

      <ContentBlockF
        :title="content10.title"
        :text="content10.text"
        :image="content10.image"
        :logos="content10.logos"
        image-squared
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 3"
        link="block-f-props"
      />

      <ContentBlockF
        :title="content11.title"
        :text="content11.text"
        :image="content11.image"
        :logos="content11.logos"
        image-squared
      />
    </Container>
  </Section>

  <Section id="block-f-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block F Props" subtitle="Available props for block F" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockF" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockFProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="contentBlockFSample" />
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
