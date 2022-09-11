<script setup lang="ts">
import { buttonProps, buttonSizes } from '/@src/data/docs/base/button'
</script>

<template>
  <Section id="button-size-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Button Sizes" subtitle="Available button sizes" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button>Normal</Button>
              <Button size="medium">Medium</Button>
              <Button size="large">Large</Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="buttonSizes" />
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
              buttons come in different flavors. You can control the avatar size
              using the
              <code>size</code>
              prop. Accepted values are
              <code>medium</code>
              and
              <code>large</code>
              You can also make a button text bolder by adding the
              <code>bold</code>
              prop or make the button wider using the
              <code>long</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
