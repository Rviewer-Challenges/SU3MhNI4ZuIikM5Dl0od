<script setup lang="ts">
import { videoASample, videoA, videoAProps } from '/@src/data/docs/base/video'
import { features4 } from '/@src/data/blocks/features'
</script>

<template>
  <Section id="block-a-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 1"
        link="block-a-props"
      />

      <VideoBlockA
        title="On point delivery."
        source="/assets/video/meeting.mp4"
        poster="data:image/gif;base64,replace_with_your_image"
        :features="features4"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block A"
        subtitle="Block A variation 2"
        link="block-a-props"
      />

      <VideoBlockA
        title="On point delivery."
        source="/assets/video/meeting.mp4"
        poster="data:image/gif;base64,replace_with_your_image"
        :features="features4"
        links
      />
    </Container>
  </Section>

  <Section id="block-a-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block A Props" subtitle="Available props for block A" />

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="videoA" />
        </template>
        <template #props>
          <DemoProps :props="videoAProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="videoASample" />
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Video components have become a central part in every web and mobile
            application. Vulk video blocks come in different flavors. Take a
            look at the available props and easily set your first video block.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
