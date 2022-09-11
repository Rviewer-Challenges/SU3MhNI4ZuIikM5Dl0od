<script setup lang="ts">
import { buttonProps, buttonTypes } from '/@src/data/docs/base/button'
</script>

<template>
  <Section id="button-types-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Button Type" subtitle="Available button types" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button>Iam a Button</Button>
              <Button href="https://google.com">Iam a Link</Button>
              <Button to="index">Iam a RouterLink</Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="buttonTypes" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="buttonProps" />
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
              Buttons are a central part in all web and mobile application. Vulk
              buttons come in different flavors. You can control the render
              element type by using the
              <code>to</code>
              prop. If you enter an external link as a value, it generates an
              HTML
              <code>&#x3C;a&#x3E;&#x3C;/a&#x3E;</code>
              tag. If you enter a route, it generates a
              <code>&#x3C;RouterLink /&#x3E;</code>
              element. Omitting it generates a standard HTML
              <code>&#x3C;button&#x3E;&#x3C;/button&#x3E;</code>
              element.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
