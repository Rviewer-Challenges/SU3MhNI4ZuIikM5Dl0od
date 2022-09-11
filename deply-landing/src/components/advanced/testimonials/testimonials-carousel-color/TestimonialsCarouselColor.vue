<script setup lang="ts">
import { ref } from 'vue'

export interface TestimonialItem {
  id: number
  name: string
  picture: string
  cover: string
  quote: string
  subquote: string
}

export interface TestimonialsCarouselColorProps {
  slides: TestimonialItem[]
}

const props = defineProps<TestimonialsCarouselColorProps>()

const activeSlide = ref(0)
</script>

<template>
  <div class="testimonials-carousel-wrapper">
    <img
      v-for="(slide, index) in props.slides"
      :id="`testimonial-cover-${slide.id}`"
      :key="index"
      class="testimonials-cover"
      :class="slide.id === activeSlide ? 'is-active' : ''"
      :src="slide.cover"
      alt="Slide cover"
    />
    <Container>
      <div class="columns">
        <div class="column is-6 is-offset-3">
          <!-- CSS Carousel -->
          <div class="css-carousel">
            <i class="fa fa-quote-left"></i>
            <!-- Hidden inputs -->
            <input
              v-for="(slide, r) in props.slides"
              :id="`radio-${slide.id}`"
              :key="r"
              type="radio"
              name="slides"
              :checked="slide.id === 0"
              @change="activeSlide = slide.id"
            />
            <ul class="slides">
              <!-- Carousel item -->
              <li v-for="(slide, s) in props.slides" :key="s" class="slide">
                <p>
                  <q>{{ slide.quote }}</q>
                  <span class="text">{{ slide.subquote }}</span>
                  <span class="author">
                    <img :src="slide.picture" alt="Testifier picture" />
                    {{ slide.name }}
                  </span>
                </p>
              </li>
            </ul>
            <!-- Slider controls -->
            <div class="carousel-dots">
              <label
                v-for="(slide, d) in props.slides"
                :id="`dot-for-radio-${slide.id}`"
                :key="d"
                :for="`radio-${slide.id}`"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<style scoped lang="scss">
.testimonials-carousel-wrapper {
  position: relative;
  padding: 6rem 0;
  background: var(--section-grey-bg-color);
  overflow: hidden;
}

.testimonials-cover {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: auto;
  z-index: 0;
  opacity: 0;
  transition: all 0.3s;

  &.is-active {
    opacity: 1;
  }
}

.css-carousel {
  background: var(--card-bg-color);
  text-align: center;
  border-radius: 1rem;
  height: 340px;
  max-width: 750px;
  margin: auto;
  position: relative;
  overflow: hidden;
  box-shadow: var(--spread-shadow);

  h2 {
    margin: 0;
    margin-top: -1.7em;
    padding: 0;
    font-size: 1em;
    text-align: center;
    color: var(--title-color);
  }

  .slides {
    width: 400%;
    left: 0;
    padding-left: 0;
    padding-top: 1rem;
    overflow: hidden;
    list-style: none;
    position: relative;
    transition: transform 0.5s;

    li {
      width: 25%;
      position: relative;
      float: left;
      margin: 0;
      padding: 4rem;

      p {
        max-width: 380px;
        margin: 0 auto;
      }

      q {
        font-family: var(--font-alt);
        max-width: 90%;
        margin: auto;
        color: var(--title-color);
        font-size: 1.3em;
        font-weight: bold;
      }

      img {
        width: 3em;
        border-radius: 50%;
        margin-left: -1.5em;
        margin-right: 0.5em;
        vertical-align: middle;
      }

      .author {
        margin-top: 20px;
        font-size: 1rem;
        color: var(--title-color);
        display: block;
        font-weight: 500;
      }

      .text {
        display: block;
        color: var(--light-text);
      }
    }
  }

  .carousel-dots {
    display: flex;
    justify-content: center;
    list-style: none;
    text-align: center;
    bottom: 3rem;
    position: absolute;
    width: 105px;
    margin: 0 auto;
    left: 0;
    right: 0;

    label {
      float: left;
      margin: 6px;
      display: block;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      border: solid 2px var(--primary);
      font-size: 0;

      &:hover {
        cursor: pointer;
      }
    }
  }

  input {
    display: none;
  }

  #radio-0:checked ~ .slides {
    transform: translateX(0%);
  }

  #radio-1:checked ~ .slides {
    transform: translateX(-25%);
  }

  #radio-2:checked ~ .slides {
    transform: translateX(-50%);
  }

  #radio-3:checked ~ .slides {
    transform: translateX(-75%);
  }

  #radio-0:checked ~ .carousel-dots label#dot-for-radio-0,
  #radio-1:checked ~ .carousel-dots label#dot-for-radio-1,
  #radio-2:checked ~ .carousel-dots label#dot-for-radio-2,
  #radio-3:checked ~ .carousel-dots label#dot-for-radio-3 {
    background: var(--primary);
  }
}

@media (max-width: 480px) {
  .css-carousel {
    max-width: calc(100vw - 1rem);

    .slides li {
      padding: 1rem;

      p {
        padding-left: 0.5em;
        padding-right: 0.5em;
      }

      q {
        font-size: 1em;
      }

      img {
        width: 2em;
        margin-left: -1em;
        margin-right: 0.25em;
      }
    }

    .carousel-dots {
      bottom: 1rem;
    }
  }
}

@media (max-width: 767px) {
  .css-carousel {
    padding: 10px;
    min-height: 200px;
    opacity: 0.9;
  }
}

@media (max-width: 796px) {
  .css-carousel {
    height: 8.5em;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .css-carousel {
    padding: 10px;
    min-height: 260px;
    max-width: 440px;
    opacity: 0.9;

    .slides {
      li {
        padding: 2rem;
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .css-carousel {
    padding: 4rem 2rem !important;
  }
}
</style>
