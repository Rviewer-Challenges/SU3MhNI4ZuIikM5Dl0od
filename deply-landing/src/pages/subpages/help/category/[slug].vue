<script setup lang="ts">
import { ref, onMounted, onServerPrefetch, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { getCategory } from '/@src/utils/api/category'
import { helpCenterTopics } from '/@src/data/pages/help'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import { HelpCenterCategory } from '/@src/types'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

// get category data
const category = ref<HelpCenterCategory>()
async function fetchCategory() {
  try {
    category.value = await getCategory(slug)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.slug}` },
    })
  }
}

onMounted(fetchCategory)
onServerPrefetch(fetchCategory)
watch(() => route.fullPath, fetchCategory)
</script>

<template>
  <div>
    <Section color="grey" overflown>
      <Container v-if="category">
        <HelpCenterHeader
          :title="category.name"
          subtitle="Category"
          :topics="helpCenterTopics"
          compact
        />

        <HelpCenterCategoryBlock :category="category" />
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
