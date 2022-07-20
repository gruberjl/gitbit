import copydir from 'copy-dir'

const buildRoot = () => {
  copydir.sync('./root', './docs')
}

export default buildRoot
