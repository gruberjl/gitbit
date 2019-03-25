const cloneDeep = require('clone-deep')
const generate = require('nanoid')
const db = require('../../../lib/db')
const {saveBase64} = require('../../../lib/images')
const {authorize} = require('../../auth')

const save = async (req, res) => {
  const data = cloneDeep(req.body)

  if (!data._id)
    data._id = generate()

  data.tenant = req.user.tenant

  if (data.featuredImage.startsWith('data')) {
    const featuredImage = await saveBase64(data.tenant, data.featuredImage)
    if (featuredImage.error)
      return res.status(452).json({error: featuredImage.error})
    data.featuredImage = featuredImage.versions.original.url
  }

  const doc = await db.put('pages', data)

  if (doc.error)
    return res.status(400).json({error: doc.error})

  return res.status(200).json({doc})
}

module.exports = {save: [authorize, save]}
