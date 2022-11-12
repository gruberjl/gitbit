import fs from 'fs'
const debug = require('debug')('gitbit:build-readme')

const buildReadMe = async () => {
  const course = (await import('../src/data/course.js')).default
  const questions = (await import('../src/data/questions.js')).default
  const lessons = (await import('../src/data/contents.js')).default
    .sort((a, b) => course.contentOrder.indexOf(a.id) - course.contentOrder.indexOf(b.id))
  const testQuestions = (await import('../src/data/tests.js')).default
    .sort((a, b) => course.contentOrder.indexOf(a.id) - course.contentOrder.indexOf(b.id))

  const questionsString = questions.reduce((stringOutput, doc) => {
    let output = doc.question.replace(/\r?\n|\r/g, ' ').replace(/\s\s+/g, ' ')
    output = `* [${output.trim()}](https:\/\/www.gitbit.org\/course\/ms-500\/question\/${doc.id})\n`
    return stringOutput + output
  }, '')

  const lessonsString = lessons.reduce((stringOutput, lesson) => {
    let output = `* [${lesson.title.trim()}](https:\/\/www.gitbit.org\/course\/ms-500\/learn\/${lesson.slug})\n`
    return stringOutput + output
  }, '')

  let testQuestionString = ''
  testQuestions.forEach(test => {
    testQuestionString += `* [${test.title.trim()}](https:\/\/www.gitbit.org\/course\/ms-500\/test\/${test.slug})\n`
    Object.values(test.questions).forEach(question => {
      testQuestionString += `  * [${question.title.trim()}](https:\/\/www.gitbit.org\/course\/ms-500\/test\/${test.slug}/question/${question.slug})\n`
    })
  })

  const file = fs.readFileSync('./README-original.md', 'utf8')
    .replace('INSERT_QUESTIONS_HERE', questionsString)
    .replace('INSERT_LESSONS_HERE', lessonsString)
    .replace('INSERT_TEST_QUESTIONS_HERE', testQuestionString)

  fs.writeFileSync('./README.md', file)
}

export default buildReadMe
