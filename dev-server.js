import express from 'express'
import fs from "fs"
import path from 'path'
import buildPage from './build/build-page.js'
import buildRoot from './build/build-root.js'

buildRoot()
const app = express()
const port = 8000

app.use(function (req, res, next) {
  if (req.path.substr(-1) == '/' && req.path.length > 1) {
    let query = req.url.slice(req.path.length)
    res.redirect(301, req.path.slice(0, -1) + query)
  } else {
    next()
  }
})

app.use('/*.js', async (req, res, next) => {
  let url = req.originalUrl.split('?')[0]
  if (url.includes('/assets/'))
    return next()
  let filePath = `./src/pages${url}`
  if (filePath.endsWith('/'))
    filePath = filePath.slice(0, -1)

  res.sendFile(path.resolve(filePath.replace('./src/pages/', './docs/')))
})

app.use('/**', async (req, res, next) => {
  let url = req.originalUrl.split('?')[0]
  if (url.includes('/assets/') || url.endsWith('.js') || url.endsWith('.js/') || url.endsWith('.png/') || url.endsWith('.png') || url.endsWith('.xml/') || url.endsWith('.ico') || url.endsWith('.ico/') || url.endsWith('.svg/') || url.endsWith('.webmanifest/') || url.endsWith('.webmanifest') || url.endsWith('.css/') || url.endsWith('.css'))
    return next()

  url = url === '/' ? '/index' : url
  if (url.endsWith('/'))
    url = url.slice(0, -1)
  const filePath = `./src/pages${url}.js`

  await buildPage(filePath)

  res.sendFile(path.resolve(filePath.replace('./src/pages/', './docs/').replace('.js', '.html')))
})

app.use((req, res, next) => {
  console.log(req.originalUrl)
  next()
})

app.use(express.static('docs', {extensions:['html', 'css'], redirect:false}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
