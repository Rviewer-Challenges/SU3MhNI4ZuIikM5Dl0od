<script setup lang="ts">
export interface Member {
  name: string
  role: string
  picture: string
  logo: string
}

export interface TabbedTestimonial {
  title: string
  content: string
  member: Member
}

export interface TabbedTestimonialsProps {
  trainees: TabbedTestimonial[]
  mentors: TabbedTestimonial[]
  inverted?: boolean
}

const props = withDefaults(defineProps<TabbedTestimonialsProps>(), {
  trainees: () => [],
  mentors: () => [],
  inverted: false,
})
</script>

<template>
  <div class="tabbed-testimonials py-6">
    <Tabs
      slider
      alignment="centered"
      selected="trainees"
      :tabs="[
        { label: 'Trainees', value: 'trainees' },
        { label: 'Mentors', value: 'mentors' },
      ]"
    >
      <template #tab="{ activeValue }">
        <div v-if="activeValue === 'trainees'">
          <div class="tabbed-grid">
            <div class="columns is-multiline">
              <div
                v-for="(trainee, t) in props.trainees"
                :key="t"
                class="column is-6"
              >
                <div class="tabbed-grid-item">
                  <Tag label="Customer Stories" class="mb-4" />
                  <Title tag="h3" :size="6" weight="semi">
                    "{{ trainee.title }}"
                  </Title>
                  <p class="paragraph rem-90 mb-4">{{ trainee.content }}</p>
                  <div class="member">
                    <AvatarSimple
                      :picture="trainee.member.picture"
                      size="medium"
                      squared
                    />
                    <div class="meta">
                      <Title tag="h3" :size="7" weight="semi" narrow>
                        {{ trainee.member.name }}
                      </Title>
                      <p class="paragraph rem-90">{{ trainee.member.role }}</p>
                    </div>
                    <div class="logo">
                      <img :src="trainee.member.logo" alt="brand logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="activeValue === 'mentors'">
          <div class="tabbed-grid">
            <div class="columns is-multiline">
              <div
                v-for="(mentor, m) in props.mentors"
                :key="m"
                class="column is-6"
              >
                <div class="tabbed-grid-item">
                  <Tag label="Mentor Stories" class="mb-4" />
                  <Title tag="h3" :size="6" weight="semi">
                    "{{ mentor.title }}"
                  </Title>
                  <p class="paragraph rem-90 mb-4">{{ mentor.content }}</p>
                  <div class="member">
                    <AvatarSimple
                      :picture="mentor.member.picture"
                      size="medium"
                      squared
                    />
                    <div class="meta">
                      <Title tag="h3" :size="7" weight="semi" narrow>
                        {{ mentor.member.name }}
                      </Title>
                      <p class="paragraph rem-90">{{ mentor.member.role }}</p>
                    </div>
                    <div class="logo">
                      <img :src="mentor.member.logo" alt="brand logo" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<style scoped lang="scss">
.tabbed-testimonials {
  max-width: 940px;
  margin: 0 auto;

  :deep(.tabs-wrapper) {
    .tabs {
      max-width: 310px;
      margin-bottom: 3rem;
    }
  }

  .tabbed-grid {
    .tabbed-grid-item {
      background: var(--card-bg-color);
      border: 1px solid var(--card-border-color);
      border-radius: 1rem;
      padding: 2rem;

      > :deep(.title) {
        line-height: 1.4;
      }

      .member {
        display: flex;
        align-items: center;

        :deep(.avatar) {
          img {
            box-shadow: var(--light-box-shadow);
          }
        }

        .meta {
          margin-left: 0.75rem;
        }

        .logo {
          margin-left: auto;

          img {
            display: block;
            width: 100%;
            max-width: 90px;
          }
        }
      }
    }
  }
}

.is-dark {
  .tabbed-testimonials {
    .tabbed-grid {
      .tabbed-grid-item {
        .member .logo img {
          filter: invert(1);
        }
      }
    }
  }
}
</style>
