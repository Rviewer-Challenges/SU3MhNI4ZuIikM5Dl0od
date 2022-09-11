export const footerAProps = `
<script setup lang="ts">
export type FooterColors = 'light' | 'dark'

export interface FooterASocialLink {
  url: string
  name: string
  icon: string
}

export interface FooterAProps {
  color?: FooterColors
  socialLinks?: FooterASocialLink[]
  bubbles?: boolean
  curved?: boolean
}
</script>
`

export const footerA = `
<template>
  <FooterA color="dark" :social-links="socialLinks">
    <template #left-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Product</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Features</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Docs</RouterLink>
    </template>
    <template #right-links>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Company</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">About</RouterLink>
      <RouterLink :to="{ name: 'index' }" class="level-item footer-link">Support</RouterLink>
    </template>
  </FooterA>
</template>
`

export const footerASample = `
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
