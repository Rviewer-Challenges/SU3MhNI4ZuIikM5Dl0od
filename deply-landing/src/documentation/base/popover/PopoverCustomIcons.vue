<script setup lang="ts">
import { popoverCustomIcons, popoverProps } from '/@src/data/docs/base/popover'
import IconPopover from '/@src/components/base/popover/modules/IconPopover.vue'
</script>

<template>
  <Section id="custom-icons-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Custom - Icons" subtitle="Custom icon layout" />
          <div class="columns pt-4">
            <div class="column is-3 has-text-centered">
              <Popover custom spacing="medium" arrow hover>
                <template #popover>
                  <IconPopover
                    icon="ion:skull-outline"
                    color="danger"
                    heading="Danger ahead"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </template>
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover custom spacing="medium" arrow hover>
                <template #popover>
                  <IconPopover
                    icon="ion:leaf-outline"
                    color="success"
                    heading="Environment"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </template>
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover custom spacing="medium" arrow hover>
                <template #popover>
                  <IconPopover
                    icon="ion:pizza-outline"
                    color="orange"
                    heading="Pizza slices"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    rounded
                  />
                </template>
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover custom spacing="medium" arrow hover>
                <template #popover>
                  <IconPopover
                    icon="ion:rocket-outline"
                    color="info"
                    heading="Startup nation"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    rounded
                  />
                </template>
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="popoverCustomIcons" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="popoverProps" />
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
              buttons come in different flavors. You can control the avatar size
              using the
              <code>size</code>
              prop. Accepted values are
              <code>medium</code>
              and
              <code>large</code>
              You can also make a button text bolder by adding the
              <code>bold</code>
              prop or make the button wider using the
              <code>long</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
