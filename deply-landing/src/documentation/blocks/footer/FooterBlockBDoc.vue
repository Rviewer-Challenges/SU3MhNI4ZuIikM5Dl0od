<script setup lang="ts">
import { footerB, footerBProps } from '/@src/data/docs/blocks/footer/blockB'
</script>

<template>
  <Section id="block-b-demo">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Footer B"
          subtitle="Footer B variation 1"
          link="block-b-props"
        />
      </div>
    </Container>
  </Section>

  <FooterB color="dark">
    <template #links>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Demos
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Components
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Documentation
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Support
        </RouterLink>
      </li>
    </template>
  </FooterB>

  <Section color="grey">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Footer B"
          subtitle="Footer B variation 2"
          link="block-b-props"
        />
      </div>
    </Container>
  </Section>

  <FooterB color="light" bubbles>
    <template #links>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Demos
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Components
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Documentation
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Support
        </RouterLink>
      </li>
    </template>
  </FooterB>

  <Section bordered-top>
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Footer B"
          subtitle="Footer B variation 3"
          link="block-b-props"
        />
      </div>
    </Container>
  </Section>

  <FooterB>
    <template #links>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Demos
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Components
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Documentation
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Support
        </RouterLink>
      </li>
    </template>
  </FooterB>

  <Section id="block-b-demo">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Footer B"
          subtitle="Footer B variation 4"
          link="block-b-props"
        />
      </div>
    </Container>
  </Section>

  <FooterB
    v-background="{
      src: '/assets/shapes/lowpoly-pattern.png',
      placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
    }"
    color="dark"
  >
    <template #links>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Demos
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Components
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Documentation
        </RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">
          Support
        </RouterLink>
      </li>
    </template>
  </FooterB>

  <Section id="block-b-props" bordered-bottom>
    <Container>
      <div class="py-4">
        <DemoTitle title="Props" subtitle="Footer B available props" />
      </div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="footerB" />
        </template>
        <template #props>
          <PrismCode language="javascript" :code="footerBProps" />
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
            Footers are an important part of every website. They act as a recap
            of the most important navigation links as well as a provider of
            additional info or actions, such as Newsletter subscription or
            social links. You can control the footer color using the
            <code>color</code>
            prop. You can choose to display some animated bubbles by activating
            the
            <code>bubbles</code>
            prop.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
