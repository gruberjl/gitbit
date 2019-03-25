const {templates} = require('../../../lib/orm')
const {authorize} = require('../../auth')

const query = async (req, res) => {
  const docs = await templates.queryByTenant(req.user.tenant)

  if (docs.error)
    return res.status(400).json({error: docs.error})

  return res.status(200).json({docs})
}

module.exports = {query: [authorize, query]}
