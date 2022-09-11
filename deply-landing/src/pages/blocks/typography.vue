<script setup lang="ts">
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'
import TitleBase from '/@src/documentation/base/typography/TitleBase.vue'
import SubtitleBase from '/@src/documentation/base/typography/SubtitleBase.vue'
import PageTitleBase from '/@src/documentation/base/typography/PageTitleBase.vue'
import SectionTitleBase from '/@src/documentation/base/typography/SectionTitleBase.vue'
import CollectionTitleBase from '/@src/documentation/base/typography/CollectionTitleBase.vue'
import ParagraphBase from '/@src/documentation/base/typography/ParagraphBase.vue'
import LinkBase from '/@src/documentation/base/typography/LinkBase.vue'

const demoLinks = [
  {
    label: 'Title',
    target: 'title-base-demo',
  },
  {
    label: 'Subtitle',
    target: 'subtitle-base-demo',
  },
  {
    label: 'Page Title',
    target: 'page-title-base-demo',
  },
  {
    label: 'Section Title',
    target: 'section-title-base-demo',
  },
  {
    label: 'Collection Title',
    target: 'collection-title-base-demo',
  },
  {
    label: 'Paragraph',
    target: 'paragraph-base-demo',
  },
  {
    label: 'Link',
    target: 'link-base-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Typography"
      subtitle="Typography is the thing that makes the difference between and well designed and an average website. Explore Vulk's typography."
    />

    <DemoLinks :links="demoLinks" width="750px" />

    <!--Title base demo-->
    <TitleBase />

    <!--Subtitle base demo-->
    <SubtitleBase />

    <!--Page title base demo-->
    <PageTitleBase />

    <!--Section title base demo-->
    <SectionTitleBase />

    <!--Collection title base demo-->
    <CollectionTitleBase />

    <!--Paragraph base demo-->
    <ParagraphBase />

    <!--Link base demo-->
    <LinkBase />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
