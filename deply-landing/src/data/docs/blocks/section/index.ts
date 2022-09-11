export const sectionProps = `
<script setup lang="ts">
export type SectionSize = 'medium' | 'large'
export type SectionColor = 'grey' | 'darker' | 'primary' | 'gradient'
export type SectionWave = 'wave-1' | 'wave-2'
export type SectionTongue = 'tongue-1' | 'tongue-2'
export type SectionShapeColor =
  | 'grey'
  | 'darker'
  | 'primary'
  | 'white'
  | 'footer-dark'

export interface SectionProps {
  size?: SectionSize
  color?: SectionColor
  borderedTop?: boolean
  borderedBottom?: boolean
  bottomSpaced?: boolean
  bottomNarrow?: boolean
  topNarrow?: boolean
  overflown?: boolean
  wave?: SectionWave
  tongue?: SectionTongue
  shapeColor?: SectionShapeColor
  overlay?: boolean
}
</script>
`

export const sectionBase = `
<template>
  <Section>
    <Container>
      <!--Your content goes here-->
    </Container>
  </Section>
</template>
`

export const sectionColors = `
<template>
  <Section color="grey">
    <Container>
      <!--Your content goes here-->
    </Container>
  </Section>
</template>
`

export const sectionBorder = `
<template>
  <Section bordered-top bordered-bottom>
    <Container>
      <!--Your content goes here-->
    </Container>
  </Section>
</template>
`
export const sectionWave = `
<template>
  <!--Wave 1-->
  <Section wave="wave-1" shape-color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
  <Section color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>

  <!--Wave 2-->
  <Section wave="wave-2" shape-color="darker">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow inverted>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
  <Section color="darker">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow inverted>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
</template>
`

export const sectionTongue = `
<template>
<!--Tongue 1-->
  <Section tongue="tongue-1" shape-color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>

  <!--Tongue 2-->
  <Section tongue="tongue-2" shape-color="grey">
    <Container>
      <div class="content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph">I can hold any type of content</p>
      </div>
    </Container>
  </Section>
</template>
`
export const sectionBackground = `
<template>
  <Section
    v-background="{
      src: 'data:image/gif;base64,replace_with_your_image',
      placeholder: 'https://dummyimage.com/1920x1080/',
    }"
    overlay
  >
    <Container>
      <div class="has-text-centered content py-6">
        <Title tag="h3" :size="4" weight="semi" narrow inverted>
          <span>Iam a Section</span>
        </Title>
        <p class="paragraph is-inverted-light">
          I can hold any type of content
        </p>
      </div>
    </Container>
  </Section>
</template>
`
