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

const build = async () => {
  await buildData()
  await buildQuestionPages()
  await buildLearnArticles()
  deleteDocs()
  buildRoot()
  buildSitemap()
  const pageFiles = glob.sync('./src/pages/**/*.js')

  for (let i = 0; i < pageFiles.length; i++) {
    buildPage(pageFiles[i])
  }
}

const deleteDocs = () => {
  if (fs.existsSync('./docs'))
    fs.rmSync('./docs',  {recursive: true})

  fs.mkdirSync('./docs')
}

build()
