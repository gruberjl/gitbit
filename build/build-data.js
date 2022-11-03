const fs = require('fs')
const admin = require("firebase-admin")
const {getApps} = require("firebase-admin/app")
const serviceAccount = require("./firestore.json")
const draftToHtml = require('draftjs-to-html')
const { convertFromRaw } = require('draft-js')
const getContents = require('./get-contents').default
const debug = require('debug')('gitbit:build-data')
const stringify = require('json-stable-stringify')

if ( !getApps().length ) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://web-server-9d634.firebaseio.com"
  })
}

const db = admin.firestore()

const run = async () => {
  debug('buildCourse')
  const course = await buildCourse()
  debug('buildQuestions')
  await buildQuestions()
  debug('buildContents')
  await buildContents(course)
  debug('buildTestQuestions')
  await buildTests()
  debug('buildBlogArticles')
  await buildBlogArticles()
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

  const contentsRead = dataTemplate.replace('0', stringify(questions))
  fs.writeFileSync('./src/data/questions.js', contentsRead)
}

const buildTests = async () => {
  const tests = []

  const querySnapshot = await db.collection("courses").doc('MS-500').collection('contents').where('publish', '==', true).where('type', '==', 'test').get()

  querySnapshot.forEach((doc) => {
    const test = doc.data()
    test.id = doc.id
    delete test.answers
    Object.keys(test.questions).forEach(questionId => {
      delete test.questions[questionId].referencesHtml
      delete test.questions[questionId].questionHtml
      delete test.questions[questionId].references
      delete test.questions[questionId].question
      delete test.questions[questionId].answerOptions
    })
    tests.push(test)
  })

  const dataTemplate = fs.readFileSync('./src/templates/data.js', 'utf8').toString()

  const contentsRead = dataTemplate.replace('0', stringify(tests))
  fs.writeFileSync('./src/data/tests.js', contentsRead)
}

const buildContents = async (course) => {
  const contents = await getContents()

  const dataTemplate = fs.readFileSync('./src/templates/data.js', 'utf8').toString()
  const contentsRead = dataTemplate.replace('0', stringify(contents))
  fs.writeFileSync('./src/data/contents.js', contentsRead)
}

const buildCourse = async () => {
  const courseObj = await db.collection("courses").doc('MS-500').get()
  const course = courseObj.data()
  course.id = courseObj.id

  const dataTemplate = fs.readFileSync('./src/templates/data.js', 'utf8').toString()
  const contentsRead = dataTemplate.replace('0', stringify(course))
  fs.writeFileSync('./src/data/course.js', contentsRead)

  return course
}

const buildBlogArticles = async () => {
  const querySnapshot = await db.collection("courses").doc('MS-500').collection('blog').where('publish', '==', true).get()
  const articles = []

  querySnapshot.forEach((doc) => {
    const article = doc.data()
    delete article.article
    articles.push(article)
  })

  const sortedArticles = articles.sort((a, b) => {
    const aComps = a.datePublished.split("/")
    const bComps = b.datePublished.split("/")
    const aDate = new Date(aComps[0], aComps[1], aComps[2])
    const bDate = new Date(bComps[0], bComps[1], bComps[2])
    return bDate.getTime() - aDate.getTime()
  })

  const dataTemplate = fs.readFileSync('./src/templates/data.js', 'utf8').toString()
  const contentsRead = dataTemplate.replace('0', stringify(sortedArticles))
  fs.writeFileSync('./src/data/ms500-blog-articles.js', contentsRead)
}

run()
export default run
