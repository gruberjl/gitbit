const models = require('./models')

const beforeSave = async (tenantId, dbName, record, session) => {
  if (models[dbName] && models[dbName].beforeSave)
    return models[dbName].beforeSave(tenantId, record, session)

  return {record}
}

module.exports = {beforeSave}
