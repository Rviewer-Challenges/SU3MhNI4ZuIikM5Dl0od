<script setup lang="ts"></script>

<template>
  <div class="pb-6">
    <div class="globe-stats">
      <div class="globe-holder">
        <div class="globe-inner">
          <Globe :size="1080" :map-samples="11098.83" />
        </div>
      </div>
      <div class="stats-block">
        <div class="stat-block">
          <div class="block-inner">
            <Title tag="h3" :size="1" weight="bold" narrow>
              <span></span>
              <Counter :number="300" />
              <span>ms</span>
            </Title>
            <p class="paragraph is-upper">tiemp. medio de subida</p>
          </div>
        </div>
        <div class="stat-block">
          <div class="block-inner">
            <Title tag="h3" :size="1" weight="bold" narrow>
              <span></span>
              <Counter :number="99" />
              <span>.9%</span>
            </Title>
            <p class="paragraph is-upper">Disponibilidad</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.globe-stats {
  position: relative;

  .globe-holder {
    height: 450px;
    width: 100%;
    margin-top: -100px;
    overflow: hidden;

    .globe-inner {
      overflow: hidden;
      margin: 0 auto;
      display: grid;
      place-items: center;
      place-content: center;
    }
  }

  .stats-block {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid var(--wrap-border-color);

    .stat-block {
      text-align: center;
      flex: 1 1 0;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 150px;
      border-left: 1px solid var(--wrap-border-color);

      .block-inner {
        p {
          text-transform: uppercase;
        }
      }

      &:last-child {
        border-right: 1px solid var(--wrap-border-color);
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .globe-stats {
    margin-left: -1.5rem;
    margin-right: -1.5rem;

    .stats-block {
      flex-wrap: wrap;

      .stat-block {
        flex: none;
        width: 50%;

        &:first-child,
        &:nth-child(2) {
          border-bottom: 1px solid var(--wrap-border-color);
        }

        &:first-child,
        &:nth-child(3) {
          border-left: none;
        }

        &:nth-child(2),
        &:nth-child(4) {
          border-left: 1px solid var(--wrap-border-color);
          border-right: none;
        }

        :deep(.title) {
          font-size: 2rem;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .globe-stats {
    margin-left: -1.5rem;
    margin-right: -1.5rem;

    .stats-block {
      .stat-block {
        :deep(.title) {
          font-size: 2.5rem;
        }
      }
    }
  }
}
</style>
