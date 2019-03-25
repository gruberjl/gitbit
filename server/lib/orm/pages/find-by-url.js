const db = require('../../db').dbs.pages

const findByUrl = async (tenantId, slug) => {
  const response = await db.query('view/by_url', {key: [tenantId, slug], include_docs: true, limit: 1})

  if (!response.rows[0])
    return {
      error: {
        status: 404,
        name: 'not_found',
        message: 'missing',
        error: true,
        reason: 'missing'
      }
    }

  return response.rows[0].doc
}

module.exports = {findByUrl}
