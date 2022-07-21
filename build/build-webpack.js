const path = require('path')
const webpack = require('webpack')
const config = require('../webpack.config.js')
const debug = require('debug')('gitbit:build-webpack')

const buildWebpack = (page) => new Promise((res, rej) => {
  debug(`building webpack ${page.jsBundlePath}`)
  const outputPath = path.dirname('./docs' + page.jsBundlePath)
  const fileName = path.basename(page.jsBundlePath)

  webpack(config(page.pageFile, outputPath, fileName), (err, stats) => {
    if (err) {
      debug(`Error building ${page.jsBundlePath}`)
      debug(err)
    }

    if (stats.hasErrors()) {
      debug(`Error in stats building ${page.jsBundlePath}`)
      debug(stats.toJson().errors);
    }

    if (stats.hasWarnings()) {
      debug(`Warning building ${page.jsBundlePath}`)
      debug(stats.toJson().warnings);
    }
    debug('done building page')
    res()
  })
})

export default buildWebpack
