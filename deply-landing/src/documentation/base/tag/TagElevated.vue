<script setup lang="ts">
import { tagProps, tagElevated } from '/@src/data/docs/base/tags'
</script>

<template>
  <Section id="tag-elevated-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Elevated tags" subtitle="Elevated tags variation" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Tags>
              <Tag label="Default" shape="rounded" elevated></Tag>
              <Tag color="solid" label="Solid" shape="rounded" elevated></Tag>
              <Tag
                color="primary"
                label="Primary"
                shape="rounded"
                elevated
              ></Tag>
              <Tag
                color="success"
                label="Success"
                shape="rounded"
                elevated
              ></Tag>
              <Tag color="info" label="Info" shape="rounded" elevated></Tag>
              <Tag
                color="warning"
                label="Warning"
                shape="rounded"
                elevated
              ></Tag>
              <Tag color="danger" label="Danger" shape="rounded" elevated></Tag>
              <Tag color="orange" label="Orange" shape="rounded" elevated></Tag>
              <Tag color="blue" label="Blue" shape="rounded" elevated></Tag>
              <Tag color="green" label="Green" shape="rounded" elevated></Tag>
              <Tag color="purple" label="Purple" shape="rounded" elevated></Tag>
            </Tags>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="tagElevated" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="tagProps" />
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
              Tags are a central part in all web and mobile application. Vulk
              tags come in different flavors. You can control tag elevation
              using the
              <code>elevated</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
