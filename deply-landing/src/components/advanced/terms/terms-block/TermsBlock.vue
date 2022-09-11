<script setup lang="ts">
import Markdown from 'vue3-markdown-it'

export interface TermsBlockProps {
  terms: string
  title: string
  subtitle: string
  updated: string
  image: string
  darkImage?: string
  imageWidth: string
  imageHeight: string
}

const props = defineProps<TermsBlockProps>()
</script>

<template>
  <div class="terms-block">
    <TermsHeader
      :title="props.title"
      :subtitle="props.subtitle"
      :updated="props.updated"
      :image="props.image"
      :dark-image="props.darkImage"
      :image-width="props.imageWidth"
      :image-height="props.imageHeight"
    />

    <Section>
      <Container>
        <div class="content">
          <div class="terms-content">
            <Markdown :source="props.terms" :breaks="true" />
          </div>
        </div>
      </Container>
    </Section>
  </div>
</template>

<style scoped lang="scss">
.terms-block {
  position: relative;

  .terms-content {
    max-width: 740px;
    margin: 0 auto;

    :deep(> div) {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: var(--font-alt);
        color: var(--title-color);
      }

      p,
      ul {
        font-family: var(--font);
        color: var(--medium-text);
      }
    }
  }
}
</style>
