<script setup lang="ts">
import { ref } from 'vue'
import type { Nft } from '/@src/types'

export interface NftDetailsProps {
  nft: Nft
}
const props = defineProps<NftDetailsProps>()

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const currentSeconds = ref(0)
const currentMinutes = ref(0)
const currentHours = ref(0)
const currentDays = ref(0)

//This commented block is used to get the auction end date from props
//const event = `${props.content.auctionEnd} 00:00:00`
//const countDown = new Date(event).getTime()

//This generates a random countdown adding a random number of days to a now date
const randomDays = Math.floor(Math.random() * 11)
const countDown = new Date(
  Date.now() + randomDays * (3600 * 1000 * 24)
).getTime()

const x = setInterval(() => {
  const now = new Date().getTime()
  const distance = countDown - now

  currentDays.value = Math.floor(distance / day)
  currentHours.value = Math.floor((distance % day) / hour)
  currentMinutes.value = Math.floor((distance % hour) / minute)
  currentSeconds.value = Math.floor((distance % minute) / second)

  //do something later when date is reached
  if (distance < 0) {
    //do something later when date is reached

    clearInterval(x)
  }
  //seconds
}, 0)
</script>

<template>
  <div class="nft-details-wrapper">
    <div class="nft-details-inner">
      <div class="columns">
        <div class="column is-6">
          <div class="nft-preview-holder">
            <img :src="props.nft.preview" :alt="props.nft.name" />
          </div>
        </div>
        <div class="column is-6">
          <div class="nft-info">
            <div class="nft-info-head">
              <Title tag="h2" :size="4" weight="bold" narrow>
                <span>{{ props.nft.name }}</span>
              </Title>
              <div class="actions">
                <RouterLink to="/subpages/nfts/nft-list" class="action">
                  <i-ic-baseline-arrow-back />
                </RouterLink>
                <button class="action">
                  <i-ph-heart-duotone />
                </button>
              </div>
            </div>
            <div class="nft-info-price">
              <span class="eth-price text-gradient">
                {{ props.nft.initialBid.eth }} ETH
              </span>
              <span class="paragraph px-1">·</span>
              <span class="dollar-price">
                (${{ props.nft.initialBid.dollar }})
              </span>
              <span class="paragraph px-1">·</span>
              <span class="collection-rank">
                1 of {{ props.nft.collection.items }}
              </span>
            </div>
            <div class="nft-info-description">
              <p class="paragraph rem-95">{{ props.nft.description }}</p>
            </div>
            <div class="nft-info-links">
              <RouterLink to="/" class="nft-info-link">
                <span>Creator</span>
                <div class="nft-info-link-inner">
                  <AvatarSimple :picture="props.nft.seller.picture" />
                  <span>{{ props.nft.seller.name }}</span>
                </div>
              </RouterLink>
              <RouterLink to="/" class="nft-info-link">
                <span>Collection</span>
                <div class="nft-info-link-inner">
                  <AvatarSimple :picture="props.nft.collection.picture" />
                  <span>{{ props.nft.collection.name }}</span>
                </div>
              </RouterLink>
            </div>
            <div class="nft-info-tabs">
              <div class="nft-info-tabs-inner">
                <Tabs
                  selected="bids"
                  :tabs="[
                    { label: 'Bids', value: 'bids' },
                    { label: 'Comments', value: 'comments' },
                  ]"
                >
                  <template #tab="{ activeValue }">
                    <div v-if="activeValue === 'bids'">
                      <div class="active-bids">
                        <div
                          v-for="(bider, index) in props.nft.biders"
                          :key="index"
                          class="active-bid"
                        >
                          <AvatarSimple :picture="bider.picture" />
                          <div class="meta">
                            <span>Bid placed for {{ bider.bid }} ETH</span>
                            <span>By {{ bider.name }} · {{ bider.time }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="current-bid">
                        <div class="highest-bid">
                          <span class="small-label">Highest bid</span>
                          <span class="highest-bid-value">
                            <span class="highest-bid-eth text-gradient">
                              {{ props.nft.currentBid.eth }} ETH
                            </span>
                            <span class="highest-bid-dollar">
                              (${{ props.nft.currentBid.dollar }})
                            </span>
                          </span>
                        </div>
                        <div class="bid-countdown">
                          <span class="small-label">Auction ends in:</span>
                          <div class="auction-timer">
                            <div class="timer-block">
                              <span>{{ currentDays }}</span>
                              <span>days</span>
                            </div>
                            <div class="timer-block is-separator">:</div>
                            <div class="timer-block">
                              <span>{{ currentHours }}</span>
                              <span>hours</span>
                            </div>
                            <div class="timer-block is-separator">:</div>
                            <div class="timer-block">
                              <span>{{ currentMinutes }}</span>
                              <span>min</span>
                            </div>
                            <div class="timer-block is-separator">:</div>
                            <div class="timer-block">
                              <span>{{ currentSeconds }}</span>
                              <span>sec</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-else-if="activeValue === 'comments'">
                      <div v-if="props.nft.comments">
                        <div v-if="props.nft.comments.length > 0"></div>
                        <div v-else>
                          <div class="py-4">
                            <PlaceholderSection
                              title="No Comments"
                              subtitle="Looks like there are no comments on this item for now."
                            >
                              <template #image>
                                <i-ph-chat-circle-dots-duotone
                                  class="text-primary rem-175"
                                />
                              </template>
                            </PlaceholderSection>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </Tabs>
              </div>
            </div>
            <div class="nft-info-action">
              <Buttons>
                <Button color="primary" raised bold>Pre-Optin</Button>
                <Button>Place a Bid</Button>
              </Buttons>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nft-details-wrapper {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.nft-preview-holder {
  position: sticky;
  top: 110px;

  img {
    display: block;
    width: 100%;
    border-radius: 0.85rem;
  }
}

.nft-info {
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  border-radius: 1rem;
  max-width: 480px;
  margin-left: auto;
  transition: box-shadow 0.3s;

  .nft-info-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.75rem 1.75rem 0;

    .action {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      background: var(--wrap-bg-color);
      border: 1px solid var(--wrap-border-color);
      height: 36px;
      width: 36px;
      border-radius: 50%;
      margin-left: 0.5rem;
      color: var(--primary);
      cursor: pointer;
      transition: box-shadow 0.3s;

      &:hover {
        box-shadow: var(--spread-shadow);
      }
    }
  }

  .nft-info-price {
    padding: 1rem 1.75rem;
    font-family: var(--font);

    .eth-price {
      font-size: 1.1rem;
      font-weight: 600;
    }

    .dollar-price,
    .collection-rank {
      font-size: 0.9rem;
      color: var(--light-text);
    }
  }

  .nft-info-description {
    padding: 0 1.75rem;
  }

  .nft-info-links {
    display: flex;
    align-items: center;
    padding: 2rem 1.75rem;

    .nft-info-link {
      flex: 1 1 0;

      > span {
        font-family: var(--font);
        font-size: 0.85rem;
        color: var(--light-text);
      }

      .nft-info-link-inner {
        display: flex;
        align-items: center;

        > span {
          color: var(--title-color);
          font-weight: 500;
          font-size: 0.9rem;
          font-family: var(--font);
          margin-left: 0.5rem;
        }
      }
    }
  }

  .nft-info-tabs {
    padding: 0 1.75rem 1.75rem;

    .nft-info-tabs-inner {
      background: var(--wrap-muted-color);
      border-radius: 0.85rem;
      padding: 1rem;

      :deep(.tabs) {
        font-size: 0.9rem;
      }

      .active-bids {
        .active-bid {
          display: flex;
          align-items: center;

          .meta {
            margin-left: 0.5rem;

            span {
              display: block;
              font-family: var(--font);

              &:first-child {
                font-size: 0.9rem;
                color: var(--title-color);
                font-weight: 500;
              }

              &:nth-child(2) {
                font-size: 0.8rem;
                color: var(--light-text);
              }
            }
          }

          &:not(:last-child) {
            margin-bottom: 0.75rem;
          }
        }
      }

      .current-bid {
        display: flex;
        background: var(--card-bg-color);
        border-radius: 0.75rem;
        margin-top: 1.5rem;
        font-family: var(--font);
        box-shadow: var(--light-box-shadow);

        .small-label {
          font-size: 0.85rem;
          color: var(--light-text);
        }

        .highest-bid {
          flex: 1 1 0;
          border-right: 1px solid var(--card-border-color);
          padding: 1rem;
          font-family: var(--font);

          .highest-bid-value {
            display: block;

            .highest-bid-eth,
            .highest-bid-dollar {
              display: block;
            }

            .highest-bid-eth {
              font-weight: 700;
              font-size: 1.25rem;
            }

            .highest-bid-dollar {
              color: var(--medium-text);
              font-size: 0.9rem;
            }
          }
        }

        .bid-countdown {
          flex: 1 1 0;
          padding: 1rem;

          .auction-timer {
            display: flex;

            .timer-block {
              text-align: center;

              span {
                display: block;
                font-family: var(--font);

                &:first-child {
                  font-size: 1.1rem;
                  font-weight: 500;
                  color: var(--title-color);
                }

                &:nth-child(2) {
                  font-size: 0.7rem;
                  color: var(--light-text);
                }
              }

              &:not(.is-separator) {
                flex: 1 1 0;
              }
            }
          }
        }
      }
    }
  }

  .nft-info-action {
    padding: 0 1.75rem 1.75rem;

    :deep(.button) {
      flex: 1 1 0;
    }
  }

  &:hover {
    box-shadow: var(--spread-shadow);
  }
}

@media (max-width: 767px) {
  .nft-info {
    .nft-info-head {
      flex-direction: column-reverse;
      align-items: flex-start;
      padding: 1.25rem 1.25rem 0;

      .actions {
        margin-left: auto;
      }

      .action {
        margin: 0 0.25rem 0.75rem;
      }
    }

    .nft-info-price,
    .nft-info-description,
    .nft-info-links,
    .nft-info-tabs,
    .nft-info-action {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }

    .nft-info-tabs {
      .nft-info-tabs-inner .current-bid {
        flex-direction: column;

        .highest-bid {
          border-right: none;
          border-bottom: 1px solid var(--card-border-color);
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .nft-info {
    width: 100%;
    max-width: 100%;
    margin: 0;
  }

  .nft-preview-holder {
    img {
      width: 100%;
    }
  }
}
</style>
