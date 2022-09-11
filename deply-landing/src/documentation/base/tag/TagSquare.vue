<script setup lang="ts">
import { tagProps, tagSquare } from '/@src/data/docs/base/tags'
</script>

<template>
  <Section id="tag-square-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Square tags" subtitle="Squared tags variation" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Tags>
              <Tag label="Default" shape="squared"></Tag>
              <Tag color="solid" label="Solid" shape="squared"></Tag>
              <Tag color="primary" label="Primary" shape="squared"></Tag>
              <Tag color="success" label="Success" shape="squared"></Tag>
              <Tag color="info" label="Info" shape="squared"></Tag>
              <Tag color="warning" label="Warning" shape="squared"></Tag>
              <Tag color="danger" label="Danger" shape="squared"></Tag>
              <Tag color="orange" label="Orange" shape="squared"></Tag>
              <Tag color="blue" label="Blue" shape="squared"></Tag>
              <Tag color="green" label="Green" shape="squared"></Tag>
              <Tag color="purple" label="Purple" shape="squared"></Tag>
            </Tags>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="tagSquare" />
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
              tags come in different flavors. You can make squared tags by using
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
