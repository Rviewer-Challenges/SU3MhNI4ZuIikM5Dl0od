<script setup lang="ts">
import { tagProps, tagRounded } from '/@src/data/docs/base/tags'
</script>

<template>
  <Section id="tag-rounded-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Rounded tags" subtitle="Rounded tags variation" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Tags>
              <Tag label="Default" shape="rounded"></Tag>
              <Tag color="solid" label="Solid" shape="rounded"></Tag>
              <Tag color="primary" label="Primary" shape="rounded"></Tag>
              <Tag color="success" label="Success" shape="rounded"></Tag>
              <Tag color="info" label="Info" shape="rounded"></Tag>
              <Tag color="warning" label="Warning" shape="rounded"></Tag>
              <Tag color="danger" label="Danger" shape="rounded"></Tag>
              <Tag color="orange" label="Orange" shape="rounded"></Tag>
              <Tag color="blue" label="Blue" shape="rounded"></Tag>
              <Tag color="green" label="Green" shape="rounded"></Tag>
              <Tag color="purple" label="Purple" shape="rounded"></Tag>
            </Tags>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="tagRounded" />
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
              tags come in different flavors. You can make rounded tags by using
              the
              <code>shape</code>
              prop. Allowed values are
              <code>squared</code>
              ,
              <code>curved</code>
              and
              <code>rounded</code>
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
