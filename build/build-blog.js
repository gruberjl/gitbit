import fs from 'fs'
import draftToHtml from './draftjs-to-html'
import admin from "firebase-admin"
const {getApps} = require("firebase-admin/app")
import serviceAccount from "./firestore.json"
import testBlogArticles from '../test/blog-articles'
import { h } from "preact"
import render from 'preact-render-to-string'
const stringify = require('json-stable-stringify')
const debug = require('debug')('gitbit:build-blog')

if ( !getApps().length ) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-server-9d634.firebaseio.com"
  })
}

const db = admin.firestore()
const template = fs.readFileSync('./src/templates/blog-article.js', 'utf8').toString()

const buildBlogArticles = async () => {
  debug('deleteBlogArticles')
  deleteBlogArticles()
  const articles = []

  const querySnapshot = await db.collection("courses").doc('MS-500').collection('blog').where('publish', '==', true).get()

  querySnapshot.forEach((doc) => {
    const article = doc.data()
    articles.push(article)
  })

  debug('testBlogArticles')
  testBlogArticles(articles, db)

  const sortedArticles = articles.sort((a, b) => {
    const aComps = a.datePublished.split("/")
    const bComps = b.datePublished.split("/")
    const aDate = new Date(aComps[0], aComps[1], aComps[2])
    const bDate = new Date(bComps[0], bComps[1], bComps[2])
    return bDate.getTime() - aDate.getTime()
  })

  for (let i = 0; i < sortedArticles.length; i++) {
    const article = articles[i]
    debug(`building article: ${article.id}`)

    if (!article.error && article.type==='article') {
      const articleHtml = draftToHtml(article.article)
        .replace(/style=".*?">/g, '>')
        .replaceAll('<br>', '<br/>')
        .replaceAll('{', '&#123;')
        .replaceAll('}', '&#125;')
        .replaceAll(' height="undefined" width="undefined"', ' ')

      let newFile = template
        .replace('{ARTICLE: true}', stringify(article))
        .replace('<ARTICLE />', articleHtml)
      newFile = newFile.replace('<h2>', '<div id="ld-7740-2760" style={{height:this.state.decideHeight, overflow: "hidden"}}></div><h2>')
      fs.writeFileSync(`./src/pages/course/ms-500/blog/${article.slug}.js`, newFile)
    }
  }
}

const deleteBlogArticles = () => {
  if (fs.existsSync('./src/pages/course/ms-500/blog'))
    fs.rmSync('./src/pages/course/ms-500/blog',  {recursive: true})

  fs.mkdirSync('./src/pages/course/ms-500/blog')
}

buildBlogArticles()
export default buildBlogArticles
