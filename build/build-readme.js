import fs from 'fs'
const debug = require('debug')('gitbit:build-readme')

const buildReadMe = async () => {
  const course = (await import('../src/data/course.js')).default
  const blogArticles = (await import('../src/data/ms500-blog-articles.js')).default
  const lessons = (await import('../src/data/contents.js')).default
    .sort((a, b) => course.contentOrder.indexOf(a.id) - course.contentOrder.indexOf(b.id))
  const testQuestions = (await import('../src/data/tests.js')).default
    .sort((a, b) => course.contentOrder.indexOf(a.id) - course.contentOrder.indexOf(b.id))

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

  const blogArticlesString = blogArticles.reduce((stringOutput, article) => {
    let output = `* [${article.title.trim()}](https:\/\/www.gitbit.org\/course\/ms-500\/blog\/${article.slug})\n`
    return stringOutput + output
  }, '')


  const file = fs.readFileSync('./README-original.md', 'utf8')
    .replace('INSERT_LESSONS_HERE', lessonsString)
    .replace('INSERT_TEST_QUESTIONS_HERE', testQuestionString)
    .replace('INSERT_BLOG_ARTICLES_HERE', blogArticlesString)

  fs.writeFileSync('./README.md', file)
}

export default buildReadMe
