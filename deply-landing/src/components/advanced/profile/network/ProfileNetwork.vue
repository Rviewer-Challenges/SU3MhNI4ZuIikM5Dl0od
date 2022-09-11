<script setup lang="ts">
export interface ProfileNetworkStats {
  followers: number
  following: number
  posts: number
}

export interface ProfileNetworkPerson {
  name: string
  role: string
  photo: string
  followers: number
  following: number
}

export interface ProfileNetworkProps {
  stats: ProfileNetworkStats
  people: ProfileNetworkPerson[]
}

const props = defineProps<ProfileNetworkProps>()
</script>


<template>
  <div>
    <!--Main stats-->
    <Card class="network-card">
      <div class="network-stats">
        <div class="network-stat">
          <span>{{ props.stats.followers }}</span>
          <span>Followers</span>
        </div>
        <div class="network-stat is-centered">
          <span>{{ props.stats.following }}</span>
          <span>Following</span>
        </div>
        <div class="network-stat">
          <span>{{ props.stats.posts }}</span>
          <span>Posts</span>
        </div>
      </div>
    </Card>

    <!--Toolbar-->
    <div class="network-toolbar">
      <h3>Network</h3>
      <RouterLink to="/profile/network">View All</RouterLink>
    </div>

    <!--Grid-->
    <div class="network-grid">
      <div class="columns is-multiline b-columns-half-tablet-p">
        <!--User-->
        <div
          v-for="(person, index) in props.people"
          :key="index"
          class="column is-4"
        >
          <Card class="network-card">
            <div class="network-avatar">
              <AvatarSimple :picture="person.photo" size="large" />
            </div>
            <Title tag="h3" :size="6" weight="semi" narrow>
              {{ person.name }}
            </Title>
            <p class="rem-80">{{ person.role }}</p>
            <div class="network-stats">
              <div class="network-stat">
                <span>{{ person.followers }}</span>
                <span>Followers</span>
              </div>
              <div class="network-stat">
                <span>{{ person.following }}</span>
                <span>Following</span>
              </div>
            </div>
            <Button fullwidth>View Profile</Button>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.network-stats {
  display: flex;
  padding: 1rem 0;

  .network-stat {
    text-align: center;
    flex: 1 1 0px;

    &.is-centered {
      border-left: 1px solid var(--wrap-border-color);
      border-right: 1px solid var(--wrap-border-color);
    }

    span {
      display: block;

      &:first-child {
        font-family: var(--font-alt);
        font-weight: 700;
        font-size: 1.8rem;
        color: var(--title-color);
      }

      &:nth-child(2) {
        font-family: var(--font);
        font-size: 0.8rem;
        text-transform: uppercase;
        color: var(--light-text);
      }
    }
  }
}

.network-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;

  h3 {
    font-family: var(--font-alt);
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--title-color);
  }

  > a {
    font-size: 0.9rem;
    font-family: var(--font);
    font-weight: 500;
    color: var(--primary);
  }
}

.network-grid {
  .network-card {
    text-align: center;
    margin-bottom: 0;
    transition: all 0.3s;

    &:hover {
      box-shadow: var(--light-box-shadow);
    }

    .network-avatar {
      position: relative;
    }

    p {
      font-family: var(--font);
      color: var(--light-text);
    }

    .network-stats {
      margin: 0.5rem 0 1.5rem;

      .network-stat {
        &:first-child {
          border-right: 1px solid var(--wrap-border-color);
        }

        span {
          &:first-child {
            font-size: 1.25rem;
          }

          &:nth-child(2) {
            font-size: 0.7rem;
          }
        }
      }
    }

    > a {
      font-family: var(--font);
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--primary);
    }
  }
}

@media only screen and (max-width: 767px) {
  .network-card {
    :deep(.card-content) {
      padding: 0.75rem !important;
    }
  }
}
</style>