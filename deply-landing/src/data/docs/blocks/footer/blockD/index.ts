export const footerDProps = `
<script setup lang="ts">
export type FooterColors = 'light' | 'dark' | 'default'

export interface FooterDSocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterDProps {
  text: string
  color?: FooterColors
  socialLinks?: FooterDSocialLink[]
  bubbles?: boolean
  curved?: boolean
  image?: string
}
</script>
`

export const footerD = `
<template>
  <FooterD text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare non possum. Apparet statim, quae sint officia, quae actiones."
    color="light"
    :social-links="socialLinks"
    bubbles
  >
    <template #column-1>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Discover</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Get Started</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Product</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Features</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Sign Up</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Sign In</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-2>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Company</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Company</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">About</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Training</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">FAQs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Contact</RouterLink>
        </li>
      </ul>
    </template>
    <template #column-3>
      <Title tag="h3" :size="6" weight="thin" inverted>
        <span>Support</span>
      </Title>
      <ul>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Help Center</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Guides</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">API Docs</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Terms</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Privacy</RouterLink>
        </li>
      </ul>
    </template>
  </FooterD>
</template>
`

export const footerDSample = `
const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'fa:facebook',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'fa:twitter',
  },
  {
    name: 'Linkedin',
    url: 'https://linkedin.com',
    icon: 'fa:linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: 'fa:github',
  },
]
`
