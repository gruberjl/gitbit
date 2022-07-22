import fs from 'fs'
const debug = require('debug')('gitbit:build-readme')

const buildReadMe = async () => {
  const course = (await import('../src/data/course.js')).default
  const questions = (await import('../src/data/questions.js')).default
  const lessons = (await import('../src/data/contents.js')).default
    .sort((a, b) => course.contentOrder.indexOf(a.id) - course.contentOrder.indexOf(b.id))

  const questionsString = questions.reduce((stringOutput, doc) => {
    // [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    let output = doc.question.replace(/\r?\n|\r/g, ' ').replace(/\s\s+/g, ' ')
    output = `* [${output.trim()}](https:\/\/www.gitbit.org\/course\/ms-500\/question\/${doc.id}\)\n`
    return stringOutput + output
  }, '')

  const lessonsString = lessons.reduce((stringOutput, lesson) => {
    // [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
    let output = `* [${lesson.title.trim()}](https:\/\/www.gitbit.org\/course\/ms-500\/learn\/${lesson.slug}\)\n`
    return stringOutput + output
  }, '')

  const file = fs.readFileSync('./README-original.md', 'utf8')
    .replace('INSERT_QUESTIONS_HERE', questionsString)
    .replace('INSERT_LESSONS_HERE', lessonsString)

  fs.writeFileSync('./README.md', file)
}

buildReadMe()
