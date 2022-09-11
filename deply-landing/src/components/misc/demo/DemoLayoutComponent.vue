<script setup lang="ts">
export interface DemoLayoutProps {
  inverted?: boolean
}

const props = withDefaults(defineProps<DemoLayoutProps>(), {
  inverted: false,
})
</script>

<template>
  <div :class="props.inverted && 'is-dark'">
    <Section class="demo-section" color="grey">
      <Container>
        <div class="demo-page-component">
          <div class="columns is-multiline b-columns-third-tablet-p">
            <div class="arrow-block">
              <p class="paragraph rem-90">
                This is a demo placeholder component. Replace it with your own
                content.
              </p>
              <i-ph-arrow-bend-down-right-thin />
            </div>
            <div class="column is-4">
              <div class="demo-block is-media">
                <PlaceloadText width="100%" height="220px" />
                <DarkImage
                  class="demo-char demo-char-1"
                  src="/assets/illustrations/demo/demo-char-1.svg"
                  alt="Demo character"
                  width="368"
                  height="240"
                />
              </div>
            </div>
            <div class="column is-4">
              <div class="demo-block is-media">
                <PlaceloadText width="100%" height="220px" />
                <DarkImage
                  class="demo-char demo-char-2"
                  src="/assets/illustrations/demo/demo-char-2.svg"
                  alt="Demo character"
                  width="368"
                  height="240"
                />
              </div>
            </div>
            <div class="column is-4">
              <div class="demo-block is-media">
                <PlaceloadText width="100%" height="220px" />
                <DarkImage
                  class="demo-char demo-char-3"
                  src="/assets/illustrations/demo/demo-char-3.svg"
                  alt="Demo character"
                  width="368"
                  height="240"
                />
              </div>
            </div>
            <div class="column is-4">
              <div class="demo-block mt-6">
                <PlaceloadParagraph last-line-width="60%" :lines="10" />
              </div>
            </div>
            <div class="column is-4">
              <div class="demo-block mt-6">
                <PlaceloadParagraph last-line-width="80%" :lines="6" />
              </div>
            </div>
            <div class="column is-4">
              <div class="demo-block mt-6">
                <PlaceloadParagraph last-line-width="70%" :lines="8" />
              </div>
            </div>
          </div>
          <div class="columns is-multiline b-columns-half-tablet-p">
            <div class="column is-5">
              <div class="columns is-multiline b-columns-half-tablet-p mt-5">
                <div class="column is-6">
                  <div class="demo-block is-media">
                    <PlaceloadText width="100%" height="200px" />
                    <DarkImage
                      class="demo-char demo-char-4"
                      src="/assets/illustrations/demo/demo-char-4.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                    <DarkImage
                      class="demo-char demo-char-4-bis"
                      src="/assets/illustrations/demo/demo-char-4-hands.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                  </div>
                </div>
                <div class="column is-6">
                  <div class="demo-block is-media">
                    <PlaceloadText width="100%" height="200px" />
                    <DarkImage
                      class="demo-char demo-char-5"
                      src="/assets/illustrations/demo/demo-char-5.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                  </div>
                </div>
                <div class="column is-6">
                  <div class="demo-block is-media">
                    <PlaceloadText width="100%" height="200px" />
                    <DarkImage
                      class="demo-char demo-char-6"
                      src="/assets/illustrations/demo/demo-char-6.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                    <DarkImage
                      class="demo-char demo-char-6-bis"
                      src="/assets/illustrations/demo/demo-char-6-hands.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                  </div>
                </div>
                <div class="column is-6">
                  <div class="demo-block is-media">
                    <PlaceloadText width="100%" height="200px" />
                    <DarkImage
                      class="demo-char demo-char-7"
                      src="/assets/illustrations/demo/demo-char-7.svg"
                      alt="Demo character"
                      width="368"
                      height="240"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-6 is-offset-1">
              <div class="demo-block mt-6 mb-4">
                <PlaceloadParagraph last-line-width="60%" :lines="10" />
              </div>
              <div class="demo-block mt-6">
                <PlaceloadParagraph last-line-width="40%" :lines="6" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </div>
</template>

<style scoped lang="scss">
.demo-section {
  min-height: 100vh;
}

.demo-page-component {
  position: relative;
  padding-top: 12rem;
  padding-bottom: 4rem;

  .arrow-block {
    position: absolute;
    top: -8rem;
    left: 3rem;
    max-width: 200px;
    font-style: italic;

    p {
      transform: rotate(-5deg);
      margin-bottom: 0.5rem;
      color: var(--primary);
    }

    svg {
      transform: rotate(30deg);
      font-size: 2.5rem;
      margin-left: 3rem;
      color: var(--primary);
    }
  }

  .columns {
    position: relative;
  }

  .demo-block {
    position: relative;

    .demo-char {
      position: absolute;
      z-index: 2;

      &.demo-char-1 {
        bottom: -1rem;
        left: -1rem;
        max-width: 180px;
      }

      &.demo-char-2 {
        top: -8.825rem;
        right: 1rem;
        max-height: 220px;
        width: auto;
      }

      &.demo-char-3 {
        bottom: -1rem;
        right: -1rem;
        max-width: 200px;
      }

      &.demo-char-4 {
        top: 2.5rem;
        left: 0;
        max-width: 90px;
      }

      &.demo-char-4-bis {
        top: 2.5rem;
        left: -0.5rem;
        max-width: 90px;
        z-index: 3;
      }

      &.demo-char-5 {
        bottom: 0;
        right: 3rem;
        max-width: 100px;
      }

      &.demo-char-6 {
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        max-width: 120px;
      }

      &.demo-char-6-bis {
        top: -0.5rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        max-width: 120px;
        z-index: 3;
      }

      &.demo-char-7 {
        bottom: 0;
        right: 1rem;
        max-width: 140px;
      }
    }

    &.is-media {
      :deep(.content-shape) {
        border-radius: 1rem;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .demo-page-component {
    .demo-block {
      .demo-char {
        &.demo-char-2 {
          top: initial;
          bottom: -4.825rem;
        }
      }
    }
  }
}
</style>
