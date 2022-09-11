<script setup lang="ts"></script>

<template>
  <div>
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
    <div class="auth-wrapper">
      <Container>
        <div class="card-wrapper">
          <div class="columns is-vcentered">
            <div class="column is-7 is-hidden-mobile">
              <DarkImage
                src="/assets/illustrations/hero/signup-hero.svg"
                src-dark="/assets/illustrations/hero/signup-hero.svg"
                alt="Signup hero
            image"
              />
            </div>
            <div class="column is-5">
              <div class="form-card">
                <div class="auth-head">
                  <Title tag="h2" :size="3" weight="thin" narrow>
                    Create Account
                  </Title>
                  <RouterLink to="/auth/login-3" class="rem-90">
                    I already have an account
                  </RouterLink>
                </div>
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--wrap-muted-color);

  .card-wrapper {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 0.9rem;
    margin: 2rem auto 0;
  }

  .form-card {
    padding: 3.25rem;
    max-width: 400px;
    border-left: 1px solid var(--card-border-color);
    margin: 0 auto;

    .auth-head {
      margin-bottom: 1.25rem;
      text-align: center;

      a,
      p {
        font-family: var(--font);
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
}

@media only screen and (max-width: 767px) {
  .auth-wrapper {
    flex-direction: column;

    .card-wrapper {
      margin-top: 8rem;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .auth-wrapper {
    flex-direction: column;

    .card-wrapper {
      margin-top: 8rem;
    }
  }
}

/* stylelint-disable */

//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .auth-wrapper {
    flex-direction: column;

    .is-hidden-mobile {
      display: none !important;
    }

    .card-wrapper {
      margin-top: 8rem;
    }

    .columns {
      display: block;

      .column {
        width: 100%;
        margin: 0 !important;
      }
    }
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .auth-wrapper {
    flex-direction: column;

    .is-hidden-mobile {
      display: none !important;
    }

    .card-wrapper {
      margin-top: 8rem;
    }

    .columns {
      display: block;

      .column {
        width: 100%;
        margin: 0 !important;
      }
    }
  }
}

/* stylelint-enable */
</style>
