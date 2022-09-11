<script setup lang="ts"></script>

<template>
  <div class="auth-wrapper is-single">
    <div class="auth-nav">
      <div class="left"></div>
      <div class="center">
        <RouterLink to="/" class="header-item">
          <img src="/assets/logo/logo.png" alt="logo" />
        </RouterLink>
      </div>
      <div class="right">
        <ThemeToggle />
      </div>
    </div>

    <div class="single-form-wrap">
      <div class="inner-wrap">
        <div class="auth-head">
          <Title tag="h2" :size="3" weight="thin" narrow>Welcome Back.</Title>
          <p>Please sign in to your account</p>
          <RouterLink to="/auth/signup-1">
            I do not have an account yet
          </RouterLink>
        </div>

        <div class="form-card">
          <LoginForm />
        </div>

        <div class="forgot-link has-text-centered">
          <RouterLink to="/auth/signup-1">Forgot Password?</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth-nav {
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  .left,
  .right {
    display: flex;
    align-items: center;
    width: 20%;
  }

  .right {
    justify-content: flex-end;

    .dark-mode {
      transform: scale(0.7);
    }
  }

  .center {
    flex-grow: 2;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        width: 100%;
        max-width: 40px;
      }
    }
  }
}

.auth-wrapper {
  overflow: hidden !important;
  width: 100%;
  padding: 0;
  margin: 0;

  &.is-gapless:not(:last-child) {
    margin-bottom: 0 !important;
  }

  &.is-single {
    background: var(--wrap-muted-color);
    min-height: 100vh;
  }

  .hero-banner {
    background: var(--wrap-muted-color);
  }

  .hero-heading {
    position: relative;
    max-width: 360px;
    width: 100%;
    margin: 0 auto;
    padding: 1.5rem 0 0;

    .dark-mode {
      position: absolute;
      top: 24px;
      right: 24px;
      transform: scale(0.6);
      z-index: 2;
    }

    .auth-logo {
      display: flex;
      justify-content: center;

      .top-logo {
        height: 42px;
      }
    }
  }

  .hero {
    &.is-white {
      background: var(--hero-bg-color);
    }

    .hero-body {
      .login {
        padding: 10px 0;
      }

      .auth-content {
        max-width: 320px;
        width: 100%;
        margin: 0 auto;
        margin-top: -40px;
        margin-bottom: 40px;

        h2 {
          font-size: 2rem;
          font-family: var(--font);
          line-height: 1;
        }

        p {
          font-size: 1rem;
          margin-bottom: 8px;
          color: var(--medium-text);
        }

        a {
          font-size: 0.9rem;
          font-family: var(--font-alt);
          font-weight: 500;
          color: var(--primary);
        }
      }

      .auth-form-wrapper {
        max-width: 320px;
        width: 100%;
        margin: 0 auto;
      }
    }
  }

  .forgot-link {
    margin-top: 0.75rem;

    a {
      font-family: var(--font-alt);
      font-size: 0.9rem;
      color: var(--light-text);
      transition: color 0.3s;

      &:hover {
        color: var(--primary);
      }
    }
  }

  .setting-item {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }

  .h-button {
    min-height: 44px;
  }

  .single-form-wrap {
    min-height: 690px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    .inner-wrap {
      width: 100%;
      max-width: 400px;
      margin: 2.75rem auto 0;

      .auth-head {
        max-width: 320px;
        width: 100%;
        margin: 0 auto;
        margin-bottom: 1.5rem;
        text-align: center;

        p {
          font-size: 1rem;
          margin-bottom: 8px;
          color: var(--medium-text);
        }

        a {
          font-size: 0.8rem;
          font-family: var(--font-alt);
          font-weight: 500;
          color: var(--primary);
        }
      }

      .form-card {
        background: var(--card-bg-color);
        border: 1px solid var(--card-border-color);
        border-radius: 0.9rem;
        padding: 3.25rem;
        margin-bottom: 1rem;
      }
    }
  }

  .signup-image-wrap {
    width: 100%;

    img {
      display: block;
      max-height: 610px;
      margin: 0 auto;
    }
  }
}
</style>
