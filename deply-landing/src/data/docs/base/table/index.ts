export const tableProps = `
<script setup lang="ts">
export interface SimpleTableProps {
  striped?: boolean
  bordered?: boolean
  scrollable?: boolean
}
</script>
`

export const tableBase = `
<script setup lang="ts">
import { table } from '/@src/data/blocks/table/index'
</script>

<template>
  <SimpleTable :bordered="false">
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
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`

export const tableStriped = `
<script setup lang="ts">
import { table } from '/@src/data/blocks/table/index'
</script>

<template>
  <SimpleTable :bordered="false" striped>
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
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`

export const tableBordered = `
<script setup lang="ts">
import { table } from '/@src/data/blocks/table/index'
</script>

<template>
  <SimpleTable :bordered="true">
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
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`

export const tableBoth = `
<script setup lang="ts">
import { table } from '/@src/data/blocks/table/index'
</script>

<template>
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
            <Title tag="h3" :size="7" weight="semi" narrow>{ item.employee.name }</Title>
            <p class="paragraph rem-75">{ item.employee.position }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <SimpleTableCellFlex>
          <template #media>
            <Icon icon="feather:map-pin"></Icon>
          </template>
          <template #content>
            <p class="paragraph rem-85">{ item.location }</p>
          </template>
        </SimpleTableCellFlex>
      </SimpleTableCell>
      <SimpleTableCell>
        <AvatarGroup size="small" :avatars="item.skills" :limit="5" compact />
      </SimpleTableCell>
      <SimpleTableCell>
        <Tag :label="item.status.label" :color="item.status.color" outlined />
      </SimpleTableCell>
      <SimpleTableCell color="default">
        <p class="paragraph rem-85">{ item.experience }</p>
      </SimpleTableCell>
      <SimpleTableCell>
        <RouterLink
          :to="{ name: item.url }"
          class="link has-underline is-reversed rem-90"
        >View Profile</RouterLink>
      </SimpleTableCell>
    </SimpleTableRow>
  </SimpleTable>
</template>
`
