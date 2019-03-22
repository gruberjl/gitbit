const moment = require('moment')
const clone = require('clone-deep')
const {saveBase64} = require('../../images')

const beforeSave = async (tenantId, record) => {
  const r = clone(record)

  if (r.featuredImage.startsWith('data')) {
    const featuredImage = await saveBase64(tenantId, r.featuredImage)
    if (featuredImage.error)
      return {error: featuredImage.error}
    r.featuredImage = featuredImage.versions.original.url
  }

  return {record: r}
}

const isPublished = (page) => {
  if (!moment(page.publishTime).isValid())
    return false

  if (moment(page.publishTime).isAfter(moment.utc()))
    return false

  return true
}

module.exports = {beforeSave, isPublished}
