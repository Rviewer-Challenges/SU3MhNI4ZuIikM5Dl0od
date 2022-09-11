<script setup lang="ts">
import { ref } from 'vue'
import { textareaProps, textareaResize } from '/@src/data/docs/base/form'

const textareaValue = ref('')
</script>

<template>
  <Section id="textarea-resize-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="No Resize"
            subtitle="Textarea no resize variation"
          />
          <div class="is-flex d-column-mobile pt-4">
            <div class="w-full max-w-1/2 max-w-mobile">
              <Field>
                <FieldLabel label="Message"></FieldLabel>
                <Control>
                  <VTextarea
                    v-model="textareaValue"
                    :rows="3"
                    :resize="false"
                    placeholder="Write something..."
                  />
                </Control>
              </Field>
            </div>
            <div class="w-full max-w-1/2 max-w-mobile p-4">
              <Card shape="squared" muted>
                <div class="mb-4">
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    <span>Textarea</span>
                  </Title>
                  <p class="paragraph rem-90">value: {{ textareaValue }}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="textareaResize" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="textareaProps" />
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
              usage. Vulk textareas are made of 4 different components:
              <code>&#x3C;Field /&#x3E;</code>
              ,
              <code>&#x3C;FieldLabel /&#x3E;</code>
              ,
              <code>&#x3C;Control /&#x3E;</code>
              and
              <code>&#x3C;VTextarea /&#x3E;</code>
              . You can prevent a textarea from being resizable by using the
              <code>no-resize</code>
              prop. You can also change the number of rows using the
              <code>:rows</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
