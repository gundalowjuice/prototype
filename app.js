const Records = require('spike-records')
const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('babel-preset-latest')
const pageId = require('spike-page-id')
const locals = {}

module.exports = {
  devtool: 'source-map',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: [
    '**/readme.md',
    '**/_layouts/*',
    '**/_includes/*',
    '**/_*', '**/.*'
  ],
  reshape: (ctx) => {
    return htmlStandards({
      webpack: ctx,
      locals: Object.assign({ pageId: pageId(ctx) }, locals)
    })
  },
  plugins: [new Records({
    addDataTo: locals,
    products: { file: 'data/products.json' }
  })],
  postcss: (ctx) => {
    return cssStandards({ webpack: ctx })
  },
  babel: { presets: [jsStandards] },
  server: { open: false }
}
