<script setup lang="ts">
export interface ButtonsCtaProps {
  title: string
  subtitle: string
}

const props = defineProps<ButtonsCtaProps>()
</script>

<template>
  <div class="cta-block">
    <div class="head-text">
      <h3>{{ props.title }}</h3>
      <p>{{ props.subtitle }}</p>
    </div>
    <div class="head-action">
      <div class="buttons">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cta-block {
  padding-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid var(--card-border-color);
  margin: 40px 0;

  &.no-border {
    padding-bottom: 2rem;
    border-bottom: none;
  }

  &.is-box {
    padding: 3rem 2rem;
    background: var(--card-bg-color);
    border-radius: 8px;
    box-shadow: var(--light-box-shadow);
    border: 1px solid var(--card-border-color);
    justify-content: space-between;
  }

  .head-text {
    h3 {
      font-family: var(--font-alt);
      font-size: 1.8rem;
      color: var(--dark-text);
    }

    p {
      font-family: var(--font);
      font-size: 1.1rem;
      color: var(--light-text);
    }
  }

  .head-action {
    .buttons {
      :deep(.button) {
        &.action-button {
          min-width: 140px;
        }

        &.second-button {
          background: transparent;
          border: none;
          box-shadow: none;
          color: var(--primary);
          font-weight: 500;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .cta-block {
    flex-direction: column;
    text-align: center;

    .head-text {
      padding-bottom: 20px;
    }
  }
}
</style>
