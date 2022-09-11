<script setup lang="ts">
export interface CtaBlockDProps {
  title: string
  subtitle: string
  inverted?: boolean
}

const props = withDefaults(defineProps<CtaBlockDProps>(), {
  inverted: false,
})
</script>

<template>
  <div class="py-6">
    <div class="cta-block">
      <div class="left">
        <Title
          tag="h3"
          :size="3"
          weight="semi"
          leading
          :inverted="props.inverted"
        >
          <span>{{ props.title }}</span>
        </Title>
        <p class="paragraph rem-125 max-w-5 mobile:mb-4">
          {{ props.subtitle }}
        </p>
      </div>
      <div class="right">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cta-block {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    width: 70%;
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 30%;
  }
}

:deep(.button) {
  height: 48px;
}

@media only screen and (max-width: 767px) {
  .cta-block {
    flex-direction: column;

    .left,
    .right {
      width: 100%;
      text-align: center;
    }

    .right {
      justify-content: center;
    }

    .rem-125 {
      font-size: 1.15rem !important;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .cta-block {
    .left {
      width: 50%;
    }

    .right {
      width: 40%;
    }
  }
}
</style>
