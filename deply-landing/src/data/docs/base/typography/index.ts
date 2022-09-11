export const titleProps = `
<script setup lang="ts">
export type TitleSize = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type TitleWeight = 'thin' | 'stressed' | 'semi' | 'bold'
export type TitleTag = 'h1' | 'h2' | 'h3'

export interface TitleProps {
  size?: TitleSize
  weight?: TitleWeight
  inverted?: boolean
  narrow?: boolean
  leading?: boolean
  uppercase?: boolean
  tag: TitleTag
}

</script>
`

export const title = `
<template>
  <Title 
    tag="h2" 
    :size="2" 
    weight="thin" 
    leading>
    This is a title
  </Title>
</template>
`

export const subtitleProps = `
<script setup lang="ts">
export type SubtitleSize = 1 | 2 | 3 | 4 | 5 | 6
export type SubtitleWeight = 'thin' | 'stressed' | 'semi' | 'bold'
export type SubtitleTag = 'h3' | 'h4' | 'p'

export interface SubtitleProps {
  size?: SubtitleSize
  weight?: SubtitleWeight
  tag: SubtitleTag
  inverted?: boolean
  narrow?: boolean
  leading?: boolean
  uppercase?: boolean
}
</script>
`

export const subtitle = `
<template>
  <Subtitle 
    tag="h3" 
    :size="3" 
    weight="thin" 
    leading>
    This is a subtitle
  </Subtitle>
</template>
`

export const pageTitleProps = `
<script setup lang="ts">
export interface PageTitleProps {
  title: string
  subtitle: string
  text?: string
  inverted?: boolean
  aligned?: boolean
  leading?: boolean
}
</script>
`

export const pageTitle = `
<template>
  <PageTitle
    title="Make it count again"
    subtitle="Get Started"
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui ita affectus, beatum esse numquam probabis"
  >
    <template #content>
      <Buttons alignment="centered" class="mt-4">
        <Button color="primary" :long="3" bold raised>
          Get Started
        </Button>
        <Button :long="3" bold>Learn More</Button>
      </Buttons>
    </template>
  </PageTitle>
</template>
`

export const sectionTitleProps = `
<script setup lang="ts">
export interface SectionTitleProps {
  title: string
  subtitle: string
  inverted?: boolean
  spaced?: boolean
}
</script>
`

export const sectionTitle = `
<template>
  <SectionTitle title="Make it count again" subtitle="Get Started" />
</template>
`

export const collectionTitleProps = `
<script setup lang="ts">
export interface CollectionTitleProps {
  title: string
  subtitle: string
  inverted?: boolean
  spaced?: boolean
}
</script>
`

export const collectionTitle = `
<template>
  <CollectionTitle
    title="Trending 🔥"
    subtitle="Take a closer look at our trending items"
  >
    <template #toolbar>
      <Button :long="2">View All</Button>
    </template>
  </CollectionTitle>
</template>
`

export const paragraphProps = `
<script setup lang="ts">
//No props needed, not a vue component
</script>
`

export const paragraph = `
<template>
  <!--Paragraph size-->
  <p class="paragraph rem-125">This is a paragraph at 1.25rem</p>

  <!--Paragraph color-->
  <p class="paragraph text-primary">This is a paragraph (primary)</p>
</template>
`

export const linkProps = `
<script setup lang="ts">
export type ActionLinkSize = 'tiny' | 'small'

export interface ActionLinkProps {
  link: RouteLocationRaw
  label?: string
  size?: ActionLinkSize
  narrow?: boolean
  heavy?: boolean
}
</script>
`

export const link = `
<template>
  <!--Normal link-->
  <a href="https://cssninja.io" class="link">Iam a normal link</a>

  <!--RouterLink-->
  <RouterLink :to="{ name: 'index' }" class="link">Iam a RouterLink</RouterLink>

  <!--ActionLink-->
  <ActionLink label="Iam an action link" link="index" />

  <!--Animated-->
  <a href="https://cssninja.io" class="link has-underline">Animated link</a>
</template>
`
