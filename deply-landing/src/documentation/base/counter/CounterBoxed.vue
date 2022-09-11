<script setup lang="ts">
import { counterProps, counterBox } from '/@src/data/docs/base/counter'
</script>

<template>
  <Section id="counter-boxed-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Counter box" subtitle="Counter variations" />
          <div
            class="
              is-flex is-align-items-flex-end
              pt-4
              is-justify-content-center
              has-text-centered
            "
          >
            <div class="px-2">
              <Card padding="2rem" class="counter-card">
                <Title tag="h3" :size="4" weight="bold" narrow>
                  <Counter :number="194" />
                </Title>
              </Card>
            </div>
            <div class="px-2">
              <Card padding="2rem" class="counter-card">
                <Title tag="h3" :size="4" weight="bold" narrow>
                  <Counter :number="79" />
                </Title>
              </Card>
            </div>
            <div class="px-2">
              <Card padding="2rem" class="counter-card">
                <Title tag="h3" :size="4" weight="bold" narrow>
                  <Counter :number="217" />
                </Title>
              </Card>
            </div>
            <div class="px-2">
              <Card padding="2rem" class="counter-card">
                <Title tag="h3" :size="4" weight="bold" narrow>
                  <Counter :number="42" />
                </Title>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="counterBox" />
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
              for instance. You can embed counters inside other components like
              the
              <code>&#x3C;Card /&#x3E;</code>
              component.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>

<style lang="scss" scoped>
.counter-card {
  min-width: 110px;
}
</style>
