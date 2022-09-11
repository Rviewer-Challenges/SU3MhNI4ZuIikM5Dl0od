<script setup lang="ts"></script>

<template>
  <div class="code-window">
    <div class="window-head">
      <div class="bot mr-2">Deply</div>
      <Tag label="logo.png" />
      <p class="paragraph rem-85 ml-2">subido en 310ms</p>
    </div>
    <div class="window-body">
      <div class="body-content">
        <p class="paragraph rem-95 mb-2">
          Hemos subido tu archivo, esta es la URL pública para que puedas acceder a él y el código de eliminación:
        </p>
        <div class="body-content-line">
          <i class="iconify" data-icon="feather:monitor"></i>
          <span class="text">URL:</span>
          <a href="https://files.deply.dev/files/Deply-Logo-3.png" target="_blank">https://files.deply.dev/files/Deply-Logo-3.png</a>
        </div>
        <div class="body-content-line">
          <i class="iconify" data-icon="feather:trash"></i>
          <span class="text">ID de eliminación:</span>
          <a>52f3587b-d820-4a29-af7f-24f94f21178e</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.code-window {
  position: relative;
  width: 100%;
  height: 190px;
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 0.5rem;
  box-shadow: var(--spread-shadow);
  overflow: hidden;

  .window-head {
    display: flex;
    align-items: center;
    height: 2.75rem;
    background: var(--card-bg-color);
    border-bottom: 1px solid var(--card-border-color);
    padding: 0 0.5rem;

    .bot {
      font-family: var(--font);
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--title-color);
      margin-left: 0.5rem;
    }
  }

  .window-body {
    height: calc(190px - 2.75rem);
    display: flex;
    align-items: stretch;

    .body-content {
      height: 100%;
      width: 100%;
      padding: 1rem;
    }

    .body-content-line {
      display: flex;
      align-items: center;
      height: 1.75rem;
      font-size: 0.9rem;
      font-family: var(--font);
      color: var(--title-color);

      .iconify {
        font-size: 1rem;
        color: var(--light-text);
      }

      span {
        &.text {
          font-weight: 600;
          color: var(--title-color);
          padding: 0 0.25rem;
        }
      }

      a {
        color: var(--primary);
      }

      .bold {
        font-weight: 600;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .code-window {
    height: 210px;

    .window-body {
      .body-content-line {
        .iconify,
        span {
          display: none;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .code-window {
    height: 210px;

    .window-head {
      .paragraph {
        font-size: 0.8rem !important;
      }
    }

    .window-body {
      .body-content-line {
        a {
          overflow: hidden;
          max-width: 200px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .iconify,
        span {
          display: none;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .code-window {
    height: 210px;

    .window-head {
      .paragraph {
        font-size: 0.8rem !important;
      }
    }

    .window-body {
      .body-content-line {
        a {
          overflow: hidden;
          max-width: 200px;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .iconify,
        span {
          display: none;
        }
      }
    }
  }
}
</style>
