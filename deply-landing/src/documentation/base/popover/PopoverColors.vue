<script setup lang="ts">
import { popoverColors, popoverProps } from '/@src/data/docs/base/popover'
</script>

<template>
  <Section id="popover-colors-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Popover colors" subtitle="Available colors" />
          <div class="columns is-multiline pt-4">
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a default popover"
                placement="top"
                arrow
                hover
              >
                <p class="paragraph cursor-pointer">Default</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a primary popover"
                placement="top"
                hover
                arrow
                color="primary"
              >
                <p class="paragraph cursor-pointer">Primary</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a inverted popover"
                placement="top"
                hover
                arrow
                color="inverted"
              >
                <p class="paragraph cursor-pointer">Inverted</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a info popover"
                placement="top"
                spacing="medium"
                hover
                arrow
                color="info"
              >
                <p class="paragraph cursor-pointer">Info</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a success popover"
                placement="top"
                hover
                arrow
                color="success"
              >
                <p class="paragraph cursor-pointer">Success</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a warning popover"
                placement="top"
                hover
                arrow
                color="warning"
              >
                <p class="paragraph cursor-pointer">Warning</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a danger popover"
                placement="top"
                hover
                arrow
                color="danger"
              >
                <p class="paragraph cursor-pointer">Danger</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover
                content="This is a purple popover"
                placement="top"
                hover
                arrow
                color="purple"
              >
                <p class="paragraph cursor-pointer">Purple</p>
              </Popover>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="popoverColors" />
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
