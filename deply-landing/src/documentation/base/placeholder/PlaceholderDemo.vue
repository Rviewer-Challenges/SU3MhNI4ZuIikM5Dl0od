<script setup lang="ts">
import {
  placeholderProps,
  placeholderBase,
} from '/@src/data/docs/base/placeholder'
</script>

<template>
  <Section id="placeholder-component-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="Placeholder"
            subtitle="Content placeholder layout"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Placeholder
              title="Project not found"
              subtitle="Hey there, looks like you've hit an empty state. Make sure to create a project before assigning tasks."
            >
              <template #image>
                <DarkImage
                  src="/assets/illustrations/hero/working-laptop.svg"
                  src-dark="/assets/illustrations/hero/working-laptop-dark.svg"
                  alt="illustration"
                />
              </template>
              <template #action>
                <Buttons alignment="centered">
                  <Button color="primary" :long="2" raised>Projects</Button>
                  <Button :long="2">Dashboard</Button>
                </Buttons>
              </template>
            </Placeholder>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="placeholderBase" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="placeholderProps" />
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
              Vulk's placeholder is a very versatile component that can be used
              in a wide variety of setups. The core is the placeholder text
              props. Two additionnal slots (
              <code>#image</code>
              and
              <code>#action</code>
              ) let you insert images and action buttons / links.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
