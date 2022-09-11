<script setup lang="ts"></script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="84.5"
    height="107.2"
    viewBox="0 0 84.5 107.2"
  >
    <g id="Group_13" data-name="Group 13" transform="translate(-377.6 -352.1)">
      <path
        id="Path_31"
        data-name="Path 31"
        d="M388.6,459.3l-11-77.4,72.6,18.2Z"
        class="full-triangle"
      />
      <g id="Group_12" data-name="Group 12">
        <path
          id="Path_32"
          data-name="Path 32"
          d="M390.4,353.1l70.2,17.6L401.1,428l-10.7-74.9m-.9-1,11.1,77.4,61.5-59.2-72.6-18.2Z"
          class="outline-triangle"
        />
      </g>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  .full-triangle {
    fill: currentcolor;
  }

  .outline-triangle {
    fill: #211f1c;
  }
}

.is-dark {
  svg {
    .outline-triangle {
      fill: var(--light-text);
    }
  }
}
</style>
