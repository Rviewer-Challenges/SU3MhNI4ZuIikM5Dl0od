<script setup lang="ts">
import { inputProps, inputValidation } from '/@src/data/docs/base/form'
</script>

<template>
  <Section id="input-validation-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Validation" subtitle="Input validation layout" />
          <div class="max-w-1/2 max-w-mobile pt-4">
            <Field>
              <FieldLabel label="Email Address"></FieldLabel>
              <Control icon="feather:mail" validation is-valid>
                <VInput
                  placeholder="johndoe@gmail.com"
                  value="mymail@gmail.com"
                />
              </Control>
            </Field>
            <Field>
              <FieldLabel label="Password"></FieldLabel>
              <Control icon="feather:lock" validation is-invalid>
                <VInput type="password" value="deaefeafeqfqf" />
              </Control>
            </Field>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="inputValidation" />
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
