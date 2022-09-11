<script setup lang="ts">
import { tabsProps, tabsBoxed } from '/@src/data/docs/base/tabs'
</script>

<template>
  <Section id="tabs-boxed-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Boxed Tabs" subtitle="Tabs boxed variation" />
          <div class="pt-4">
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
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="tabsBoxed" />
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
              slot to set your tab content. You can change the tabs to another
              type of layout using the
              <code>type</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
