<script setup lang="ts">
import { longTeam, longTeam2 } from '/@src/data/blocks/team'
import {
  teamBlockC,
  teamBlockCProps,
  teamBlockCSample,
} from '/@src/data/docs/blocks/team/blockC'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 1"
        link="block-c-props"
      />

      <TeamBlockC :items="longTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 2"
        link="block-c-props"
      />

      <TeamBlockC :items="longTeam2" squared bubbles />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 3"
        link="block-c-props"
      />

      <TeamBlockC :items="longTeam2" squared grayscale />
    </Container>
  </Section>

  <Section id="block-c-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block C Props" subtitle="Available props for block C" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="teamBlockC" />
        </template>
        <template #props>
          <DemoProps :props="teamBlockCProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="teamBlockCSample" />
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
