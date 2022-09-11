<script setup lang="ts">
import { termsOfService } from '/@src/data/pages/terms'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <TermsBlock
      title="Terms Of Service"
      subtitle="You must read through the entire Terms of Service below and agree with all the details before you use any of our sites."
      updated="March 22, 2022"
      image="/assets/illustrations/hero/terms-hero.svg"
      dark-image="/assets/illustrations/hero/terms-hero.svg"
      image-height="1152"
      image-width="517"
      :terms="termsOfService"
    />

    <FooterD
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones."
      color="light"
      :social-links="socialLinks"
    />
  </div>
</template>
