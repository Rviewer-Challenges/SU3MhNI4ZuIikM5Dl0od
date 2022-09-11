<script setup lang="ts">
import {
  footerA,
  footerAProps,
  footerASample,
} from '/@src/data/docs/blocks/footer/blockA'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <Section id="block-a-demo">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Footer A"
          subtitle="Footer A variation 1"
          link="block-a-props"
        />
      </div>
    </Container>
  </Section>

  <FooterA color="dark" :social-links="socialLinks">
    <template #left-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Product
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Features
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Docs
      </RouterLink>
    </template>
    <template #right-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Company
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        About
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Support
      </RouterLink>
    </template>
  </FooterA>

  <Section color="grey">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Footer A"
          subtitle="Footer A variation 2"
          link="block-a-props"
        />
      </div>
    </Container>
  </Section>

  <FooterA color="light" bubbles :social-links="socialLinks">
    <template #left-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Product
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Features
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Docs
      </RouterLink>
    </template>
    <template #right-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Company
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        About
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Support
      </RouterLink>
    </template>
  </FooterA>

  <Section bordered-top>
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Footer A"
          subtitle="Footer A variation 3"
          link="block-a-props"
        />
      </div>
    </Container>
  </Section>

  <FooterA curved :social-links="socialLinks">
    <template #left-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Product
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Features
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Docs
      </RouterLink>
    </template>
    <template #right-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Company
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        About
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Support
      </RouterLink>
    </template>
  </FooterA>

  <Section>
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Footer A"
          subtitle="Footer A variation 4"
          link="block-a-props"
        />
      </div>
    </Container>
  </Section>

  <FooterA
    v-background="{
      src: '/assets/shapes/lowpoly-pattern.png',
      placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
    }"
    color="dark"
    curved
    :social-links="socialLinks"
  >
    <template #left-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Product
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Features
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Docs
      </RouterLink>
    </template>
    <template #right-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Company
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        About
      </RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
        Support
      </RouterLink>
    </template>
  </FooterA>

  <Section id="block-a-props" bordered-bottom>
    <Container>
      <div class="py-4">
        <DemoTitle title="Props" subtitle="Footer A available props" />
      </div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="footerA" />
        </template>
        <template #props>
          <PrismCode language="javascript" :code="footerAProps" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="footerASample" />
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
            prop. You can also give a curved shape to your footer using the
            <code>curved</code>
            prop.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
