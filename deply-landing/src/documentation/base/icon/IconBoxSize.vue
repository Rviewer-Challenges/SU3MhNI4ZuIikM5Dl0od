<script setup lang="ts">
import { iconboxProps, iconboxSize } from '/@src/data/docs/base/icons'
</script>

<template>
  <Section id="iconbox-size-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Icon Box" subtitle="Icon Box sizes recap" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <IconBox size="small">
                <i class="iconify" data-icon="ion:gift-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox>
                <i class="iconify" data-icon="ion:gift-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium">
                <i class="iconify" data-icon="ion:gift-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="large">
                <i class="iconify" data-icon="ion:gift-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="big">
                <i class="iconify" data-icon="ion:gift-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="xl">
                <i class="iconify" data-icon="ion:gift-outline"></i>
              </IconBox>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="iconboxSize" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="iconboxProps" />
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
              Icons play a central part of every web and mobile application.
              Vulk icon boxes are compatible with
              <a
                href="https://icones.netlify.app/"
                target="_blank"
                class="link"
              >
                Iconify
              </a>
              , which brings in thousands of icons. Unused icons are purge at
              build time. Icon boxes size can be customized using the
              <code>size</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
