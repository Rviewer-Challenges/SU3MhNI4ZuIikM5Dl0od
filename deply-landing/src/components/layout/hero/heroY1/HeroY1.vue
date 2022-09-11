<script setup lang="ts">
import { customerLogos } from '/@src/data/pages/logos'
import { nftAvatars } from '/@src/data/pages/nft'
</script>

<template>
  <Hero
    class="has-top-bg is-right"
    alignment="center"
    size="fullheight"
    color="grey"
    shape="/assets/shapes/hero-shape.svg"
    shape-orientation="right"
  >
    <template #body>
      <div class="columns is-vcentered mt-12">
        <!--Hero Content-->
        <div class="column is-relative">
          <div class="mx-auto max-w-6 mb-4">
            <p
              class="paragraph is-uppercase rem-100 weight-6 text-primary mb-2"
            >
              Explore & Collect
            </p>
            <Title tag="h1" :size="1" weight="bold">
              <span>
                Discover, Collect and Manage your
                <span class="text-primary">NFT</span>
                Collections.
              </span>
            </Title>
            <Subtitle
              tag="p"
              :size="5"
              weight="thin"
              class="mx-auto max-w-6 b-centered-tablet-p pt-2"
            >
              Get started with the easiest and most secure platform to collect,
              buy, sell NFTs and digital art at a professional level.
            </Subtitle>
            <!--Buttons-->
            <div class="buttons is-relative z-1">
              <Button color="primary" :long="2" raised bold>Explore</Button>
              <Button
                elevated
                bold
                :long="2"
                icon-left="teenyicons:wallet-alt-outline"
              >
                Connect
              </Button>
            </div>
          </div>

          <!--Hero Cards-->
          <div class="hero-composition-container">
            <div class="columns b-columns-third-tablet-p">
              <div class="column is-3">
                <!--NFT card-->
                <div class="nft-card">
                  <DarkImage
                    src="data:image/gif;base64,replace_with_your_image"
                    alt="NFT image"
                    width="600"
                    height="510"
                  />
                  <div class="card-head">
                    <AvatarSimple picture="/assets/nft/avatars/reaper.svg" />
                    <Title tag="h3" :size="6" weight="semi">
                      The infected dog
                    </Title>
                  </div>
                  <div class="card-foot">
                    <div class="price">
                      <span>0.85 ETH</span>
                    </div>
                    <div class="likes">
                      <i-bi-heart-fill class="rem-80 text-danger" />
                      <span>61K Likes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-3">
                <div class="panel-card authors-card">
                  <Title tag="h3" :size="5" weight="bold">
                    Top Authors
                    <span>🎉</span>
                  </Title>
                  <AvatarGroup
                    size="medium"
                    :avatars="nftAvatars"
                    :limit="5"
                    compact
                    counter
                  />
                </div>
                <!--NFT card-->
                <div class="nft-card">
                  <DarkImage
                    src="data:image/gif;base64,replace_with_your_image"
                    alt="NFT image"
                    width="600"
                    height="510"
                  />
                  <div class="card-head">
                    <AvatarSimple picture="/assets/nft/avatars/cat.svg" />
                    <Title tag="h3" :size="6" weight="semi">
                      The urban eagle
                    </Title>
                  </div>
                  <div class="card-foot">
                    <div class="price">
                      <span>0.55 ETH</span>
                    </div>
                    <div class="likes">
                      <i-bi-heart-fill class="rem-80 text-danger" />
                      <span>23K Likes</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-3">
                <!--NFT card-->
                <div class="nft-card pushed">
                  <DarkImage
                    src="data:image/gif;base64,replace_with_your_image"
                    alt="NFT image"
                    width="600"
                    height="510"
                  />
                  <div class="card-head">
                    <AvatarSimple picture="/assets/nft/avatars/chomp.svg" />
                    <Title tag="h3" :size="6" weight="semi">
                      The king skull
                    </Title>
                  </div>
                  <div class="card-foot">
                    <div class="price">
                      <span>0.65 ETH</span>
                    </div>
                    <div class="likes">
                      <i-bi-heart-fill class="rem-80 text-danger" />
                      <span>31K Likes</span>
                    </div>
                  </div>
                </div>
                <!--Panel Card-->
                <div class="panel-card popular-card">
                  <AvatarSimple
                    picture="/assets/nft/avatars/egg.svg"
                    size="medium"
                  />
                  <div class="meta">
                    <p class="paragraph is-uppercase rem-80 weight-5">
                      Popular
                    </p>
                    <h3>Author of the week</h3>
                  </div>
                </div>
              </div>
              <div class="column is-3">
                <!--NFT card-->
                <div class="nft-card">
                  <DarkImage
                    src="data:image/gif;base64,replace_with_your_image"
                    alt="NFT image"
                    width="600"
                    height="510"
                  />
                  <div class="card-head">
                    <AvatarSimple picture="/assets/nft/avatars/robot.svg" />
                    <Title tag="h3" :size="6" weight="semi">
                      The cosmic frog
                    </Title>
                  </div>
                  <div class="card-foot">
                    <div class="price">
                      <span>0.95 ETH</span>
                    </div>
                    <div class="likes">
                      <i-bi-heart-fill class="rem-80 text-danger" />
                      <span>59K Likes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="mx-auto max-w-8">
        <p class="paragraph rem-100 text-light has-text-centered">
          Helping creators work faster at
        </p>
        <div class="tabs is-centered pb-6">
          <HeroClients :logos="customerLogos" />
        </div>
      </div>
    </template>
  </Hero>
