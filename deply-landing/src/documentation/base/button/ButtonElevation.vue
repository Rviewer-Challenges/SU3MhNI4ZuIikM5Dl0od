<script setup lang="ts">
import { buttonProps, buttonElevation } from '/@src/data/docs/base/button'
</script>

<template>
  <Section id="button-elevation-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Elevation" subtitle="Button elevation variations" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button color="primary" :long="1" elevated>Primary</Button>
              <Button color="success" :long="1" elevated>Success</Button>
              <Button color="info" :long="1" elevated>Info</Button>
              <Button color="warning" :long="1" elevated>Warning</Button>
              <Button color="danger" :long="1" elevated>Danger</Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="buttonElevation" />
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
              buttons come in different flavors. Buttons can be elevated,
              showing a colored box shadow wether it is by default or on hover.
              To elevate a button by default, use the
              <code>elevated</code>
              prop. To elevate a button on hover, use the
              <code>raised</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
