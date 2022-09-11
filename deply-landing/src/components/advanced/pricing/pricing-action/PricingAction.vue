<script setup lang="ts">
export interface PricingActionProps {
  monthlyPrice: number
  quarterlyPrice: number
  yearlyPrice: number
  discount: number
}

const props = defineProps<PricingActionProps>()
</script>

<template>
  <div class="py-6">
    <div class="pricing-action max-w-4 mx-auto">
      <div class="pricing-action-box">
        <input type="radio" name="pricing_action_radio" checked />
        <div class="pricing-action-box-inner">
          <div class="indicator">
            <div class="dot"></div>
          </div>
          <div class="meta">
            <Title tag="h3" :size="5" weight="semi" narrow>
              ${{ props.monthlyPrice }}/month
            </Title>
            <p class="paragraph rem-90">
              ${{ props.quarterlyPrice }} paid quarterly
            </p>
          </div>
        </div>
      </div>
      <div class="pricing-action-box">
        <input type="radio" name="pricing_action_radio" />
        <div class="pricing-action-box-inner">
          <div class="indicator">
            <div class="dot"></div>
          </div>
          <div class="meta">
            <Title tag="h3" :size="5" weight="semi" narrow>
              ${{ props.monthlyPrice }}/month
            </Title>
            <p class="paragraph rem-90">${{ props.yearlyPrice }} paid yearly</p>
          </div>
          <div class="ml-auto">
            <Tag color="success" :label="`Save ${props.discount}%`" />
          </div>
        </div>
      </div>
      <div class="button-wrap">
        <Button color="primary" size="medium" fullwidth raised>
          Create an Account
        </Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pricing-action {
  .pricing-action-box {
    position: relative;

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      cursor: pointer;
      opacity: 0;

      &:checked + .pricing-action-box-inner {
        border-color: var(--primary);

        .indicator {
          border-color: var(--primary);

          .dot {
            transform: scale(1);
          }
        }
      }
    }

    .pricing-action-box-inner {
      background: var(--card-bg-color);
      border: 2px solid var(--card-border-color);
      border-radius: 1rem;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      transition: border-color 0.3s, background-color 0.3s;

      .indicator {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        border: 2px solid var(--card-border-color);
        transition: border-color 0.3s;

        .dot {
          height: 0.5rem;
          width: 0.5rem;
          border-radius: 50%;
          background: var(--primary);
          transform: scale(0);
          transition: transform 0.3s;
        }
      }

      .meta {
        margin-left: 1.5rem;
      }
    }

    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }

  .button-wrap {
    :deep(.button) {
      min-height: 54px;
    }
  }
}
</style>
