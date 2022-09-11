<script setup lang="ts">
import { titleProps, title } from '/@src/data/docs/base/typography'
</script>

<template>
  <Section id="title-base-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle title="Title" subtitle="Title component variations" />
          <div class="columns pt-4">
            <div class="column is-6">
              <Title tag="h1" :size="1" leading>This is a title</Title>
              <Title tag="h2" :size="2" leading>This is a title</Title>
              <Title tag="h2" :size="3" leading>This is a title</Title>
              <Title tag="h2" :size="4" leading>This is a title</Title>
              <Title tag="h2" :size="5" leading>This is a title</Title>
              <Title tag="h2" :size="6" leading>This is a title</Title>
            </div>
            <div class="column is-6">
              <Title tag="h1" :size="1" weight="thin" leading>
                This is a title
              </Title>
              <Title tag="h2" :size="2" weight="thin" leading>
                This is a title
              </Title>
              <Title tag="h2" :size="3" weight="thin" leading>
                This is a title
              </Title>
              <Title tag="h3" :size="4" weight="thin" leading>
                This is a title
              </Title>
              <Title tag="h3" :size="5" weight="thin" leading>
                This is a title
              </Title>
              <Title tag="h3" :size="6" weight="thin" leading>
                This is a title
              </Title>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="title" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="titleProps" />
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
              Vulk provides a title component that you can safely use in all
              parts of your application. It provides many props so you can
              control every aspect of it like the
              <code>size</code>
              , the
              <code>weight</code>
              , the spacing and even the rendered HTML
              <code>tag</code>
              . Titles have a bottom spacing of
              <code>1.5rem</code>
              by default. Use the
              <code>narrow</code>
              and the
              <code>leading</code>
              props to change this behaviour.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
