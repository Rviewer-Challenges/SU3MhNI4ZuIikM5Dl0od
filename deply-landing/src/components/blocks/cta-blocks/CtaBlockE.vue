<script setup lang="ts">
export interface CtaBlockEProps {
  title: string
  subtitle: string
  text: string
  cta: string
  ctaLink: string
  inverted?: boolean
}

const props = withDefaults(defineProps<CtaBlockEProps>(), {
  inverted: false,
})
</script>

<template>
  <div class="py-6">
    <div class="columns is-vcentered">
      <div class="column is-5 is-offset-1">
        <div class="max-w-4 b-centered-tablet-p b-centered-mobile">
          <Subtitle tag="h3" :size="4" weight="thin" :inverted="props.inverted">
            <span>"{{ props.text }}"</span>
          </Subtitle>
        </div>
      </div>
      <div class="column is-5 is-offset-1">
        <div class="cta-block py-16 mx-auto max-w-4">
          <div class="has-text-centered">
            <Title tag="h3" :size="3" weight="semi">
              <span>{{ props.title }}</span>
            </Title>
            <p class="paragraph rem-115 mx-auto max-w-6 mb-5">
              {{ props.subtitle }}
            </p>
            <Buttons alignment="centered">
              <Button :to="props.ctaLink" color="primary" fullwidth bold raised>
                {{ props.cta }}
              </Button>
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cta-block {
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 1.25rem;
  box-shadow: var(--light-box-shadow);
  padding: 3rem;

  :deep(.button) {
    min-height: 54px;
  }
}

@media only screen and (max-width: 767px) {
  :deep(.subtitle) {
    font-size: 1.25rem;
  }
}
</style>
