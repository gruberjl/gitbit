const cloneDeep = require('clone-deep')
const db = require('../../www/lib/db')

const remove = async (req, res) => {
  const doc = cloneDeep(req.body)
  doc._id = db.buildId(req.user.tenant, doc._id)

  const response = await db.destroy(req.params.dbName, doc)

  if (response.error)
    res.status(400).json({error: response.error})
  else {
    doc._rev = response.rev
    res.status(200).json({doc})
  }
}

module.exports = {remove}
