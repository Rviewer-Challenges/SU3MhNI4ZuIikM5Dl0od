<script setup lang="ts">
export interface ComparisonTableFeature {
  label: string
  one: boolean
  two: boolean
  three: boolean
  four: boolean
}

export interface ComparisonTableBasicProps {
  headers: string[]
  features: ComparisonTableFeature[]
}

const props = defineProps<ComparisonTableBasicProps>()
</script>

<template>
  <div class="comparison-table-basic">
    <table>
      <thead>
        <tr>
          <th></th>
          <th class="p-4 secondary-heading">Self-Employed & Freelance</th>
          <th class="p-4 primary-heading" colspan="3">
            Small businesses that need accounting, invoicing or payroll
          </th>
        </tr>
        <tr>
          <th></th>
          <th
            v-for="(header, index) in props.headers"
            :key="index"
            class="compare-heading"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(feature, f) in props.features" :key="f">
          <td>{{ feature.label }}</td>
          <td>
            <i-ph-check-circle-light
              v-if="feature.one"
              class="rem-125 text-success"
            />
            <span v-else>--</span>
          </td>
          <td>
            <i-ph-check-circle-light
              v-if="feature.two"
              class="rem-125 text-success"
            />
            <span v-else>--</span>
          </td>
          <td>
            <i-ph-check-circle-light
              v-if="feature.three"
              class="rem-125 text-success"
            />
            <span v-else>--</span>
          </td>
          <td>
            <i-ph-check-circle-light
              v-if="feature.four"
              class="rem-125 text-success"
            />
            <span v-else>--</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
.comparison-table-basic {
  font: 13px/1.4 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 10px;

  table {
    vertical-align: middle;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
    border-bottom: 1px solid var(--card-border-color);
  }

  td,
  th {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-collapse: collapse;
    empty-cells: show;
    padding: 1.25rem;
  }

  th {
    font-weight: normal;
    padding: 0;
    border-bottom: 1px solid var(--card-border-color);

    &:first-child {
      border: none;
      background: none;
      width: 30%;
    }
  }

  tr {
    td {
      padding: 1.5rem;
      line-height: 2;
      font-size: 0.9rem;
      font-family: var(--font);

      &:first-child {
        text-align: left;
        color: var(--medium-text);
        font-size: 0.95rem;
      }
    }
  }

  .secondary-heading {
    background: var(--secondary);
    border-color: var(--secondary);
    color: var(--white-smoke);
  }

  .primary-heading {
    background: var(--primary);
    border-color: var(--primary);
    color: var(--white-smoke);
  }

  .compare-heading {
    font-family: var(--font);
    font-size: 1rem;
    font-weight: 500;
    color: var(--title-color);
    border-bottom: 0;
    padding: 1.5rem 0;
  }
}

@media (max-width: 767px) {
  .comparison-table-basic {
    td:first-child,
    th:first-child {
      display: none;
    }

    tbody tr:nth-child(odd) {
      display: table-row;
    }

    td,
    th {
      border: 1px solid var(--card-border-color);
    }
  }
}

@media (max-width: 639px) {
  .comparison-table-basic {
    td,
    th {
      padding: 10px 5px;
    }

    .hide-mobile {
      display: none;
    }

    .compare-heading {
      font-size: 13px;
    }
  }
}
</style>
