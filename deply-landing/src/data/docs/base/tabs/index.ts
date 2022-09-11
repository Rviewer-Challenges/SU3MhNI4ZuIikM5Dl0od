export const tabsProps = `
<script setup lang="ts">
export type TabsType = 'boxed' | 'toggle' | 'rounded'
export type TabsAlign = 'centered' | 'right'
export interface TabsItem {
  label: string
  value: string
  icon?: string
}
export interface TabsProps {
  tabs: TabsItem[]
  selected?: string
  type?: TabsType
  alignment?: TabsAlign
  slider?: boolean
  slow?: boolean
}
</script>
`

export const tabsBase = `
<template>
  <Tabs
    selected="overview"
    :tabs="[
      { label: 'Overview', value: 'overview' },
      { label: 'Team', value: 'team' },
      { label: 'Budget', value: 'budget' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'overview'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'budget'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`

export const tabsCentered = `
<template>
  <Tabs
    alignment="centered"
    selected="overview"
    :tabs="[
      { label: 'Overview', value: 'overview' },
      { label: 'Team', value: 'team' },
      { label: 'Budget', value: 'budget' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'overview'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'budget'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`

export const tabsRight = `
<template>
  <Tabs
    alignment="right"
    selected="overview"
    :tabs="[
      { label: 'Overview', value: 'overview' },
      { label: 'Team', value: 'team' },
      { label: 'Budget', value: 'budget' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'overview'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'budget'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`

export const tabsIcons = `
<template>
  <Tabs
    selected="overview"
    :tabs="[
      {
        label: 'Overview',
        value: 'overview',
        icon: 'ion:apps-outline',
      },
      { label: 'Team', value: 'team', icon: 'ion:people-outline' },
      {
        label: 'Budget',
        value: 'budget',
        icon: 'ion:podium-outline',
      },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'overview'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'budget'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`

export const tabsBoxed = `
<template>
  <Tabs
    type="boxed"
    selected="overview"
    :tabs="[
      { label: 'Overview', value: 'overview' },
      { label: 'Team', value: 'team' },
      { label: 'Budget', value: 'budget' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'overview'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'budget'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`

export const tabsSliderDouble = `
<template>
  <Tabs
    slider
    selected="team"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'projects'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`

export const tabsSliderTriple = `
<template>
  <Tabs
    slider
    selected="team"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
      { label: 'Tasks', value: 'tasks' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'team'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'projects'" class="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'tasks'" class="paragraph">
        aLorem ipsum dolor sit amet, consectetur adipiscing elit. Quid
        iudicant sensus? Primum quid tu dicis breve? Etiam
        beatissimum? Ne discipulum abducam, times. Quae diligentissime
        contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </Tabs>
</template>
`
