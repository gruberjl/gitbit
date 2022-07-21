import fs from 'fs'
import admin from "firebase-admin"
const {getApps} = require("firebase-admin/app")
import serviceAccount from "./firestore.json"
import buildQuestionPage from './build-question-page'
const debug = require('debug')('gitbit:build-question-pages')

if ( !getApps().length ) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-server-9d634.firebaseio.com"
  })
}

const db = admin.firestore()

const buildQuestionPages = async () => {
  deleteQuestions()
  const questions = []

  const querySnapshot = await db.collection("Tests").doc("MS-500").collection('Questions').get()

  querySnapshot.forEach((doc) => {
    const question = doc.data()
    question.id = doc.id
    questions.push(question)
  })

  for (let i = 0; i < questions.length; i++) {
    await buildQuestionPage(questions[i])
  }
}

const deleteQuestions = () => {
  if (fs.existsSync('./src/pages/course/ms-500/question'))
    fs.rmSync('./src/pages/course/ms-500/question',  {recursive: true})

  fs.mkdirSync('./src/pages/course/ms-500/question')
}

export default buildQuestionPages
