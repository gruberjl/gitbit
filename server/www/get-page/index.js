const moment = require('moment')
const db = require('../lib/db')
const {pages} = require('../../lib/orm')
const {buildPageContext, render} = require('../lib/hbs')

const build404 = async (tenant, protocol, hostname, path, query) => {
  const pageDoc = await pages.findByUrl(tenant._id, '~404')
  const templateDoc = await db.find('templates', pageDoc.template)

  const context = buildPageContext(tenant, pageDoc, protocol, hostname, path, query)
  const errorHtml = await render(templateDoc.content, context)
  return errorHtml
}

const getPage = async (req, res) => {
  const {tenant, protocol, hostname, path, query} = req
  const pageDoc = await pages.findByUrl(tenant._id, path)

  if (pageDoc.error) {
    const errorHtml = await build404(tenant, protocol, hostname, path, query)
    return res.send(errorHtml)
  }

  if (!moment(pageDoc.publishTime).isValid()) {
    const errorHtml = await build404(tenant)
    return res.send(errorHtml)
  }

  if (moment(pageDoc.publishTime).isAfter(moment.utc())) {
    const errorHtml = await build404(tenant)
    return res.send(errorHtml)
  }

  const templateDoc = await db.find('templates', pageDoc.template)

  const context = buildPageContext(tenant, pageDoc, protocol, hostname, path, JSON.stringify(query))
  const html = await render(templateDoc.content, context)

  return res.send(html)
}

module.exports = {getPage}
