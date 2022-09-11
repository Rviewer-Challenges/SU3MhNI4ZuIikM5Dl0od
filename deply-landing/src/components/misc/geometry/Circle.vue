<script setup lang="ts"></script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33.83"
    height="44.928"
    viewBox="0 0 33.83 44.928"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-214.172 -157.4)">
      <path
        id="Path_27"
        data-name="Path 27"
        d="M242.2,174.7a16.337,16.337,0,1,1-23.1-.4A16.3,16.3,0,0,1,242.2,174.7Z"
        class="full-circle"
      />
      <g id="Group_8" data-name="Group 8">
        <g id="Group_7" data-name="Group 7">
          <path
            id="Path_28"
            data-name="Path 28"
            d="M231.6,158.2h0a15.191,15.191,0,0,1,11.2,4.8,15.5,15.5,0,0,1-11.2,26.3,15.533,15.533,0,0,1-15.5-15.9,15.474,15.474,0,0,1,4.8-10.9,15.3,15.3,0,0,1,10.7-4.3m0-.8a16.05,16.05,0,0,0-11.3,4.6,16.35,16.35,0,0,0,11.4,28.1,16.05,16.05,0,0,0,11.3-4.6,16.35,16.35,0,0,0-11.4-28.1Z"
            class="outline-circle"
          />
        </g>
      </g>
    </g>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  .full-circle {
    fill: currentcolor;
  }

  .outline-circle {
    fill: #211f1c;
  }
}

.is-dark {
  svg {
    .outline-circle {
      fill: var(--light-text);
    }
  }
}
</style>
