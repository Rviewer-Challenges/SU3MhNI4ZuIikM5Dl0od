<script setup lang="ts">
import {
  avatarSimpleProps,
  avatarSimpleSize,
  avatarSimpleSample,
} from '/@src/data/docs/base/avatar'
</script>

<template>
  <Section id="avatar-size-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="py-6">
          <DemoTitle title="Avatar Sizes" subtitle="Available avatar sizes" />
          <div
            class="is-flex is-align-items-flex-end is-justify-content-center"
          >
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="small"
              />
            </div>
            <div class="px-2">
              <AvatarSimple picture="data:image/gif;base64,replace_with_your_image" />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="medium"
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="large"
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="big"
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="xl"
              />
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="avatarSimpleSize" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="avatarSimpleProps" />
          </template>
          <template #sample>
            <PrismCode language="javascript" :code="avatarSimpleSample" />
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              Avatars have become a central component in almost all web and
              mobile application. Vulk avatars come in different flavors. You
              can control the avatar size using the
              <code>size</code>
              prop. Accepted values are
              <code>small</code>
              ,
              <code>medium</code>
              ,
              <code>large</code>
              ,
              <code>big</code>
              ,
              <code>xl</code>
              .
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
