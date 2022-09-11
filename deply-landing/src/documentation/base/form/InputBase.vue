<script setup lang="ts">
import { ref } from 'vue'
import { inputProps, inputBase } from '/@src/data/docs/base/form'

const inputOneValue = ref()
const inputTwoValue = ref()
</script>

<template>
  <Section id="input-base-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Input" subtitle="Input base layout" />
          <div class="is-flex d-column-mobile pt-4">
            <div class="w-full max-w-1/2 max-w-mobile">
              <Field>
                <FieldLabel label="Username"></FieldLabel>
                <Control>
                  <VInput v-model="inputOneValue" placeholder="John Doe" />
                </Control>
              </Field>

              <Field>
                <FieldLabel label="Username"></FieldLabel>
                <Control>
                  <VInput
                    v-model="inputTwoValue"
                    placeholder="John Doe"
                    rounded
                  />
                </Control>
              </Field>
            </div>
            <div class="w-full max-w-1/2 max-w-mobile p-4">
              <Card shape="squared" muted>
                <div class="mb-4">
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    <span>First</span>
                  </Title>
                  <p class="paragraph rem-90">value: {{ inputOneValue }}</p>
                </div>

                <div>
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    <span>Second</span>
                  </Title>
                  <p class="paragraph rem-90">value: {{ inputTwoValue }}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="inputBase" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="inputProps" />
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
              Form elements are at the center of every web application. Vulk
              form controls are very versatile and support a wide variety of
              usage. Vulk inputs are made of 4 different components:
              <code>&#x3C;Field /&#x3E;</code>
              ,
              <code>&#x3C;FieldLabel /&#x3E;</code>
              ,
              <code>&#x3C;Control /&#x3E;</code>
              and
              <code>&#x3C;VInput /&#x3E;</code>
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
