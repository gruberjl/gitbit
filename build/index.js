import fs from 'fs'
import glob from 'glob'
import buildPage from './build-page'
import buildData from './build-data'
import buildSitemap from './build-sitemap'
import buildRoot from './build-root'
import buildLearnArticles from './build-learn-articles'
import buildFeeds from './build-feeds'
import buildTestPages from './build-test-pages'
import buildBlog from './build-blog'
import buildReadMe from './build-readme'
const debug = require('debug')('gitbit:build')

const build = async () => {
  debug(`buildData`)
  await buildData()
  debug(`buildLearnArticles`)
  await buildLearnArticles()
  debug('buildTestPages')
  await buildTestPages()
  debug('buildBlog')
  debug('buildReadMe')
  await buildReadMe()
  debug(`deleteDocs`)
  deleteDocs()
  debug(`buildRoot`)
  await buildRoot()
  await buildBlog()

  const pageFiles = glob.sync('./src/pages/**/*.js')
  
  for (let i = 0; i < pageFiles.length; i++) {
    await buildPage(pageFiles[i])
  }
  debug('buildFeeds')
  await buildFeeds()
  debug(`buildSitemap`)
  await buildSitemap()
  debug('Done building site!')
}

const deleteDocs = () => {
  if (fs.existsSync('./docs'))
    fs.rmSync('./docs',  {recursive: true})

  fs.mkdirSync('./docs')
}

build()
