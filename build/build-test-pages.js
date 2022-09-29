import fs from 'fs'
import admin from "firebase-admin"
import serviceAccount from "./firestore.json"
import buildQuestionPage from './build-question-page'
import sortKeys from './sort-keys'
const debug = require('debug')('gitbit:build-test-pages')
import {convertFromRaw} from 'draft-js'
const {getApps} = require("firebase-admin/app")
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
      fs.mkdirSync(`./src/pages/course/ms-500/test/${test.slug}`)
      fs.mkdirSync(`./src/pages/course/ms-500/test/${test.slug}/question`)

      const testSummaryFile = testSummaryTemplate
        .replace('{TEST: true}', stringify(test))
        .replace('NEXT_CONTENT', nextArticle)
        .replace('PREVIOUS_CONTENT', previousArticle)
      fs.writeFileSync(`./src/pages/course/ms-500/test/${test.slug}/summary.js`, testSummaryFile)

      test.questions = sortKeys(test.questions, {deep: true})
      const questions = Object.values(test.questions)
      for (let q = 0; q < questions.length; q++) {
        const question = questions[q]
        question.answerText = ''

        if (question.type === 'drag-drop') {
          Object.values(test.answers[question.id]).forEach(answer => {
            question.answerText = question.answerText + `${question.answerOptions[answer.answerId].answer}`
            if (!question.answerText.endsWith('.'))
              question.answerText = question.answerText + '. '
          })
        } else if (question.type === 'hot-area') {
          Object.values(test.answers[question.id]).forEach(answer => {
            let answerId = ''
            Object.values(answer).forEach(ans => ans.isCorrect ? answerId = ans.id : '')
            question.answerText = question.answerText  + `${question.answerOptions[answer.id].answers[answerId].text}`
            if (!question.answerText.endsWith('.'))
              question.answerText = question.answerText + '. '
          })
        } else if (question.type === 'multiple-choice') {
          const answerIds = Object.values(test.answers[question.id]).filter(answer => answer.isCorrect)
          answerIds.forEach(answer => {
            question.answerText = question.answerText  + `${convertFromRaw(question.answerOptions[answer.id].answer).getPlainText().replace(/\r?\n|\r/g, ' ').replace(/\s\s+/g, ' ')}`
            if (!question.answerText.endsWith('.'))
              question.answerText = question.answerText + '. '
          })
        } else if (question.type === 'build-list') {
          const answers = Object.values(test.answers[question.id]).sort((a, b) => a.idx - b.idx)
          answers.forEach(answer => {
            question.answerText = question.answerText  + `${question.answerOptions[answer.id].answer}`
            if (!question.answerText.endsWith('.'))
              question.answerText = question.answerText + '. '
          })
        } else {
          console.error(`unknown question type: ${question.type}`)
        }
        question.answerText = question.answerText.trim()

        const testQuestionFile = testQuestionTemplate
          .replace('{TEST: true}', stringify(test))
          .replace('{QUESTION: true}', stringify(question))
        fs.writeFileSync(`./src/pages/course/ms-500/test/${test.slug}/question/${question.slug}.js`, testQuestionFile)
      }

      test.questions = questions.reduce((obj, question) => {
        obj[question.id] = question
        return obj
      }, {})
      const testTitleFile = testTitleTemplate.replace('{TEST: true}', stringify(test))
      fs.writeFileSync(`./src/pages/course/ms-500/test/${test.slug}.js`, testTitleFile)
    }
  }
}

const deleteTests = () => {
  if (fs.existsSync('./src/pages/course/ms-500/test'))
    fs.rmSync('./src/pages/course/ms-500/test',  {recursive: true})

  fs.mkdirSync('./src/pages/course/ms-500/test')
}
buildTestPages()
export default buildTestPages
