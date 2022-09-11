<script setup lang="ts">
import { cardProps, cardPadding } from '/@src/data/docs/base/card'
</script>

<template>
  <Section id="card-padding-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Card Padding" subtitle="Card padding variations" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <Card shape="straight">
                <p class="paragraph leading-tight rem-90">
                  This card has normal padding
                </p>
              </Card>
            </div>
            <div class="px-2">
              <Card shape="squared" padding="2rem">
                <p class="paragraph leading-tight rem-90">
                  This card has custom padding
                </p>
              </Card>
            </div>
            <div class="px-2">
              <Card shape="curved" padding="3rem">
                <p class="paragraph leading-tight rem-90">
                  This card has custom padding
                </p>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="cardPadding" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="cardProps" />
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
              Cards are a central part in all web and mobile application. Vulk
              cards come in different flavors. You can control card padding by
              using the
              <code>padding</code>
              prop. This prop is a
              <code>string</code>
              , so it gives you flexibility when setting the value.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
