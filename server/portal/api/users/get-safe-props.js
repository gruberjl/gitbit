const clone = require('clone-deep')

const getSafeProps = (doc) => {
  const data = clone(doc)

  return {
    _id: data._id,
    _rev: data._rev,
    email: data.email,
    tenant: data.tenant
  }
}

module.exports = {getSafeProps}
