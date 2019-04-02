const db = require('../../db').dbs.pages

const queryByUpdated = async (tenantId) => {
  const options = {
    selector: {
      tenant: tenantId
    },
    fields: ['_id', '_rev', 'title', 'slug', 'template', 'publishTime', 'updateTime'],
    use_index: 'byUpdated',
    sort: [{updateTime: 'desc'}]
  }

  const response = await db.find(options)

  return response.docs
}

module.exports = {queryByUpdated}
