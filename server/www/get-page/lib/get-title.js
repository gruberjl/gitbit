const {logError} = require('../../lib/log')

const getTitle = (tenantDoc, pageDoc) => {
  if (pageDoc && pageDoc.title)
    return pageDoc.title

  if (tenantDoc && tenantDoc.title)
    return tenantDoc.title

  logError({
    message: 'could not set page title',
    file: 'server/get-page/lib/get-title.js',
    function: 'getTitle',
    tenantDoc,
    pageDoc
  })

  return 'Set Title'
}

module.exports = {getTitle}
