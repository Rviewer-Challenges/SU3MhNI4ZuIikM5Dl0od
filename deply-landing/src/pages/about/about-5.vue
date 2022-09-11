<script setup lang="ts">
import { founders, longTeam } from '/@src/data/blocks/advanced/team'
import { vegetalValues } from '/@src/data/blocks/advanced/values'
import { genericLargeGallery } from '/@src/data/blocks/gallery'
import { customerLogos } from '/@src/data/pages/logos'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <PageTitle title="Meet Our Founders" subtitle="The brains behind">
          <template #content>
            <p class="paragraph mx-auto max-w-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille
              pellit, qui permulcet sensum voluptate. Hoc non est positum in
              nostra actione.
            </p>
          </template>
        </PageTitle>

        <FoundersSection :founders="founders" :limit="3" />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <div class="mb-6">
          <SectionTitle title="Our Values" subtitle="Philosophy" />
        </div>

        <ValuesSection :values="vegetalValues" image-height="130px" />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle title="Meet the Team" subtitle="Talent & Glory" />

        <TeamBlockC :items="longTeam" bubbles :limit="20" />

        <BoxedSection
          minititle="Join Early Access!"
          title="Your entire ecommerce business, connected and powered by AI"
          subtitle="INTRODUCING VULK"
          content="The first-ever Marketplace Optimization Platform, designed to
                optimize your ecommerce business for smart, strategic growth."
          image="/assets/illustrations/chart/circular-people-chart.png"
          dark-image="/assets/illustrations/chart/circular-people-chart-dark.png"
          image-width="800"
          image-height="625"
          cta="Learn more about our product"
          to="index"
          inverted
        />
      </Container>
    </Section>

    <GalleryBlockB :items="genericLargeGallery" :limit="2" />

    <Section color="grey" wave="wave-1" shape-color="white">
      <Container>
        <CtaBlockA
          title="Get Started"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis est tam
        dissimile?"
          cta-primary="Get Started"
          cta-primary-link="/"
          cta-secondary="Learn More"
          cta-secondary-link="/"
          :logos="customerLogos"
          boxed
          shapes
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
