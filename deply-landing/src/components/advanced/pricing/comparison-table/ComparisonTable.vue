<script setup lang="ts">
export interface ComparisonLabelCell {
  cellType: string
  cellLabel: string
  helpText: boolean
  helpLabel: string
}

export interface ComparisonPricingCell {
  cellType: string
  cellLabel: string[]
  cellCheck: boolean
}

export interface ComparisonPricingColumn {
  cells: ComparisonPricingCell[]
  logo: string
  name: string
  price: string
}

export interface ComparisonTableProps {
  labels: ComparisonLabelCell[]
  plans: ComparisonPricingColumn[]
}

const props = defineProps<ComparisonTableProps>()
</script>

<template>
  <div class="py-6">
    <div class="comparison-table">
      <div class="comparison-table-inner">
        <div class="comparison-labels">
          <div
            v-for="(cell, c) in props.labels"
            :key="c"
            class="comparison-label-cell"
            :class="[cell.cellType && `is-cell-${cell.cellType}`]"
          >
            <span class="mr-1">{{ cell.cellLabel }}</span>
            <Popover
              v-if="cell.helpText"
              :content="cell.helpLabel"
              color="primary"
              placement="top"
              arrow
              hover
            >
              <i-uil-question-circle class="text-light" />
            </Popover>
          </div>
        </div>
        <div
          v-for="(plan, p) in props.plans"
          :key="p"
          class="compared-plan"
          :class="p === 3 && 'is-premium'"
        >
          <div class="plan-head">
            <div class="plan-head-inner">
              <div class="plan-logo">
                <img :src="plan.logo" alt="Plan logo" />
              </div>
              <div class="plan-name">
                <span>{{ plan.name }}</span>
              </div>
              <div class="plan-price">
                <span>{{ plan.price }}</span>
              </div>
            </div>
          </div>
          <div class="plan-body">
            <div
              v-for="(cell, c) in plan.cells"
              :key="c"
              class="comparison-plan-cell"
              :class="[cell.cellType && `is-cell-${cell.cellType}`]"
            >
              <div v-if="cell.cellType === 'label'" class="cell-inner">
                <p v-for="(label, l) in cell.cellLabel" :key="l">{{ label }}</p>
              </div>
              <div
                v-else-if="cell.cellType === 'check' && cell.cellCheck"
                class="cell-inner text-success rem-125"
              >
                <i-akar-icons-circle-check-fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comparison-table {
  position: relative;
  overflow: hidden;
  border-radius: 0.65rem;
  border: 1px solid var(--card-border-color);
  box-shadow: var(--spread-shadow);

  .comparison-table-inner {
    display: flex;
    align-items: stretch;

    .comparison-labels {
      width: 340px;
      background: var(--card-bg-color);

      .comparison-label-cell {
        display: flex;
        align-items: center;
        min-height: 65px;
        padding: 0 2rem;

        > span {
          font-family: var(--font);
          font-size: 0.9rem;
          color: var(--medium-text);
        }

        :deep(.inline-block) {
          position: relative;
          max-height: 20px;
          margin: 0 !important;
          border: none !important;

          .popper {
            min-width: 160px;
            font-size: 0.8rem;
            text-align: center;
          }
        }

        &:not(:last-child) {
          border-bottom: 1px solid var(--card-border-color);
        }

        &.is-cell-head {
          height: 160px;
          border-bottom: none;
        }

        &.is-cell-row {
          border: none;
          background: var(--wrap-muted-color);

          span {
            text-transform: uppercase;
            font-size: 0.75rem;
            font-weight: 700;
            color: var(--title-color);
            letter-spacing: 2px;
          }
        }
      }
    }

    .compared-plan {
      flex: 1 1 0;
      text-align: center;
      background: var(--card-bg-color);

      .plan-head {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 160px;

        .plan-head-inner {
          position: relative;
          top: 1.5rem;
        }

        .plan-logo {
          margin-bottom: 0.5rem;

          img {
            display: block;
            max-width: 50px;
            margin: 0 auto;
          }
        }

        .plan-name {
          font-family: var(--font-alt);
          font-weight: 700;
          font-size: 0.75rem;
          color: var(--title-color);
          text-transform: uppercase;
        }

        .plan-price {
          margin-bottom: 2rem;

          span {
            font-family: var(--font);
            font-size: 0.8rem;
            color: var(--light-text);
          }
        }
      }

      .comparison-plan-cell {
        display: flex;
        align-items: center;
        min-height: 65px;
        padding: 0 2rem;
        width: 100%;

        .cell-inner {
          width: 100%;

          p {
            font-family: var(--font);
            font-size: 0.8rem;
            color: var(--medium-text);
          }
        }

        &:not(:last-child) {
          border-bottom: 1px solid var(--card-border-color);
        }

        &.is-cell-head {
          height: 160px;
          border-bottom: none;
        }

        &.is-cell-row {
          border: none;
          background: var(--wrap-muted-color);
        }
      }

      &.is-premium {
        background: var(--dark-bg);
        background: url('/assets/shapes/lowpoly-pattern.png');

        .plan-head {
          .plan-name {
            color: var(--white-smoke);
          }
        }

        .comparison-plan-cell {
          border-color: var(--dark-bg-light-10);

          .cell-inner {
            p {
              color: var(--light-text);
            }
          }

          &.is-cell-row {
            background: var(--white);
            border: none;
            opacity: 0.1;
          }
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .comparison-table {
    overflow-x: auto;

    .comparison-table-inner {
      min-width: 1040px;

      .comparison-labels {
        width: 220px;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .comparison-table {
    .comparison-table-inner {
      .comparison-labels {
        width: 175px;
      }

      .compared-plan {
        .comparison-plan-cell .cell-inner {
          p + p {
            display: none;
          }
        }
      }
    }
  }
}
</style>
