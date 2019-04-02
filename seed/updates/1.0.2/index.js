/* eslint no-console: 0 */
// process.env.NODE_ENV = 'production'
const db = require('../../../server/lib/db').dbs.pages
const {queryByUpdated} = require('../../../server/lib/orm').pages

const addDesignByUpdatedToPages = async () => {
  const res = await db.createIndex({
    index: {
      fields: ['tenant', 'updateTime'],
      ddoc: 'byUpdated'
    }
  })

  console.log(res)
}

const checkQueryByUpdated = async () => {
  const docs = await queryByUpdated('localhost')
  console.log(docs)
}

addDesignByUpdatedToPages()
checkQueryByUpdated()
