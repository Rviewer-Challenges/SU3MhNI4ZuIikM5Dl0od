<script setup lang="ts">
export interface Company {
  logo: string
}

export interface CompanyGridProps {
  title: string
  logos: Company[]
  limit?: number
  inverted?: boolean
  compact?: boolean
}

const props = withDefaults(defineProps<CompanyGridProps>(), {
  title: undefined,
  logos: () => [],
  limit: 15,
  inverted: false,
  compact: false,
})
</script>

<template>
  <div class="py-6">
    <div class="company-grid">
      <div v-if="!props.compact" class="has-text-centered">
        <SectionTitle
          :title="props.title"
          subtitle="Por y para desarrolladores"
          :inverted="props.inverted"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.company-grid {
  position: relative;

  .company-logos {
    max-width: 940px;
    margin: 0 auto;

    .logo-wrap {
      min-height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      display: block;
      max-width: 90px;
      min-width: 90px;
      margin: 0 auto;
      filter: invert(0);
    }

    &.is-inverted {
      img {
        filter: invert(1);
      }
    }
  }
}

.is-dark {
  .company-grid {
    .company-logos {
      img {
        filter: invert(1);
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .company-grid {
    .company-logos {
      img {
        display: block;
        max-width: 80px;
        min-width: 80px;
      }
    }
  }
}
</style>
