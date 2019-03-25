const merge = require('deepmerge')
const db = require('../../../lib/db')
const {getSafeProps} = require('./get-safe-props')
const {authorize} = require('../../auth')

const save = async (req, res) => {
  const data = merge(req.user, getSafeProps(req.body))
  data._id = req.user._id
  data.tenant = req.user.tenant

  const doc = await db.put('users', data)

  if (doc.error)
    return res.status(400).json({error: doc.error})

  return res.status(200).json({doc})
}

module.exports = {save: [authorize, save]}
