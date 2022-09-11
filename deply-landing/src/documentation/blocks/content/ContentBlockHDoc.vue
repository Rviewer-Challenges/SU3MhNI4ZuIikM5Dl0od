<script setup lang="ts">
import { content13 } from '/@src/data/blocks/content'
import {
  contentBlockH,
  contentBlockHProps,
  contentBlockHSample,
} from '/@src/data/docs/blocks/content/blockH'
</script>

<template>
  <Section id="block-h-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block H"
        subtitle="Block H variation 1"
        link="block-h-props"
      />

      <ContentBlockH
        :title="content13.title"
        :text="content13.text"
        :images="content13.images"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block H"
        subtitle="Block H variation 1"
        link="block-h-props"
        inverted
      />

      <ContentBlockH
        :title="content13.title"
        :text="content13.text"
        :images="content13.images"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block H"
        subtitle="Block H variation 2"
        link="block-h-props"
      />

      <ContentBlockH
        :title="content13.title"
        :text="content13.text"
        :images="content13.images"
        :limit="2"
        links
        image-squared
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block H"
        subtitle="Block H variation 3"
        link="block-h-props"
      />

      <ContentBlockH
        :title="content13.title"
        :text="content13.text"
        :images="content13.images"
        :limit="4"
        links
        image-squared
      />
    </Container>
  </Section>

  <Section id="block-h-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block H Props" subtitle="Available props for block H" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockH" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockHProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="contentBlockHSample" />
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
