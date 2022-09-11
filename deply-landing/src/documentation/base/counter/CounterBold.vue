<script setup lang="ts">
import { counterProps, counterBold } from '/@src/data/docs/base/counter'
</script>

<template>
  <Section id="counter-bold-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Counter" subtitle="Counter bold variation" />
          <div
            class="
              is-flex is-align-items-flex-end is-justify-content-center
              pt-4
            "
          >
            <div class="px-6">
              <Title tag="h3" :size="4" weight="bold" narrow>
                <Counter :number="194" />
              </Title>
            </div>
            <div class="px-6">
              <Title tag="h3" :size="4" weight="bold" narrow>
                <Counter :number="79" />
              </Title>
            </div>
            <div class="px-6">
              <Title tag="h3" :size="4" weight="bold" narrow>
                <Counter :number="217" />
              </Title>
            </div>
            <div class="px-6">
              <Title tag="h3" :size="4" weight="bold" narrow>
                <Counter :number="42" />
              </Title>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="counterBold" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="counterProps" />
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
              Vulk's counter is a very versatile component that can be used in a
              wide variety of setups. The counter itself is an abstracted
              component that can be inserted anywhere. It inherits its styles
              from its parents, such as
              <code>font-size</code>
              or
              <code>font-weight</code>
              for instance.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
