<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    darker?: boolean
  }>(),
  {
    darker: false,
  }
)
</script>

<template>
  <div class="polka-dots" :class="props.darker && 'darker'">
    <span v-for="index in 16" :key="index"></span>
  </div>
</template>

<style lang="scss" scoped>
.polka-dots {
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  &.darker {
    span::after {
      background: var(--light-text-light-15);
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    transition: all 0.25s ease;

    &::after {
      content: '';
      position: relative;
      width: 6px;
      height: 6px;
      background: var(--light-text);
      border-radius: 50%;
      opacity: 0.55;
      transition: all 0.25s ease;
    }
  }
}

.is-dark {
  .polka-dots {
    span::after {
      opacity: 0.2;
    }

    &.darker {
      span::after {
        background: #eef2f5;
      }
    }
  }
}
</style>
