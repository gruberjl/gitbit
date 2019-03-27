/* eslint no-await-in-loop: 0 no-loop-func: 0 */
const cheerio = require('cheerio')
const {fetch} = require('whatwg-fetch')
const csso = require('csso')

const inlineCss = async (html) => {
  const $ = cheerio.load(html)
  let css = ''

  const styleEls = $('link[rel=stylesheet]').toArray()
    .filter(el => typeof $(el).prop('no-minify') === 'undefined')

  for (let i = 0; i < styleEls.length; i++) {
    const link = $(styleEls[i]).prop('href')
    await fetch(link).then(r => r.text())
      .then((styles) => {
        css += styles
        css += '\n'
        $(styleEls[i]).remove()
      })
  }

  const minifiedCss = csso.minify(css).css
  $('head').append(`<style id="inline-styles">${minifiedCss}</style>`)

  return $.html()
}

module.exports = {inlineCss}
