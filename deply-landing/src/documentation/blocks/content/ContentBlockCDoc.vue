<script setup lang="ts">
import { content5, content6 } from '/@src/data/blocks/content'
import {
  contentBlockC,
  contentBlockCProps,
  contentBlockCSample,
} from '/@src/data/docs/blocks/content/blockC'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 1"
        link="block-c-props"
      />

      <ContentBlockC
        :title="content5.title"
        :subtitle="content5.subtitle"
        :text="content5.text"
        :image="content5.image"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 2"
        link="block-c-props"
        inverted
      />

      <ContentBlockC
        :title="content5.title"
        :subtitle="content5.subtitle"
        :text="content5.text"
        :image="content5.image"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 3"
        link="block-c-props"
      />

      <ContentBlockC
        :title="content6.title"
        :subtitle="content6.subtitle"
        :text="content6.text"
        :image="content6.image"
        links
        image-squared
      />
    </Container>
  </Section>

  <Section id="block-c-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block C Props" subtitle="Available props for block C" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockC" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockCProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="contentBlockCSample" />
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
