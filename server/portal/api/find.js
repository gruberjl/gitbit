const db = require('../../www/lib/db')
const {buildId} = require('../../www/lib/active-record')

const find = async (req, res) => {
  const id = buildId(req.user.tenant, req.params.dbName, req.query.id)
  const doc = await db.find(req.params.dbName, id)

  if (doc.error)
    res.status(400).json({error: doc.error})
  else
    res.status(200).json({doc})
}

module.exports = {find}
