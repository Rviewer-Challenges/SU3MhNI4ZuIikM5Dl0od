<script setup lang="ts">
import { buttonProps, buttonOutlined } from '/@src/data/docs/base/button'
</script>

<template>
  <Section id="button-outlined-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Outlined" subtitle="Available outlined buttons" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button color="primary" :long="1" outlined>Primary</Button>
              <Button color="success" :long="1" outlined>Success</Button>
              <Button color="info" :long="1" outlined>Info</Button>
              <Button color="warning" :long="1" outlined>Warning</Button>
              <Button color="danger" :long="1" outlined>Danger</Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="buttonOutlined" />
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
              buttons come in different flavors. You can make outlined buttons
              using the
              <code>outlined</code>
              prop. The outlined prop is a boolean an doesn't need a value. Only
              works on colored buttons.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
