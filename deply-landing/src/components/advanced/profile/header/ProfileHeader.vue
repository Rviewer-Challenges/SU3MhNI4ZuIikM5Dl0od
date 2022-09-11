<script setup lang="ts">
export interface ProfileHeaderProps {
  active: string
}

const props = defineProps<ProfileHeaderProps>()
</script>

<template>
  <div>
    <div class="profile-header">
      <div class="profile-header-inner">
        <div class="profile-avatar">
          <AvatarSimple picture="data:image/gif;base64,replace_with_your_image" size="xl" />
          <Title tag="h2" :size="4" narrow>John Wallace</Title>
          <p class="rem-100">UI/UX Designer</p>
        </div>

        <div class="tabs is-centered">
          <ul>
            <li :class="props.active === 'overview' && 'is-active'">
              <RouterLink to="/profile">Overview</RouterLink>
            </li>
            <li :class="props.active === 'projects' && 'is-active'">
              <RouterLink to="/profile/projects">Projects</RouterLink>
            </li>
            <li :class="props.active === 'network' && 'is-active'">
              <RouterLink to="/profile/network">Network</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-header {
  background: var(--wrap-bg-color);

  .profile-header-inner {
    position: relative;
    text-align: center;
    padding: 6rem 0 4rem;

    .profile-avatar {
      position: relative;

      .avatar {
        display: block;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin: 0 auto 1rem;
      }

      p {
        color: var(--light-text);
      }
    }

    .tabs {
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      margin: 0 auto;

      ul {
        border: none;

        li {
          &.is-active {
            a {
              color: var(--primary);
              border-color: var(--primary);
            }
          }

          a {
            font-family: var(--font);
            border-color: transparent;
            border-width: 3px;
            margin-bottom: 0;
            color: var(--light-text);
          }
        }
      }
    }
  }
}
</style>