const models = require('./models')

const buildId = (tenantId, dbName, docId) => {
  if (models[dbName] && models[dbName].buildId)
    return models[dbName].buildId(tenantId, docId)

  if (docId.startsWith(`${tenantId}/`))
    return docId
  if (docId.startsWith('/'))
    return `${tenantId}${docId}`

  return `${tenantId}/${docId}`
}

module.exports = {buildId}
