<script lang="ts">
import 'mapbox-gl/src/css/mapbox-gl.css'
</script>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import mapboxgl from 'mapbox-gl'
import { useDarkmode } from '/@src/stores/darkmode'

export interface MapBoxProps {
  lng: number
  lat: number
  zoom?: number
  absolute?: boolean
}

const props = withDefaults(defineProps<MapBoxProps>(), {
  zoom: 9,
  absolute: false,
})

// You can set the VITE_MAPBOX_ACCESS_TOKEN inside .env file
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

let map: mapboxgl.Map | undefined
const container = ref<HTMLElement>()

const darkmode = useDarkmode()
const style = computed(() =>
  darkmode.isDark
    ? 'mapbox://styles/mapbox/dark-v10'
    : 'mapbox://styles/mapbox/light-v10'
)

const markerOptions = {
  color: 'red',
}

onMounted(() => {
  if (container.value) {
    map = new mapboxgl.Map({
      container: container.value,
      style: style.value, // style URL
      center: [props.lng, props.lat], // starting position [lng, lat]
      zoom: props.zoom, // starting zoom
    })

    // Create a marker and add it to the map.
    new mapboxgl.Marker(markerOptions)
      .setLngLat([props.lng, props.lat])
      .addTo(map)
  }
})

watch(style, (newStyle, oldStyle) => {
  console.log('STYLES', newStyle, oldStyle)
  map?.setStyle(newStyle)
})
</script>

<template>
  <div
    ref="container"
    class="map"
    :class="props.absolute && 'is-absolute'"
  ></div>
</template>

<style scoped lang="scss">
.map {
  height: 100%;
  width: 100%;

  &.is-absolute {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
}
</style>
