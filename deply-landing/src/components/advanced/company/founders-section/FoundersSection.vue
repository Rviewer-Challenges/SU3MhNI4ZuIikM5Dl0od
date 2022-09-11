<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export type FoundersLimit = 1 | 2 | 3

export interface Founder {
  photo: string
  name: string
  role: string
  bio: string
}

export interface FoundersProps {
  founders: Founder[]
  limit?: FoundersLimit
}

const props = withDefaults(defineProps<FoundersProps>(), {
  limit: 1,
})
</script>

<template>
  <div class="py-6">
    <div class="founders-section">
      <div
        class="founders-section-inner"
        :class="props.limit && `is-${props.limit}`"
      >
        <div
          v-for="(founder, index) in props.founders.slice(0, props.limit)"
          :key="index"
          class="founder"
        >
          <img
            :src="founder.photo"
            alt="Founder photo"
            width="270"
            height="333"
            @error.once="
              (event) => viaPlaceholderErrorHandler(event, '270x333')
            "
          />
          <Title tag="h3" :size="5" weight="semi" narrow>
            <span>{{ founder.name }}</span>
          </Title>
          <p class="paragraph mb-4 text-primary">{{ founder.role }}</p>
          <p class="paragraph rem-90">
            {{ founder.bio }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.founders-section {
  position: relative;

  .founders-section-inner {
    display: flex;
    width: 100%;
    max-width: 740px;
    margin: 0 auto;

    &.is-1 {
      max-width: 400px;
    }

    &.is-2 {
      max-width: 740px;
    }

    &.is-3 {
      max-width: 1040px;
    }

    .founder {
      flex: 1 1 0;
      margin: 0 1rem;
      text-align: center;

      img {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .founders-section {
    .founders-section-inner {
      flex-direction: column;

      .founder {
        &:first-child {
          margin-bottom: 3rem;
        }
      }
    }
  }
}
</style>
