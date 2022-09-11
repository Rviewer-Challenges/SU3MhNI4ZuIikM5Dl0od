<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import ColorsDoc from '/@src/documentation/blocks/setup/ColorsDoc.vue'
</script>

<template>
  <div>
    <HeroSub
      title="Vulk Colors"
      subtitle="Although it is based on Bulma and Sass, Vulk uses native CSS variables for colors. Explore Vulk colors."
    />

    <Section>
      <Container>
        <!--Colors-->
        <ColorsDoc />
      </Container>
    </Section>

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
