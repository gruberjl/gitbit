import fs from 'fs'
import draftToHtml from 'draftjs-to-html'
import { convertFromRaw } from 'draft-js'
import admin from "firebase-admin"
const {getApps} = require("firebase-admin/app")
import serviceAccount from "./firestore.json"
const stringify = require('json-stable-stringify')
const debug = require('debug')('gitbit:build-question-page')

const template = fs.readFileSync('./src/templates/question.js', 'utf8')

const buildQuestionPage = async (question) => {
  debug(`building question: ${question.id}`)
  if (typeof question === 'string' || question instanceof String) {
    if ( !getApps().length ) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://web-server-9d634.firebaseio.com"
      })
    }

    const db = admin.firestore()

    const snapshot = await db.collection("Tests").doc("MS-500").collection('Questions').doc(question).get()
    question = snapshot.data()
    question.id = snapshot.id
  }

  const questionHtml = draftToHtml(question.question)
  const referencesHtml = draftToHtml(question.references).replace(/\\/g, '\\\\')
  const questionText = convertFromRaw(question.question).getPlainText().replace(/\r?\n|\r/g, ' ').replace(/\s\s+/g, ' ')

  const newFile = template.replace('-uSPBkNRR', question.id)
    .replace('QUESTION_ID', question.id)
    .replace('This is my question', questionHtml)
    .replace('This is my references', referencesHtml)
    .replace('{question: true}', stringify(question))
    .replace('question text placeholder', questionText)

  fs.writeFileSync(`./src/pages/course/ms-500/question/${question.id}.js`, newFile)
}

export default buildQuestionPage
