const cloneDeep = require('clone-deep')
const generate = require('nanoid')
const db = require('../../../lib/db')
const {authorize} = require('../../auth')

const save = async (req, res) => {
  const data = cloneDeep(req.body)

  if (!data._id)
    data._id = generate()

  data.tenant = req.user.tenant

  const doc = await db.put('templates', data)

  if (doc.error)
    return res.status(400).json({error: doc.error})

  return res.status(200).json({doc})
}

module.exports = {save: [authorize, save]}
