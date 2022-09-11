<script setup lang="ts">
export interface ProfileSkill {
  title: string
  subtitle: string
  skills: string[]
}

export interface ProfileSkillsProps {
  skills: ProfileSkill[]
}

const props = defineProps<ProfileSkillsProps>()
</script>


<template>
  <Card class="skills-card">
    <div class="skills-card-head">
      <h3>Tools & Skills</h3>
      <RouterLink to="/profile">View All</RouterLink>
    </div>
    <div class="skills-card-body">
      <div class="skills">
        <div class="columns b-columns-third-tablet-p">
          <div
            v-for="(skill, index) in props.skills.slice(0, 3)"
            :key="index"
            class="column is-4"
          >
            <Card class="skill-box">
              <h3>{{ skill.title }}</h3>
              <p>{{ skill.subtitle }}</p>
              <div class="skill-list">
                <img
                  v-for="(skillIcon, s) in skill.skills.slice(0, 3)"
                  :key="s"
                  :src="skillIcon"
                  alt="Skill icon"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.skills-card {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .skills-card-head {
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

  .skills-card-body {
    > p {
      color: var(--light-text);
    }

    .skills {
      .skill-box {
        border: 1px solid var(--wrap-border-color);

        h3 {
          font-family: var(--font-alt);
          font-size: 1rem;
          font-weight: 600;
          color: var(--title-color);
          margin-bottom: 0.75rem;
        }

        p {
          font-size: 0.9rem;
          font-family: var(--font);
          color: var(--light-text);
          margin-bottom: 0.75rem;
        }

        .skill-list {
          display: flex;
          align-items: center;
          padding: 0.75rem 0 0;

          img {
            display: block;
            height: 26px;
            width: 26px;
            border-radius: 50%;
            margin: 0 0.35rem;
          }
        }
      }
    }
  }
}
</style>