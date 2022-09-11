<script setup lang="ts">
import { buttonProps, buttonColor } from '/@src/data/docs/base/button'
</script>

<template>
  <Section id="button-colors-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Button Colors" subtitle="Available button colors" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button :long="1">Default</Button>
              <Button color="primary" :long="1">Primary</Button>
              <Button color="success" :long="1">Success</Button>
              <Button color="info" :long="1">Info</Button>
              <Button color="warning" :long="1">Warning</Button>
              <Button color="danger" :long="1">Danger</Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="buttonColor" />
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
              buttons come in different flavors. You can control button colors
              using the
              <code>color</code>
              prop. Allowed values are
              <code>primary</code>
              ,
              <code>success</code>
              ,
              <code>info</code>
              ,
              <code>warning</code>
              and
              <code>danger</code>
              .
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
