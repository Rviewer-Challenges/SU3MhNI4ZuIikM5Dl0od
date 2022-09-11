<script setup lang="ts">
import { ref } from 'vue'
import { inputProps, inputIcon } from '/@src/data/docs/base/form'

const inputOneValue = ref()
const inputTwoValue = ref()
</script>

<template>
  <Section id="input-icon-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Input" subtitle="Input icon layout" />
          <div class="is-flex d-column-mobile pt-4">
            <div class="w-full max-w-1/2 max-w-mobile">
              <Field>
                <FieldLabel label="Email Address"></FieldLabel>
                <Control icon="feather:mail">
                  <VInput
                    v-model="inputOneValue"
                    placeholder="johndoe@gmail.com"
                    @update:model-value="inputOneValue = $event"
                  />
                </Control>
              </Field>

              <Field>
                <FieldLabel label="Email Address"></FieldLabel>
                <Control icon="feather:mail">
                  <VInput
                    v-model="inputTwoValue"
                    placeholder="johndoe@gmail.com"
                    rounded
                    @update:model-value="inputTwoValue = $event"
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
            <PrismCode language="html" :code="inputIcon" />
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
              . You can add an icon to an input element by using the
              <code>icon</code>
              prop on the
              <code>&#x3C;Control /&#x3E;</code>
              component.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
