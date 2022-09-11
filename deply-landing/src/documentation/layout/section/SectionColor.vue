<script setup lang="ts">
import { sectionColors, sectionProps } from '/@src/data/docs/blocks/section'
</script>

<template>
  <Section id="section-color-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="Section Color"
            subtitle="Available section colors"
          />
          <div class="section-holder mt-4">
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
          <div class="mt-4">
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
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="sectionColors" />
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
              sections colors can be customized using the
              <code>color</code>
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
