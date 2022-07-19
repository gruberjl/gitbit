import express from 'express'
import fs from "fs"
import path from 'path'
import './build/index.js'
import buildPage from './build/build-page.js'

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
  if (req.originalUrl.includes('/assets/'))
    return next()
  let filePath = `./src/pages${req.originalUrl}`
  if (filePath.endsWith('/'))
    filePath = filePath.slice(0, -1)

  res.sendFile(path.resolve(filePath.replace('./src/pages/', './docs/')))
})

app.use('/**', async (req, res, next) => {
  if (req.originalUrl.includes('/assets/') || req.originalUrl.endsWith('.js') || req.originalUrl.endsWith('.js/') || req.originalUrl.endsWith('.png/') || req.originalUrl.endsWith('.png') || req.originalUrl.endsWith('.xml/') || req.originalUrl.endsWith('.ico') || req.originalUrl.endsWith('.ico/') || req.originalUrl.endsWith('.svg/') || req.originalUrl.endsWith('.webmanifest/') || req.originalUrl.endsWith('.webmanifest') || req.originalUrl.endsWith('.css/') || req.originalUrl.endsWith('.css'))
    return next()
  let cleanedUrl = req.originalUrl === '/' ? '/index' : req.originalUrl
  if (cleanedUrl.endsWith('/'))
    cleanedUrl = cleanedUrl.slice(0, -1)
  const filePath = `./src/pages${cleanedUrl}.js`

  await buildPage(filePath)

  res.sendFile(path.resolve(filePath.replace('./src/pages/', './docs/').replace('.js', '.html')))
})

app.use((req, res, next) => {
  console.log(req.originalUrl)
  next()
})

app.use(express.static('docs', {extensions:['html'], redirect:false}))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
