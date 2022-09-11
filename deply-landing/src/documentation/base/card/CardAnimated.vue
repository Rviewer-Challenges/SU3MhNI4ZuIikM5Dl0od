<script setup lang="ts">
import { cardProps, cardAnimation } from '/@src/data/docs/base/card'
</script>

<template>
  <Section id="card-animated-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="Card Animation"
            subtitle="Card animation variations"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <div class="px-2">
              <Card shape="straight" animated>
                <Title tag="h2" weight="semi" :size="6" leading>
                  Straight Card
                </Title>
                <p class="paragraph leading-tight rem-90">
                  This is a normal straight card
                </p>
              </Card>
            </div>
            <div class="px-2">
              <Card shape="squared" animated>
                <Title tag="h2" weight="semi" :size="6" leading>
                  Squared Card
                </Title>
                <p class="paragraph leading-tight rem-90">
                  This is a normal squared card
                </p>
              </Card>
            </div>
            <div class="px-2">
              <Card shape="curved" animated>
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
            <PrismCode language="html" :code="cardAnimation" />
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
              cards come in different flavors. You can make animated cards using
              the
              <code>animated</code>
              prop. This prop is a
              <code>boolean</code>
              and doesn't take any value. It triggers a small animation when the
              card is hovered.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
