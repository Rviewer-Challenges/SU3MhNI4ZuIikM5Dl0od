<script setup lang="ts">
import { content7 } from '/@src/data/blocks/content'
import {
  contentBlockD,
  contentBlockDProps,
  contentBlockDSample,
} from '/@src/data/docs/blocks/content/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 1"
        link="block-d-props"
      />

      <ContentBlockD
        :title="content7.title"
        :subtitle="content7.subtitle"
        :text="content7.text"
        :images="content7.images"
        link="index"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 2"
        link="block-d-props"
        inverted
      />

      <ContentBlockD
        :title="content7.title"
        :subtitle="content7.subtitle"
        :text="content7.text"
        :images="content7.images"
        link="index"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 3"
        link="block-d-props"
      />

      <ContentBlockD
        :title="content7.title"
        :subtitle="content7.subtitle"
        :text="content7.text"
        :images="content7.images"
        :limit="3"
        image-squared
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 4"
        link="block-d-props"
      />

      <ContentBlockD
        :title="content7.title"
        :subtitle="content7.subtitle"
        :text="content7.text"
        :images="content7.images"
        :limit="4"
        link="index"
      />
    </Container>
  </Section>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block D Props" subtitle="Available props for block D" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockD" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="contentBlockDSample" />
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
