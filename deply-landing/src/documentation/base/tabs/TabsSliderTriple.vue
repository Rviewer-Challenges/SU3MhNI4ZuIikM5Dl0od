<script setup lang="ts">
import { tabsProps, tabsSliderTriple } from '/@src/data/docs/base/tabs'
</script>

<template>
  <Section id="tabs-slider-triple-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-6">
        <div class="pt-4 pb-6">
          <DemoTitle title="Tabs Slider 3x" subtitle="Tabs slider variation" />
          <div class="pt-4">
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
          </div>

          <div class="pt-6">
            <Tabs
              slider
              type="rounded"
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
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="tabsSliderTriple" />
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
              slot to set your tab content. You can change the tabs to the
              slider type layout using the
              <code>slider</code>
              prop. You can also use the
              <code>type="rounded"</code>
              prop to change the tab naver shape.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
