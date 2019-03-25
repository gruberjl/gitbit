const db = require('../../../lib/db')
const {authorize} = require('../../auth')

const query = async (req, res) => {
  const startkey = `${req.user.tenant}/`
  const endkey = `${req.user.tenant}/\ufff0`
  const options = {startkey, endkey, include_docs: true}

  const response = await db.allDocs('pages', options)

  if (response.error)
    res.status(400).json({error: response.error})
  else {
    const docs = response.rows.map(row => row.doc)
    res.status(200).json({docs})
  }
}

module.exports = {query: [authorize, query]}
