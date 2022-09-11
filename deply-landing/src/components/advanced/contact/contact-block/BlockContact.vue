<script setup lang="ts">
export interface BlockContactProps {
  title: string
  subtitle: string
  lng: number
  lat: number
  zoom?: number
}

const props = withDefaults(defineProps<BlockContactProps>(), {
  zoom: 16,
})
</script>

<template>
  <div class="block-contact">
    <div class="second-circle"></div>
    <div class="subcircle is-1"></div>
    <div class="subcircle is-2"></div>
    <div class="subcircle is-3"></div>

    <div class="map-block">
      <div class="map-block-inner">
        <MapBox :lng="props.lng" :lat="props.lat" :zoom="props.zoom" absolute />
        <div class="contact-card">
          <Title tag="h2" :size="5" weight="semi" narrow>
            <span>{{ props.title }}</span>
          </Title>
          <p class="paragraph mb-5">{{ props.subtitle }}</p>
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.block-contact {
  position: relative;

  .map-block {
    background: var(--wrap-muted-color);
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: var(--spread-shadow);

    .map-block-inner {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 3rem;
      min-height: 400px;
      height: auto;
      z-index: 1;

      .contact-card {
        position: relative;
        max-width: 440px;
        border-radius: 1rem;
        padding: 2.5rem;
        background: var(--card-bg-color);
        border: 1px solid var(--card-border-color);
        z-index: 2;
      }
    }
  }

  .second-circle {
    position: absolute;
    top: -16%;
    left: -10%;
    height: 280px;
    width: 280px;
    border-radius: 50%;
    background: var(--purple);
    z-index: 1;
  }

  .subcircle {
    position: absolute;
    border-radius: 50%;
    z-index: 3;

    &.is-1 {
      top: -30px;
      right: 30%;
      height: 60px;
      width: 60px;
      background: var(--success);
      box-shadow: var(--success-box-shadow);
    }

    &.is-2 {
      bottom: -20px;
      left: 40%;
      height: 80px;
      width: 80px;
      background: var(--primary);
      box-shadow: var(--primary-box-shadow);
    }

    &.is-3 {
      bottom: 40%;
      left: -20px;
      height: 40px;
      width: 40px;
      background: var(--secondary);
      box-shadow: var(--secondary-box-shadow);
    }
  }
}
</style>
