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
              <div class="media-left is-company">
                <span
                  class="iconify"
                  data-icon="heroicons-solid:office-building"
                  data-inline="false"
                ></span>
              </div>
              <div class="media-content">
                <h3>We build the future</h3>
                <p>
                  We’re maximizing the potential of sellers and brand owners
                  through the power of data, AI, and marketplace expertise
                </p>
                <RouterLink to="/about">
                  <span>More about us</span>
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
            <h4>WHO WE ARE</h4>
            <ul>
              <li>
                <RouterLink
                  v-preload-link
                  to="/about/about-5"
                  class="list-link"
                >
                  Meet the team
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/about/about-6"
                  class="list-link"
                >
                  Work with us
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/about/about-4"
                  class="list-link"
                >
                  Our values
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/about/about-6"
                  class="list-link"
                >
                  Hire us
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ml-6">
            <h4>REACH US</h4>
            <ul>
              <li>
                <RouterLink
                  v-preload-link
                  to="/subpages/contact"
                  class="list-link"
                >
                  Contact
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/subpages/help"
                  class="list-link"
                >
                  Help Center
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/subpages/help"
                  class="list-link"
                >
                  Support
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  v-preload-link
                  to="/subpages/terms"
                  class="list-link"
                >
                  Terms
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
