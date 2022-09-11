<script setup lang="ts"></script>

<template>
  <div class="customers-choice py-6">
    <!-- Feature -->
    <div class="columns is-vcentered side-feature b-columns-half-tablet-p">
      <div class="column is-5 is-offset-1 has-text-centered">
        <img src="/assets/illustrations/demo/demo-1.svg" alt="Benefit image" />
      </div>
      <div class="column is-5">
        <Title tag="h2" :size="4" weight="bold" leading>
          <span>Focused on UI and CSS</span>
        </Title>
        <p class="paragraph is-centered-tablet-portrait">
          Vulk is a template that focuse on usability and development speed.
          You'll find inside tons of ready to use components that you simply
          have to copy and paste to create your layouts. You can as well use the
          available components as a base for you own and start extending them
          easily.
        </p>
      </div>
    </div>

    <!-- Feature -->
    <div class="columns is-vcentered side-feature b-columns-half-tablet-p">
      <div
        class="
          column
          is-5
          has-text-centered
          b-hidden-desktop b-hidden-tablet-p b-hidden-tablet-l
        "
      >
        <img src="/assets/illustrations/demo/demo-2.svg" alt="Benefit image" />
      </div>
      <div class="column is-5 is-offset-1">
        <Title tag="h2" :size="4" weight="bold" leading>
          <span>Fast Development</span>
        </Title>
        <p class="paragraph is-centered-tablet-portrait">
          Vulk ships with a Vite JS development server that will assist you when
          customizing the template. Vite handles project compilation of .vue
          files and stylesheets. The built-in HMR hot reload refreshes the page
          each time you hit the save trigger in your favorite editor.
        </p>
      </div>
      <div class="column is-5 has-text-centered b-hidden-mobile">
        <img src="/assets/illustrations/demo/demo-2.svg" alt="Benefit image" />
      </div>
    </div>

    <!-- Feature -->
    <div class="columns is-vcentered side-feature b-columns-half-tablet-p">
      <div class="column is-5 is-offset-1 has-text-centered">
        <img src="/assets/illustrations/demo/demo-3.svg" alt="Benefit image" />
      </div>
      <div class="column is-5">
        <Title tag="h2" :size="4" weight="bold" leading>
          <span>Extensive Documentation</span>
        </Title>
        <p class="paragraph is-centered-tablet-portrait">
          Vulk's documentation will be a precious ally, as the template has a
          solid codebase, and a lot of files. Read carefully the docs, all you
          need to know for an optimal development experience is there, even if
          you still are a beginner.
        </p>
      </div>
    </div>
  </div>

  <div class="landing-cta-wrapper">
    <div class="cta-title">
      <h3>Exclusively on Envato Market</h3>
      <a
        href="https://buy.cssninja.io/vulk"
        target="_blank"
        class="custom-button"
      >
        <img src="/assets/logos/envato.svg" alt="Envato Logo" />
        <span>Get It Now</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.landing-cta-wrapper {
  padding-bottom: 3rem;

  .cta-title {
    text-align: center;

    h3 {
      font-family: var(--font-main);
      font-weight: 300;
      font-size: 1.5rem;
      color: var(--light-text);
      margin-bottom: 20px;
    }

    .custom-button {
      display: flex;
      align-items: center;
      margin: 10px auto;
      max-width: 200px;
      font-family: var(--font);
      border: 2px solid #d3f4ed;
      border-radius: 100px;
      background: #d3f4ed;
      box-shadow: var(--light-box-shadow);
      transition: all 0.3s;

      img {
        display: block;
        height: 50px;
        width: 50px;
      }

      span {
        display: block;
        font-family: var(--font);
        font-weight: 600;
        font-size: 1rem;
        color: darken(#8edfcf, 18%);
        margin-left: 22px;
        transition: color 0.3s;
      }
    }
  }
}
</style>
