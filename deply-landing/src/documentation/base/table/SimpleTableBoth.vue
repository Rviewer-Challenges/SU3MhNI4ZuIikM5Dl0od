<script setup lang="ts">
import { table } from '/@src/data/blocks/table/index'
import { tableProps, tableBoth } from '/@src/data/docs/base/table'
</script>

<template>
  <Section id="table-both-demo" bordered-bottom>
    <Container>
      <div class="mx-auto max-w-9">
        <div class="pt-4 pb-6">
          <DemoTitle
            title="Striped Bordered"
            subtitle="Striped bordered variation"
          />
          <div class="is-flex is-align-items-flex-end pt-4">
            <SimpleTable :bordered="true" striped>
              <SimpleTableRow>
                <SimpleTableHeader>Employee</SimpleTableHeader>
                <SimpleTableHeader>Location</SimpleTableHeader>
                <SimpleTableHeader>Skills</SimpleTableHeader>
                <SimpleTableHeader>Status</SimpleTableHeader>
                <SimpleTableHeader>Experience</SimpleTableHeader>
                <SimpleTableHeader>Action</SimpleTableHeader>
              </SimpleTableRow>
              <SimpleTableRow v-for="(item, index) in table" :key="index">
                <SimpleTableCell>
                  <SimpleTableCellFlex>
                    <template #media>
                      <AvatarSimple :picture="item.employee.picture" />
                    </template>
                    <template #content>
                      <Title tag="h3" :size="7" weight="semi" narrow>
                        {{ item.employee.name }}
                      </Title>
                      <p class="paragraph rem-75">
                        {{ item.employee.position }}
                      </p>
                    </template>
                  </SimpleTableCellFlex>
                </SimpleTableCell>
                <SimpleTableCell>
                  <SimpleTableCellFlex>
                    <template #media>
                      <Icon icon="feather:map-pin"></Icon>
                    </template>
                    <template #content>
                      <p class="paragraph rem-85">{{ item.location }}</p>
                    </template>
                  </SimpleTableCellFlex>
                </SimpleTableCell>
                <SimpleTableCell>
                  <AvatarGroup
                    size="small"
                    :avatars="item.skills"
                    :limit="5"
                    compact
                  />
                </SimpleTableCell>
                <SimpleTableCell>
                  <Tag
                    :label="item.status.label"
                    :color="item.status.color"
                    outlined
                  />
                </SimpleTableCell>
                <SimpleTableCell color="default">
                  <p class="paragraph rem-85">{{ item.experience }}</p>
                </SimpleTableCell>
                <SimpleTableCell>
                  <RouterLink
                    :to="{ name: item.url }"
                    class="link has-underline is-reversed rem-90"
                  >
                    View Profile
                  </RouterLink>
                </SimpleTableCell>
              </SimpleTableRow>
            </SimpleTable>
          </div>
        </div>

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="tableBoth" />
          </template>
          <template #props>
            <PrismCode language="javascript" :code="tableProps" />
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
              Vulk's table is an extremely versatile component split into
              several sub components, for more flexibility. The
              <code>&#x3C;SimpleTable /&#x3E;</code>
              component acts as the main wrapper. The
              <code>&#x3C;SimpleTableRow /&#x3E;</code>
              acts as a table row whereas
              <code>&#x3C;SimpleTableHeader /&#x3E;</code>
              and
              <code>&#x3C;SimpleTableCell /&#x3E;</code>
              act as table
              <code>th</code>
              and
              <code>td</code>
              . The table component is bordered by default, as the
              <code>bordered</code>
              prop is set to
              <code>true</code>
              by default. You can remove borders by setting it to
              <code>false</code>
              . You can also create a striped table using the
              <code>striped</code>
              prop. You can of course mix any of those styles. Note that you can
              also make a table horizontally scrollable by adding the
              <code>scrollable</code>
              prop.
            </p>
          </template>
        </DemoTabs>
      </div>
    </Container>
  </Section>
</template>
