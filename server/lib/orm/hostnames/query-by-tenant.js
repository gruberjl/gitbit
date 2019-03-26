const db = require('../../db').dbs.hostnames

const queryByTenant = async (tenantId) => {
  const options = {
    selector: {
      tenant: tenantId
    },
    use_index: 'byTenant'
  }

  const response = await db.find(options)

  return response.docs
}

module.exports = {queryByTenant}
