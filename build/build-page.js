import fs from 'fs'
import path from 'path'
import render from 'preact-render-to-string'
import { h } from 'preact'
import ejs from 'ejs'
import Helmet from 'preact-helmet'
import buildWebpack from './build-webpack'

const template = fs.readFileSync(`${__dirname}\\template.ejs`, 'utf8')

const buildPage = async (pageFile) => {
  global.location = {
    pathname: getPathname(pageFile),
    href: `https://www.gitbit.org${getPathname(pageFile)}`
  }
  const jsBundlePath = getOutputPath(pageFile)
  const App = await import(`../${pageFile}`)
  const src = render(<App.default/>)

  const data = {
    src,
    helmet: Helmet.rewind(),
    pathname: getPathname(pageFile),
    jsBundlePath,
    pageFile
  }

  const content = ejs.render(template, data)
  data.jsOutputPath = writeBundle(data.jsBundlePath, content)
  await buildWebpack(data)
}

const getOutputPath = (pageFile) => {
  return pageFile
    .replace('./src/pages', '')
}

const writeBundle = (jsBundlePath, content) => {
  let outputPath = `./docs${jsBundlePath.replace('.js', '.html')}`
  if (outputPath.endsWith('/index.html') && outputPath !== './docs/index.html')
    outputPath = outputPath.replace('/index.html', '.html')

  const dir = path.dirname(outputPath)
  if (!fs.existsSync(dir))
    fs.mkdirSync(dir, { recursive: true } )

  fs.writeFileSync(outputPath, content)

  return outputPath
}

const getPathname = (pageFile) => {
  const pathname = pageFile
    .replace('./src/pages/', '/')
    .replace('.js', '')

  if (pathname == '/index')
    return ''

  if (pathname.endsWith('/index'))
    return pathname.replace('/index', '')

  return pathname
}

export default buildPage
