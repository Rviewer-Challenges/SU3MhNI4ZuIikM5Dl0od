<script setup lang="ts">
import { viaPlaceholderErrorHandler } from '/@src/utils/viaPlaceholderErrorHandler'

export interface CenteredMediaProps {
  title: string
  ctaText: string
  ctaLink: string
}

const props = defineProps<CenteredMediaProps>()
</script>

<template>
  <div class="py-6">
    <div class="centered-media-section">
      <div class="text-section max-w-4 mx-auto">
        <Title tag="h2" :size="3" weight="bold">
          <span>{{ props.title }}</span>
        </Title>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenonis est,
          inquam, hoc Stoici. Neutrum vero, inquit ille. Immo alio genere; Mihi
          enim satis est, ipsis non satis. Tum mihi Piso: Quid ergo? Cur
        </p>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenonis est,
          inquam, hoc Stoici. Neutrum vero, inquit ille. Immo alio genere; Mihi
          enim satis est, ipsis non satis. Tum mihi Piso: Quid ergo? Cur
        </p>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Zenonis est,
          inquam, hoc Stoici. Neutrum vero, inquit ille. Immo alio genere; Mihi
          enim satis est, ipsis non satis. Tum mihi Piso: Quid ergo? Cur
        </p>

        <div class="mt-4">
          <Button :to="props.ctaLink" color="primary" bold fullwidth raised>
            {{ props.ctaText }}
          </Button>
        </div>
      </div>
      <!--Section faces-->
      <div class="section-face face-1 left">
        <img
          src="data:image/gif;base64,replace_with_your_image"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x400')"
        />
      </div>
      <div class="section-face face-2 left">
        <img
          src="data:image/gif;base64,replace_with_your_image"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x400')"
        />
      </div>
      <div class="section-face face-3 left">
        <img
          src="data:image/gif;base64,replace_with_your_image"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x450')"
        />
      </div>
      <div class="section-face face-4 left">
        <img
          src="data:image/gif;base64,replace_with_your_image"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '200x200')"
        />
      </div>
      <div class="section-face face-5 left">
        <img
          src="data:image/gif;base64,replace_with_your_image"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '200x200')"
        />
      </div>
      <div class="section-face face-1 right">
        <img
          src="data:image/gif;base64,replace_with_your_image"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x400')"
        />
      </div>
      <div class="section-face face-2 right">
        <img
          src="data:image/gif;base64,replace_with_your_image"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x400')"
        />
      </div>
      <div class="section-face face-3 right">
        <img
          src="data:image/gif;base64,replace_with_your_image"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '300x450')"
        />
      </div>
      <div class="section-face face-4 right">
        <img
          src="data:image/gif;base64,replace_with_your_image"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '200x200')"
        />
      </div>
      <div class="section-face face-5 right">
        <img
          src="data:image/gif;base64,replace_with_your_image"
          alt="Person image"
          width="300"
          height="400"
          @error.once="(event) => viaPlaceholderErrorHandler(event, '200x200')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.centered-media-section {
  position: relative;

  .text-section {
    text-align: center;
    padding: 0 1rem;

    p + p {
      margin-top: 1rem;
    }

    :deep(.button) {
      max-width: 340px;
      margin: 1.5rem auto 0;
      min-height: 54px;
    }
  }

  .section-face {
    position: absolute;
    z-index: 0;

    img {
      display: block;
      max-width: 100%;
      border-radius: 1.25rem;
      object-fit: cover;
    }

    &.face-1 {
      top: -80px;
      width: 160px;

      &.left {
        left: -120px;
      }

      &.right {
        right: -120px;
      }
    }

    &.face-2 {
      right: 100px;
      top: 20px;
      width: 140px;

      &.left {
        left: 100px;
      }

      &.right {
        right: 100px;
      }
    }

    &.face-3 {
      top: 180px;
      width: 140px;

      &.left {
        left: -80px;
      }

      &.right {
        right: -80px;
      }
    }

    &.face-4 {
      top: 260px;
      width: 140px;

      &.left {
        left: 140px;
      }

      &.right {
        right: 140px;
      }
    }

    &.face-5 {
      top: 450px;
      width: 130px;

      &.left {
        left: 20px;
      }

      &.right {
        right: 20px;
      }
    }
  }
}

@media only screen and (max-width: 767px) {
  .centered-media-section {
    .section-face {
      transform: scale(0.6);

      &.face-1 {
        &.right {
          right: -170px;
        }

        &.left {
          left: -170px;
        }
      }

      &.face-2 {
        &.right {
          right: -110px;
        }

        &.left {
          left: -110px;
        }
      }

      &.face-3 {
        display: none;
      }

      &.face-4 {
        top: 210px;
        max-width: 100px;

        &.right {
          right: -75px;
        }

        &.left {
          left: -75px;
        }
      }

      &.face-5 {
        top: 330px;
        max-width: 100px;

        &.right {
          right: -85px;
        }

        &.left {
          left: -85px;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  .centered-media-section {
    .section-face {
      transform: scale(0.8);

      &.face-1 {
        &.right {
          right: -170px;
        }

        &.left {
          left: -170px;
        }
      }

      &.face-2 {
        &.right {
          right: -12px;
        }

        &.left {
          left: -12px;
        }
      }

      &.face-3 {
        &.right {
          right: -130px;
        }

        &.left {
          left: -130px;
        }
      }

      &.face-4 {
        top: 210px;
        max-width: 100px;

        &.right {
          right: 18px;
        }

        &.left {
          left: 18px;
        }
      }

      &.face-5 {
        top: 330px;
        max-width: 100px;

        &.right {
          right: 8px;
        }

        &.left {
          left: 8px;
        }
      }
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .centered-media-section {
    .section-face {
      transform: scale(0.9);

      &.face-1 {
        &.right {
          right: -170px;
        }

        &.left {
          left: -170px;
        }
      }

      &.face-2 {
        &.right {
          right: 50px;
        }

        &.left {
          left: 50px;
        }
      }

      &.face-3 {
        &.right {
          right: -130px;
        }

        &.left {
          left: -130px;
        }
      }

      &.face-4 {
        &.right {
          right: 90px;
        }

        &.left {
          left: 90px;
        }
      }

      &.face-5 {
        &.right {
          right: -30px;
        }

        &.left {
          left: -30px;
        }
      }
    }
  }
}
</style>
