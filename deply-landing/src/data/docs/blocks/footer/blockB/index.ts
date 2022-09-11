export const footerBProps = `
<script setup lang="ts">
export type FooterColors = 'light' | 'dark'

export interface FooterBProps {
  color?: FooterColors
  bubbles?: boolean
}
</script>
`

export const footerB = `
<template>
  <FooterB color="dark">
    <template #links>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Demos</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Components</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Documentation</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink :to="{ name: 'index' }" class="footer-link">Support</RouterLink>
      </li>
    </template>
  </FooterB>
</template>
`

export const footerBSample = `
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
