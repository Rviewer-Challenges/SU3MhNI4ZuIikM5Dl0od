<script setup lang="ts">
export interface CardTestimonialItem {
  title: string
  text: string
  picture: string
  name: string
  role: string
}

export interface CardTestimonialsProps {
  items: CardTestimonialItem[]
  pulled?: boolean
}

const props = withDefaults(defineProps<CardTestimonialsProps>(), {
  items: () => [],
  pulled: false,
})
</script>

<template>
  <div class="py-6">
    <div class="testimonial-cards">
      <div class="columns is-multiline b-columns-half-tablet-p">
        <div
          v-for="(item, index) in props.items"
          :key="index"
          class="column is-6"
        >
          <div class="testimonial-card">
            <div class="testimonial-title">{{ item.title }}</div>
            <div class="testimonial-text">
              {{ item.text }}
            </div>
            <div class="testimonial-info">
              <AvatarSimple :picture="item.picture" size="medium" />
              <div class="info">
                <div class="name">{{ item.name }}</div>
                <div class="position">{{ item.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.testimonial-cards {
  max-width: 1040px;
  margin: 0 auto;
}

.testimonial-card {
  background: var(--card-bg-color);
  border: 1px solid var(--card-border-color);
  padding: 1.75rem;
  border-radius: 0.85rem;
  box-shadow: var(--light-box-shadow);

  .testimonial-title {
    color: var(--title-color);
    font-family: var(--font-alt);
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.25rem 0;
  }

  .testimonial-text {
    color: var(--light-text);
    font-family: var(--font);
    font-size: 0.9rem;
    padding: 0.5rem 0;
  }

  .testimonial-info {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    padding: 5px 0;

    img {
      height: 50px;
      border-radius: 100px;
    }

    .info {
      padding: 0 0.5rem;
      line-height: 1.2;

      .name {
        font-family: var(--font-alt);
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--title-color);
      }

      .position {
        font-family: var(--font);
        font-size: 0.8rem;
        color: var(--light-text);
      }
    }
  }
}
</style>
