<route lang="yaml">
meta:
  layout: solid-nav
</route>

<script setup lang="ts">
import { contactInfo } from '/@src/data/pages/contact'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'
import { plantValues } from '/@src/data/blocks/advanced/values'
</script>

<template>
  <div>
    <HeroContact
      title="Contact Us"
      subtitle="Fill out the form below to reach us"
      :lng="12.550343"
      :lat="55.665957"
      :zoom="16"
    />

    <Section color="grey">
      <Container>
        <ContactInfo :infos="contactInfo" />

        <ValuesSection :values="plantValues" image-height="120px" />
      </Container>
    </Section>

    <Section color="grey" wave="wave-1" shape-color="white">
      <Container>
        <SectionTitle title="Read our FAQs" subtitle="Have a Question?" />

        <FaqListBoxed :items="genericFaq" />

        <CtaBlockB
          title-primary="Start Now!"
          content-primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
          cta-primary="Free Trial"
          cta-primary-link="/"
          title-secondary="More info?"
          content-secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
          cta-secondary="Contact Us"
          cta-secondary-link="/"
          boxed
          shapes
          animated
        />
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
