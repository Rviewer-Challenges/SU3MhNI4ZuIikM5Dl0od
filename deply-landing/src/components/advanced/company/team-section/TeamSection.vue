<script setup lang="ts">
export interface SocialProfile {
  name: string
  icon: string
  url: string
}

export interface TeamMember {
  name: string
  role: string
  picture: string
  socialProfiles: SocialProfile[]
}

export interface TeamMembersProps {
  members?: TeamMember[]
}

const props = withDefaults(defineProps<TeamMembersProps>(), {
  members: () => [],
})
</script>

<template>
  <div class="mx-auto max-w-9 pb-6">
    <div class="columns is-multiline b-columns-third-tablet-p">
      <div
        v-for="(member, index) in props.members"
        :key="index"
        class="column is-3"
      >
        <div class="team-member">
          <img class="mb-2" :src="member.picture" alt="Team member picture" />
          <div class="meta-info">
            <div class="left">
              <Title :size="6" tag="h3" narrow>{{ member.name }}</Title>
              <p>{{ member.role }}</p>
            </div>
            <div class="right">
              <a
                v-for="(profile, p) in member.socialProfiles"
                :key="p"
                :href="profile.url"
                target="_blank"
                class="social-profile"
              >
                <i class="iconify" :data-icon="profile.icon"></i>
                <span class="is-sr-only">{{ profile.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-member {
  .meta-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      .social-profile {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 32px;
        width: 32px;
        min-width: 32px;
        border-radius: 50%;
        background: var(--team-member-social-bg);
        border: 1px solid var(--team-member-social-border);
        margin: 0 0.25rem;
        font-size: 0.9rem;
        color: var(--team-member-social-color);
        transition: color 0.3s, border 0.3s;

        .iconify {
          vertical-align: middle;
        }

        &:hover {
          border-color: var(--primary);
          color: var(--primary);
        }
      }
    }
  }

  h3 {
    font-family: var(--font-alt);
    font-weight: 600;
    color: var(--dark-text);
  }

  p {
    font-family: var(--font);
    font-size: 0.85rem;
    color: var(--light-text);
  }
}
</style>
