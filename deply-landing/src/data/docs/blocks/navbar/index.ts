export const navbarProps = {
  props: [
    {
      name: 'mode',
      type: 'string',
      required: 'false',
      default: 'undefined',
      values: ['solid', 'fade', 'inverted'],
    },
    {
      name: 'fixed',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
    {
      name: 'dropdownBoxed',
      type: 'boolean',
      required: 'false',
      default: 'false',
      values: ['boolean'],
    },
  ],
  slots: [],
}

export const navbar = `
<template>
  <NavbarA mode="fade" fixed />

  <NavbarB mode="solid" />

  <NavbarC mode="inverted" dropdownBoxed />
</template>
`
