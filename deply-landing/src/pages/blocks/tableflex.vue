<script setup lang="ts">
const demoLinks = [
  {
    label: 'Block A',
    target: 'block-a-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Table Blocks"
      subtitle="More than 8 customizable navbar blocks are awaiting for you to build your own layouts, pages, and content."
    />

    <DemoLinks :links="demoLinks" width="240px" />

    <Section id="block-a-demo">
      <Container>
        <DemoTitle
          title="Block A"
          subtitle="Block A variation 1"
          link="block-a-props"
        />

        <TableBlockA />
      </Container>
    </Section>
  </div>
</template>
