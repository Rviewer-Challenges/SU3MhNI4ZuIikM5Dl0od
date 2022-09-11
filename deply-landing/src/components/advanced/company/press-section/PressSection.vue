<script setup lang="ts">
export interface PressRelease {
  logo: string
  darkLogo: string
  text: string
}

export interface PressReleasesProps {
  releases?: PressRelease[]
}

const props = withDefaults(defineProps<PressReleasesProps>(), {
  releases: () => [],
})
</script>

<template>
  <div class="press-releases mx-auto max-w-10 pt-4 pb-8">
    <div class="columns is-multiline b-columns-half-tablet-p">
      <div
        v-for="(release, index) in props.releases"
        :key="index"
        class="column is-4"
      >
        <div class="box">
          <div class="head">
            <DarkImage
              class="press-logo"
              :src="release.logo"
              :src-dark="release.darkLogo"
              alt="Press logo"
            />
          </div>

          <p>"{{ release.text }}"</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.press-releases {
  .box {
    padding: 2rem;
    border-radius: 0.75rem;
    background: var(--card-bg-color);
    border: 1px solid var(--card-border-color);
    box-shadow: none;
    transition: box-shadow 0.3s;

    .head {
      display: flex;
      align-items: flex-start;
      height: 40px;
      margin-bottom: 0.5rem;
    }

    .press-logo {
      height: 38px;
      width: auto;
      max-width: 150px;
      object-fit: contain;
    }

    > p {
      font-size: 0.95rem;
      color: var(--medium-text);
    }

    &:hover {
      box-shadow: var(--spread-shadow);
    }
  }
}
</style>
