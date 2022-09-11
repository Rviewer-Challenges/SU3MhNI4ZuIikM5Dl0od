<script setup lang="ts">
import { buttonProps, buttonIcons } from '/@src/data/docs/base/button'
</script>

<template>
  <Section id="button-icons-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Button Icons" subtitle="Icon buttons variation" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Buttons>
              <Button :long="1" icon-left="feather:github">GitHub</Button>
              <Button
                color="primary"
                :long="1"
                icon-right="feather:arrow-right"
              >
                Go Right
              </Button>
              <Button :long="1" icon-left="feather:github">GitHub</Button>
              <Button size="medium" :long="1" icon-left="feather:github">
                GitHub
              </Button>
              <Button size="large" :long="1" icon-left="feather:github">
                GitHub
              </Button>
              <Button
                color="danger"
                outlined
                :long="1"
                icon-left="feather:heart"
              >
                I Love it
              </Button>
            </Buttons>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="buttonIcons" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="buttonProps" />
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
              buttons come in different flavors. Buttons can have icons either
              on the left or on the right side. To insert a left icon, use the
              <code>icon-left</code>
              prop. To insert a right icon, use the
              <code>icon-right</code>
              prop. All ionify ico sets are available.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
