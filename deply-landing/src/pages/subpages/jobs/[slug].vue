<script setup lang="ts">
import { ref, onMounted, onServerPrefetch, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { getJob } from '/@src/utils/api/job'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import type { Job } from '/@src/types'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug as string

// get job data
const job = ref<Job>()
async function fetchJob() {
  try {
    job.value = await getJob(slug)
  } catch {
    router.replace({
      name: 'all',
      params: { all: `not-found-${route.params.slug}` },
    })
  }
}

onMounted(fetchJob)
onServerPrefetch(fetchJob)
watch(() => route.fullPath, fetchJob)
</script>

<template>
  <div>
    <Section overflown>
      <Container v-if="job">
        <JobDetails :job="job"></JobDetails>
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
