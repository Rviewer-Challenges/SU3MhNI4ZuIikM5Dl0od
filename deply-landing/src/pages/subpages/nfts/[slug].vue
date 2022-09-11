<script setup lang="ts">
import { ref, onMounted, onServerPrefetch, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { getNft } from '/@src/utils/api/nft'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import { Nft } from '/@src/types'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

// get nft data
const nft = ref<Nft>()
async function fetchNft() {
  try {
    nft.value = await getNft(slug)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.slug}` },
    })
  }
}

onMounted(fetchNft)
onServerPrefetch(fetchNft)
watch(() => route.fullPath, fetchNft)
</script>

<template>
  <div>
    <Section color="grey" overflown>
      <Container v-if="nft">
        <NftDetails :nft="nft" />
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
