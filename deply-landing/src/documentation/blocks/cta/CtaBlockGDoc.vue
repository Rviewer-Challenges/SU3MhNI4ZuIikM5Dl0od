<script setup lang="ts">
import { ctaBlockG, ctaBlockGProps } from '/@src/data/docs/blocks/cta/blockG'
</script>

<template>
  <Section id="block-g-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block G"
        subtitle="Block G variation 1"
        link="block-g-props"
      />

      <CtaBlockG
        title="Start Building"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        image="data:image/gif;base64,replace_with_your_image"
        dark-image="data:image/gif;base64,replace_with_your_image"
      >
        <Field grouped>
          <Control expanded icon="feather:mail">
            <VInput placeholder="Email Address" />
          </Control>
          <Control>
            <Button size="form" color="primary" :long="2" bold raised>
              Sign Up
            </Button>
          </Control>
        </Field>
      </CtaBlockG>
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block G"
        subtitle="Block G variation 2"
        link="block-g-props"
        inverted
      />

      <CtaBlockG
        title="Start Building"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        image="data:image/gif;base64,replace_with_your_image"
        dark-image="data:image/gif;base64,replace_with_your_image"
        inverted
      >
        <Field grouped>
          <Control expanded icon="feather:mail">
            <VInput placeholder="Email Address" inverted />
          </Control>
          <Control>
            <Button size="form" color="primary" :long="2" bold raised>
              Sign Up
            </Button>
          </Control>
        </Field>
      </CtaBlockG>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block G"
        subtitle="Block G variation 3"
        link="block-g-props"
      />

      <CtaBlockG
        title="Start Building"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        image="data:image/gif;base64,replace_with_your_image"
        dark-image="data:image/gif;base64,replace_with_your_image"
        rounded
      >
        <Buttons>
          <Button color="primary" :long="2" bold raised>Sign Up</Button>
          <Button :long="2" bold raised>Learn More</Button>
        </Buttons>
      </CtaBlockG>
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block G"
        subtitle="Block G variation 4"
        link="block-g-props"
        inverted
      />

      <CtaBlockG
        title="Start Building"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        image="data:image/gif;base64,replace_with_your_image"
        dark-image="data:image/gif;base64,replace_with_your_image"
        rounded
        inverted
      >
        <Buttons>
          <Button color="primary" :long="2" bold raised>Sign Up</Button>
          <Button :long="2" bold raised>Learn More</Button>
        </Buttons>
      </CtaBlockG>
    </Container>
  </Section>

  <Section id="block-g-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block G Props" subtitle="Available props for block G" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="ctaBlockG" />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockGProps.props" />
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
