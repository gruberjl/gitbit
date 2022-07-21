const fs = require('fs')
const admin = require("firebase-admin")
const {getApps} = require("firebase-admin/app")
const serviceAccount = require("./firestore.json")
const draftToHtml = require('draftjs-to-html')
const { convertFromRaw } = require('draft-js')
const getContents = require('./get-contents').default

if ( !getApps().length ) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-server-9d634.firebaseio.com"
  })
}

const db = admin.firestore()

const run = async () => {
  const course = await buildCourse()
  await buildQuestions()
  await buildContents(course)
}

const buildQuestions = async () => {
  const questions = []

  const querySnapshot = await db.collection("Tests").doc("MS-500").collection('Questions').get()

  querySnapshot.forEach((doc) => {
    const question = doc.data()
    question.question = convertFromRaw(question.question).getPlainText()
    question.id = doc.id
    questions.push(question)
  })

  const dataTemplate = fs.readFileSync('./src/templates/data.js', 'utf8').toString()

  const contentsRead = dataTemplate.replace('0', JSON.stringify(questions))
  fs.writeFileSync('./src/data/questions.js', contentsRead)
}

const buildContents = async (course) => {
  const contents = await getContents()

  const dataTemplate = fs.readFileSync('./src/templates/data.js', 'utf8').toString()
  const contentsRead = dataTemplate.replace('0', JSON.stringify(contents))
  fs.writeFileSync('./src/data/contents.js', contentsRead)
}

const buildCourse = async () => {
  const courseObj = await db.collection("courses").doc('MS-500').get()
  const course = courseObj.data()
  course.id = courseObj.id

  const dataTemplate = fs.readFileSync('./src/templates/data.js', 'utf8').toString()
  const contentsRead = dataTemplate.replace('0', JSON.stringify(course))
  fs.writeFileSync('./src/data/course.js', contentsRead)

  return course
}

export default run
