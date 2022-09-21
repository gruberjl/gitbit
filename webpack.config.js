const path = require("path")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = (sourcePath = './src/pages/index.js', outputPath = './docs', outputFilename = 'index.js') => {
  if (sourcePath && sourcePath.WEBPACK_BUNDLE) {
    sourcePath = './src/pages/course/ms-500/question/-7MLm8ziu.js'
    outputPath = './docs'
    outputFilename = '-7MLm8ziu.js'
  }

  return {
    entry: sourcePath,
    mode: process.env.NODE_ENV || 'production',
    output: {
      path: path.join(__dirname, outputPath),
      filename: outputFilename
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    devtool: process.env.NODE_ENV !== 'production' ? 'eval' : 'none',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: "babel-loader",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {loader: path.resolve(__dirname, './build/client-page-loader.js')}
        }
      ]
    },
    "resolve": {
      "alias": {
        "react": "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",     // Must be below test-utils
        "react/jsx-runtime": "preact/jsx-runtime"
      },
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
          terserOptions: {
            format: {
              comments: false,
            },
          },
        }),
      ],
    }
  }
}
