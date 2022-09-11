<route lang="yaml">
meta:
  layout: inverted-nav
</route>

<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { iconValues } from '/@src/data/blocks/advanced/values'
import { gridTeam } from '/@src/data/blocks/team'
import { founders } from '/@src/data/blocks/advanced/team'
import { plantValues } from '/@src/data/blocks/advanced/values'
import { press } from '/@src/data/blocks/advanced/press'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section
      v-background="{
        src: '/assets/shapes/lowpoly-pattern.png',
        placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
      }"
      color="darker"
    >
      <Container>
        <SpinnerSection
          inverted
          subtitle="TOP 3%"
          title="A High-Performing Senior Elite Team"
          content="Partner with our advertising experts to save time, boost performance, and meet your milestones on your growth journey."
          cta="Learn more"
          to="/"
          image="/assets/illustrations/chart/tech-chart.png"
          layer-base="/assets/illustrations/chart/tech-chart"
          layer-extension="svg"
        />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle title="Our Company Values" subtitle="Dedicated Team" />

        <ValuesIconSection :values="iconValues" polka-dots />

        <LogoMarquee :logos="customerLogos" compact />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle title="About The Founders" subtitle="The Big Guys" />

        <FoundersSection :founders="founders" :limit="2" />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <SectionTitle title="Meet The Team" subtitle="And The Others" />

        <TeamBlockE :items="gridTeam" :limit="12" shapes />
      </Container>
    </Section>

    <Section color="grey">
      <Container>
        <div class="mb-6">
          <SectionTitle
            title="We are in the press"
            subtitle="They talk about us"
          />
        </div>

        <PressSection :releases="press" />
      </Container>
    </Section>

    <Section color="grey" wave="wave-1" shape-color="white">
      <Container>
        <ValuesSection :values="plantValues" image-height="130px" />

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
