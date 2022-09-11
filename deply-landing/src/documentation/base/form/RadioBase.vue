<script setup lang="ts">
import { ref } from 'vue'
import { radioProps, radioBase } from '/@src/data/docs/base/form'

const selectedFirst = ref('value_2')
const selectedSecond = ref('value_3')
const selectedThird = ref('value_1')
</script>

<template>
  <Section id="radio-base-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Radio" subtitle="Radio base layout" />
          <div class="columns">
            <div class="column is-8 pt-4">
              <div class="is-flex pt-4">
                <div class="mr-4">
                  <Radio
                    v-model="selectedFirst"
                    value="value_1"
                    name="radio_first"
                    label="Choice 1"
                    group="radio-group-1"
                    color="default"
                  />
                </div>
                <div class="mr-4">
                  <Radio
                    v-model="selectedFirst"
                    value="value_2"
                    name="radio_first"
                    label="Choice 2"
                    group="radio-group-2"
                    color="default"
                  />
                </div>
                <div class="mr-4">
                  <Radio
                    v-model="selectedFirst"
                    value="value_3"
                    name="radio_first"
                    label="Choice 3"
                    group="radio-group-3"
                    color="default"
                  />
                </div>
              </div>
              <div class="is-flex pt-4">
                <div class="mr-4">
                  <Radio
                    v-model="selectedSecond"
                    value="value_1"
                    name="radio_second"
                    label="Choice 1"
                    group="radio-group-4"
                    color="primary"
                  />
                </div>
                <div class="mr-4">
                  <Radio
                    v-model="selectedSecond"
                    value="value_2"
                    name="radio_second"
                    label="Choice 2"
                    group="radio-group-5"
                    color="primary"
                  />
                </div>
                <div class="mr-4">
                  <Radio
                    v-model="selectedSecond"
                    value="value_3"
                    name="radio_second"
                    label="Choice 3"
                    group="radio-group-6"
                    color="primary"
                  />
                </div>
              </div>
              <div class="is-flex pt-4">
                <div class="mr-4">
                  <Radio
                    v-model="selectedThird"
                    value="value_1"
                    name="radio_third"
                    label="Choice 1"
                    group="radio-group-7"
                    color="success"
                  />
                </div>
                <div class="mr-4">
                  <Radio
                    v-model="selectedThird"
                    value="value_2"
                    name="radio_third"
                    label="Choice 2"
                    group="radio-group-8"
                    color="info"
                  />
                </div>
                <div class="mr-4">
                  <Radio
                    v-model="selectedThird"
                    value="value_3"
                    name="radio_third"
                    label="Choice 3"
                    group="radio-group-9"
                    color="warning"
                  />
                </div>
                <div class="mr-4">
                  <Radio
                    v-model="selectedThird"
                    value="value_4"
                    name="radio_third"
                    label="Choice 4"
                    group="radio-group-10"
                    color="danger"
                  />
                </div>
              </div>
            </div>
            <div class="column pt-4">
              <Card shape="squared" muted>
                <div class="mb-4">
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    <span>Radios 1</span>
                  </Title>
                  <p class="paragraph rem-90">Selected: {{ selectedFirst }}</p>
                </div>
                <div class="mb-4">
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    <span>Radios 2</span>
                  </Title>
                  <p class="paragraph rem-90">selected: {{ selectedSecond }}</p>
                </div>
                <div class="mb-4">
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    <span>Radios 3</span>
                  </Title>
                  <p class="paragraph rem-90">selected: {{ selectedThird }}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="radioBase" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="radioProps" />
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
              usage. Vulk radio buttons ship with a clean and modern style. You
              can control the radio colors by using the
              <code>color</code>
              prop.
              <code>name</code>
              and
              <code>group</code>
              props are required.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
