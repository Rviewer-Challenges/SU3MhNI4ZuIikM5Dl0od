<script setup lang="ts">
import { popoverBase, popoverProps } from '/@src/data/docs/base/popover'
</script>

<template>
  <Section id="popover-placement-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Popover placement" subtitle="Available positions" />
          <div class="columns pt-4">
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a top popover"
                placement="top"
                arrow
                hover
              >
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a bottom popover"
                placement="bottom"
                hover
                arrow
              >
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a left popover"
                placement="left"
                hover
                arrow
              >
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a right popover"
                placement="right"
                spacing="medium"
                hover
                arrow
              >
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="popoverBase" />
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
