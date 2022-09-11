<script setup lang="ts">
import { ctaBlockH, ctaBlockHProps } from '/@src/data/docs/blocks/cta/blockH'
</script>

<template>
  <Section id="block-h-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block H"
        subtitle="Block H variation 1"
        link="block-h-props"
      />

      <CtaBlockH
        small-text="UI Framework"
        title="Start Building"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        image="/assets/illustrations/apps/apps-slant.png"
        dark-image="/assets/illustrations/apps/apps-slant.png"
      >
        <Buttons>
          <Button :to="'index'" color="primary" :long="2" bold raised>
            Get Started
          </Button>
          <Button :to="'index'" :long="2" bold raised>Learn More</Button>
        </Buttons>
      </CtaBlockH>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block H"
        subtitle="Block H variation 2"
        link="block-h-props"
      />

      <CtaBlockH
        small-text="UI Framework"
        title="Start Building"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        background="data:image/gif;base64,replace_with_your_image"
      >
        <Buttons>
          <Button :to="'index'" color="primary" :long="2" bold raised>
            Get Started
          </Button>
          <Button :to="'index'" :long="2" bold raised>Learn More</Button>
        </Buttons>
      </CtaBlockH>
    </Container>
  </Section>

  <Section id="block-h-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block H Props" subtitle="Available props for block H" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="ctaBlockH" />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockHProps.props" />
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
            Vulk ships with highly customizable and versatile CTA blocks that
            you can use in any page. Each block comes with it's own styles and
            props. Use the props to build your own examples or use one of the
            prebuilt examples. Every block is natively supporting dark mode.
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
