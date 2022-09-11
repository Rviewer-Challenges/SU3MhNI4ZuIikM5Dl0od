<script setup lang="ts">
import { ref } from 'vue'

export type EventType = 'collective' | 'personal'

export interface EventSpeaker {
  name: string
  role: string
  photo: string
}

export interface Event {
  id: number
  type: EventType
  time: string
  name: string
  location: string
  content: string
  speaker: EventSpeaker
}

export interface EventDay {
  name: string
  date: string
  schedule: Event[]
}

export interface EventScheduleProps {
  schedule: EventDay[]
}

const props = withDefaults(defineProps<EventScheduleProps>(), {
  schedule: () => [],
})

const activeEvent = ref()
</script>

<template>
  <div>
    <div class="event-schedule">
      <div class="columns is-gapless is-multiline">
        <div
          v-for="(day, index) in props.schedule"
          :key="index"
          class="column is-4"
        >
          <div class="event-card">
            <div class="event-card-head">
              <span class="name">{{ day.name }}</span>
              ,
              <span class="date">{{ day.date }}</span>
            </div>
            <div class="event-card-body">
              <div
                v-for="(event, e) in day.schedule"
                :key="e"
                class="event-item-wrap"
              >
                <div class="event-item">
                  <div class="event-item-head">
                    <span class="event-time">{{ event.time }}</span>
                    <a
                      v-if="
                        event.type === 'personal' && activeEvent != event.id
                      "
                      @click.prevent="activeEvent = event.id"
                      @keydown.space.prevent="() => (activeEvent = event.id)"
                    >
                      Details
                    </a>
                    <a
                      v-else-if="
                        event.type === 'personal' && activeEvent === event.id
                      "
                      @click.prevent="activeEvent = ''"
                      @keydown.space.prevent="() => (activeEvent = '')"
                    >
                      Close
                    </a>
                  </div>
                  <div class="event-item-title">
                    <Title tag="h3" :size="6" weight="semi" leading>
                      <span>{{ event.name }}</span>
                    </Title>
                    <p class="paragraph rem-90">{{ event.location }}</p>
                  </div>
                  <div
                    v-if="event.type === 'personal' && activeEvent === event.id"
                    class="event-item-content"
                  >
                    <p class="paragraph rem-85">{{ event.content }}</p>
                  </div>
                  <div
                    v-if="event.type === 'personal'"
                    class="event-item-speaker"
                  >
                    <AvatarSimple :picture="event.speaker.photo" />
                    <div class="meta">
                      <Title tag="h3" :size="7" weight="semi" narrow>
                        <span>{{ event.speaker.name }}</span>
                      </Title>
                      <p class="paragraph rem-80">{{ event.speaker.role }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.event-schedule {
  position: relative;

  .event-card {
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    border-collapse: collapse;

    .event-card-head {
      padding: 1.5rem;
      border-bottom: 1px solid var(--card-border-color);
      font-family: var(--font-alt);
      background: var(--wrap-muted-color);

      .name {
        font-weight: 600;
        color: var(--title-color);
      }

      .date {
        color: var(--medium-text);
      }
    }

    .event-card-body {
      .event-item-wrap {
        padding: 1.5rem;

        .event-item {
          .event-item-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1rem;

            .event-time {
              color: var(--light-text);
              font-family: var(--font);
            }

            a {
              font-family: var(--font);
              font-weight: 500;
              font-size: 0.9rem;
              color: var(--primary);
            }
          }

          .event-item-title {
            margin-bottom: 1rem;

            :deep(.title) {
              line-height: 1.3;
            }
          }

          .event-item-content {
            margin-bottom: 1rem;
          }

          .event-item-speaker {
            display: flex;
            align-items: center;

            .meta {
              margin-left: 0.75rem;
            }
          }
        }

        + .event-item-wrap {
          border-top: 1px solid var(--card-border-color);
        }
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .event-schedule {
    .event-card {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
