<script setup lang="ts">
import {
  sectionTitleProps,
  sectionTitle,
} from '/@src/data/docs/base/typography'
</script>

<template>
  <Section id="section-title-base-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="Section Title"
            subtitle="Section title component variations"
          />
          <div class="pt-4">
            <SectionTitle title="Make it count again" subtitle="Get Started" />
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="sectionTitle" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="sectionTitleProps" />
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
              Vulk provides a section title component that you can safely use in
              all parts of your application. It provides a few props so you can
              control its content, using the
              <code>title</code>
              , the
              <code>subtitle</code>
              props .
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
