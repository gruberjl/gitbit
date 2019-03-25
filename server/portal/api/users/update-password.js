const bcrypt = require('bcryptjs')
const clone = require('clone-deep')
const db = require('../../../lib/db')
const {authorize} = require('../../auth')

const updatePassword = async (req, res) => {
  const data = clone(req.user)

  data.password = bcrypt.hashSync(req.body.newPassword, 10)

  const doc = await db.put('users', data)

  if (doc.error)
    return res.status(400).json({error: doc.error})

  return res.status(200).json({doc})
}

module.exports = {updatePassword: [authorize, updatePassword]}
