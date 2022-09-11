<script setup lang="ts">
export interface ProfileBioProps {
  bio: string
}

const props = defineProps<ProfileBioProps>()
</script>

<template>
  <Card class="bio-card">
    <div class="bio-card-head">
      <h3>About</h3>
    </div>

    <div class="bio-card-body">
      <p>
        {{ props.bio }}
      </p>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.bio-card {
  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  .bio-card-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    h3 {
      font-family: var(--font-alt);
      font-size: 1rem;
      font-weight: 600;
      color: var(--title-color);
    }

    > a {
      font-size: 0.9rem;
      font-family: var(--font);
      font-weight: 500;
      color: var(--primary);
    }
  }

  .bio-card-body {
    > p {
      color: var(--light-text);
    }
  }
}
</style>