<script setup lang="ts"></script>

<template>
  <div class="auth-wrapper columns is-gapless">
    <!-- Form section -->
    <div class="form-column column is-5">
      <div class="hero is-fullheight">
        <div class="hero-heading">
          <div class="auth-logo">
            <RouterLink to="/" class="header-item">
              <img class="top-logo" src="/assets/logo/logo.png" alt="logo" />
            </RouterLink>
          </div>
          <div class="dark-mode">
            <ThemeToggle />
          </div>
        </div>
        <div class="hero-body">
          <div class="container">
            <div class="columns">
              <div class="column is-12">
                <div class="auth-content">
                  <Title tag="h2" :size="3" weight="thin" narrow>
                    Welcome Back
                  </Title>
                  <p>Please sign in to your account</p>
                  <RouterLink to="/auth/signup-2">
                    I do not have an account yet
                  </RouterLink>
                </div>
                <div class="auth-form-wrapper">
                  <LoginForm />
                  <div class="forgot-link has-text-centered">
                    <RouterLink to="/auth/signup-2">
                      Forgot Password?
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Image section (hidden on mobile) -->
    <div
      class="
        column
        login-column
        is-7 is-hidden-mobile
        h-hidden-tablet-p
        hero-banner
      "
    >
      <div
        v-background="{
          src: 'data:image/gif;base64,replace_with_your_image',
          placeholder: 'https://dummyimage.com/1920x1080/ededed/000000',
        }"
        class="hero login-hero is-fullheight is-app-grey"
      >
        <div class="hero-body"></div>
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
      top: 38px;
      right: 20px;
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
    background-size: cover;
    background-repeat: no-repeat;

    .hero-body {
      .login {
        padding: 10px 0;
      }
    }
  }

  .auth-content {
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
    margin-top: -40px;
    margin-bottom: 40px;

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

  .auth-form-wrapper {
    max-width: 320px;
    width: 100%;
    margin: 0 auto;
  }

  .forgot-link {
    margin-top: 10px;

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

/* stylelint-disable */

//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .login-column {
    display: none;
  }

  .form-column {
    width: 100% !important;
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .login-column {
    display: none;
  }

  .form-column {
    width: 100% !important;
  }
}

/* stylelint-enable */
</style>
