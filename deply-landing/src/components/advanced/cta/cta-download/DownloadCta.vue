<script setup lang="ts">
export interface DownloadCtaProps {
  appleUrl?: string
  googleUrl?: string
}

const props = withDefaults(defineProps<DownloadCtaProps>(), {
  appleUrl: undefined,
  googleUrl: undefined,
})
</script>

<template>
  <div class="pt-4">
    <Buttons alignment="centered">
      <AppButton v-if="props.appleUrl" type="apple" :url="props.appleUrl" />
      <AppButton v-if="props.googleUrl" type="google" :url="props.googleUrl" />
    </Buttons>

    <div class="mt-6">
      <DarkImage
        class="mx-auto max-w-7"
        src="/assets/appstore/appstore-cta.svg"
        src-dark="/assets/appstore/appstore-cta-dark.svg"
        alt="CTA image"
      />
    </div>
  </div>
</template>
