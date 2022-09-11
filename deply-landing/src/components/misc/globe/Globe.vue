<script setup lang="ts">
import { ref, onMounted } from 'vue'

export interface GlobeProps {
  size?: number
  devicePixelRatio?: number
  phi?: number
  theta?: number
  dark?: number
  diffuse?: number
  mapSamples?: number
  mapBrightness?: number
  rotation?: number
}

const props = withDefaults(defineProps<GlobeProps>(), {
  size: 600,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 15000,
  mapBrightness: 6,
  rotation: 0.005,
})

const el = ref()
const phi = ref(0)

onMounted(() => {
  import('cobe').then((mod) => {
    const createGlobe = mod.default
    createGlobe(el.value, {
      devicePixelRatio: 2,
      width: props.size * 2,
      height: props.size * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 15000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.03 },
      ],
      onRender: (state: any) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi.value
        phi.value += props.rotation
      },
    })
  })
})
</script>

<template>
  <canvas
    ref="el"
    :style="{ width: `${props.size}px`, height: `${props.size}px` }"
    :width="props.size * 2"
    :height="props.size * 2"
  ></canvas>
</template>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 100%;
  //max-width: 100% !important;
  //max-height: 100% !important;
}
</style>
