import fs from 'fs'
const draftToHtml = require('draftjs-to-html')
import admin from "firebase-admin"
const {getApps} = require("firebase-admin/app")
import serviceAccount from "./firestore.json"
import testLearnArticles from '../test/learn-articles'
import { h } from "preact"
import render from 'preact-render-to-string'
const stringify = require('json-stable-stringify')
const debug = require('debug')('gitbit:build-learn-articles')

if ( !getApps().length ) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-server-9d634.firebaseio.com"
  })
}

const db = admin.firestore()
const template = fs.readFileSync('./src/templates/learn-article.js', 'utf8').toString()

const buildLearnArticles = async () => {
  debug('deleteLearnArticles')
  deleteLearnArticles()
  const articles = []

  const querySnapshot = await db.collection("courses").doc('MS-500').collection('contents').where('type', '==', 'article').where('publish', '==', true).get()

  querySnapshot.forEach((doc) => {
    const article = doc.data()
    articles.push(article)
  })

  debug('testLearnArticles')
  testLearnArticles(articles, db)

  const course = (await db.collection("courses").doc('MS-500').get()).data()
  const sortedArticles = articles.sort((a, b) => course.contentOrder.indexOf(a.id) - course.contentOrder.indexOf(b.id))

  for (let i = 0; i < sortedArticles.length; i++) {
    const article = articles[i]
    debug(`building article: ${article.id}`)
    const nextArticle = sortedArticles.length - 1 > i ? sortedArticles[i + 1].slug : 'NEXT_CONTENT'
    const previousArticle = i > 0 ? sortedArticles[i - 1].slug : 'PREVIOUS_CONTENT'

    if (!article.error) {
      let articleHtml = draftToHtml(article.article)
        .replace(/style=".*?">/g, '>')
        .replaceAll('<br>', '<br/>')
        .replaceAll('{', '&#123;')
        .replaceAll('}', '&#125;')

      articleHtml = articleHtml.replaceAll('<h2>', `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8622067882965868" crossorigin="anonymous"></script>
<ins class="adsbygoogle" style="display:block; text-align:center;" data-ad-layout="in-article" data-ad-format="fluid" data-ad-client="ca-pub-8622067882965868" data-ad-slot="7727101456"></ins>
<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
<h2>`)

      const newFile = template.replace('{COURSE:true, sections:[]}', stringify(course))
        .replace('{ARTICLE: true}', stringify(article))
        .replace('<ARTICLE />', articleHtml)
        .replace('NEXT_CONTENT', nextArticle)
        .replace('PREVIOUS_CONTENT', previousArticle)
        .replace('CURRENT_SLUG', article.slug)

      fs.writeFileSync(`./src/pages/course/ms-500/learn/${article.slug}.js`, newFile)
    }
  }
}

const deleteLearnArticles = () => {
  if (fs.existsSync('./src/pages/course/ms-500/learn'))
    fs.rmSync('./src/pages/course/ms-500/learn',  {recursive: true})

  fs.mkdirSync('./src/pages/course/ms-500/learn')
}

export default buildLearnArticles
