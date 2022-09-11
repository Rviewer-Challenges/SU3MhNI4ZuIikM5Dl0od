<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import {
  companyBlockB,
  companyBlockBProps,
  companyBlockBSample,
} from '/@src/data/docs/advanced/company/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Advanced block B variation 1"
        link="block-b-props"
      />

      <LogoStats
        title="Over $1 billion"
        subtitle="Transactions from our clients in 2021"
        heading="Join us and grow"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis negat? Fortemne possumus dicere eundem illum Torquatum? De illis, cum volemus."
        :logos="customerLogos"
      />
    </Container>
  </Section>

  <Section color="darker">
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Advanced block B variation 2"
        link="block-b-props"
        inverted
      />

      <LogoStats
        title="Over $1 billion"
        subtitle="Transactions from our clients in 2021"
        heading="Join us and grow"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis negat? Fortemne possumus dicere eundem illum Torquatum? De illis, cum volemus."
        :logos="customerLogos"
        inverted
      />
    </Container>
  </Section>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block B Props" subtitle="Available props for block B" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="companyBlockB" />
        </template>
        <template #props>
          <DemoProps :props="companyBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="companyBlockBSample" />
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
