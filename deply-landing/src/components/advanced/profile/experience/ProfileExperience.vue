<script setup lang="ts">
export interface ProfileExperienceCompany {
  name: string
  logo: string
}

export interface ProfileExperience {
  role: string
  type: string
  duration: string
  summary: string
  company: ProfileExperienceCompany
}

export interface ProfileExperiencesProps {
  experiences: ProfileExperience[]
}

const props = defineProps<ProfileExperiencesProps>()
</script>

<template>
  <Card class="experience-card">
    <div class="experience-card-head">
      <h3>Experience</h3>
      <RouterLink to="/profile">View All</RouterLink>
    </div>
    <div class="experience-card-body">
      <div class="experiences">
        <!--Experience-->
        <div
          v-for="(experience, index) in props.experiences"
          :key="index"
          class="experience"
        >
          <img :src="experience.company.logo" alt="Company logo" />
          <div class="meta">
            <h3>{{ experience.role }}</h3>
            <span>
              {{ experience.company.name }}
              <small>{{ experience.type }}</small>
            </span>
            <span>{{ experience.duration }}</span>
            <p>
              {{ experience.summary }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.experience-card {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .experience-card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

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

  .experience-card-body {
    > p {
      color: var(--light-text);
    }

    .experiences {
      .experience {
        display: flex;

        + .experience {
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--wrap-border-color);
        }

        > img {
          display: block;
          height: 44px;
          width: 44px;
          border-radius: 50%;
        }

        .meta {
          margin-left: 1rem;

          h3 {
            font-family: var(--font-alt);
            font-size: 1.1rem;
            color: var(--title-color);
          }

          span {
            display: block;
            font-size: 0.9rem;
            font-family: var(--font);
            color: var(--light-text);
          }

          p {
            color: var(--medium-text);
            font-size: 0.95rem;
            margin-top: 0.75rem;
          }
        }
      }
    }
  }
}
</style>