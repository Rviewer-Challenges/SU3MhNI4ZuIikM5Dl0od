<script setup lang="ts">
import { comparePlans, longPlans } from '/@src/data/blocks/advanced/pricing'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section>
      <Container>
        <PageTitle
          title="How We Compare"
          subtitle="Among the Best"
          text="Improve the way your work, discover a brand new tool and drop the hassle once and for all."
          aligned
          leading
        />

        <PricingCompare
          :plans="comparePlans"
          rounded
          pulled
          shadow
          polka-dots
        />

        <TestimonialBlock
          image="data:image/gif;base64,replace_with_your_image"
          title="I had trouble finding a fair deal. Then I simply decided to start using Vulk and it actually worked!"
          content="Jonathan's insurance policy deals that were found on our platform completely changed her life and removed all the hassle."
          link-label="Read Jonathan's Story"
          link="/about"
          reverse
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <SectionTitle title="Our Full Pricing" subtitle="Need the details?" />

        <PricingLong
          :plans="longPlans"
          :columns="4"
          :limit="3"
          rounded
          shadow
          polka-dots
        />
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
