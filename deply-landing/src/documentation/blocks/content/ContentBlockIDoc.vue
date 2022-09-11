<script setup lang="ts">
import { content14, content15 } from '/@src/data/blocks/content'
import {
  contentBlockI,
  contentBlockIProps,
  contentBlockISample,
} from '/@src/data/docs/blocks/content/blockI'
</script>

<template>
  <Section id="block-i-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block I"
        subtitle="Block I variation 1"
        link="block-i-props"
      />

      <ContentBlockI :counters="content14" />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block I"
        subtitle="Block I variation 1"
        link="block-i-props"
        inverted
      />

      <ContentBlockI :counters="content14" inverted />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block I"
        subtitle="Block I variation 1"
        link="block-i-props"
      />

      <ContentBlockI :counters="content15" />
    </Container>
  </Section>

  <Section id="block-i-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block I Props" subtitle="Available props for block I" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockI" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockIProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="contentBlockISample" />
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
