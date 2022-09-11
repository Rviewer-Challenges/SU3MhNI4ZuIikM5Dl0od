<script setup lang="ts">
import {
  popoverCustomAvatars,
  popoverProps,
} from '/@src/data/docs/base/popover'
</script>

<template>
  <Section id="custom-avatars-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Custom - Avatars" subtitle="Custom avatar layout" />
          <div class="columns pt-4">
            <div class="column is-3 has-text-centered">
              <Popover custom spacing="large" arrow hover>
                <template #popover>
                  <AvatarPopover
                    avatar="data:image/gif;base64,replace_with_your_image"
                    heading="Helen Miller"
                    subheading="Software Engineer"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."
                  />
                </template>
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover custom spacing="large" arrow hover>
                <template #popover>
                  <AvatarPopover
                    avatar="data:image/gif;base64,replace_with_your_image"
                    heading="Dayron Williams"
                    subheading="UX Designer"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."
                  />
                </template>
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover custom spacing="large" arrow hover>
                <template #popover>
                  <AvatarPopover
                    avatar="data:image/gif;base64,replace_with_your_image"
                    heading="Chris Wyatt"
                    subheading="Frontend Developer"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."
                    squared
                  />
                </template>
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
            <div class="column is-3 has-text-centered">
              <Popover custom spacing="large" arrow hover>
                <template #popover>
                  <AvatarPopover
                    avatar="data:image/gif;base64,replace_with_your_image"
                    heading="Christina Chu"
                    subheading="Product Manager"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Omnis enim est natura diligens sui. Sed haec omittamus."
                    squared
                  />
                </template>
                <p class="paragraph cursor-pointer">Hover me</p>
              </Popover>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="popoverCustomAvatars" />
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
