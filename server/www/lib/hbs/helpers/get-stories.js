const clone = require('clone-deep')
const {db} = require('../../db')
const {logError} = require('../../log')

function getStories(...args) {
  const limit = args[0].hash.limit || 10
  const page = args[0].hash.page || 1
  const skip = limit * (page - 1)
  // eslint-disable-next-line
  const include_docs = args[0].hash.include_docs || false
  const startkey = `${this.tenant._id}/`
  const endkey = `${this.tenant._id}/\ufff0`

  return db.pages.query('view/for_feed', {limit, skip, include_docs, startkey, endkey}).then((data) => {
    const stories = data.rows.map(row => row.value)
    return args[0].fn({stories: JSON.stringify(stories)})
  }).catch((e) => {
    const error = clone(e)
    error.msg = 'Error querying for stories in server/lib/hbs/helpers/get-stories.js'
    logError(error)
    return args[0].fn({stories: []})
  })
}

module.exports = {getStories}
