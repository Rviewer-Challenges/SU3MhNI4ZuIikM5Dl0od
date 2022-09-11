<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { iconValues } from '/@src/data/blocks/advanced/values'
import { gridTeam } from '/@src/data/blocks/team'
import { founders } from '/@src/data/blocks/advanced/team'
import { plantValues } from '/@src/data/blocks/advanced/values'
import { socialLinks } from '/@src/data/blocks/advanced/social'
</script>

<template>
  <div>
    <Section color="grey">
      <Container>
        <CompanyStory
          main-title="Our Story"
          secondary-title="Our Mission"
          main-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille
              pellit, qui permulcet sensum voluptate. Hoc non est positum in
              nostra actione. Primum in nostrane potestate est, quid
              meminerimus? Duo Reges: constructio interrete. Respondent extrema
              primis, media utrisque, omnia omnibus. Non risu potius quam
              oratione eiciendum? Eam si varietatem diceres, intellegerem, ut
              etiam non dicente te intellego; Quae tamen a te agetur non melior,
              quam illae sunt."
          secondary-text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille
              pellit, qui permulcet sensum voluptate. Hoc non est positum in
              nostra actione. Primum in nostrane potestate est, quid
              meminerimus? Duo Reges: constructio interrete. Respondent extrema
              primis, media utrisque, omnia omnibus. Non risu potius quam
              oratione eiciendum? Eam si varietatem diceres, intellegerem, ut
              etiam non dicente te intellego; Quae tamen a te agetur non melior,
              quam illae sunt."
          :images="{
            imageOne: 'data:image/gif;base64,replace_with_your_image',
            imageTwo: 'data:image/gif;base64,replace_with_your_image',
            imageThree: 'data:image/gif;base64,replace_with_your_image',
            imageFour: 'data:image/gif;base64,replace_with_your_image',
            imageFive: 'data:image/gif;base64,replace_with_your_image',
            imageSix: 'data:image/gif;base64,replace_with_your_image',
          }"
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
