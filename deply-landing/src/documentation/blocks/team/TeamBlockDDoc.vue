<script setup lang="ts">
import { cardTeam } from '/@src/data/blocks/team'
import {
  teamBlockD,
  teamBlockDProps,
  teamBlockDSample,
} from '/@src/data/docs/blocks/team/blockD'
</script>

<template>
  <Section id="block-d-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 1"
        link="block-d-props"
      />

      <TeamBlockD :items="cardTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 2"
        link="block-d-props"
      />

      <TeamBlockD :items="cardTeam" bubbles />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block D"
        subtitle="Block D variation 3"
        link="block-d-props"
      />

      <TeamBlockD :items="cardTeam" bubbles animated squared />
    </Container>
  </Section>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block D Props" subtitle="Available props for block D" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="teamBlockD" />
        </template>
        <template #props>
          <DemoProps :props="teamBlockDProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="teamBlockDSample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with highly customizable and versatile Team blocks that
            you can use in any page. Each block comes with it's own styles and
            props. Use the props to build your own examples or use one of the
            prebuilt examples.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
