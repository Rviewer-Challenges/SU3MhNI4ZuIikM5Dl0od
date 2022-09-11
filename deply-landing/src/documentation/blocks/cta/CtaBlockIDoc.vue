<script setup lang="ts">
import { ctaBlockI, ctaBlockIProps } from '/@src/data/docs/blocks/cta/blockI'
</script>

<template>
  <Section id="block-i-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block I"
        subtitle="Block I variation 1"
        link="block-i-props"
      />

      <CtaBlockI
        title="Get Started"
        subtitle="Fill in the form below to get started with our application."
      >
        <template #content>
          <p class="paragraph rem-125 max-w-5 b-centered-tablet-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit quis est tam
            dissimile homini. Quae cum.
          </p>
        </template>
        <template #form>
          <form class="pb-4">
            <Field>
              <FieldLabel label="Full Name">Full Name</FieldLabel>
              <Control icon="feather:user">
                <VInput />
              </Control>
            </Field>
            <Field>
              <FieldLabel label="Email Address">Email Address</FieldLabel>
              <Control icon="feather:mail">
                <VInput />
              </Control>
            </Field>
            <Field>
              <FieldLabel label="Password">Password</FieldLabel>
              <Control icon="feather:lock">
                <VInput type="password" />
              </Control>
            </Field>
            <Field class="pt-4">
              <Control>
                <Buttons alignment="centered">
                  <Button :to="'index'" color="primary" fullwidth bold raised>
                    Get Started
                  </Button>
                </Buttons>
              </Control>
            </Field>
          </form>
        </template>
      </CtaBlockI>
    </Container>
  </Section>

  <Section id="block-i-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block I"
        subtitle="Block I variation 1"
        link="block-i-props"
      />

      <CtaBlockI
        title="Get Started"
        subtitle="Fill in the form below to get started with our application."
      >
        <template #content>
          <p class="paragraph rem-125 max-w-5 b-centered-tablet-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit quis est tam
            dissimile homini. Quae cum.
          </p>
        </template>
        <template #form>
          <form class="py-4">
            <div class="columns is-multiline">
              <div class="column is-6">
                <Field>
                  <FieldLabel label="First Name">First Name</FieldLabel>
                  <Control icon="feather:user">
                    <VInput />
                  </Control>
                </Field>
              </div>
              <div class="column is-6">
                <Field>
                  <FieldLabel label="Last Name">Last Name</FieldLabel>
                  <Control icon="feather:user">
                    <VInput />
                  </Control>
                </Field>
              </div>
              <div class="column is-12">
                <Field>
                  <FieldLabel label="Email Address">Email Address</FieldLabel>
                  <Control icon="feather:mail">
                    <VInput />
                  </Control>
                </Field>
              </div>
              <div class="column is-6">
                <Field>
                  <FieldLabel label="Password">Password</FieldLabel>
                  <Control icon="feather:lock">
                    <VInput type="password" />
                  </Control>
                </Field>
              </div>
              <div class="column is-6">
                <Field>
                  <FieldLabel label="Password">Repeat Password</FieldLabel>
                  <Control icon="feather:lock">
                    <VInput type="password" />
                  </Control>
                </Field>
              </div>
              <div class="column is-12">
                <Field class="pt-4">
                  <Control>
                    <Buttons alignment="centered">
                      <Button
                        :to="'index'"
                        color="primary"
                        fullwidth
                        bold
                        raised
                      >
                        Get Started
                      </Button>
                    </Buttons>
                  </Control>
                </Field>
              </div>
            </div>
          </form>
        </template>
      </CtaBlockI>
    </Container>
  </Section>

  <Section id="block-i-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block I Props" subtitle="Available props for block I" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="ctaBlockI" />
        </template>
        <template #props>
          <DemoProps :props="ctaBlockIProps.props" />
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
