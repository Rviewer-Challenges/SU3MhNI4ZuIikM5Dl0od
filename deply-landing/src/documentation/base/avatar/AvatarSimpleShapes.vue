<script setup lang="ts">
import {
  avatarSimpleProps,
  avatarSimpleShapes,
  avatarSimpleSample,
} from '/@src/data/docs/base/avatar'
</script>

<template>
  <Section id="avatar-square-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-7">
        <div class="py-6">
          <DemoTitle
            title="Squared shape"
            subtitle="Avatar squared variation"
          />
          <div
            class="is-flex is-align-items-flex-end is-justify-content-center"
          >
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="small"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple picture="data:image/gif;base64,replace_with_your_image" squared />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="medium"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="large"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="big"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="xl"
                squared
              />
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="avatarSimpleShapes" />
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
              can control the avatar shape and make it square by using the
              <code>squared</code>
              prop. This prop is a
              <code>boolean</code>
              , it doesn't need any value.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
