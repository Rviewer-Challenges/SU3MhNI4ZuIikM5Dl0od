<script setup lang="ts">
import { pageTitleProps, pageTitle } from '/@src/data/docs/base/typography'
</script>

<template>
  <Section id="page-title-base-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-8">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="Page Title"
            subtitle="Page title component variations"
          />
          <div class="pt-4">
            <PageTitle
              title="Make it count again"
              subtitle="Get Started"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus, beatum esse numquam probabis"
            >
              <template #content>
                <Buttons alignment="centered" class="mt-4">
                  <Button color="primary" :long="3" bold raised>
                    Get Started
                  </Button>
                  <Button :long="3" bold>Learn More</Button>
                </Buttons>
              </template>
            </PageTitle>
          </div>
        </div>

        <div class="pt-4 pb-6">
          <div class="pt-4">
            <PageTitle
              title="Make it count again"
              subtitle="Get Started"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus, beatum esse numquam probabis"
              aligned
            >
              <template #content>
                <Buttons class="mt-4">
                  <Button color="primary" :long="3" bold raised>
                    Get Started
                  </Button>
                  <Button :long="3" bold>Learn More</Button>
                </Buttons>
              </template>
            </PageTitle>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="pageTitle" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="pageTitleProps" />
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
              Vulk provides a page title component that you can safely use in
              all parts of your application. It provides a few props so you can
              control every aspect of it like content, handled by the
              <code>title</code>
              , the
              <code>subtitle</code>
              , and the
              <code>text</code>
              (optional) props. It also provides a
              <code>#content</code>
              slot that you can use to insert additional elements. You can also
              left align your page title by using the
              <code>aligned</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
