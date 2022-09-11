<script setup lang="ts">
const emit = defineEmits(['close'])
</script>

<template>
  <div class="megamenu-inner">
    <button class="close-button" @click="emit('close')">
      <i class="iconify" data-icon="feather:arrow-left"></i>
    </button>
    <Container>
      <div class="columns">
        <div class="column is-4">
          <div class="megamenu-block">
            <div class="media">
              <div class="media-left is-resources">
                <span
                  class="iconify"
                  data-icon="heroicons-solid:briefcase"
                  data-inline="false"
                ></span>
              </div>
              <div class="media-content">
                <h3>Resources</h3>
                <p>
                  Read our latest in business news, ecommerce, and data trends.
                  Explore our customer resources.
                </p>
                <RouterLink v-preload-link to="/blocks">
                  <span>Open component library</span>
                  <i
                    class="iconify"
                    data-icon="feather:arrow-right"
                    data-inline="false"
                  ></i>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ml-6">
            <h4>Learn</h4>
            <ul>
              <li>
                <RouterLink v-preload-link to="/blocks" class="list-link">
                  Components
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/colors"
                  class="list-link"
                >
                  Colors
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/utilities"
                  class="list-link"
                >
                  Utilities
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/plugins"
                  class="list-link"
                >
                  Plugins
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ml-6">
            <h4>Blocks</h4>
            <ul>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/features"
                  class="list-link"
                >
                  Features
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/content"
                  class="list-link"
                >
                  Content
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/blocks/team" class="list-link">
                  Team
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/blocks/testimonials"
                  class="list-link"
                >
                  Testimonials
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-4 b-hidden-mobile b-hidden-tablet-p">
          <div class="megamenu-block is-left-bordered">
            <div class="image-block">
              <DarkImage
                src="data:image/gif;base64,replace_with_your_image"
                alt="Megamenu image"
                width="500"
                height="309"
              />
              <div class="inner-block">
                <p class="paragraph rem-85">
                  Get started and discover tips to grow your business and
                  increase your income.
                </p>
                <ActionLink
                  label="Learn more"
                  link="/blog"
                  size="small"
                  narrow
                  heavy
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
