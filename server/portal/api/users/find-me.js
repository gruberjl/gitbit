const db = require('../../../lib/db')
const {getSafeProps} = require('./get-safe-props')
const {authorize} = require('../../auth')

const findMe = async (req, res) => {
  const data = await db.find('users', req.user._id)

  if (data.error)
    return res.status(400).json({error: data.error})

  const doc = getSafeProps(data)

  return res.status(200).json({doc})
}

module.exports = {findMe: [authorize, findMe]}
