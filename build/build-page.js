import fs from 'fs'
import path from 'path'
import render from 'preact-render-to-string'
import { h } from 'preact'
import ejs from 'ejs'
import Helmet from 'preact-helmet'
import buildWebpack from './build-webpack'
import getImageDimensions from './get-image-dimensions'
const debug = require('debug')('gitbit:build-page')

const template = fs.readFileSync(`${__dirname}\\template.ejs`, 'utf8')

const buildPage = async (pageFile) => {
  debug(`building page: ${pageFile}`)
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
    pageFile,
    canonical: false
  }
  data.helmet.link.toComponent().forEach(component => {
    if (component.props.rel == 'canonical') {
      data.canonical = component.props.href
    }
  })

  if (pageFile !== './src/pages/404.js') {
    const imageUrl = getImageUrl(data.helmet.meta.toString())
    const imageDimensions = await getImageDimensions(imageUrl)
    data.imageDimensions = imageDimensions
  } else {
    data.imageDimensions = {width:500, height:500}
  }

  const content = ejs.render(template, data)
  data.jsOutputPath = writeBundle(data.jsBundlePath, content)
  await buildWebpack(data)
}

const getImageUrl = (meta) => {
  return meta.match(/property="og:image" content=".*?">/g)[0]
    .replace('property="og:image" content="', '')
    .replace('">', '')
    .replace('https://www.gitbit.org', '')
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
