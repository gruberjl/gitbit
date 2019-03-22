const {compile} = require('./compile')

const render = async (template, context) => {
  const fn = compile(template)
  const html = await fn(context)
  return html
}

module.exports = {render}
