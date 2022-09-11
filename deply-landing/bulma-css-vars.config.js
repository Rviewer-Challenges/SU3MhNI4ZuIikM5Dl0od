const { hsl } = require('bulma-css-vars')

const appColors = {
  white: hsl(0, 0, 100),
  black: hsl(0, 0, 4),
  primary: hsl(268, 98, 50),
  dark: hsl(218, 23, 19),
  link: hsl(268, 98, 50),
  info: hsl(211, 82, 48),
  success: hsl(158, 82, 48),
  warning: hsl(41, 88, 58),
  danger: hsl(337, 98, 50),
}

module.exports = {
  jsOutputFile: 'src/scss/bulma-generated/bulma-colors.ts',
  sassOutputFile: 'src/scss/bulma-generated/generated-vars.sass',
  cssFallbackOutputFile: 'src/scss/bulma-generated/generated-fallback.css',
  colorDefs: appColors,
  sassEntryFile: 'src/scss/main.scss',
  transition: null,
}
