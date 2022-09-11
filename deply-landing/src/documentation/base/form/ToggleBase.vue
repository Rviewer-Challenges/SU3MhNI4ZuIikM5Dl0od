<script setup lang="ts">
import { ref } from 'vue'
import { toggleProps, toggleBase } from '/@src/data/docs/base/form'

const options = ref(['Option 2', 'Option 9'])
</script>

<template>
  <Section id="toggle-base-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="Custom Toggle"
            subtitle="Toggle checkbox variations"
          />
          <div class="columns">
            <div class="column pt-4">
              <div class="is-block">
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-1"
                    value="Option 0"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-2"
                    icon
                    value="Option 1"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-3"
                    icon
                    color="success"
                    value="Option 2"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-4"
                    icon
                    color="info"
                    value="Option 3"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-5"
                    icon
                    color="warning"
                    value="Option 4"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-6"
                    icon
                    color="danger"
                    value="Option 5"
                  />
                </div>
              </div>
            </div>
            <div class="column pt-4">
              <div class="is-block">
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-7"
                    flavor="switch"
                    value="Option 6"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-8"
                    icon
                    flavor="switch"
                    value="Option 7"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-9"
                    icon
                    flavor="switch"
                    color="success"
                    value="Option 8"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-10"
                    icon
                    flavor="switch"
                    color="info"
                    value="Option 9"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-11"
                    icon
                    flavor="switch"
                    color="warning"
                    value="Option 10"
                  />
                </div>
                <div class="py-4">
                  <NinjaToggle
                    v-model="options"
                    name="demo-toggle-12"
                    icon
                    flavor="switch"
                    color="danger"
                    value="Option 11"
                  />
                </div>
              </div>
            </div>
            <div class="column is-5 pt-4">
              <Card shape="squared" muted>
                <div class="mb-4">
                  <Title tag="h3" :size="7" weight="semi" narrow>
                    <span>Toggles</span>
                  </Title>
                  <p class="paragraph rem-90">active: {{ options }}</p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="toggleBase" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="toggleProps" />
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
              usage. Vulk ships with a custom toggle component that can have 2
              different flavors. Use the
              <code>flavor</code>
              prop to alternate between
              <code>thin</code>
              and
              <code>swicth</code>
              modes. Use the
              <code>color</code>
              prop to change the color. You can also show some icons using the
              <code>icon</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
