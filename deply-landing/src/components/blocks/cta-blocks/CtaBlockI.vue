<script setup lang="ts">
export interface CtaBlockIProps {
  title: string
  subtitle: string
  inverted?: boolean
}

const props = withDefaults(defineProps<CtaBlockIProps>(), {
  inverted: false,
})
</script>

<template>
  <div class="py-6">
    <div class="columns is-vcentered">
      <div class="column is-5 is-offset-1">
        <slot name="content"></slot>
      </div>
      <div class="column is-5 is-offset-1">
        <div class="cta-form mx-auto max-w-4">
          <div>
            <div class="b-centered-tablet-p">
              <Title tag="h3" :size="3" weight="bold">
                <span>{{ props.title }}</span>
              </Title>
              <Subtitle tag="h4" :size="6" weight="thin" narrow class="pb-5">
                <slot name="subtitle">{{ props.subtitle }}</slot>
              </Subtitle>
            </div>

            <slot name="form"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cta-form {
  position: relative;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 1.75rem;
  box-shadow: var(--light-box-shadow);
  padding: 3rem;

  :slotted(.column) {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
}

@media only screen and (max-width: 767px) {
  .cta-form {
    padding: 2rem;
  }
}
</style>
