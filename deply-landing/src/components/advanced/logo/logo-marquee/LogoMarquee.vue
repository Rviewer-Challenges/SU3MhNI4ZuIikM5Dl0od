<script setup lang="ts">
// import MarqueeText from 'vue-marquee-text-component'

export interface CustomerLogo {
  logo: string
}

export interface CustomerLogosProps {
  logos: CustomerLogo[]
  inverted?: boolean
  compact?: boolean
}

const props = withDefaults(defineProps<CustomerLogosProps>(), {
  logos: () => [],
  inverted: false,
  compact: false,
})
</script>

<template>
  <div class="logo-marquee" :class="props.compact && 'is-compact'">
    <div v-if="!props.compact" class="has-text-centered pb-6">
      <Subtitle tag="h3" :size="6" weight="bold">
        <span class="text-gradient px-2">
          WE DRIVE RESULTS FOR ENTREPRENEURS TO THE FORTUNE 500
        </span>
      </Subtitle>
    </div>

    <div class="track">
      <MarqueeText :repeat="10" :duration="40">
        <div class="marquee-logos" :class="props.inverted && 'is-inverted'">
          <div v-for="(logo, index) in props.logos" :key="index">
            <img
              class="is-relative mx-6"
              :src="logo.logo"
              alt="Customer logo"
              width="110"
              height="52"
            />
          </div>
        </div>
      </MarqueeText>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo-marquee {
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 160px;
  overflow-x: hidden;

  .marquee-logos {
    display: flex;
    align-items: center;

    > div {
      padding: 0 10px;
    }

    img {
      display: block;
      max-width: 110px;
      min-width: 110px;
    }

    &.is-inverted {
      img {
        filter: invert(1);
      }
    }
  }

  .track {
    position: absolute;
    white-space: nowrap;
    will-change: transform;
  }

  &.is-compact {
    display: flex;
    align-items: center;
    height: 100px;
  }
}

.is-dark {
  .logo-marquee {
    .marquee-logos {
      img {
        filter: invert(1);
      }
    }
  }
}
</style>
