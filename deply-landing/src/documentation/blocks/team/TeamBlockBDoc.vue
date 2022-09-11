<script setup lang="ts">
import { avatarTeam } from '/@src/data/blocks/team'
import {
  teamBlockB,
  teamBlockBProps,
  teamBlockBSample,
} from '/@src/data/docs/blocks/team/blockB'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 1"
        link="block-b-props"
      />

      <TeamBlockB :items="avatarTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 2"
        link="block-b-props"
      />

      <TeamBlockB :items="avatarTeam" squared bubbles />
    </Container>
  </Section>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block B Props" subtitle="Available props for block B" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="teamBlockB" />
        </template>
        <template #props>
          <DemoProps :props="teamBlockBProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="teamBlockBSample" />
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
