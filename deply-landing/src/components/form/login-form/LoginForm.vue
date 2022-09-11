<script setup lang="ts">
import { ref } from 'vue'

const options = ref([''])
</script>

<template>
  <form>
    <div class="login-form">
      <Field>
        <FieldLabel label="Username" />
        <Control icon="feather:user">
          <VInput placeholder="Username..." />
        </Control>
      </Field>
      <Field>
        <FieldLabel label="Password" />
        <Control icon="feather:lock">
          <VInput type="password" placeholder="Password..." />
        </Control>
      </Field>

      <div class="setting-item">
        <Checkbox
          v-model="options"
          color="primary"
          name="checkbox-1"
          label="Remember me"
          value="Remember"
        />
      </div>

      <Control class="mt-4">
        <Button color="primary" fullwidth bold raised>Sign In</Button>
      </Control>
    </div>
  </form>
</template>
