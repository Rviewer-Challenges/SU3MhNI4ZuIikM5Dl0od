<script setup lang="ts">
import { FooterCta } from '../Footer.vue'

export interface FooterCtaProps {
  content?: FooterCta
}

const props = withDefaults(defineProps<FooterCtaProps>(), {
  content: undefined,
})
</script>

<template>
  <div class="footer-cta">
    <div class="columns is-vcentered b-columns-half-tablet-p">
      <div class="column is-6">
        <Subtitle tag="h3" :size="6" weight="semi" narrow class="pb-5">
          <span>{{ props.content.subtitle }}</span>
        </Subtitle>
        <Title tag="h2" :size="2" weight="bold" inverted>
          {{ props.content.title }}
        </Title>
      </div>
      <div class="column is-6">
        <div>
          <div class="buttons is-right is-relative z-1">
            <Button
              :to="props.content.links[0].to"
              color="primary"
              elevated
              bold
            >
              {{ props.content.links[0].label }}
            </Button>
            <Button :to="props.content.links[1].to" bold>
              {{ props.content.links[1].label }}
            </Button>
          </div>
          <!--Hero Benefits-->
          <div class="field is-grouped mx-auto">
            <div
              v-for="(benefit, index) in props.content.benefits"
              :key="index"
              class="control"
            >
              <i class="iconify" data-icon="feather:check"></i>
              <span class="pl-2 pr-3">{{ benefit.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-cta {
  position: absolute;
  top: -22.5%;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 3.5rem;
  border-radius: 1.25rem;
  background-image: url('/assets/shapes/pattern.png'),
    linear-gradient(
      15deg,
      var(--primary),
      var(--primary-dark-16),
      var(--primary)
    );
  background-size: 100% 100%, auto;
  background-repeat: no-repeat, no-repeat;
  z-index: 1;

  .title {
    opacity: 1 !important;
  }

  :deep(.subtitle) {
    color: var(--white-smoke);
  }

  .field {
    color: var(--white-smoke);

    &.is-grouped {
      justify-content: flex-end;
    }
  }

  .buttons {
    .button {
      min-width: 140px;
    }
  }
}

@media only screen and (max-width: 767px) {
  .footer-cta {
    padding: 2rem;
    top: -12.5%;
    margin: 0 1rem;
    width: calc(100% - 2rem);

    :deep(.title) {
      font-size: 1.75rem;
    }

    .buttons {
      margin-bottom: 0;

      .button {
        width: 100%;
      }
    }

    .field {
      display: none;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .footer-cta {
    top: -17.5%;
    margin: 0 1rem;
    width: calc(100% - 2rem);

    :deep(.title) {
      font-size: 1.75rem;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .footer-cta {
    top: -12.5%;
    margin: 0 1rem;
    width: calc(100% - 2rem);

    :deep(.title) {
      font-size: 1.75rem;
    }
  }
}
</style>
