<script setup lang="ts">
import { iconboxProps, iconboxColors } from '/@src/data/docs/base/icons'
</script>

<template>
  <Section id="iconbox-colors-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Box Colors" subtitle="Icon Box colors recap" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <IconBox size="medium" color="primary">
                <i class="iconify" data-icon="ion:paw-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="success">
                <i class="iconify" data-icon="ion:skull-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="info">
                <i class="iconify" data-icon="ion:layers-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="warning">
                <i class="iconify" data-icon="ion:diamond-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="danger">
                <i class="iconify" data-icon="ion:flash-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="purple">
                <i class="iconify" data-icon="ion:shirt-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="blue">
                <i class="iconify" data-icon="ion:person-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="green">
                <i class="iconify" data-icon="ion:storefront-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="orange">
                <i class="iconify" data-icon="ion:briefcase-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="yellow">
                <i class="iconify" data-icon="ion:speedometer-outline"></i>
              </IconBox>
            </div>
          </div>
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <IconBox size="medium" color="primary" rounded>
                <i class="iconify" data-icon="ion:help-buoy-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="success" rounded>
                <i class="iconify" data-icon="ion:newspaper-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="info" rounded>
                <i class="iconify" data-icon="ion:game-controller-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="warning" rounded>
                <i class="iconify" data-icon="ion:mail-unread-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="danger" rounded>
                <i class="iconify" data-icon="ion:lock-closed-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="purple" rounded>
                <i class="iconify" data-icon="ion:earth-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="blue" rounded>
                <i class="iconify" data-icon="ion:server-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="green" rounded>
                <i class="iconify" data-icon="ion:business-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="orange" rounded>
                <i class="iconify" data-icon="ion:ice-cream-outline"></i>
              </IconBox>
            </div>
            <div class="px-2">
              <IconBox size="medium" color="yellow" rounded>
                <i class="iconify" data-icon="ion:terminal-outline"></i>
              </IconBox>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="iconboxColors" />
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
              build time. Icon boxes color can be customized using the
              <code>color</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
