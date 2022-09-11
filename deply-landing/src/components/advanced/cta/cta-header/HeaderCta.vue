<script setup lang="ts"></script>

<template>
  <div class="header-cta">
    <RouterLink to="/" class="cta-left">
      <div class="cta-content max-w-4">
        <h3>Group workshops</h3>
        <p class="paragraph is-inverted-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum
          essent dicta, finem fecimus et ambulandi et disputandi.
        </p>
        <span>Learn More</span>
      </div>
    </RouterLink>
    <RouterLink to="/" class="cta-right">
      <div class="cta-content max-w-4">
        <h3>400,000+ attendees</h3>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum
          essent dicta, finem fecimus et ambulandi et disputandi.
        </p>
        <span>Learn More</span>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="scss">
.header-cta {
  display: flex;

  .cta-left,
  .cta-right {
    padding: 2rem 3rem;
    width: 50%;

    h3 {
      font-family: var(--font-alt);
      font-weight: 600;
      font-size: 1.25rem;
    }

    span {
      font-size: 0.9rem;
      font-weight: 500;
      font-family: var(--font);
    }
  }

  .cta-left {
    display: flex;
    justify-content: flex-end;
    text-align: right;
    background: var(--primary);
    transition: background-color 0.3s;

    h3 {
      color: var(--white-smoke);
    }

    span {
      color: var(--white-smoke);
    }

    &:hover {
      background: var(--primary-dark-6);
    }
  }

  .cta-right {
    display: flex;
    justify-content: flex-start;
    text-align: left;
    background: var(--wrap-bg-color);
    border-bottom: 1px solid var(--wrap-border-color);
    transition: background-color 0.3s;

    h3 {
      color: var(--title-color);
    }

    span {
      color: var(--primary);
    }

    &:hover {
      background: var(--wrap-muted-color);
    }
  }
}

@media only screen and (max-width: 767px) {
  .header-cta {
    flex-wrap: wrap;

    .cta-right,
    .cta-left {
      width: 100%;
      text-align: left;
    }
  }
}
</style>
