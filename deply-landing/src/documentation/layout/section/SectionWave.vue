<script setup lang="ts">
import { sectionWave, sectionProps } from '/@src/data/docs/blocks/section'
</script>

<template>
  <Section id="section-wave-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Section Wave" subtitle="Section wave shape" />
          <div class="section-holder mt-4">
            <Section wave="wave-1" shape-color="grey">
              <Container>
                <div class="content py-6">
                  <Title tag="h3" :size="4" weight="semi" narrow>
                    <span>Iam a Section</span>
                  </Title>
                  <p class="paragraph">I can hold any type of content</p>
                </div>
              </Container>
            </Section>
            <Section color="grey">
              <Container>
                <div class="content py-6">
                  <Title tag="h3" :size="4" weight="semi" narrow>
                    <span>Iam a Section</span>
                  </Title>
                  <p class="paragraph">I can hold any type of content</p>
                </div>
              </Container>
            </Section>
          </div>
          <div class="section-holder mt-4">
            <Section wave="wave-2" shape-color="darker">
              <Container>
                <div class="content py-6">
                  <Title tag="h3" :size="4" weight="semi" narrow inverted>
                    <span>Iam a Section</span>
                  </Title>
                  <p class="paragraph">I can hold any type of content</p>
                </div>
              </Container>
            </Section>
            <Section color="darker">
              <Container>
                <div class="content py-6">
                  <Title tag="h3" :size="4" weight="semi" narrow inverted>
                    <span>Iam a Section</span>
                  </Title>
                  <p class="paragraph">I can hold any type of content</p>
                </div>
              </Container>
            </Section>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="sectionWave" />
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
              sections can have svg waves using the
              <code>wave</code>
              and optional
              <code>shape-color</code>
              props. The
              <code>shape-color</code>
              should be set to the color of the following section.
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
