<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    quantity: number
    active?: boolean
  }>(),
  {
    active: false,
  }
)
</script>

<template>
  <div class="confetti-wrapper" :class="props.active && 'is-active'">
    <div
      v-for="index in props.quantity"
      :key="index"
      :class="`confetti-${index}`"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.confetti-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: none;

  &.is-active {
    display: block;
    z-index: 201;
  }
}

[class|='confetti'] {
  position: absolute;
}

$colors: (#039be5, #ffbf00, #06d6a0);

@for $i from 0 through 150 {
  $w: random(8);
  $l: random(100);
  .confetti-#{$i} {
    width: #{$w}px;
    height: #{$w * 0.4}px;
    background-color: nth($colors, random(3));
    top: -10%;
    left: unquote($l + '%');
    opacity: random() + 0.5;
    transform: rotate(#{random() * 360}deg);
    animation: drop-#{$i}
      unquote(4 + random() + 's')
      unquote(random() + 's')
      infinite;
  }

  @keyframes drop-#{$i} {
    100% {
      top: 110%;
      left: unquote($l + random(15) + '%');
    }
  }
}
</style>
