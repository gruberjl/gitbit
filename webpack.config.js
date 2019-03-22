const {join} = require('path')
const webpack = require('webpack')

const config = {
  entry: './src/gitbit/index.js',
  output: {
    path: join(__dirname, 'server', 'portal', 'files'),
    filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}

module.exports = config
