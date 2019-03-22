const {find} = require('../db')

const getTenant = async (req, res, next) => {
  const hostname = await find('hostnames', req.hostname)
  if (hostname.error)
    return res.status(520).send(hostname.error)

  req.tenant = await find('tenants', hostname.tenant)
  if (req.tenant.error)
    return res.status(521).send(req.tenant.error)

  return next()
}

module.exports = {getTenant}
