import copydir from 'copy-dir'
const debug = require('debug')('gitbit:build-root')

const buildRoot = () => {
  debug(`building root`)
  copydir.sync('./root', './docs')
}

export default buildRoot
