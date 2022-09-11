<script setup lang="ts">
import { ref, onMounted, onServerPrefetch, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { getArticle } from '/@src/utils/api/article'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import { HelpCenterArticle } from '/@src/types'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

// get article data
const article = ref<HelpCenterArticle>()
async function fetchArticle() {
  try {
    article.value = await getArticle(slug)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.slug}` },
    })
  }
}

onMounted(fetchArticle)
onServerPrefetch(fetchArticle)
watch(() => route.fullPath, fetchArticle)
</script>

<template>
  <div>
    <Section color="grey" overflown>
      <Container v-if="article">
        <HelpCenterHeader :title="article.title" subtitle="Article" compact />

        <HelpCenterArticleBlock :article="article" />
      </Container>
    </Section>

    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
