<script setup lang="ts">
import { boxTeam } from '/@src/data/blocks/team'
import {
  teamBlockA,
  teamBlockAProps,
  teamBlockASample,
} from '/@src/data/docs/blocks/team/blockA'
</script>

<template>
  <Section id="block-a-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 1"
        link="block-a-props"
      />

      <TeamBlockA :items="boxTeam" />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 2"
        link="block-a-props"
      />

      <TeamBlockA :items="boxTeam" :columns="4" :limit="6" scale />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 3"
        link="block-a-props"
      />

      <TeamBlockA :items="boxTeam" grayscale />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 3"
        link="block-a-props"
      />

      <TeamBlockA :items="boxTeam" plain />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 3"
        link="block-a-props"
      />

      <TeamBlockA :items="boxTeam" plain curved />
    </Container>
  </Section>

  <Section id="block-a-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block A Props" subtitle="Available props for block A" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="teamBlockA" />
        </template>
        <template #props>
          <DemoProps :props="teamBlockAProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="teamBlockASample" />
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
