<script setup lang="ts">
import { ref } from 'vue'
import { checkboxProps, checkboxBase } from '/@src/data/docs/base/form'

const options = ref(['Option 2'])
</script>

<template>
  <Section id="checkbox-base-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Checkbox" subtitle="Checkbox base layout" />
          <div class="columns">
            <div class="column pt-4">
              <Checkbox
                v-model="options"
                name="checkbox-default-1"
                label="Option 0"
                color="default"
                value="Option 0"
              />
              <div class="py-2"></div>
              <Checkbox
                v-model="options"
                name="checkbox-1"
                label="Option 1"
                value="Option 1"
              />
              <div class="py-2"></div>
              <Checkbox
                v-model="options"
                name="checkbox-2"
                label="Option 2"
                color="success"
                value="Option 2"
              />
              <div class="py-2"></div>
              <Checkbox
                v-model="options"
                name="checkbox-3"
                label="Option 3"
                color="info"
                value="Option 3"
              />
              <div class="py-2"></div>
              <Checkbox
                v-model="options"
                name="checkbox-4"
                label="Option 4"
                color="warning"
                value="Option 4"
              />
              <div class="py-2"></div>
              <Checkbox
                v-model="options"
                name="checkbox-5"
                label="Option 5"
                color="danger"
                value="Option 5"
              />
            </div>
            <div class="column pt-4">
              <Checkbox
                v-model="options"
                name="checkbox-default-2"
                label="Option 6"
                color="default"
                rounded
                value="Option 6"
              />
              <div class="py-2"></div>
              <Checkbox
                v-model="options"
                name="checkbox-6"
                label="Option 7"
                rounded
                value="Option 7"
              />
              <div class="py-2"></div>
              <Checkbox
                v-model="options"
                name="checkbox-7"
                label="Option 8"
                color="success"
                rounded
                value="Option 8"
              />
              <div class="py-2"></div>
              <Checkbox
                v-model="options"
                name="checkbox-8"
                label="Option 9"
                color="info"
                rounded
                value="Option 9"
              />
              <div class="py-2"></div>
              <Checkbox
                v-model="options"
                name="checkbox-9"
                label="Option 10"
                color="warning"
                rounded
                value="Option 10"
              />
              <div class="py-2"></div>
              <Checkbox
                v-model="options"
                name="checkbox-10"
                label="Option 11"
                color="danger"
                rounded
                value="Option 11"
              />
            </div>
            <div class="column is-5 pt-4">
              <Card shape="squared" muted>
                <div class="mb-4">
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    <span>Checkboxes</span>
                  </Title>
                  <p class="paragraph rem-90">Selected: {{ options }}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="checkboxBase" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="checkboxProps" />
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
              usage. Vulk checkboxes ship with a clean and modern style. You can
              control the checkbox colors by using the
              <code>color</code>
              prop. You can make a rounded checkbox using the
              <code>rounded</code>
              prop. The
              <code>name</code>
              prop is required.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
