<script setup lang="ts">
import { cardTeam } from '/@src/data/blocks/team'
import {
  teamBlockF,
  teamBlockFProps,
  teamBlockFSample,
} from '/@src/data/docs/blocks/team/blockF'
</script>

<template>
  <Section id="block-f-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 1"
        link="block-f-props"
      />

      <TeamBlockF :items="cardTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 2"
        link="block-f-props"
      />

      <TeamBlockF :items="cardTeam" squared />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 3"
        link="block-f-props"
      />

      <TeamBlockF :items="cardTeam" animated />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block F"
        subtitle="Block F variation 4"
        link="block-f-props"
      />

      <TeamBlockF :items="cardTeam" squared animated />
    </Container>
  </Section>

  <Section id="block-f-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block F Props" subtitle="Available props for block F" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="teamBlockF" />
        </template>
        <template #props>
          <DemoProps :props="teamBlockFProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="teamBlockFSample" />
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
