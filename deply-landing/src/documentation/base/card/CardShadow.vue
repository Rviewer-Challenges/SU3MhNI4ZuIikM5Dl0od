<script setup lang="ts">
import { cardProps, cardShadows } from '/@src/data/docs/base/card'
</script>

<template>
  <Section id="card-shadow-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Card Shadows" subtitle="Card Shadows variations" />
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <Card shape="straight" shadow>
                <Title tag="h2" weight="semi" :size="6" leading>
                  Straight Card
                </Title>
                <p class="paragraph leading-tight rem-90">
                  This is a normal straight card
                </p>
              </Card>
            </div>
            <div class="px-2">
              <Card shape="squared" shadow>
                <Title tag="h2" weight="semi" :size="6" leading>
                  Squared Card
                </Title>
                <p class="paragraph leading-tight rem-90">
                  This is a normal squared card
                </p>
              </Card>
            </div>
            <div class="px-2">
              <Card shape="curved" shadow>
                <Title tag="h2" weight="semi" :size="6" leading>
                  Curved Card
                </Title>
                <p class="paragraph leading-tight rem-90">
                  This is a curved shaped card
                </p>
              </Card>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="cardShadows" />
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
              cards come in different flavors. You can make cards with a
              permanent shadow using the
              <code>shadow</code>
              prop. This prop is a
              <code>boolean</code>
              and doesn't take any value.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
