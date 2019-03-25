const db = require('../../db').dbs.pages

const findByUrl = async (tenantId, slug) => {
  const response = await db.pages.find({
    selector: {
      tenant: tenantId,
      slug
    },
    use_index: 'byUrl',
    limit: 1
  })

  const doc = response.docs[0]

  if (!doc)
    return {
      error: {
        status: 404,
        name: 'not_found',
        message: 'missing',
        error: true,
        reason: 'missing'
      }
    }

  return doc
}

module.exports = {findByUrl}
