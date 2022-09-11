<script setup lang="ts">
import ButtonSize from '/@src/documentation/base/button/ButtonSize.vue'
import ButtonType from '/@src/documentation/base/button/ButtonType.vue'
import ButtonShape from '/@src/documentation/base/button/ButtonShape.vue'
import ButtonColor from '/@src/documentation/base/button/ButtonColor.vue'
import ButtonIcon from '/@src/documentation/base/button/ButtonIcon.vue'
import ButtonOutlined from '/@src/documentation/base/button/ButtonOutlined.vue'
import ButtonElevation from '/@src/documentation/base/button/ButtonElevation.vue'
import ButtonLoading from '/@src/documentation/base/button/ButtonLoading.vue'
import ButtonDisabled from '/@src/documentation/base/button/ButtonDisabled.vue'
import DocumentationFooter from '/@src/documentation/demo/DocumentationFooter.vue'

const demoLinks = [
  {
    label: 'Sizes',
    target: 'button-size-demo',
  },
  {
    label: 'Shape',
    target: 'button-shape-demo',
  },
  {
    label: 'Types',
    target: 'button-types-demo',
  },
  {
    label: 'Color',
    target: 'button-colors-demo',
  },
  {
    label: 'Outlined',
    target: 'button-outlined-demo',
  },
  {
    label: 'Icons',
    target: 'button-icons-demo',
  },
  {
    label: 'Elevation',
    target: 'button-elevation-demo',
  },
  {
    label: 'Loading',
    target: 'button-loading-demo',
  },
  {
    label: 'Disabled',
    target: 'button-disabled-demo',
  },
]
</script>

<template>
  <div>
    <HeroSub
      title="Button Component"
      subtitle="Buttons are a central part in all web and mobile application with a wide variety of usage. Explore Vulk buttons."
    />

    <DemoLinks :links="demoLinks" width="800px" />

    <!--Button sizes demo-->
    <ButtonSize />

    <!--Button shape demo-->
    <ButtonShape />

    <!--Button types demo-->
    <ButtonType />

    <!--Button colors demo-->
    <ButtonColor />

    <!--Button outlined demo-->
    <ButtonOutlined />

    <!--Button icons demo-->
    <ButtonIcon />

    <!--Button elevation demo-->
    <ButtonElevation />

    <!--Button loading demo-->
    <ButtonLoading />

    <!--Button disabled demo-->
    <ButtonDisabled />

    <!--Docs footer-->
    <DocumentationFooter />
  </div>
</template>
