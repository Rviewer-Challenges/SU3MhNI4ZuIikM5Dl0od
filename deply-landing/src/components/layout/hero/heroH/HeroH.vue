<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'
</script>

<template>
  <Hero color="grey" class="cards-hero" size="fullheight">
    <template #body>
      <div class="columns is-vcentered">
        <div class="column is-5">
          <div class="hero-caption">
            <Title tag="h1" :size="2" weight="bold">
              Try team meetings like you never did before.
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              classes="b-centered-tablet-p text-medium"
            >
              This is the place where teams gather to build collaborative
              meeting agendas, record decisions, and task assignments.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button color="primary" :long="2" raised bold>Free Trial</Button>
              <Button elevated bold :long="2">Learn More</Button>
            </div>
          </div>
        </div>
        <div class="column is-6 is-offset-1">
          <div class="hero-composition">
            <div class="image-wrap">
              <img
                class="curly-image"
                src="data:image/gif;base64,replace_with_your_image"
                alt="Hero image"
                @error.once="
                  (event) => viaPlaceholderErrorHandler(event, '800x1041')
                "
              />

              <!--Floating box-->
              <div class="floating-box floating-box-1">
                <div class="floating-box-content">
                  <div class="icon-header">
                    <div class="pastel-icon">
                      <IconBox color="success">
                        <i class="iconify" data-icon="uiw:safety"></i>
                      </IconBox>
                    </div>
                    <span class="header-text">Security</span>
                    <div class="header-stat is-positive">
                      <span>+12.4%</span>
                    </div>
                  </div>
                  <div class="inner-text-content">
                    <p>Communications security has significantly improved.</p>
                  </div>
                </div>
              </div>
              <!--Floating box-->
              <div class="floating-box floating-box-2">
                <div class="floating-box-content">
                  <div class="icon-block">
                    <div class="pastel-icon">
                      <IconBox size="medium" color="info">
                        <i class="iconify" data-icon="bi:cash-coin"></i>
                      </IconBox>
                    </div>
                    <div class="block-text">
                      <span class="block-title">$4,529</span>
                      <span class="block-subtitle">Saved over 6 months</span>
                    </div>
                  </div>
                </div>
              </div>
              <!--Floating avatar-->
              <div class="floating-avatar floating-avatar-1">
                <AvatarSimple
                  picture="data:image/gif;base64,replace_with_your_image"
                  size="large"
                />
              </div>
              <div class="floating-avatar floating-avatar-2">
                <AvatarSimple
                  picture="data:image/gif;base64,replace_with_your_image"
                  size="medium"
                />
              </div>
              <div class="floating-avatar floating-avatar-3">
                <AvatarSimple
                  picture="data:image/gif;base64,replace_with_your_image"
                  size="small"
                />
              </div>
              <div class="floating-avatar floating-avatar-4">
                <AvatarSimple
                  picture="data:image/gif;base64,replace_with_your_image"
                  size="medium"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
.cards-hero {
  .hero-composition {
    position: relative;

    .image-wrap {
      position: relative;
      margin: 0 auto;
      max-width: 420px;

      .curly-image {
        max-height: 540px;
        border-radius: 0 5rem;
      }
    }

    .floating-box {
      position: absolute;
      background: var(--card-bg-color);
      padding: 0.85rem;
      border: 1px solid var(--card-border-color);
      border-radius: 1rem;
      box-shadow: var(--light-box-shadow);
      transition: background-color 0.3s, border-color 0.3s;

      &.floating-box-1 {
        bottom: 4rem;
        right: -4rem;
        max-width: 240px;
        min-width: 240px;
      }

      &.floating-box-2 {
        top: 4rem;
        left: -6rem;
        max-width: 180px;
        min-width: 180px;
      }

      .floating-box-content {
        width: 100%;

        .pastel-icon {
          max-width: 50px;
        }

        .icon-block {
          .pastel-icon {
            margin: 1rem auto;
          }

          .block-text {
            text-align: center;

            .block-title {
              display: block;
              font-family: var(--font);
              font-weight: 700;
              font-size: 1.25rem;
              line-height: 1;
              color: var(--title-color);
            }

            .block-subtitle {
              display: block;
              font-family: var(--font);
              font-size: 0.85rem;
              color: var(--medium-text);
              margin-bottom: 0.75rem;
            }
          }
        }

        .icon-header {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          width: 100%;

          .header-text {
            display: block;
            font-weight: 700;
            font-family: var(--font-main);
            color: var(--title-color);
            margin-left: 0.75rem;
          }

          .header-stat {
            margin-left: auto;
            margin-right: 0.5rem;
            font-family: var(--font);
            font-weight: 600;
            font-size: 0.8rem;

            &.is-positive {
              color: var(--success);
            }

            &.is-negative {
              color: var(--danger);
            }
          }
        }

        .inner-text-content {
          font-family: var(--font);
          font-size: 0.85rem;
          color: var(--medium-text);
          text-align: left;
        }
      }
    }

    .floating-avatar {
      position: absolute;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      box-shadow: var(--light-box-shadow);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      transition: background-color 0.3s, border-color 0.3s;

      &.floating-avatar-1 {
        top: 0;
        right: -80px;
        height: 76px;
        width: 76px;
      }

      &.floating-avatar-2 {
        top: 140px;
        right: -140px;
        height: 60px;
        width: 60px;
      }

      &.floating-avatar-3 {
        top: 90px;
        right: -20px;
        height: 36px;
        width: 36px;
      }

      &.floating-avatar-4 {
        bottom: 140px;
        left: -30px;
        height: 60px;
        width: 60px;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .cards-hero {
    .hero-caption {
      padding-top: 3rem;
      text-align: center;
    }

    .buttons {
      justify-content: center;
    }

    :deep(.title) {
      &.is-2 {
        font-size: 2rem;
      }
    }

    .hero-composition {
      .floating-box {
        transform: scale(0.8);

        &.floating-box-2 {
          top: 2rem;
          left: -5rem;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .cards-hero {
    .hero-caption {
      text-align: center;
      max-width: 560px;
      margin: 0 auto;
    }

    .buttons {
      justify-content: center;
    }
  }
}
</style>
