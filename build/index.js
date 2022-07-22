import fs from 'fs'
import path from 'path'
import glob from 'glob'
import buildWebpack from './build-webpack'
import buildPage from './build-page'
import buildData from './build-data'
import buildSitemap from './build-sitemap'
import buildRoot from './build-root'
import buildQuestionPages from './build-question-pages'
import buildLearnArticles from './build-learn-articles'
import buildFeeds from './build-feeds'
const debug = require('debug')('gitbit:build')

const build = async () => {
  debug(`buildData`)
  await buildData()
  debug(`buildQuestionPages`)
  await buildQuestionPages()
  debug(`buildLearnArticles`)
  await buildLearnArticles()
  debug(`deleteDocs`)
  deleteDocs()
  debug(`buildRoot`)
  buildRoot()
  debug('buildFeeds')
  buildFeeds()
  debug(`buildSitemap`)
  buildSitemap()

  const pageFiles = glob.sync('./src/pages/**/*.js')

  for (let i = 0; i < pageFiles.length; i++) {
    await buildPage(pageFiles[i])
  }
}

const deleteDocs = () => {
  if (fs.existsSync('./docs'))
    fs.rmSync('./docs',  {recursive: true})

  fs.mkdirSync('./docs')
}

build()
