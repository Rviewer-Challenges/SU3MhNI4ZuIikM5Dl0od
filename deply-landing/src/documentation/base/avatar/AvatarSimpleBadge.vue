<script setup lang="ts">
import {
  avatarSimpleProps,
  avatarSimpleBadge,
  avatarSimpleSample,
} from '/@src/data/docs/base/avatar'
</script>

<template>
  <Section id="avatar-badge-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="py-6">
          <DemoTitle title="Badge" subtitle="Avatar badge images" />
          <div
            class="is-flex is-align-items-flex-end is-justify-content-center"
          >
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="small"
                badge="/assets/icons/flags/canada.svg"
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                badge="/assets/icons/flags/spain.svg"
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="medium"
                badge="/assets/icons/flags/brazil.svg"
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="large"
                badge="/assets/icons/flags/france.svg"
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="big"
                badge="/assets/icons/flags/germany.svg"
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="xl"
                badge="/assets/icons/flags/united-states-of-america.svg"
              />
            </div>
          </div>

          <div
            class="
              is-flex is-align-items-flex-end is-justify-content-center
              pt-4
            "
          >
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="small"
                badge="/assets/icons/flags/canada.svg"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                badge="/assets/icons/flags/spain.svg"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="medium"
                badge="/assets/icons/flags/brazil.svg"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="large"
                badge="/assets/icons/flags/france.svg"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="big"
                badge="/assets/icons/flags/germany.svg"
                squared
              />
            </div>
            <div class="px-2">
              <AvatarSimple
                picture="data:image/gif;base64,replace_with_your_image"
                size="xl"
                badge="/assets/icons/flags/united-states-of-america.svg"
                squared
              />
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="avatarSimpleBadge" />
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
              can add a badge to any avatar using the
              <code>badge</code>
              prop. The badge prop type is a
              <code>string</code>
              and waits for an image url.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
