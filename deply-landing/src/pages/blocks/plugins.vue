<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import PluginsDoc from '/@src/documentation/blocks/setup/PluginsDoc.vue'
</script>

<template>
  <div>
    <HeroSub
      title="Vulk Plugins"
      subtitle="Vulk ships with a few but nice vue plugins that will help you with your development journey. Explore Vulk plugins."
    />

    <Section>
      <Container>
        <!--Plugins-->
        <PluginsDoc />
      </Container>
    </Section>

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
