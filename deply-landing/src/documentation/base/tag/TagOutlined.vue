<script setup lang="ts">
import { tagProps, tagOutlined } from '/@src/data/docs/base/tags'
</script>

<template>
  <Section id="tag-outlined-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Outlined Tags" subtitle="Outlined tag colors" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <Tags>
              <Tag color="solid" label="Solid" outlined></Tag>
              <Tag color="primary" label="Primary" outlined></Tag>
              <Tag color="success" label="Success" outlined></Tag>
              <Tag color="info" label="Info" outlined></Tag>
              <Tag color="warning" label="Warning" outlined></Tag>
              <Tag color="danger" label="Danger" outlined></Tag>
              <Tag color="orange" label="Orange" outlined></Tag>
              <Tag color="blue" label="Blue" outlined></Tag>
              <Tag color="green" label="Green" outlined></Tag>
              <Tag color="purple" label="Purple" outlined></Tag>
            </Tags>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="tagOutlined" />
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
              tags come in different flavors. You can make tags outlined by
              using the
              <code>outlined</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
