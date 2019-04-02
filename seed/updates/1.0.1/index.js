/* eslint no-console: 0 */
process.env.NODE_ENV = 'production'
const clone = require('clone-deep')
const db = require('../../../server/lib/db').dbs.pages

const addUpdateTimeToPages = async () => {
  const docs = (await db.allDocs({include_docs: true}))
    .rows.map(row => row.doc)
    .filter(doc => !doc._id.startsWith('_design'))

  const newDocs = docs.map((doc) => {
    const d = clone(doc)
    d.updateTime = (new Date()).toISOString()
    return d
  })

  const res = await db.bulkDocs(newDocs)

  console.log(res)
}

addUpdateTimeToPages()
