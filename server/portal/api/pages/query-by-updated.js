const {pages} = require('../../../lib/orm')
const {authorize} = require('../../auth')

const queryByUpdated = async (req, res) => {
  const docs = await pages.queryByUpdated(req.user.tenant)

  if (docs.error)
    return res.status(400).json({error: docs.error})

  return res.status(200).json({docs})
}

module.exports = {queryByUpdated: [authorize, queryByUpdated]}
