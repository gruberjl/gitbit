const cloneDeep = require('clone-deep')
const db = require('../../www/lib/db')
const {beforeSave} = require('../../www/lib/active-record')

const create = async (req, res) => {
  const doc = cloneDeep(req.body)

  doc._id = db.buildId(req.user.tenant, doc._id)

  const r = await beforeSave(req.user.tenant, req.params.dbName, doc, req.session)
  if (r.error)
    return res.status(400).json({error: r.error})

  const response = await db.create(req.params.dbName, r.record)

  if (response.error)
    return res.status(400).json({error: response.error})

  doc._rev = response.rev
  return res.status(200).json({doc})
}

module.exports = {create}
