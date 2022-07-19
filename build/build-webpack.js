const path = require('path')
const webpack = require('webpack')
const config = require('../webpack.config.js')

const buildWebpack = (page) => new Promise((res, rej) => {
  const outputPath = path.dirname('./docs' + page.jsBundlePath)
  const fileName = path.basename(page.jsBundlePath)

  webpack(config(page.pageFile, outputPath, fileName), (err, stats) => {
    if (err) {
      console.log(`Error building ${page.jsBundlePath}`)
      console.log(err)
    }

    if (stats.hasErrors()) {
      console.log(`Error in stats building ${page.jsBundlePath}`)
      console.error(stats.toJson().errors);
    }

    if (stats.hasWarnings()) {
      console.log(`Warning building ${page.jsBundlePath}`)
      console.warn(stats.toJson().warnings);
    }

    res()
  })
})

export default buildWebpack
