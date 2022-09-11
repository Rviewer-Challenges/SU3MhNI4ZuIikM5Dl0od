<script setup lang="ts"></script>

<template>
  <div class="code-window">
    <div class="window-head">
      <div class="dots">
        <div class="dot bg-danger"></div>
        <div class="dot bg-yellow"></div>
        <div class="dot bg-success"></div>
      </div>
      <div class="lang">index.html</div>
    </div>
    <div class="window-body">
      <div class="code-content">
        <div class="code-content-line">
          <span class="bold mr-2"></span>
          &lt;img src="<span class="text-danger">files.deply.dev/files/Deply-Logo-3.png</span>"&gt;
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.code-window {
  position: relative;
  width: 100%;
  height: 180px;
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

    .dots {
      .dot {
        border-radius: 50%;
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 0.5rem;
      }
    }

    .lang {
      font-family: var(--font);
      font-size: 0.9rem;
      color: var(--title-color);
      margin-left: 1rem;
    }
  }

  .window-body {
    height: calc(180px - 2.75rem);
    display: flex;
    align-items: stretch;

    .code-content {
      height: 100%;
      width: 100%;
      padding: 1rem;
    }

    .code-content-line {
      display: flex;
      align-items: center;
      height: 1.75rem;
      font-size: 0.9rem;
      font-family: monospace;
      color: var(--title-color);

      &.indented-1 {
        margin-left: 1.5rem;
      }

      &.indented-2 {
        margin-left: 3rem;
      }

      .bold {
        font-weight: 600;
      }
    }
  }
}
</style>
