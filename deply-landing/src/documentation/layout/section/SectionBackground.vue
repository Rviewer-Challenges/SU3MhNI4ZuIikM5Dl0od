<script setup lang="ts">
import { sectionBackground, sectionProps } from '/@src/data/docs/blocks/section'
</script>

<template>
  <Section id="section-background-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Background" subtitle="Section background image" />
          <div class="section-holder mt-4">
            <Section
              v-background="{
                src: 'data:image/gif;base64,replace_with_your_image',
                placeholder: 'https://dummyimage.com/1920x1080/',
              }"
              overlay
            >
              <Container>
                <div class="has-text-centered content py-6">
                  <Title tag="h3" :size="4" weight="semi" narrow inverted>
                    <span>Iam a Section</span>
                  </Title>
                  <p class="paragraph is-inverted-light">
                    I can hold any type of content
                  </p>
                </div>
              </Container>
            </Section>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="sectionBackground" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="sectionProps" />
          </template>
          <template #sample>
            <div class="empty-text">
              <p class="paragraph rem-95">
                No data sample available for this component
              </p>
            </div>
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              Sections are the base layout building block for any website. Vulk
              sections sizes can have a background image using the
              <code>v-background</code>
              prop. Sections should be used as much as possible in conjunction
              with the
              <code>&#x3C;Container /&#x3E;</code>
              component.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>

<style lang="scss" scoped>
.section-holder {
  border: 1px solid var(--border);
}
</style>
