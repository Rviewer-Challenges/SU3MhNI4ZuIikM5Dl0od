<script setup lang="ts">
  import { pricingDuoPlans } from '/@src/data/blocks/advanced/pricing'
  import { plantValues } from '/@src/data/blocks/advanced/values'
  import { socialLinks } from '/@src/data/blocks/advanced/social'
  import { genericFaq } from '/@src/data/blocks/advanced/faq'
  import { pricingIconFeatures } from '/@src/data/blocks/advanced/features'
  </script>
  
  <template>
    <div>
      <Section color="grey">
        <Container>
          <PageTitle
            title="Empieza gratis ahora"
            subtitle="Simple pero completo"
            text="Mejora la forma en la que desarrollas."
          />

          <PricingDuo
            title="Nuestros planes"
            subtitle="La versión Free ya está disponible. La versión Pro lo estará pronto junto con la API."
            :plans="pricingDuoPlans"
            rounded
            polka-dots
          />


          <Section color="grey">
        <Container>
        </Container>
        <SectionTitle title="Lee nuestras FAQs" subtitle="¿Tienes preguntas?" />
        <FaqListBoxed :items="genericFaq" />
      </Section>
  
        </Container>

        <Section color="grey">
        <Container>
          <ValuesSection :values="plantValues" image-height="150px" />
        </Container>
      </Section>
      </Section>
      <Section color="grey" wave="wave-1" shape-color="white">
      </Section>
  
      <FooterD
        text="Deply ofrece un almacenamiento de objetos fácil y rápido.
              Siendo estos accesibles desde una URL pública siempre y desde cualquier lugar."
        color="light"
        :social-links="socialLinks"
      />
    </div>
  </template>
  