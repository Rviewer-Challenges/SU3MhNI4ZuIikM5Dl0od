<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import SectionBase from '/@src/documentation/layout/section/SectionBase.vue'
import SectionColor from '/@src/documentation/layout/section/SectionColor.vue'
import SectionBorders from '/@src/documentation/layout/section/SectionBorders.vue'
import SectionWave from '/@src/documentation/layout/section/SectionWave.vue'
import SectionTongue from '/@src/documentation/layout/section/SectionTongue.vue'
import SectionBackground from '/@src/documentation/layout/section/SectionBackground.vue'

const demoLinks = [
  {
    label: 'Section',
    target: 'section-base-demo',
  },
  {
    label: 'Color',
    target: 'section-color-demo',
  },
  {
    label: 'Borders',
    target: 'section-borders-demo',
  },
  {
    label: 'Waves',
    target: 'section-wave-demo',
  },
  {
    label: 'Tongues',
    target: 'section-tongue-demo',
  },
  {
    label: 'Background',
    target: 'section-background-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Section Blocks"
      subtitle="Sections are the base layout building block for any website. Vulk sections are very versatile and easily customizable. Explore Vulk sections."
    />
    <DemoLinks :links="demoLinks" width="580px" />

    <!--Section base demo-->
    <SectionBase />

    <!--Section color demo-->
    <SectionColor />

    <!--Section borders demo-->
    <SectionBorders />

    <!--Section wave demo-->
    <SectionWave />

    <!--Section tongue demo-->
    <SectionTongue />

    <!--Section background demo-->
    <SectionBackground />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
