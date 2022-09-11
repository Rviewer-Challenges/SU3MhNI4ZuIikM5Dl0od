<script setup lang="ts">
export interface MapHeroProps {
  title: string
  subtitle: string
  lng: number
  lat: number
  zoom?: number
}

const props = withDefaults(defineProps<MapHeroProps>(), {
  zoom: 16,
})
</script>

<template>
  <Hero class="map-hero" size="fullheight" color="grey">
    <template #background>
      <MapBox :lng="props.lng" :lat="props.lat" :zoom="props.zoom" absolute />
    </template>
    <template #body>
      <div class="columns">
        <div class="column is-6 is-offset-6">
          <div class="contact-card">
            <Title tag="h2" :size="5" weight="semi" narrow>
              <span>{{ props.title }}</span>
            </Title>
            <p class="paragraph mb-5">{{ props.subtitle }}</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style scoped lang="scss">
.map-hero {
  position: relative;

  .columns {
    padding-top: 4rem;
  }

  .contact-card {
    position: relative;
    max-width: 440px;
    margin-left: auto;
    border-radius: 1rem;
    padding: 2.5rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    z-index: 2;
  }
}
</style>
