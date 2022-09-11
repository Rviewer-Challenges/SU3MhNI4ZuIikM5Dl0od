<script setup lang="ts">
export interface ProfileProject {
  title: string
  subtitle: string
  image: string
  members: string[]
}

export interface ProfileProjectsProps {
  projects: ProfileProject[]
}

const props = defineProps<ProfileProjectsProps>()
</script>

<template>
  <Card class="projects-card">
    <div class="projects-card-head">
      <h3>Projects</h3>
      <RouterLink to="/profile/projects">View All</RouterLink>
    </div>

    <div class="projects-card-body">
      <div class="projects">
        <div class="columns b-columns-third-tablet-p">
          <div
            v-for="(project, index) in props.projects.slice(0, 3)"
            :key="index"
            class="column is-4"
          >
            <RouterLink to="/profile" class="project">
              <DarkImage
                :src="project.image"
                alt="Project image"
                width="400"
                height="300"
              />
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
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.projects-card {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .projects-card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      font-family: var(--font-alt);
      font-size: 1rem;
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

  .projects-card-body {
    > p {
      color: var(--light-text);
    }

    .projects {
      .project {
        img {
          display: block;
          border-radius: 1rem;
          margin-bottom: 0.5rem;
        }

        h3 {
          font-family: var(--font-alt);
          font-size: 1rem;
          font-weight: 600;
          color: var(--title-color);
        }

        > p {
          font-size: 0.9rem;
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
  }
}
</style>