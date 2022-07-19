module.exports = function (source) {
  const options = this.getOptions()

  if (!this.resourcePath.includes('\\pages\\'))
    return source

  let content = ''
  if (/import\s*{\s*render\s*}\s*from\s*'preact'/.test(source) === false)
    content = `import {render} from 'preact'\n`

  content = content + source
    .replace('export default ', `render(<`)
    .trim()
    + `/>, document.getElementById('container'))`

  return content

  return source
}
