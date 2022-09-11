<script setup lang="ts">
import { pricingTabbedPlans } from '/@src/data/blocks/advanced/pricing'
import { plantValues } from '/@src/data/blocks/advanced/values'
import { boxedTestimonials } from '/@src/data/blocks/testimonials'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section>
      <Container>
        <PageTitle
          title="A Price For Everyone"
          subtitle="We scale with you"
          text="Improve the way your work, discover a brand new tool and drop the hassle once and for all."
        />

        <PricingTabbed
          :plans="pricingTabbedPlans.allPlans"
          :personal-plans="pricingTabbedPlans.personalPlans"
          :premium-plans="pricingTabbedPlans.premiumPlans"
        />

        <ValuesSection :values="plantValues" image-height="150px" />

        <TestimonialBlockC :testimonials="boxedTestimonials" />
      </Container>
    </Section>

    <Section wave="wave-1" shape-color="grey">
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
      :social-links="socialLinks"
    />
  </div>
</template>
