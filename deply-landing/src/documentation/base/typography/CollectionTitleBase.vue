<script setup lang="ts">
import {
  collectionTitleProps,
  collectionTitle,
} from '/@src/data/docs/base/typography'
</script>

<template>
  <Section id="collection-title-base-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="Collection Title"
            subtitle="Collection title component variations"
          />
          <div class="pt-4">
            <CollectionTitle
              title="Trending 🔥"
              subtitle="Take a closer look at our trending items"
            >
              <template #toolbar>
                <Button :long="2">View All</Button>
              </template>
            </CollectionTitle>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="collectionTitle" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="collectionTitleProps" />
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
              Vulk provides a collection title component that you can safely use
              in your application's collection based pages. It provides a few
              props so you can control its content, using the
              <code>title</code>
              , the
              <code>subtitle</code>
              props. It also provides a
              <code>#toolbar</code>
              slot that you can use to insert additional elements at the right
              side.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
