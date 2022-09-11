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
              <div class="media-left is-bolt">
                <span
                  class="iconify"
                  data-icon="heroicons-solid:lightning-bolt"
                  data-inline="false"
                ></span>
              </div>
              <div class="media-content">
                <h3>Hay otra forma</h3>
                <p>
                  Almacena archivos de manera fácil y rápido. Siempre accesibles, desde cualquier lugar, en cualquier momento.
                </p>
                <a v-preload-link href="https://app.deply.dev">
                  <span>Empezar ahora</span>
                  <i
                    class="iconify"
                    data-icon="feather:arrow-right"
                    data-inline="false"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="megamenu-block ml-6">
            <h4>¿Vamos?</h4>
            <ul>
              <li>
                <a v-preload-link to="/" class="list-link">
                  Inicio
                </a>
              </li>
              <li>
                <RouterLink v-preload-link to="/pricing" class="list-link">
                  Planes
                </RouterLink>
              </li>
              <li>
                <a v-preload-link href="https://app.deply.dev/register/" class="list-link">
                  Regístrate
                </a>
              </li>
              <li>
                <a v-preload-link href="https://app.deply.dev/login/?next=/" class="list-link">
                  Inicia sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style="display: none;" class="column is-2">
          <div class="megamenu-block ml-6">
            <h4 class="is-vhidden">DEMOS</h4>
            <ul>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  Blog pages
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  Auth pages
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  Layouts
                </RouterLink>
              </li>
              <li>
                <RouterLink v-preload-link to="/" class="list-link">
                  Components
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="column is-4">
          <div class="megamenu-block is-left-bordered">
            <div class="media">
              <div class="media-content">
                <h3>Documentación API</h3>
                <p>
                  Aprende a utilizar nuestra API y a integrarla en tu aplicación.
                </p>
                <a>
                  <span>Próximamente</span>
                  <i
                    class="iconify"
                    data-icon="feather:arrow-right"
                    data-inline="false"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>
