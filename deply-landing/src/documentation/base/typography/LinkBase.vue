<script setup lang="ts">
import { linkProps, link } from '/@src/data/docs/base/typography'
</script>

<template>
  <Section id="link-base-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle title="Link" subtitle="Link element variations" />
          <div class="columns pt-4">
            <div class="column is-6">
              <div class="mb-4">
                <a href="https://cssninja.io" class="link">Iam a normal link</a>
              </div>
              <div class="mb-4">
                <RouterLink :to="{ name: 'index' }" class="link">
                  Iam a RouterLink
                </RouterLink>
              </div>
              <div class="mb-4">
                <RouterLink :to="{ name: 'index' }" class="link is-disabled">
                  Disabled RouterLink
                </RouterLink>
              </div>
            </div>
            <div class="column is-6">
              <div class="mb-4">
                <ActionLink label="Iam an action link" link="index" />
              </div>
              <div class="mb-4">
                <a href="https://cssninja.io" class="link has-underline">
                  Animated link
                </a>
              </div>
              <div class="mb-4">
                <RouterLink
                  :to="{ name: 'index' }"
                  class="link has-underline is-reversed"
                >
                  Animated RouterLink
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="link" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="linkProps" />
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
              Links are an import part of any typography system. You can use
              regular links like
              <code>&#x3C;a&#x3E;&#x3C;/a&#x3E;</code>
              or
              <code>&#x3C;RouterLink&#x3E;&#x3C;/RouterLink&#x3E;</code>
              . You can make links with a sliding underline using the
              <code>has-underline</code>
              class. Alternatively, you ca use a special component called
              <code>&#x3C;ActionLink&#x3E;&#x3C;/ActionLink&#x3E;</code>
              to show a link with a sliding arrow on hover.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
