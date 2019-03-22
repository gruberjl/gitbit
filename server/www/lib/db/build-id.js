const buildId = (tenantId, docId) => {
  let id

  if (docId.startsWith(`${tenantId}/`))
    id = docId
  else if (docId.startsWith('/'))
    id = `${tenantId}${docId}`
  else
    id = `${tenantId}/${docId}`


  return id
}

module.exports = {buildId}
