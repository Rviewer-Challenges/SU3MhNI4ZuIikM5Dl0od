<script setup lang="ts"></script>

<template>
  <FooterB
    v-background="{
      src: '/assets/shapes/lowpoly-pattern.png',
      placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
    }"
    color="dark"
  >
    <template #links>
      <li class="inline-block px-2">
        <RouterLink to="/" class="footer-link">Demos</RouterLink>
      </li>
      <li class="inline-block px-2">
        <RouterLink to="/blocks" class="footer-link">Components</RouterLink>
      </li>
      <li class="inline-block px-2">
        <a href="https://docs.cssninja.io/vulk" class="footer-link">
          Documentation
        </a>
      </li>
      <li class="inline-block px-2">
        <a href="https://support.cssninja.io" class="footer-link">Support</a>
      </li>
    </template>
  </FooterB>
</template>
