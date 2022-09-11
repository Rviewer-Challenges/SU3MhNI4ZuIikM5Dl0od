<script setup lang="ts">
import {
  pricingCompactPlans,
  pricingCompareBasic,
} from '/@src/data/blocks/advanced/pricing'
import { customerLogos } from '/@src/data/pages/logos'
import { boxedTestimonials } from '/@src/data/blocks/testimonials'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <PageTitle
          title="Choose The Right One"
          subtitle="We scale with you"
          text="Improve the way your work, discover a brand new tool and drop the hassle once and for all."
        />

        <PricingCompactSlide :plans="pricingCompactPlans" />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle title="Compare our plans" subtitle="Have a Question?" />

        <div class="pt-6">
          <ComparisonBasic
            :headers="['Basic', 'Team', 'Pro', 'Enterprise']"
            :features="pricingCompareBasic"
          />
        </div>

        <CompanyGrid
          title="They use our product"
          :logos="customerLogos"
          :limit="20"
        />

        <CtaBlockF
          title="Get Started"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est
              tam dissimile homini quae cum dixisset."
          background="data:image/gif;base64,replace_with_your_image"
          cta="Get Started"
          cta-link="/"
        />

        <TestimonialBlockC :testimonials="boxedTestimonials" squared />
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
