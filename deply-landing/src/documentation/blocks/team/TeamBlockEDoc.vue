<script setup lang="ts">
import { gridTeam } from '/@src/data/blocks/team'
import {
  teamBlockE,
  teamBlockEProps,
  teamBlockESample,
} from '/@src/data/docs/blocks/team/blockE'
</script>

<template>
  <Section id="block-e-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 1"
        link="block-e-props"
      />

      <TeamBlockE :items="gridTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 2"
        link="block-e-props"
      />

      <TeamBlockE :items="gridTeam" squared />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 3"
        link="block-e-props"
      />

      <TeamBlockE :items="gridTeam" :limit="12" shapes />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 4"
        link="block-e-props"
      />

      <TeamBlockE :items="gridTeam" :limit="12" squared shapes animated />
    </Container>
  </Section>

  <Section id="block-e-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block E Props" subtitle="Available props for block E" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="teamBlockE" />
        </template>
        <template #props>
          <DemoProps :props="teamBlockEProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="teamBlockESample" />
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
