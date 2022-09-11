<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

import { customerLogos } from '/@src/data/pages/logos'
import { stats } from '/@src/data/blocks/advanced/stats'
import { values } from '/@src/data/blocks/advanced/values'
import { team } from '/@src/data/blocks/advanced/team'
import { boxedGallery } from '/@src/data/blocks/gallery'
import { press } from '/@src/data/blocks/advanced/press'
import { footer } from '/@src/data/footer'
</script>

<template>
  <div>
    <Section>
      <Container>
        <div class="py-4">
          <div class="-mt-6">
            <PageTitle
              title="We’re making work meaningful for everyone, everywhere, anytime"
              subtitle="More About Us"
              aligned
            >
              <template #content>
                <TextSection
                  first-paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ille
                    pellit, qui permulcet sensum voluptate. Hoc non est positum in nostra
                    actione. Primum in nostrane potestate est, quid meminerimus? Duo
                    Reges: constructio interrete. Respondent extrema primis, media
                    utrisque, omnia omnibus. Non risu potius quam oratione eiciendum?"
                  second-paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facillimum id
                    quidem est, inquam. Videamus animi partes, quarum est conspectus
                    illustrior; Suam denique cuique naturam esse ad vivendum ducem. Verum
                    hoc idem saepe faciamus."
                  support-paragraph="Check out our help guides or contact one of our customer care agents via email every workday (8AM - 2AM CET). 
                    Our support team is also available by phone, but only during working hours (+1 844-785-456)."
                  contact-address="contact@vulk.com"
                  support-address="support@vulk.com"
                />
              </template>
            </PageTitle>
          </div>

          <img
            src="data:image/gif;base64,replace_with_your_image"
            alt="About image"
            width="1152"
            height="547"
            @error.once="
              (event) => viaPlaceholderErrorHandler(event, '1152x547')
            "
          />

          <LogoMarquee :logos="customerLogos" compact />
        </div>
      </Container>
    </Section>

    <Section wave="wave-1" shape-color="grey">
      <Container>
        <SectionTitle
          title="Meet our leadership team"
          subtitle="A Talented Team"
        />

        <div class="mt-6">
          <TeamSection :members="team" />
        </div>
      </Container>
    </Section>

    <Section color="grey" wave="wave-1" shape-color="white">
      <Container>
        <div class="pb-6">
          <SideSectionVideo
            subtitle="Our Company"
            title="A dynamic company with talented people"
            content="Whether you're looking to maximize reach, grow incremental profits, or optimize towards custom metrics, our team of experts is here to ensure success is targeted to your KPIs."
            source="/assets/video/meeting.mp4"
            poster="data:image/gif;base64,replace_with_your_image"
            to="/"
            blob
          />
        </div>

        <NumbersSection
          subtitle="Why choose Vulk"
          title="Our data scale powers your success"
          content="Our immense data scale feeds our machine learning and
                algorithms, so you can rest assured that every decision our AI
                makes is a smart one."
          :numbers="stats"
          animated
        />
      </Container>
    </Section>

    <Section>
      <Container>
        <div class="mb-6">
          <SectionTitle
            title="What makes us who we are"
            subtitle="The values that make us who we are"
          />
        </div>

        <ValuesSection :values="values" image-height="130px" />
      </Container>
    </Section>

    <Section grey>
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

    <Section>
      <Container>
        <LogoSection
          title="WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500"
          :logos="customerLogos"
        />
        <GalleryBlockC :items="boxedGallery" />
        <div class="mb-12"></div>
      </Container>
    </Section>

    <Footer :content="footer" color="dark" />
  </div>
</template>
