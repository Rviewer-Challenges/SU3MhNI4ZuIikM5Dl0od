<route lang="yaml">
  meta:
    layout: default
  </route>
  
  <script setup lang="ts">
  import { starterTemplates } from '/@src/data/pages/development'
  import { techLogos, customerLogos } from '/@src/data/pages/logos'
  import { socialLinks } from '/@src/data/blocks/advanced/social'
  </script>
  
  <template>
    <div>
      <HeroT />
  
      <Section>
        <Container>
          <TimelineTitle
            title="¿Archivos estáticos? ¿Qué?"
            subtitle="Sube"
            minititle="Explora Deply"
            color="secondary"
            :step="1"
          >
          </TimelineTitle>
  
          <DevWindows />
  
          <TimelineTitle
            title="Despliega más rápido"
            subtitle="Copia y pega"
            minititle="Sencillez y rapidez"
            color="primary"
            :step="2"
          >
            <template #content>
              <div class="py-6 mx-auto max-w-9">
                <div class="columns b-columns-half-tablet-p">
                  <div class="column is-6">
                    <p class="paragraph">
                      Olvídate de los problemas con los archivos estáticos.
                      En Deply puedes guardar tu favicon, tus imágenes, tus
                      archivos de configuración y mucho más en un solo lugar.
                      Y para acceder a ellos tú o tu aplicación solo necesitan un enlace. 
                    </p>
                  </div>
                  <div class="column is-6">
                    <p class="paragraph">
                      ¿Eres programador? Sabes lo engorroso que es tener que
                      configurar un servidor o una carpeta para subir tus
                      archivos. Sube y descarga tus archivos en segundos.<br>
                      Por y para desarrolladores.
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </TimelineTitle>
  
          <Timeline />
  
          <TimelineTitle
            title="Todo, en un solo lugar"
            subtitle="Deply App"
            color="accent"
            :step="3"
          >
            <template style="z-index: 99999999" #content>
              <div class="py-6 mx-auto max-w-9">
                <div class="columns b-columns-half-tablet-p">
                  <div class="column is-6">
                    <p class="paragraph">
                      <a href="https://app.deply.dev/">En nuestra aplicación web</a>
                      puedes subir archivos sin la necesidad de registrarte.
                      Te facilitaremos un código de eliminación para que puedas borrar tus objetos
                      antes del tiempo de expiración.
                    </p>
                  </div>
                  <div class="column is-6">
                    <p class="paragraph">
                      Consulta <a href="/pricing">nuestros planes</a>
                      para saber todas las ventajas de registrarte, como poder tener todos tus archivos en tu panel, poder
                      subir objetos con todo tipo de extensiones, etc...
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </TimelineTitle>
  
          <GlobeStats />
  
          <TimelineTitle
            title="Empieza el Show"
            subtitle="API"
            color="primary"
            :step="4"
          >
            <template #content>
              <div class="py-6 mx-auto max-w-9">
                <div class="columns b-columns-half-tablet-p">
                  <div class="column is-6">
                    <p class="paragraph">
                      Estamos trabajando en una API para que puedas subir, acceder,
                      modificar, eliminar y gestionar tus archivos desde tu aplicación.
                      Ahora empieza lo bueno, ¿no?
                    </p>
                  </div>
                  <div class="column is-6">
                    <p class="paragraph">
                      Visita la página de la API
                      y descubre cuando estará disponible y quienes podrán usarla.
                      Automatiza el guardado de tus archivos y olvídate de los problemas,
                      Deply se encarga de todo.
                    </p>
                  </div>
                </div>
              </div>
            </template>
          </TimelineTitle>
  
        </Container>
      </Section>
  
      <Section>
        <template>
          <SectionMap light />
        </template>
        <Container>
          <CompanyGrid
            title="El almacenamiento fácil y rápido"
            :logos="customerLogos"
            :limit="20"
          />
        </Container>
      </Section>
  
      <FooterD
        text="Deply ofrece un almacenamiento de objetos fácil y rápido.
              Siendo estos accesibles desde una URL pública siempre y desde cualquier lugar."
        color="default"
        :social-links="socialLinks"
      />
    </div>
  </template>
  