const db = require('../../db').dbs.pages

const queryByPublished = async (tenantId, hasPublished) => {
  const options = {
    selector: {
      tenant: tenantId
    },
    sort: [{publishTime: 'desc'}],
    use_index: 'byPublished'
  }

  if (hasPublished)
    options.selector.publishTime = {$lte: (new Date()).toISOString()}

  const response = await db.find(options)

  return response.docs
}

module.exports = {queryByPublished}
