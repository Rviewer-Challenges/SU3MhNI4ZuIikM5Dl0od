<script setup lang="ts">
import { tabsProps, tabsIcons } from '/@src/data/docs/base/tabs'
</script>

<template>
  <Section id="tabs-icons-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Icons" subtitle="Tabs icons variation" />
          <div class="pt-4">
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
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="tabsIcons" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="tabsProps" />
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
              Tabs are a very common UI element in modern websites and
              applications. Vulk tabs are very simple to use and easily
              customisable. Use the
              <code>:tabs</code>
              prop to define your tabs and the
              <code>#tab</code>
              slot to set your tab content. Add an icon property to the array
              you are passing to
              <code>:tabs</code>
              to create icon tabs.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
