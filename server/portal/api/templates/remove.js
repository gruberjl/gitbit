const cloneDeep = require('clone-deep')
const db = require('../../../lib/db')
const {authorize} = require('../../auth')

const remove = async (req, res) => {
  const doc = cloneDeep(req.body)
  const response = await db.destroy('templates', req.body)

  if (response.error)
    res.status(400).json({error: response.error})
  else {
    doc._rev = response.rev
    res.status(200).json({doc})
  }
}

module.exports = {remove: [authorize, remove]}
