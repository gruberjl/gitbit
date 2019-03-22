const {beforeSave} = require('./before-save')
const {buildId} = require('./build-id')
const models = require('./models')

module.exports = {beforeSave, buildId, models}
