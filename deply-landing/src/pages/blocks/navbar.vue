<script setup lang="ts">
import { navbarProps, navbar } from '/@src/data/docs/blocks/navbar'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'Nav A',
    target: 'navbar-a-demo',
  },
  {
    label: 'Nav B',
    target: 'navbar-b-demo',
  },
  {
    label: 'Nav C',
    target: 'navbar-c-demo',
  },
  {
    label: 'Nav D',
    target: 'navbar-d-demo',
  },
  {
    label: 'Nav E',
    target: 'navbar-e-demo',
  },
  {
    label: 'Nav F',
    target: 'navbar-f-demo',
  },
  {
    label: 'Nav G',
    target: 'navbar-g-demo',
  },
  {
    label: 'Nav H',
    target: 'navbar-h-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Navbar Blocks"
      subtitle="More than 8 customizable navbar blocks are awaiting for you to build your own layouts, pages, and content."
    />
    <DemoLinks :links="demoLinks" width="660px" />

    <Section id="navbar-a-demo">
      <Container>
        <DemoTitle
          title="Navbar A"
          subtitle="Type A variation 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarA />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="Navbar A"
          subtitle="Type A variation 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarA mode="inverted" dropdown-boxed />
      </div>
    </Section>

    <Section id="navbar-b-demo">
      <Container>
        <DemoTitle
          title="Navbar B"
          subtitle="Navbar B variation 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarB />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="Navbar B"
          subtitle="Type B variation 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarB mode="inverted" dropdown-boxed />
      </div>
    </Section>

    <Section id="navbar-c-demo">
      <Container>
        <DemoTitle
          title="Navbar C"
          subtitle="Navbar C variation 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarC />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="Navbar C"
          subtitle="Type C variation 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarC mode="inverted" />
      </div>
    </Section>

    <Section id="navbar-d-demo" color="grey">
      <Container>
        <DemoTitle
          title="Navbar D"
          subtitle="Navbar D variation 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarD dropdown-boxed />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="Navbar D"
          subtitle="Type D variation 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarD mode="inverted" dropdown-boxed />
      </div>
    </Section>

    <Section id="navbar-e-demo">
      <Container>
        <DemoTitle
          title="Navbar E"
          subtitle="Navbar E variation 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarE />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="Navbar E"
          subtitle="Type E variation 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarE mode="inverted" />
      </div>
    </Section>

    <Section id="navbar-f-demo">
      <Container>
        <DemoTitle
          title="Navbar F"
          subtitle="Navbar F variation 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarF />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="Navbar F"
          subtitle="Type F variation 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarF mode="inverted" />
      </div>
    </Section>

    <Section id="navbar-g-demo">
      <Container>
        <DemoTitle
          title="Navbar G"
          subtitle="Navbar G variation 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarG />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="Navbar G"
          subtitle="Type G variation 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarG mode="inverted" />
      </div>
    </Section>

    <Section id="navbar-h-demo">
      <Container>
        <DemoTitle
          title="Navbar H"
          subtitle="Navbar H variation 1"
          link="navbar-props"
        />
      </Container>

      <div class="py-6">
        <NavbarH />
      </div>
    </Section>

    <Section color="darker">
      <Container>
        <DemoTitle
          title="Navbar H"
          subtitle="Type H variation 2"
          link="navbar-props"
          inverted
        />
      </Container>

      <div class="py-6">
        <NavbarH mode="inverted" />
      </div>
    </Section>

    <Section id="navbar-props" color="grey">
      <Container>
        <DemoTitle
          title="Navbar Props"
          subtitle="Available props for navbars"
        />

        <DemoTabs>
          <template #code>
            <PrismCode language="html" :code="navbar" />
          </template>
          <template #props>
            <DemoProps :props="navbarProps.props" />
          </template>
          <template #sample>
            <div class="empty-text">
              <p class="paragraph rem-95">
                No data sample available for this component
              </p>
            </div>
          </template>
          <template #usage>
            <p class="paragraph rem-95">
              Navbar are the base layout navigation building block for any
              website. Vulk navbars can be customized using the
              <code>mode</code>
              prop. Some additional props let you control the navbar position.
            </p>
          </template>
        </DemoTabs>
      </Container>
    </Section>

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>

<style lang="scss" scoped>
//Used only for demo navbars, do not use in production
.section {
  overflow: visible;

  .py-6 :deep(.navbar) {
    border: 1px solid var(--navbar-border-color);
    box-shadow: var(--light-box-shadow);
  }

  &.is-darker {
    .py-6 :deep(.navbar) {
      border: none;
      box-shadow: none;
    }
  }
}
</style>
