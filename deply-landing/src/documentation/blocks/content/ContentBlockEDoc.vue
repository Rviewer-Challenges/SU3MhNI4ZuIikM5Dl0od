<script setup lang="ts">
import { content8, content9 } from '/@src/data/blocks/content'
import {
  contentBlockE,
  contentBlockEProps,
  contentBlockESample,
} from '/@src/data/docs/blocks/content/blockE'
</script>

<template>
  <Section id="block-e-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 1"
        link="block-e-props"
      />

      <ContentBlockE
        :title="content8.title"
        :text="content8.text"
        :icons="content8.icons"
        :image="content8.image"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 2"
        link="block-e-props"
        inverted
      />

      <ContentBlockE
        :title="content8.title"
        :text="content8.text"
        :icons="content8.icons"
        :image="content8.image"
        inverted
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 3"
        link="block-e-props"
      />

      <ContentBlockE
        :title="content9.title"
        :text="content9.text"
        :icons="content9.icons"
        :image="content9.image"
        icon-squared
        image-squared
      />
    </Container>
  </Section>

  <Section id="block-e-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block E Props" subtitle="Available props for block E" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="contentBlockE" />
        </template>
        <template #props>
          <DemoProps :props="contentBlockEProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="contentBlockESample" />
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
