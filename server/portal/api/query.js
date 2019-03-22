const db = require('../../www/lib/db')

const query = async (req, res) => {
  const startkey = `${req.user.tenant}/`
  const endkey = `${req.user.tenant}/\ufff0`
  const options = {startkey, endkey, include_docs: true}

  const response = await db.allDocs(req.params.dbName, options)

  if (response.error)
    res.status(400).json({error: response.error})
  else {
    const docs = response.rows.map(row => row.doc)
    res.status(200).json({docs})
  }
}

module.exports = {query}
