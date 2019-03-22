const buildPageContext = (tenant, page, protocol, hostname, path, query) => ({
  tenant,
  page,
  protocol,
  hostname,
  path,
  query
})

module.exports = {buildPageContext}
