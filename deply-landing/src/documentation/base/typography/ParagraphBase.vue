<script setup lang="ts">
import { paragraph } from '/@src/data/docs/base/typography'
</script>

<template>
  <Section id="paragraph-base-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle title="Paragraph" subtitle="Paragraph text variations" />
          <div class="columns pt-4">
            <div class="column is-6">
              <p class="paragraph rem-125">This is a paragraph at 1.25rem</p>
              <p class="paragraph">This is a paragraph at 1rem</p>
              <p class="paragraph rem-90">This is a paragraph at .9rem</p>
              <p class="paragraph rem-80">This is a paragraph at .8rem</p>
            </div>
            <div class="column is-6">
              <p class="paragraph">This is a paragraph (default)</p>
              <p class="paragraph text-primary">
                This is a paragraph (primary)
              </p>
              <p class="paragraph text-success">
                This is a paragraph (success)
              </p>
              <p class="paragraph text-info">This is a paragraph (info)</p>
              <p class="paragraph text-warning">
                This is a paragraph (warning)
              </p>
              <p class="paragraph text-danger">This is a paragraph (danger)</p>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="paragraph" />
          </template>
          <template #props>
            <div class="empty-text">
              <p class="paragraph rem-95">
                No props needed, not a vue component
              </p>
            </div>
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
              Vulk ships with basic styles for paragraph text. We chose not to
              make it a component for more flexibility and customization
              possibilities. To make a paragraph, simply add the
              <code>paragraph</code>
              class to a
              <code>p</code>
              HTMl element. You can then control font size using Vulk helpers
              like
              <code>rem-*</code>
              . You can also control the text color by using Vulk's color
              helpers like
              <code>text-*</code>
              .
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
