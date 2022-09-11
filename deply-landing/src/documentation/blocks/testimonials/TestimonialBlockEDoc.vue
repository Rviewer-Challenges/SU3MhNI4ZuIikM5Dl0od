<script setup lang="ts">
import {
  testimonialsBlockE,
  testimonialsBlockEProps,
} from '/@src/data/docs/blocks/testimonials/blockE'
</script>

<template>
  <Section id="block-e-demo" bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 1"
        link="block-e-props"
      />

      <TestimonialBlockE
        image="data:image/gif;base64,replace_with_your_image"
        name="Irina Smirkova"
        position="Sales Director"
        content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia."
        logo="/assets/brands/tribe.svg"
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 2"
        link="block-e-props"
      />

      <TestimonialBlockE
        image="data:image/gif;base64,replace_with_your_image"
        name="Basile Olembe"
        position="General Manager"
        content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia."
        logo="/assets/brands/infinite.svg"
        curved
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 3"
        link="block-e-props"
      />

      <TestimonialBlockE
        image="data:image/gif;base64,replace_with_your_image"
        name="Matt Henriks"
        position="Ux Design Lead"
        content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia."
        logo="/assets/brands/proactive.svg"
        reversed
      />
    </Container>
  </Section>

  <Section bordered-bottom>
    <Container>
      <DemoTitle
        title="Block E"
        subtitle="Block E variation 4"
        link="block-e-props"
      />

      <TestimonialBlockE
        image="data:image/gif;base64,replace_with_your_image"
        name="Kim Lee Seung"
        position="Solution Architect"
        content=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Idem iste, inquam, de voluptate quid sentit? Hanc quoque iucunditatem, si vis, transfer in animum; Erat enim Polemonis. Apparet statim, quae sint officia."
        logo="/assets/brands/kromo.svg"
        curved
        reversed
      />
    </Container>
  </Section>

  <Section id="block-e-props" bordered-bottom>
    <Container>
      <DemoTitle title="Block E Props" subtitle="Available props for block E" />

      <div class="py-4"></div>

      <DemoTabs>
        <template #code>
          <PrismCode language="html" :code="testimonialsBlockE" />
        </template>
        <template #props>
          <DemoProps :props="testimonialsBlockEProps.props" />
        </template>
        <template #sample>
          <div class="empty-text">
            <p class="paragraph rem-95">
              No data sample available for this component
            </p>
          </div>
        </template>
        <template #usage>
          <p class="paragraph rem-95">
            Vulk ships with highly customizable and versatile Testimonial blocks
            that you can use in any page. Each block comes with it's own styles
            and props. Use the props to build your own examples or use one of
            the prebuilt examples.
          </p>
        </template>
      </DemoTabs>
    </Container>
  </Section>
</template>
