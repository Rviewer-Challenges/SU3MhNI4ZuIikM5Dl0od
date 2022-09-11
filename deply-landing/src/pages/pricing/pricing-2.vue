<script setup lang="ts">
import { pricingIconFeatures } from '/@src/data/blocks/advanced/features'
import { genericFaq } from '/@src/data/blocks/advanced/faq'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <PageTitle
          title="Discover Our Simple Plan"
          subtitle="Simple & Comprehensive"
          text="Improve the way your work, discover a brand new tool and drop the hassle once and for all."
        />

        <PricingSolo
          title="Solution pricing"
          subtitle="All features you'll ever need to run a project"
          :features="[
            'Unlimited projects',
            'Desktop and mobile app',
            'Unlimited tasks',
            'Email integration',
            'Unlimited time records',
            'Client management',
            'Task dependencies',
            'Budget tracking',
            'Recurring tasks',
            'Advanced reports',
          ]"
          :monthly-price="7"
          :yearly-price="79"
          link-label="Start Free Trial"
          link="/"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <PricingSoloExtension
          title="Get Paid Bundle"
          subtitle="Expand your plan with loads of additional features"
          :features="[
            'Unlimited projects',
            'Desktop and mobile app',
            'Unlimited tasks',
            'Email integration',
            'Unlimited time records',
            'Client management',
            'Task dependencies',
            'Budget tracking',
          ]"
          :price="4"
        />

        <IconSection :features="pricingIconFeatures" centered />
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
          name="Basile Olembe"
          position="Solution Architect"
          content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia."
          logo="/assets/brands/tribe.svg"
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
