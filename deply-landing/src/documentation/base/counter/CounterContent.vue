<script setup lang="ts">
import { counterProps, counterContent } from '/@src/data/docs/base/counter'
</script>

<template>
  <Section id="counter-content-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Counter" subtitle="Counter content variation" />
          <div
            class="
              is-flex is-align-items-flex-end is-justify-content-center
              pt-6
            "
          >
            <div class="px-4 has-text-centered">
              <Icon icon="la:pizza-slice" :size="200" color="primary" />
              <Title tag="h3" :size="4" weight="bold" narrow>
                <Counter :number="194" />
              </Title>
              <p class="paragraph rem-95">Pizzas eaten</p>
            </div>
            <div class="px-4 has-text-centered">
              <Icon icon="la:ice-cream" :size="200" color="primary" />
              <Title tag="h3" :size="4" weight="bold" narrow>
                <Counter :number="79" />
              </Title>
              <p class="paragraph rem-95">Cones eaten</p>
            </div>
            <div class="px-4 has-text-centered">
              <Icon icon="la:hotdog" :size="200" color="primary" />
              <Title tag="h3" :size="4" weight="bold" narrow>
                <Counter :number="217" />
              </Title>
              <p class="paragraph rem-95">Hotdogs eaten</p>
            </div>
            <div class="px-4 has-text-centered">
              <Icon icon="la:apple-alt" :size="200" color="primary" />
              <Title tag="h3" :size="4" weight="bold" narrow>
                <Counter :number="42" />
              </Title>
              <p class="paragraph rem-95">Apples eaten</p>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="counterContent" />
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
              for instance. You can create your own counter compositions and
              derived components very easily.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
