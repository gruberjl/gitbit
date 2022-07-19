import fs from 'fs'
import path from 'path'
import glob from 'glob'
import copydir from 'copy-dir'
import buildWebpack from './build-webpack'
import buildPage from './build-page'
import buildData from './build-data'
import buildSitemap from './build-sitemap'

const build = async () => {
  await buildData()
  deleteDocs()
  copyRoot()
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

const copyRoot = () => {
  copydir.sync('./root', './docs')
}

build()
