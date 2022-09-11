<script setup lang="ts">
import InputBase from '/@src/documentation/base/form/InputBase.vue'
import InputIcon from '/@src/documentation/base/form/InputIcon.vue'
import InputValidation from '/@src/documentation/base/form/InputValidation.vue'
import TextareaBase from '/@src/documentation/base/form/TextareaBase.vue'
import TextareaResize from '/@src/documentation/base/form/TextareaResize.vue'
import SelectBase from '/@src/documentation/base/form/SelectBase.vue'
import SelectIcon from '/@src/documentation/base/form/SelectIcon.vue'
import CheckboxBase from '/@src/documentation/base/form/CheckboxBase.vue'
import RadioBase from '/@src/documentation/base/form/RadioBase.vue'
import ToggleBase from '/@src/documentation/base/form/ToggleBase.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'Input',
    target: 'input-base-demo',
  },
  {
    label: 'Icons',
    target: 'input-icon-demo',
  },
  {
    label: 'Validation',
    target: 'input-validation-demo',
  },
  {
    label: 'Textarea',
    target: 'textarea-base-demo',
  },
  {
    label: 'Resize',
    target: 'textarea-resize-demo',
  },
  {
    label: 'Select',
    target: 'select-base-demo',
  },
  {
    label: 'Icon',
    target: 'select-icon-demo',
  },
  {
    label: 'Checkbox',
    target: 'checkbox-base-demo',
  },
  {
    label: 'Radio',
    target: 'radio-base-demo',
  },
  {
    label: 'Toggle',
    target: 'toggle-base-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Form Components"
      subtitle="Forms are a central part of every web and mobile application. They help users interact with your app. Explore Vulk forms."
    />

    <DemoLinks :links="demoLinks" width="840px" />

    <!--Input base demo-->
    <InputBase />

    <!--Input icons demo-->
    <InputIcon />

    <!--Input validation demo-->
    <InputValidation />

    <!--Textarea base demo-->
    <TextareaBase />

    <!--Textarea resize demo-->
    <TextareaResize />

    <!--Select base demo-->
    <SelectBase />

    <!--Select icon demo-->
    <SelectIcon />

    <!--Checkbox base demo-->
    <CheckboxBase />

    <!--Radio base demo-->
    <RadioBase />

    <!--toggle base demo-->
    <ToggleBase />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
