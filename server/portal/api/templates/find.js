const db = require('../../../lib/db')
const {authorize} = require('../../auth')

const find = async (req, res) => {
  const doc = await db.find('templates', req.query.id)

  if (doc.error)
    res.status(400).json({error: doc.error})
  else
    res.status(200).json({doc})
}

module.exports = {find: [authorize, find]}
