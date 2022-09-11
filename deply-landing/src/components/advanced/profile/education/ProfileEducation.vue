<script setup lang="ts">
export interface ProfileEducationSchool {
  name: string
  logo: string
}

export interface ProfileEducation {
  degree: string
  duration: string
  summary: string
  school: ProfileEducationSchool
}

export interface ProfileEducationsProps {
  education: ProfileEducation[]
}

const props = defineProps<ProfileEducationsProps>()
</script>

<template>
  <Card class="education-card">
    <div class="education-card-head">
      <h3>Education</h3>
      <RouterLink to="/profile">View All</RouterLink>
    </div>
    <div class="education-card-body">
      <div class="educations">
        <!--Education-->
        <div
          v-for="(item, index) in props.education"
          :key="index"
          class="education"
        >
          <img :src="item.school.logo" alt="" />
          <div class="meta">
            <h3>{{ item.degree }}</h3>
            <span>{{ item.school.name }}</span>
            <span>{{ item.duration }}</span>
            <p>
              {{ item.summary }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.education-card {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .education-card-head {
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

  .education-card-body {
    > p {
      color: var(--light-text);
    }

    .educations {
      .education {
        display: flex;

        + .education {
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