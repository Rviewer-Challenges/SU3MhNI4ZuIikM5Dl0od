<script setup lang="ts">
import { videoBSample, videoB, videoBProps } from '/@src/data/docs/base/video'
import { features5 } from '/@src/data/blocks/features'
</script>

<template>
  <Section id="block-b-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 1"
        link="block-b-props"
      />

      <VideoBlockB
        title="Our Product"
        :features="features5"
        source="/assets/video/meeting.mp4"
        poster="data:image/gif;base64,replace_with_your_image"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block B"
        subtitle="Block B variation 2"
        link="block-b-props"
      />

      <VideoBlockB
        title="Our Product"
        :features="features5"
        source="/assets/video/meeting.mp4"
        poster="data:image/gif;base64,replace_with_your_image"
      />
    </Container>
  </Section>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block B Props" subtitle="Available props for block B" />

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="videoB" />
        </template>
        <template #props>
          <DemoProps :props="videoBProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="videoBSample" />
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
