<script setup lang="ts"></script>

<template>
  <div class="pt-6">
    <div class="timeline">
      <!--Timeline item-->
      <div class="timeline-item">
        <div class="item-left">
          <TimelineConversation />
        </div>
        <div class="item-dot"></div>
        <div class="item-right">
          <div class="max-w-4">
            <Title tag="h2" :size="4" weight="bold" leading>
              <span>Arrastra el archivo</span>
            </Title>
            <p class="paragraph">
              Arrastra el archivo, haz clic en el botón de subir y ¡listo!<br>
              ¿Difícil no? Así somos nosotros, sencillez y eficiencia.
            </p>
          </div>
        </div>
      </div>
      <!--Timeline item-->
      <div class="timeline-item">
        <div class="item-left">
          <TimelinePreviewWindow />
        </div>
        <div class="item-dot"></div>
        <div class="item-right">
          <div class="max-w-4">
            <Title tag="h2" :size="4" weight="bold" leading>
              <span>Consigue la URL pública</span>
            </Title>
            <p class="paragraph">
              En cuestión de segundos, subimos tu archivo y lo preparamos para
              que sea accesible desde cualquier lugar.
            </p>
          </div>
        </div>
      </div>
      <!--Timeline item-->
      <div class="timeline-item">
        <div class="item-left">
          <TimelineCodeWindow />
        </div>
        <div class="item-dot"></div>
        <div class="item-right">
          <div class="max-w-4">
            <Title tag="h2" :size="4" weight="bold" leading>
              <span>Pega la URL en tu código</span>
            </Title>
            <p class="paragraph">
              Ctrl + C y Ctrl + V, nada más que decir.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timeline {
  .timeline-item {
    position: relative;
    display: flex;
    align-items: center;

    .item-left {
      position: relative;
      flex-grow: 2;
      padding: 0 3rem;
      width: calc(50% - 1px);
      z-index: 1;
    }

    .item-dot {
      position: relative;
      height: 10px;
      width: 10px;
      min-width: 10px;
      max-width: 10px;
      border-radius: 50%;
      border: 2px solid var(--wrap-border-color);
      background: var(--section-bg-color);
      z-index: 1;
    }

    .item-right {
      position: relative;
      flex-grow: 2;
      padding: 0 3rem;
      width: calc(50% - 1px);
      z-index: 1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 1px;
      margin: 0 auto;
      border-right: 1px solid var(--wrap-border-color);
      z-index: 0;
    }

    &:not(:last-child) {
      padding-bottom: 10rem;
    }

    &:last-child {
      padding-bottom: 5rem;
    }
  }
}

@media only screen and (max-width: 767px) {
  .timeline {
    .timeline-item {
      flex-direction: column;

      .item-left,
      .item-right,
      .item-dot {
        width: 100%;
      }

      .item-left {
        padding: 1rem 0;
        background: var(--section-bg-color);
      }

      .item-right {
        padding: 1rem 0;
        background: var(--section-bg-color);
        text-align: center;
      }

      .item-dot {
        margin: 5rem 0;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .timeline {
    .timeline-item {
      .item-left {
        padding-left: 0;
      }

      .item-right {
        padding-right: 0;
      }
    }
  }
}
</style>
