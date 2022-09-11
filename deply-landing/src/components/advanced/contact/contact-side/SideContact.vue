<script setup lang="ts">
export interface SideContactProps {
  title: string
  subtitle: string
  lng: number
  lat: number
  zoom?: number
}

const props = withDefaults(defineProps<SideContactProps>(), {
  zoom: 16,
})
</script>

<template>
  <div class="side-contact">
    <div class="side-contact-inner">
      <div class="columns">
        <div class="column is-5">
          <div class="contact-card">
            <Title tag="h2" :size="5" weight="semi" narrow>
              <span>{{ props.title }}</span>
            </Title>
            <p class="paragraph mb-5">{{ props.subtitle }}</p>
            <ContactForm />
          </div>
        </div>
        <div class="column is-7">
          <div class="contact-map">
            <MapBox
              :lng="props.lng"
              :lat="props.lat"
              :zoom="props.zoom"
              absolute
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-contact {
  position: relative;

  .contact-card {
    padding: 2.5rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.85rem;
    max-width: 440px;
    margin: 0 auto;
    transition: box-shadow 0.3s;

    &:focus-within {
      box-shadow: var(--spread-shadow);
    }
  }

  .contact-map {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 480px;
    border-radius: 0.85rem;
    overflow: hidden;
  }
}
</style>
