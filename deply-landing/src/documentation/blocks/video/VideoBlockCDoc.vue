<script setup lang="ts">
import { videoCSample, videoC, videoCProps } from '/@src/data/docs/base/video'
import { features4 } from '/@src/data/blocks/features'
</script>

<template>
  <Section id="block-c-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 1"
        link="block-c-props"
      />

      <VideoBlockC
        title="Our Product"
        :features="features4"
        source="/assets/video/meeting.mp4"
        poster="data:image/gif;base64,replace_with_your_image"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block C"
        subtitle="Block C variation 2"
        link="block-c-props"
      />

      <VideoBlockC
        title="Our Product"
        :features="features4"
        source="/assets/video/meeting.mp4"
        poster="data:image/gif;base64,replace_with_your_image"
        links
      />
    </Container>
  </Section>

  <Section id="block-c-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block C Props" subtitle="Available props for block C" />

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="videoC" />
        </template>
        <template #props>
          <DemoProps :props="videoCProps.props" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="videoCSample" />
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