</template>

<style lang="scss" scoped>
:deep(.hero) {
  overflow: hidden !important;
}

:deep(.hero-body) {
  padding-bottom: 2rem !important;
}

:deep(.title) {
  &.is-1 {
    font-size: 2.5rem;
  }
}

.hero-composition-container {
  position: relative;
  margin-top: 5rem;
  text-align: left;

  .panel-card {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1.25rem;
    padding: 1.5rem;
    box-shadow: var(--spread-shadow);

    &.authors-card {
      max-width: 280px;
      margin-left: auto;
      margin-bottom: 1rem;
      margin-top: -3rem;
    }

    &.popular-card {
      display: flex;
      align-items: center;
      max-width: 280px;
      margin-right: auto;

      .meta {
        margin-left: 0.5rem;

        h3 {
          font-family: var(--font-alt);
          font-weight: 600;
          color: var(--title-color);
        }
      }
    }
  }

  .nft-card {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-radius: 1.25rem;
    padding: 0.75rem;
    box-shadow: var(--spread-shadow);

    > img {
      display: block;
      border-radius: 1rem;
      margin-bottom: 0.75rem;
    }

    .card-head {
      display: flex;
      align-items: center;
      padding: 0 0.25rem;

      :deep(.avatar) {
        margin-right: 0.5rem;
      }
    }

    .card-foot {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0.25rem 0.5rem;

      .price,
      .likes {
        display: flex;
        align-items: center;

        svg {
          vertical-align: middle;
          margin-right: 0.25rem;
        }

        span {
          font-size: 0.95rem;
          font-family: var(--font-alt);
          font-weight: 600;
          color: var(--title-color);
        }
      }
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  .pulled {
    margin-top: -3rem;
  }

  .pushed {
    margin-top: 3rem;
  }
}
@media only screen and (max-width: 767px) {
  .hero-composition-container {
    margin-top: 2rem;

    .columns {
      .column {
        &:nth-child(2) {
          .nft-card {
            display: none;
          }

          .panel-card {
            position: relative;
            top: -2rem;
            right: -5rem;
          }
        }

        &:nth-child(3),
        &:nth-child(4) {
          display: none;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .hero-composition-container {
    .columns {
      .column:nth-child(4) {
        display: none;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .hero-composition-container {
    .panel-card {
      padding: 1.25rem;

      :deep(.title) {
        font-size: 1.1rem;
      }

      :deep(.avatar-group) {
        .avatar,
        .avatar-image {
          height: 42px;
          width: 42px;
          min-width: 42px;
        }
      }

      > :deep(.avatar) {
        height: 36px;
        width: 36px;
        min-width: 36px;

        .avatar-image {
          height: 36px;
          width: 36px;
          min-width: 36px;
        }
      }

      .meta h3 {
        font-size: 0.95rem;
      }
    }
  }
}

/* stylelint-disable */

//IPad Air
@media only screen and (min-device-width: 820px) and (max-device-height: 1180px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      .hero-composition-container .columns {
        display: flex !important;

        .column {
          width: initial !important;
          margin: 0 !important;
        }
      }
    }
  }
}

//IPad pro
@media only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait) {
  .hero {
    &.is-fullheight {
      .hero-composition-container .columns {
        display: flex !important;

        .column {
          width: initial !important;
          margin: 0 !important;
        }
      }
    }
  }
}

/* stylelint-enable */
</style>
