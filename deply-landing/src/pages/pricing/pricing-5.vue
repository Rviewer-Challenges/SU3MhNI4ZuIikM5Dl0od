<script setup lang="ts">
import { pricingBlockPlans } from '/@src/data/blocks/advanced/pricing'
import { plantValues } from '/@src/data/blocks/advanced/values'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <PageTitle
          title="Simple and Clean Pricing"
          subtitle="We keep it simple"
          text="Improve the way your work, discover a brand new tool and drop the hassle once and for all."
        />

        <PricingBlock :plans="pricingBlockPlans" />

        <ValuesSection :values="plantValues" image-height="150px" />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <CtaBlockJ
          small-text="14-Day Trial"
          title="Make Real Work Happen"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam dissimile?"
        >
          <form>
            <Field grouped>
              <Control icon="feather:user" expanded>
                <VInput placeholder="Full Name" />
              </Control>
              <Control icon="feather:mail" expanded>
                <VInput placeholder="Email" />
              </Control>
              <Control>
                <Button size="form" color="primary" :long="2" raised>
                  Get Started
                </Button>
              </Control>
            </Field>
          </form>
          <div class="mt-4">
            <RouterLink to="/" class="paragraph text-primary">
              Or Signup with Google
            </RouterLink>
          </div>
        </CtaBlockJ>

        <TestimonialBlockE
          image="data:image/gif;base64,replace_with_your_image"
          name="Michael Wallace"
          position="Project Manager"
          content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia."
          logo="/assets/brands/vonmo.svg"
          curved
          reversed
        />
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
