<script setup lang="ts">
import { computed } from 'vue'

export interface MapCtaProps {
  title: string
  subtitle: string
  lng: number
  lat: number
  zoom?: number
  pulled?: boolean
  narrow?: boolean
}

const props = withDefaults(defineProps<MapCtaProps>(), {
  zoom: 16,
})

const blockClasses = computed(() => [
  props.pulled && 'block-pulled',
  props.narrow && 'block-narrow',
])
</script>

<template>
  <div class="py-6" :class="blockClasses">
    <div class="map-cta">
      <div class="map-cta-inner">
        <div class="card has-text-left">
          <div class="card-content">
            <h4>{{ props.title }}</h4>
            <p>{{ props.subtitle }}</p>
            <Field>
              <Control icon="feather:map-pin">
                <VInput placeholder="Search destination..." />
              </Control>
            </Field>
            <Field>
              <Control>
                <Button color="primary" fullwidth raised>Search</Button>
              </Control>
            </Field>
          </div>
        </div>
      </div>
      <MapBox :lng="props.lng" :lat="props.lat" :zoom="props.zoom" absolute />
    </div>
  </div>
</template>

<style scoped lang="scss">
.block-pulled {
  padding-top: 0 !important;
}

.block-narrow {
  padding-bottom: 0 !important;
}

.map-cta {
  position: relative;
  border-radius: 2rem;
  margin: 3rem auto 5rem;
  max-width: 1040px;
  background: var(--wrap-muted-color);
  overflow: hidden;

  .map-cta-inner {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 3rem;
    min-height: 400px;
    max-width: 510px;
    margin-left: auto;
    z-index: 1;

    .card {
      min-width: 310px;
      border-radius: 1rem;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);

      .card-content {
        padding: 2.5rem;

        h4 {
          font-family: var(--font-alt);
          font-weight: 600;
          font-size: 1.2rem;
          color: var(--title-color);
        }

        p {
          font-family: var(--font);
          color: var(--light-text);
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .control {
          position: relative;

          .form-icon {
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 42px;
            width: 42px;

            svg {
              height: 18px;
              width: 18px;
              stroke: var(--primary);
            }
          }
        }

        .input,
        .textarea {
          font-family: var(--font);
          font-size: 0.9rem;
          border-radius: 0.5rem;
          transition: border-color 0.3s;

          &:focus {
            border-color: var(--primary);
          }
        }

        .input {
          height: 42px;
          padding-left: 42px;
          border-radius: 0.55rem;
        }

        .button {
          height: 42px;
          border-radius: 0.55rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .map-cta {
    .map-cta-inner {
      padding: 1.5rem !important;

      .card {
        min-width: 100% !important;
      }
    }
  }
}
</style>
