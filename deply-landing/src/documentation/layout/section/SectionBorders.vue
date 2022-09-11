<script setup lang="ts">
import { sectionBorder, sectionProps } from '/@src/data/docs/blocks/section'
</script>

<template>
  <Section id="section-borders-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Section Borders" subtitle="Section borders setup" />
          <div class="section-holder mt-4">
            <Section bordered-top bordered-bottom>
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
            <PrismCode language="html" :code="sectionBorder" />
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
              sections top and bottom borders can be added using the
              <code>bordered-bottom</code>
              and
              <code>bordered-top</code>
              props. Sections should be used as much as possible in conjunction
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
