<script setup lang="ts"></script>

<template>
  <div>
    <div class="error-nav">
      <Container>
        <div class="error-nav-inner">
          <div class="right">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </div>
    <div class="error-wrapper">
      <div class="error-wrapper-inner">
        <div class="underlay">
          <span>404</span>
        </div>
        <div class="error-box">
          <div class="error-box-face front">4</div>
          <div class="error-box-face back">0</div>
          <div class="error-box-face right">4</div>
          <div class="error-box-face left">0</div>
          <div class="error-box-face top">0</div>
          <div class="error-box-face bottom">0</div>
        </div>
        <div class="error-box-shadow"></div>
      </div>
      <div class="error-content">
        <Title tag="h2" :size="2" weight="bold" inverted leading>
          <span>Página no encontrada</span>
        </Title>
        <p class="paragraph rem-115 is-inverted-light mx-auto max-w-4 mb-4">
          <slot>
            Oops, parece que algo ha salido mal y no hemos podido encontrar la página. Por favor,
            inténtalo de nuevo más tarde.
          </slot>
        </p>
        <Buttons alignment="centered">
          <Button to="/" :long="3" color="light" outlined bold>Inicio</Button>
          <Button
            :long="3"
            color="light"
            outlined
            bold
            @click.prevent="$router.back()"
            @keydown.space.prevent="() => $router.back()"
          >
            Volver atrás
          </Button>
        </Buttons>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;

  .error-nav-inner {
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;

      .navbar-logo {
        min-height: 40px;
        filter: brightness(0) invert(1);
      }
    }

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}

.error-wrapper {
  position: relative;
  top: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 0;

  .error-wrapper-inner {
    position: relative;
    perspective: 400px;

    .underlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: var(--font);
      font-weight: 900;
      font-size: 25rem;
      color: var(--white-smoke);
      opacity: 0.1;
      z-index: 0;
    }
  }

  .error-box {
    position: relative;
    width: 200px;
    height: 200px;
    font-family: var(--font);
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: 0.3s;
    animation-name: rotateAnimation;
    animation-duration: 4s;
    animation-iteration-count: infinite;

    .error-box-face {
      position: absolute;
      width: 200px;
      height: 200px;
      font-size: 120px;
      line-height: 200px;
      text-align: center;
      color: var(--white);
      border: 1px solid bix#000;

      &.front {
        transform: rotateY(0deg) translateZ(100px);
        background: #20162b;
      }

      &.back {
        transform: rotateY(90deg) translateZ(100px);
        background: darken(#20162b, 5%);
      }

      &.right {
        transform: rotateY(180deg) translateZ(100px);
        background: darken(#20162b, 10%);
      }

      &.left {
        transform: rotateY(-90deg) translateZ(100px);
        background: darken(#20162b, 15%);
      }

      &.top {
        transform: rotateX(90deg) translateZ(100px);
        background: darken(#20162b, 5%);
      }

      &.bottom {
        transform: rotateX(-90deg) translateZ(100px);
        background: darken(#20162b, 20%);
      }
    }
  }

  @keyframes rotateAnimation {
    25% {
      transform: translateZ(-100px) rotateY(-90deg);
    }

    50% {
      transform: translateZ(-100px) rotateY(-180deg);
    }

    75% {
      transform: translateZ(-100px) rotateX(-90deg);
    }

    85% {
      transform: translateZ(-100px) rotateX(-90deg);
    }
  }

  .error-box-shadow {
    position: absolute;
    z-index: -1;
    left: -50px;
    top: calc(100% - 20px);
    width: calc(100% + 100px);
    height: 30px;
    border-radius: 50%;
    background: #000;
    filter: blur(20px);
  }

  .error-content {
    margin-top: 4rem;
    text-align: center;
  }
}

@media only screen and (max-width: 767px) {
  .error-nav {
    .error-nav-inner {
      padding: 0 1rem;
    }
  }

  .error-wrapper {
    :deep(.title) {
      font-size: 2rem;
    }

    .paragraph {
      font-size: 1rem !important;
    }

    .error-wrapper-inner {
      .underlay {
        font-size: 12rem;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .error-nav {
    .error-nav-inner {
      padding: 0 1rem;
    }
  }
}
</style>
