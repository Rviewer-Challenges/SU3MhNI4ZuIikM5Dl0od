<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import UtilitiesDoc from '/@src/documentation/blocks/setup/UtilitiesDoc.vue'
</script>

<template>
  <div>
    <HeroSub
      title="Vulk Utilities"
      subtitle="Vulk comes with a lot of CSS utilities that will make your development way more easier. Explore Vulk utilities."
    />

    <Section>
      <Container>
        <!--Theme Utilities-->
        <UtilitiesDoc />
      </Container>
    </Section>

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
