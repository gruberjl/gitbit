const db = require('../../../lib/db')
const {authorize} = require('../../auth')

const findMe = async (req, res) => {
  const doc = await db.find('tenants', req.user.tenant)

  if (doc.error)
    res.status(400).json({error: doc.error})
  else
    res.status(200).json({doc})
}

module.exports = {findMe: [authorize, findMe]}
