<script setup lang="ts">
// import MarqueeText from 'vue-marquee-text-component'

export interface HeroPerson {
  picture: string
  logo: string
  name: string
  role: string
  rating: number
}

export interface HeroPeopleProps {
  people: HeroPerson[]
}

const props = withDefaults(defineProps<HeroPeopleProps>(), {
  people: () => [],
})
</script>

<template>
  <div class="hero-people-marquee">
    <MarqueeText :repeat="10" :duration="40">
      <div class="hero-people-list">
        <div
          v-for="(person, index) in props.people"
          :key="index"
          class="hero-people-item"
        >
          <AvatarSimple :picture="person.picture" size="xl" />
          <div class="has-text-centered pt-2">
            <Title tag="h3" :size="6" weight="semi" narrow>
              <span>{{ person.name }}</span>
            </Title>
            <p class="paragraph rem-85">{{ person.role }}</p>
            <div class="bottom-row">
              <img class="logo" :src="person.logo" alt="company logo" />
              <div class="rating">
                <i
                  v-if="person.rating >= 1"
                  class="iconify"
                  data-icon="uiw:star-on"
                ></i>
                <i
                  v-if="person.rating >= 2"
                  class="iconify"
                  data-icon="uiw:star-on"
                ></i>
                <i
                  v-if="person.rating >= 3"
                  class="iconify"
                  data-icon="uiw:star-on"
                ></i>
                <i
                  v-if="person.rating >= 4"
                  class="iconify"
                  data-icon="uiw:star-on"
                ></i>
                <i
                  v-if="person.rating === 5"
                  class="iconify"
                  data-icon="uiw:star-on"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarqueeText>
  </div>
</template>

<style scoped lang="scss">
.hero-people-marquee {
  position: relative;
  top: -2rem;

  .hero-people-list {
    display: flex;

    .hero-people-item {
      padding: 1.5rem;
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 1.25rem;
      min-width: 220px;
      margin: 0 0.5rem;
      transition: background-color 0.3s, border-color 0.3s;

      :deep(.avatar) {
        transform: scale(0.85);
        transition: transform 0.3s;
      }

      .bottom-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.75rem;

        .logo {
          display: block;
          max-width: 70px;
        }

        .rating {
          font-size: 0.8rem;

          .iconify {
            margin-right: 0.15rem;
            color: var(--yellow);
          }
        }
      }

      &:hover {
        :deep(.avatar) {
          transform: scale(1);
        }
      }
    }
  }
}

.is-dark {
  .hero-people-marquee {
    .hero-people-list {
      .hero-people-item {
        .bottom-row {
          .logo {
            filter: invert(1);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .hero-people-marquee {
    top: -1rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .hero-people-marquee {
    top: -6rem;
  }
}
</style>
