import type { Directive, DirectiveHook } from 'vue'

const onUpdate: DirectiveHook = (el: HTMLElement, bindings) => {
  const src = bindings.value.src
  const placeholder = bindings.value.placeholder

  if (src) {
    const image = new Image()

    if (placeholder) {
      image.onerror = () => {
        image.onerror = null
        el.style.backgroundImage = `url(${placeholder})`
      }
    }

    image.onload = () => {
      image.onload = null
      el.style.backgroundImage = `url(${src})`
    }

    image.src = src
  }
}

export const vBackground: Directive = {
  getSSRProps() {
    return {}
  },
  updated: onUpdate,
  mounted: onUpdate,
}
