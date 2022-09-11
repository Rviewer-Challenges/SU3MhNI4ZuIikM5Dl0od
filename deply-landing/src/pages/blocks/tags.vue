<script setup lang="ts">
import TagColor from '/@src/documentation/base/tag/TagColor.vue'
import TagRounded from '/@src/documentation/base/tag/TagRounded.vue'
import TagSquare from '/@src/documentation/base/tag/TagSquare.vue'
import TagOutlined from '/@src/documentation/base/tag/TagOutlined.vue'
import TagElevated from '/@src/documentation/base/tag/TagElevated.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'Color',
    target: 'tag-colors-demo',
  },
  {
    label: 'Rounded',
    target: 'tag-rounded-demo',
  },
  {
    label: 'Square',
    target: 'tag-square-demo',
  },
  {
    label: 'Outlined',
    target: 'tag-outlined-demo',
  },
  {
    label: 'Elevation',
    target: 'tag-elevation-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Tag Component"
      subtitle="Tags are an essential part in all web and mobile application with a wide variety of usage. Explore Vulk tags."
    />

    <DemoLinks :links="demoLinks" width="480px" />

    <!--Tag colors demo-->
    <TagColor />

    <!--Tag rounded demo-->
    <TagRounded />

    <!--Tag square demo-->
    <TagSquare />

    <!--Tag outlined demo-->
    <TagOutlined />

    <!--Tag elevated demo-->
    <TagElevated />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
