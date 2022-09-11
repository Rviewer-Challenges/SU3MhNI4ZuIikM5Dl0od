<script setup lang="ts"></script>

<template>
  <div class="ui-mockup">
    <h3 class="mb-3">Branded</h3>
    <div class="columns is-multiline b-columns-half-tablet-p">
      <div class="column is-6">
        <Field>
          <FieldLabel label="Target ACoS" />
          <Control>
            <VInput value="2%" readonly />
          </Control>
        </Field>
      </div>
      <div class="column is-6">
        <Field>
          <FieldLabel label="Daily Budget" />
          <Control>
            <VInput value="$348" readonly />
          </Control>
        </Field>
      </div>
    </div>
    <h3 class="mb-3">Unbranded</h3>
    <div class="columns is-multiline b-columns-half-tablet-p">
      <div class="column is-6">
        <Field>
          <FieldLabel label="Target ACoS" />
          <Control>
            <VInput value="8%" readonly />
          </Control>
        </Field>
      </div>
      <div class="column is-6">
        <Field>
          <FieldLabel label="Daily Budget" />
          <Control>
            <VInput value="$871" readonly />
          </Control>
        </Field>
      </div>
    </div>
    <div class="button-wrap">
      <Button color="primary" fullwidth bold raised>Create Campaign</Button>
    </div>
  </div>
</template>
