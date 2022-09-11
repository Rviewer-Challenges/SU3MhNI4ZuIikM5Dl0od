<script setup lang="ts">
export interface TextSectionProps {
  firstParagraph: string
  secondParagraph: string
  supportParagraph: string
  contactAddress: string
  supportAddress: string
}

const props = defineProps<TextSectionProps>()
</script>

<template>
  <div class="text-section">
    <div class="columns">
      <div class="column is-7">
        <p class="paragraph mb-4">
          {{ props.firstParagraph }}
        </p>
        <p class="paragraph">
          {{ props.secondParagraph }}
        </p>
      </div>
      <div class="column is-4 is-offset-1">
        <div class="mb-4">
          <Title tag="h3" :size="7" weight="semi" narrow>
            <span>General inquiries</span>
          </Title>
          <a class="mail-link" :mailto="props.contactAddress">
            {{ props.contactAddress }}
          </a>
        </div>
        <div class="mb-4">
          <Title tag="h3" :size="7" weight="semi" narrow>
            <span>Support inquiries</span>
          </Title>
          <a class="mail-link" :mailto="props.supportAddress">
            {{ props.supportAddress }}
          </a>
        </div>
        <div>
          <Title tag="h3" :size="7" weight="semi" narrow>
            <span>Assistance</span>
          </Title>
          <p class="paragraph rem-90">
            {{ props.supportParagraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text-section {
  text-align: left;
  margin-top: 3rem;

  .mail-link {
    font-family: var(--font);
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--primary);
  }
}
</style>
