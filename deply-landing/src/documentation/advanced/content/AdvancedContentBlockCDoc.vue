<script setup lang="ts">
import {
  contentBlockC,
  contentBlockCProps,
} from '/@src/data/docs/advanced/content/blockC'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Advanced block C variation 1"
        link="block-c-props"
      />

      <div class="py-4"></div>

      <CaseStudy background="data:image/gif;base64,replace_with_your_image">
        <SideSection
          subtitle="Success Stories"
          title="Learn how they built a successful business"
          content="See how some of our customers leverage Vulk technology to increase profits and take back control from resellers"
          image="/assets/illustrations/features/feature-3.png"
          dark-image="/assets/illustrations/features/feature-3-dark.png"
          cta="Read success stories"
          inverted
          to="index"
        />
      </CaseStudy>
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
          <div class="empty-text">
            <p class="paragraph rem-95">
              No data sample available for this component
            </p>
          </div>
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with stunning advanced Feature blocks that you can use in
            any page. Each block comes with it's own styles and props. Use the
            props to build your own examples or use one of the prebuilt
            examples. Every block is natively supporting dark mode. See markup
            and props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
