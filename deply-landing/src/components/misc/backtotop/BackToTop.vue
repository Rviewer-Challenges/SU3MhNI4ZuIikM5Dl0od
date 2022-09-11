<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import VueScrollTo from 'vue-scrollto'

const { y } = useWindowScroll()

const scrollTo = VueScrollTo.scrollTo

const progressPath = ref<SVGGeometryElement>()

const isScrolled = computed(() => {
  return y.value > 600
})

const handleScroll = () => {
  if (progressPath.value) {
    const pathLength = progressPath.value.getTotalLength()

    let scrollValue = window.scrollY
    let scrollHeight = document.body.scrollHeight - window.innerHeight
    let progress = pathLength - (scrollValue * pathLength) / scrollHeight

    progressPath.value.style.strokeDashoffset = Math.round(progress).toString()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })

  if (progressPath.value) {
    const style = progressPath.value.style
    const pathLength = progressPath.value.getTotalLength()

    ;(style.transition = 'none'),
      (style.strokeDasharray = `${pathLength} ${pathLength}`)

    progressPath.value.getBoundingClientRect()
    style.transition = 'stroke-dashoffset 10ms linear'
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class="progress-wrap"
    :class="[isScrolled && 'active-progress']"
    @click="scrollTo(`#app`, 800, { offset: -100 })"
    @keydown.space.prevent="() => scrollTo(`#app`, 800, { offset: -100 })"
  >
    <svg
      class="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path ref="progressPath" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.progress-wrap {
  position: fixed;
  right: 30px;
  bottom: 30px;
  height: 46px;
  width: 46px;
  cursor: pointer;
  display: block;
  border-radius: 50px;
  box-shadow: inset 0 0 0 2px rgb(0 0 0 / 10%);
  opacity: 0;
  visibility: hidden;
  transform: translateY(15px);
  transition: all 200ms linear;
  z-index: 9;
}

.progress-wrap.active-progress {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.progress-wrap::after {
  border-style: solid;
  border-width: 0.15em 0.15em 0 0;
  content: '';
  display: inline-block;
  height: 0.75em;
  left: 1.1em;
  position: relative;
  top: -2.05em;
  transform: rotate(-45deg) scale(0.8);
  vertical-align: top;
  width: 0.75em;
  color: var(--primary);
}

.progress-wrap:hover::after {
  //opacity: 0%;
}

.progress-wrap:hover::before {
  //opacity: 100%;
}

.progress-wrap svg path {
  fill: none;
}

.progress-wrap svg.progress-circle path {
  stroke: var(--primary-light-4);
  stroke-width: 4;
  box-sizing: border-box;
  transition: all 200ms linear;
}

@keyframes border-transform {
  0%,
  100% {
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  }

  14% {
    border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
  }

  28% {
    border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
  }

  42% {
    border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
  }

  56% {
    border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%;
  }

  70% {
    border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  }

  84% {
    border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
  }
}

@media only screen and (max-width: 767px) {
  .progress-wrap {
    display: none;
  }
}
</style>
