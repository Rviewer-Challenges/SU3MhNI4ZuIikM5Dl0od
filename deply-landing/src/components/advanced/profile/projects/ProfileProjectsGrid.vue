<script setup lang="ts">
export interface ProfileProjectItem {
  title: string
  subtitle: string
  image: string
  members: string[]
}

export interface ProfileProjectGridProps {
  projects: ProfileProjectItem[]
}

const props = defineProps<ProfileProjectGridProps>()
</script>

<template>
  <div class="columns is-multiline b-columns-half-tablet-p">
    <!--Project-->
    <div
      v-for="(project, index) in props.projects"
      :key="index"
      class="column is-4"
    >
      <RouterLink to="/profile/projects">
        <Card class="project-card">
          <DarkImage
            class="project-card-image"
            :src="project.image"
            alt="Project image"
            width="400"
            height="300"
          />
          <div class="project-card-content">
            <h3>{{ project.title }}</h3>
            <p>{{ project.subtitle }}</p>
            <div class="project-members">
              <img
                v-for="(member, m) in project.members.slice(0, 4)"
                :key="m"
                :src="member"
                alt="project user"
              />
            </div>
          </div>
        </Card>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  &:hover {
    box-shadow: var(--light-box-shadow);
  }

  :deep(.card-content) {
    padding: 0.75rem;
  }

  .project-card-image {
    border-radius: 0.75rem;
    margin-bottom: 0;
  }

  .project-card-content {
    padding: 0.5rem;

    h3 {
      font-family: var(--font-alt);
      font-size: 1rem;
      font-weight: 600;
      color: var(--title-color);
    }

    p {
      font-size: 0.85rem;
      font-family: var(--font);
      color: var(--light-text);
    }

    .project-members {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 1rem;

      img {
        display: block;
        height: 32px;
        width: 32px;
        border-radius: 50%;
        margin: 0 0.35rem;
      }
    }
  }
}
</style>