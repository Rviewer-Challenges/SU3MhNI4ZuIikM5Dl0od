<script setup lang="ts">
import { content } from '/@src/data/blocks/content'
import { customerLogos } from '/@src/data/pages/logos'
import { pricingDuoPlans } from '/@src/data/blocks/advanced/pricing'
import { testimonials } from '/@src/data/blocks/advanced/testimonials'
import { plantValues } from '/@src/data/blocks/advanced/values'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <PageTitle
          title="Get Started For Free"
          subtitle="Simple & Comprehensive"
          text="Improve the way your work, discover a brand new tool and drop the hassle once and for all."
        />

        <PricingSoloCentered
          :features="[
            'Unlimited projects',
            'Desktop and mobile app',
            'Unlimited tasks',
            'Email integration',
            'Unlimited time records',
          ]"
          :price="0"
          link-label="Get Started Now"
          link="/"
        />

        <ContentBlockA
          :title="content.title"
          :text="content.text"
          link="index"
          :images="content.images"
        />

        <LogoMarquee :logos="customerLogos" compact />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <PricingDuo
          title="Our plans"
          subtitle="Duplexque isdem diebus acciderat malum, quod et Theophilum insontem
            atrox interceperat casus."
          :plans="pricingDuoPlans"
          rounded
          polka-dots
        />
      </Container>
    </Section>

    <TestimonialsMarquee :testimonials="testimonials" color="grey" />

    <Section color="grey" wave="wave-1" shape-color="white">
      <Container>
        <ValuesSection :values="plantValues" image-height="150px" />
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
