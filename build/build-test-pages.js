import fs from 'fs'
import admin from "firebase-admin"
const {getApps} = require("firebase-admin/app")
import serviceAccount from "./firestore.json"
import buildQuestionPage from './build-question-page'
const debug = require('debug')('gitbit:build-test-pages')
const stringify = require('json-stable-stringify')

if ( !getApps().length ) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-server-9d634.firebaseio.com"
  })
}

const db = admin.firestore()
const testTitleTemplate = fs.readFileSync('./src/templates/test-title.js', 'utf8').toString()
const testQuestionTemplate = fs.readFileSync('./src/templates/test-question.js', 'utf8').toString()
const testSummaryTemplate = fs.readFileSync('./src/templates/test-summary.js', 'utf8').toString()

const buildTestPages = async () => {
  debug('deleteTests')
  deleteTests()
  const tests = []

  const querySnapshot = await db.collection("courses").doc('MS-500').collection('contents').where('publish', '==', true).get()

  querySnapshot.forEach((doc) => {
    const test = doc.data()
    tests.push(test)
  })

  const course = (await db.collection("courses").doc('MS-500').get()).data()
  const sortedContent = tests.sort((a, b) => course.contentOrder.indexOf(a.id) - course.contentOrder.indexOf(b.id))

  for (let i = 0; i < sortedContent.length; i++) {
    const test = sortedContent[i]
    debug(`building test: ${test.id}`)
    const nextArticle = sortedContent.length - 1 > i ? `${sortedContent[i + 1].type ==='article' ? 'learn' : 'test'}/${sortedContent[i + 1].slug}` : 'NEXT_CONTENT'
    const previousArticle = i > 0 ? `${sortedContent[i - 1].type==='article' ? 'learn' : 'test'}/${sortedContent[i - 1].slug}` : 'PREVIOUS_CONTENT'

    if (test.type === 'test') {
      const testTitleFile = testTitleTemplate.replace('{TEST: true}', stringify(test))
      fs.writeFileSync(`./src/pages/course/ms-500/test/${test.slug}.js`, testTitleFile)

      fs.mkdirSync(`./src/pages/course/ms-500/test/${test.slug}`)
      fs.mkdirSync(`./src/pages/course/ms-500/test/${test.slug}/question`)

      const testSummaryFile = testSummaryTemplate
        .replace('{TEST: true}', stringify(test))
        .replace('NEXT_CONTENT', nextArticle)
        .replace('PREVIOUS_CONTENT', previousArticle)
      fs.writeFileSync(`./src/pages/course/ms-500/test/${test.slug}/summary.js`, testSummaryFile)

      const questions = Object.values(test.questions)
      for (let q = 0; q < questions.length; q++) {
        const question = questions[q]
        const testQuestionFile = testQuestionTemplate
          .replace('{TEST: true}', stringify(test))
          .replace('{QUESTION: true}', stringify(question))
        fs.writeFileSync(`./src/pages/course/ms-500/test/${test.slug}/question/${question.slug}.js`, testQuestionFile)
      }
    }
  }
}

const deleteTests = () => {
  if (fs.existsSync('./src/pages/course/ms-500/test'))
    fs.rmSync('./src/pages/course/ms-500/test',  {recursive: true})

  fs.mkdirSync('./src/pages/course/ms-500/test')
}

export default buildTestPages
