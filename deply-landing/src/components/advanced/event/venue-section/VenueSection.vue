<script setup lang="ts">
export interface VenueSectionProps {
  weekdays: string
  time: string
  place: string
  address: string
  backgroundImage: string
  lng: number
  lat: number
  zoom?: number
}

const props = withDefaults(defineProps<VenueSectionProps>(), {
  zoom: 8,
})
</script>

<template>
  <div class="venue-section">
    <div
      v-background="{
        src: props.backgroundImage,
        placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
      }"
      class="left"
    ></div>
    <div class="center">
      <div>
        <Title tag="h3" :size="3" weight="semi" inverted>
          <span>Venue Info</span>
        </Title>
        <div class="venue-line">
          <i-et-calendar></i-et-calendar>
          <div class="meta">
            <span class="subheading">When</span>
            <span class="line">{{ props.weekdays }}</span>
            <span class="line">{{ props.time }}</span>
          </div>
        </div>
        <div class="venue-line">
          <i-et-map></i-et-map>
          <div class="meta">
            <span class="subheading">Where</span>
            <span class="line">{{ props.place }},</span>
            <span class="line">{{ props.address }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <MapBox :lng="props.lng" :lat="props.lat" :zoom="props.zoom" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.venue-section {
  position: relative;
  display: flex;

  > div {
    flex: 1 1 0;
    min-height: 400px;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;
    background: var(--primary);

    .venue-line {
      display: flex;
      margin-top: 1.5rem;
      color: var(--white-smoke);

      svg {
        height: 3rem;
        width: 3rem;
      }

      .meta {
        margin-left: 1rem;

        .subheading {
          display: block;
          font-family: var(--font);
          font-size: 0.8rem;
          text-transform: uppercase;
          opacity: 0.8;
        }

        .line {
          display: block;
          font-family: var(--font);
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .venue-section {
    flex-direction: column;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .venue-section {
    flex-direction: column;
  }
}
</style>
