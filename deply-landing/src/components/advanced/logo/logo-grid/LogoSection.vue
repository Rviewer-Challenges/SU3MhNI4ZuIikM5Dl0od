<script setup lang="ts">
export interface Logo {
  logo: string
}

export interface LogoSectionProps {
  title: string
  logos: Logo[]
  limit?: number
  inverted?: boolean
}

const props = withDefaults(defineProps<LogoSectionProps>(), {
  title: undefined,
  logos: () => [],
  limit: 8,
  inverted: false,
})
</script>

<template>
  <div class="clients">
    <div class="has-text-centered pb-5">
      <Subtitle tag="h3" :size="6" weight="bold">
        <span class="text-gradient">{{ props.title }}</span>
      </Subtitle>
    </div>
    <div class="clients-logos" :class="props.inverted && 'is-inverted'">
      <div
        v-for="(logo, index) in props.logos.slice(0, props.limit)"
        :key="index"
      >
        <img
          class="is-relative mx-6"
          :src="logo.logo"
          alt="Client logo"
          width="300"
          height="107"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.clients {
  position: relative;
  overflow-x: hidden;

  .clients-logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 940px;
    margin: 0 auto;

    > div {
      width: 25%;
      padding: 0 10px;
      margin: 10px 0;
      display: flex;
      justify-content: center;
    }

    img {
      display: block;
      max-width: 110px;
      min-width: 110px;
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
  .clients {
    .clients-logos {
      img {
        filter: invert(1);
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .clients .clients-logos {
    > div {
      width: 33.3%;
    }

    img {
      display: block;
      max-width: 100%;
      min-width: 100%;
      margin: 0 auto !important;
    }
  }
}
</style>
