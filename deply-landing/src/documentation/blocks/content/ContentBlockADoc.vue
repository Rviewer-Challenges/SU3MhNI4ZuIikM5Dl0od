<script setup lang="ts">
import { content, content2 } from '/@src/data/blocks/content'
import {
  contentBlockA,
  contentBlockAProps,
  contentBlockASample,
} from '/@src/data/docs/blocks/content/blockA'
</script>

<template>
  <Section id="block-a-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 1"
        link="block-a-props"
      />

      <ContentBlockA
        :title="content.title"
        :text="content.text"
        link="index"
        :images="content.images"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 1"
        link="block-a-props"
        inverted
      />

      <ContentBlockA
        :title="content.title"
        :text="content.text"
        link="index"
        :images="content.images"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 2"
        link="block-a-props"
      />

      <ContentBlockA
        :title="content2.title"
        :text="content2.text"
        link="index"
        :images="content2.images"
        squared
      />
    </Container>
  </Section>

  <Section id="block-a-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block A Props" subtitle="Available props for block A" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockA" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="contentBlockASample" />
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
