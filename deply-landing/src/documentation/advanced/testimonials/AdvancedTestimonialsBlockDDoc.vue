<script setup lang="ts">
import {
  testimonialsBlockD,
  testimonialsBlockDProps,
} from '/@src/data/docs/advanced/testimonials/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Advanced block D variation 1"
        link="block-d-props"
      />

      <div class="py-4"></div>

      <TestimonialBlock
        image="data:image/gif;base64,replace_with_your_image"
        title="I had trouble finding a fair deal. Then I simply decided to start
          using Vulk and it actually worked!"
        content="Isabella's insurance policy deals that were found on our platform
          completely changed her life and removed all the hassle."
        link-label="Read Isabella's Story"
        link="/about"
      />
    </Container>
  </Section>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block D Props" subtitle="Available props for block D" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="testimonialsBlockD" />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockDProps.props" />
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
            Vulk ships with stunning advanced Testimonial blocks that you can
            use in any page. Each block comes with it's own styles and props.
            Use the props to build your own examples or use one of the prebuilt
            examples. Every block is natively supporting dark mode. See markup
            and props tab for more details about usage.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
