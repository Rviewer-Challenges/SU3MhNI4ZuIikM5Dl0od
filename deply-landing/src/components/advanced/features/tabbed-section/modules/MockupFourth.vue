<script setup lang="ts">
const props = defineProps({
  loaded: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="ui-mockup is-chart">
    <div class="chart" :class="[props.loaded && 'loaded']">
      <svg viewBox="0 0 560 260">
        <defs>
          <filter id="dropshadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="0" dy="0" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA slope="0.2" type="linear" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g class="datasets">
          <path
            id="dataset-3"
            class="dataset"
            d="M0,260 C0,260 4,252 7,252 C66,252 90,102 139,102 C188,102 205,135 252,135 C299,135 309,89 330,89 C350,89 366,122 404,122 C442,122 431,98 451,98 C470,98 499,213 560,260 L0,259 Z"
          />
          <path
            id="dataset-2"
            class="dataset"
            d="M0,260 C35,254 63,124 88,124 C114,124 148,163 219,163 C290,163 315,100 359,100 C402,100 520,244 560,259 C560,259 0,259 0,260 Z"
          />
          <path
            id="dataset-1"
            class="dataset"
            d="M0,260 C0,260 22,199 64,199 C105,199 112,144 154,144 C195,144 194,126 216,126 C237,126 263,184 314,184 C365,183 386,128 434,129 C483,130 511,240 560,260 L0,260 Z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root {
  --dot-color: fade-out(white, 0.9);
  --text-color: fade-out(white, 0.7);
}

.chart {
  position: relative;
  width: 380px;
  height: 210px;
  margin: 0 auto;
  background-size: 29px 29px;
  background-position: -11px 11px;
  background-image: repeating-radial-gradient(
    center center,
    var(--dot-color),
    var(--dot-color) 2px,
    transparent 2px,
    transparent 100%
  );

  &::before,
  &::after {
    display: inline-block;
    font-size: 0.875em;
  }

  &::before {
    display: inline-block;
    position: absolute;
    left: -0.5rem;
    top: -1.5rem;
    font-family: var(--font);
    content: '$3k \A $2k \A $1k \A 0';
    white-space: pre;
    height: 100%;
    color: var(--light-text);
    line-height: 4.2;
    text-align: right;
  }

  &::after {
    font-family: var(--font);
    content: 'Last week';
    width: 100%;
    margin-left: 0;
    color: var(--light-text);
    padding-top: 0.5rem;
    display: flex;
    justify-content: flex-end;
  }

  &.loaded {
    .dataset {
      opacity: 1;
      animation: raise 0.5s ease 0.2s forwards;
    }

    #dataset-1 {
      animation-delay: 0.2s;
    }

    #dataset-2 {
      animation-delay: 0.1s;
    }

    #dataset-3 {
      animation-delay: 0s;
    }
  }

  svg {
    position: relative;
    right: -20px;
    bottom: -12px;
    transform: scale(0.95);
  }

  .dataset {
    fill-opacity: 0.8;
    filter: url('#dropshadow');
    transform-origin: bottom;
    transform: scaleY(0.01);
    opacity: 0.5;
  }

  #dataset-1 {
    fill: var(--primary);
  }

  #dataset-2 {
    fill: var(--success);
  }

  #dataset-3 {
    fill: var(--info);
  }
}

@keyframes raise {
  0% {
    transform: scaleY(0.01);
  }

  75% {
    transform: scaleY(0.8);
  }

  100% {
    transform: scaleY(1.2);
  }
}
</style>
