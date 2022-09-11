<script setup lang="ts">
import { content12 } from '/@src/data/blocks/content'
import {
  contentBlockG,
  contentBlockGProps,
  contentBlockGSample,
} from '/@src/data/docs/blocks/content/blockG'
</script>

<template>
  <Section id="block-g-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block G"
        subtitle="Block G variation 1"
        link="block-g-props"
      />

      <ContentBlockG
        :title="content12.title"
        :text="content12.text"
        :images="content12.images"
        :logos="content12.logos"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block G"
        subtitle="Block G variation 1"
        link="block-g-props"
        inverted
      />

      <ContentBlockG
        :title="content12.title"
        :text="content12.text"
        :images="content12.images"
        :logos="content12.logos"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block G"
        subtitle="Block G variation 2"
        link="block-g-props"
      />

      <ContentBlockG
        :title="content12.title"
        :text="content12.text"
        :images="content12.images"
        :logos="content12.logos"
        image-squared
      />
    </Container>
  </Section>

  <Section id="block-g-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block G Props" subtitle="Available props for block G" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockG" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockGProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="contentBlockGSample" />
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
