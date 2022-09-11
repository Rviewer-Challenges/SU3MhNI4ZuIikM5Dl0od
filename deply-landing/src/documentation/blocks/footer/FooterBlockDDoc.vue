<script setup lang="ts">
import {
  footerD,
  footerDProps,
  footerDSample,
} from '/@src/data/docs/blocks/footer/blockD'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <Section id="block-d-demo">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Block D"
          subtitle="Block D variation 1"
          link="block-d-props"
        />
      </div>
    </Container>
  </Section>

  <FooterD
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
    color="dark"
    :social-links="socialLinks"
  >
    <template #column-1>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Discover</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Get Started
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Product
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Features
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Sign Up
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Sign In
          </RouterLink>
        </li>
      </ul>
    </template>
    <template #column-2>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Company</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Company
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Training
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            FAQs
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Contact
          </RouterLink>
        </li>
      </ul>
    </template>
    <template #column-3>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Support</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Help Center
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Guides
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            API Docs
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Terms
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Privacy
          </RouterLink>
        </li>
      </ul>
    </template>
  </FooterD>

  <Section color="grey">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Block D"
          subtitle="Block D variation 2"
          link="block-d-props"
        />
      </div>
    </Container>
  </Section>

  <FooterD
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
    color="light"
    :social-links="socialLinks"
    bubbles
  >
    <template #column-1>
      <Title tag="h3" :size="6" weight="thin">
        <span>Discover</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Get Started
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Product
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Features
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Sign Up
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Sign In
          </RouterLink>
        </li>
      </ul>
    </template>
    <template #column-2>
      <Title tag="h3" :size="6" weight="thin">
        <span>Company</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Company
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Training
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            FAQs
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Contact
          </RouterLink>
        </li>
      </ul>
    </template>
    <template #column-3>
      <Title tag="h3" :size="6" weight="thin">
        <span>Support</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Help Center
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Guides
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            API Docs
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Terms
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Privacy
          </RouterLink>
        </li>
      </ul>
    </template>
  </FooterD>

  <Section bordered-top>
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Block D"
          subtitle="Block D variation 3"
          link="block-d-props"
        />
      </div>
    </Container>
  </Section>

  <FooterD
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
    :social-links="socialLinks"
    curved
  >
    <template #column-1>
      <Title tag="h3" :size="6" weight="thin">
        <span>Discover</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Get Started
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Product
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Features
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Sign Up
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Sign In
          </RouterLink>
        </li>
      </ul>
    </template>
    <template #column-2>
      <Title tag="h3" :size="6" weight="thin">
        <span>Company</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Company
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Training
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            FAQs
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Contact
          </RouterLink>
        </li>
      </ul>
    </template>
    <template #column-3>
      <Title tag="h3" :size="6" weight="thin">
        <span>Support</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Help Center
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Guides
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            API Docs
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Terms
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Privacy
          </RouterLink>
        </li>
      </ul>
    </template>
  </FooterD>

  <Section id="block-d-demo">
    <Container>
      <div class="py-12">
        <DemoTitle
          title="Block D"
          subtitle="Block D variation 4"
          link="block-d-props"
        />
      </div>
    </Container>
  </Section>

  <FooterD
    v-background="{
      src: '/assets/shapes/lowpoly-pattern.png',
      placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
    }"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
    color="dark"
    :social-links="socialLinks"
  >
    <template #column-1>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Discover</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Get Started
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Product
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Features
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Sign Up
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Sign In
          </RouterLink>
        </li>
      </ul>
    </template>
    <template #column-2>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Company</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Company
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Training
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            FAQs
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Contact
          </RouterLink>
        </li>
      </ul>
    </template>
    <template #column-3>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Support</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Help Center
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Guides
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            API Docs
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Terms
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">
            Privacy
          </RouterLink>
        </li>
      </ul>
    </template>
  </FooterD>

  <Section id="block-d-props" bordered-bottom>
    <Container>
      <div class="py-4">
        <DemoTitle title="Props" subtitle="Footer D available props" />
      </div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="footerD" />
        </template>
        <template #props>
          <PrismCode language="javascript" :code="footerDProps" />
        </template>
        <template #sample>
          <PrismCode language="javascript" :code="footerDSample" />
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
