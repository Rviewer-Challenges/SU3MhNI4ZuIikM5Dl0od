<script setup lang="ts">
import { ref } from 'vue'

const options = ref([''])
</script>

<template>
  <form>
    <div class="login-form">
      <Field>
        <FieldLabel label="Email" />
        <Control icon="feather:mail">
          <VInput placeholder="Email address..." />
        </Control>
      </Field>
      <Field>
        <FieldLabel label="Password" />
        <Control icon="feather:lock">
          <VInput type="password" placeholder="Password..." />
        </Control>
      </Field>
      <Field>
        <FieldLabel label="Repeat Password" />
        <Control icon="feather:lock">
          <VInput type="password" placeholder="Repeat password..." />
        </Control>
      </Field>

      <div class="setting-item">
        <Checkbox
          v-model="options"
          color="primary"
          name="checkbox-1"
          label="I have read the Terms of Service"
          value="terms"
        />
      </div>

      <Control class="mt-4">
        <Button color="primary" fullwidth bold raised>Sign Up</Button>
      </Control>
    </div>
  </form>
</template>
