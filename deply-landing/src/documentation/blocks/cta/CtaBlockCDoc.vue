<script setup lang="ts">
import { ctaBlockC, ctaBlockCProps } from '/@src/data/docs/blocks/cta/blockC'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 1"
        link="block-c-props"
      />

      <CtaBlockC
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
          dissimile homini. Quae cum dixisset paulumque?"
      >
        <Field grouped>
          <Control icon="feather:mail" expanded>
            <VInput placeholder="Email Address..." />
          </Control>
          <Control>
            <Button color="primary" size="form" :long="2" raised bold>
              Subscribe
            </Button>
          </Control>
        </Field>
      </CtaBlockC>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 2"
        link="block-c-props"
      />

      <CtaBlockC
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
          dissimile homini. Quae cum dixisset paulumque?"
        minimal
      >
        <Field grouped>
          <Control icon="feather:mail" expanded>
            <VInput placeholder="Email Address..." />
          </Control>
          <Control>
            <Button color="primary" size="form" :long="2" raised bold>
              Subscribe
            </Button>
          </Control>
        </Field>
      </CtaBlockC>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 3"
        link="block-c-props"
      />

      <CtaBlockC
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
          dissimile homini. Quae cum dixisset paulumque?"
        shapes
      >
        <Buttons stacked>
          <Button color="primary" :long="2" raised bold>Subscribe</Button>
          <Button :long="2" raised bold>Learn More</Button>
        </Buttons>
      </CtaBlockC>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 4"
        link="block-c-props"
      />

      <CtaBlockC
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
          dissimile homini. Quae cum dixisset paulumque?"
        shapes
        minimal
      >
        <Buttons stacked>
          <Button color="primary" :long="2" raised bold>Subscribe</Button>
          <Button :long="2" raised bold>Learn More</Button>
        </Buttons>
      </CtaBlockC>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 5"
        link="block-c-props"
      />

      <CtaBlockC
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
          dissimile homini. Quae cum dixisset paulumque?"
        shapes
        animated
      >
        <Buttons stacked>
          <Button color="primary" :long="2" raised bold>Subscribe</Button>
          <Button :long="2" raised bold>Learn More</Button>
        </Buttons>
      </CtaBlockC>
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 6"
        link="block-c-props"
      />

      <CtaBlockC
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
          dissimile homini. Quae cum dixisset paulumque?"
        shapes
        minimal
        animated
      >
        <Buttons stacked>
          <Button color="primary" :long="2" raised bold>Subscribe</Button>
          <Button :long="2" raised bold>Learn More</Button>
        </Buttons>
      </CtaBlockC>
    </Container>
  </Section>

  <Section bordered-bottom color="darker">
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 6"
        link="block-c-props"
        inverted
      />

      <CtaBlockC
        title="Ready To Go?"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
          dissimile homini. Quae cum dixisset paulumque?"
        shapes
        animated
        inverted
      >
        <Buttons stacked>
          <Button color="primary" :long="2" raised bold>Subscribe</Button>
          <Button :long="2" raised bold>Learn More</Button>
        </Buttons>
      </CtaBlockC>
    </Container>
  </Section>

  <Section id="block-c-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block C Props" subtitle="Available props for block C" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="ctaBlockC" />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockCProps.props" />
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
