<script setup lang="ts">
import { ctaBlockJ, ctaBlockJProps } from '/@src/data/docs/blocks/cta/blockJ'
</script>

<template>
  <Section id="block-j-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block J"
        subtitle="Block J variation 1"
        link="block-j-props"
      />

      <CtaBlockJ
        small-text="14-Day Trial"
        title="Start Building"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
      >
        <form>
          <Field grouped>
            <Control icon="feather:user" expanded>
              <VInput placeholder="Full Name" />
            </Control>
            <Control icon="feather:mail" expanded>
              <VInput placeholder="Email" />
            </Control>
            <Control>
              <Button size="form" color="primary" :long="2">Get Started</Button>
            </Control>
          </Field>
        </form>
      </CtaBlockJ>
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block J"
        subtitle="Block J variation 1"
        link="block-j-props"
        inverted
      />

      <CtaBlockJ
        small-text="14-Day Trial"
        title="Start Building"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        inverted
      >
        <form>
          <Field grouped>
            <Control icon="feather:user" expanded>
              <VInput placeholder="Full Name" inverted />
            </Control>
            <Control icon="feather:mail" expanded>
              <VInput placeholder="Email" inverted />
            </Control>
            <Control>
              <Button size="form" color="primary" :long="2">Get Started</Button>
            </Control>
          </Field>
        </form>
      </CtaBlockJ>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block J"
        subtitle="Block J variation 1"
        link="block-j-props"
      />

      <CtaBlockJ
        small-text="14-Day Trial"
        title="Start Building"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
      >
        <Buttons alignment="centered">
          <Button :to="'index'" color="primary" :long="2" bold raised>
            Get Started
          </Button>
          <Button :to="'index'" :long="2" bold raised>Learn More</Button>
        </Buttons>
      </CtaBlockJ>
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block J"
        subtitle="Block J variation 1"
        link="block-j-props"
        inverted
      />

      <CtaBlockJ
        small-text="14-Day Trial"
        title="Start Building"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        inverted
      >
        <Buttons alignment="centered">
          <Button :to="'index'" color="primary" :long="2" bold raised>
            Get Started
          </Button>
          <Button :to="'index'" :long="2" bold raised>Learn More</Button>
        </Buttons>
      </CtaBlockJ>
    </Container>
  </Section>

  <Section id="block-j-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block J Props" subtitle="Available props for block J" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="ctaBlockJ" />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockJProps.props" />
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
