const moment = require('moment')
const db = require('../lib/db')
const {buildPageContext, render} = require('../lib/hbs')

const build404 = async (tenant, protocol, hostname, path, query) => {
  const errorPageId = db.buildId(tenant._id, '404')
  const errorPageDoc = await db.find('pages', errorPageId)

  const errorTemplateId = db.buildId(tenant._id, errorPageDoc.template)
  const errorTemplateDoc = await db.find('templates', errorTemplateId)

  const context = buildPageContext(tenant, errorPageDoc, protocol, hostname, path, query)
  const errorHtml = await render(errorTemplateDoc.content, context)
  return errorHtml
}

const getPage = async (req, res) => {
  const {tenant, protocol, hostname, path, query} = req
  const pageId = db.buildId(tenant._id, path)
  const pageDoc = await db.find('pages', pageId)

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

  const templateId = db.buildId(tenant._id, pageDoc.template)
  const templateDoc = await db.find('templates', templateId)

  const context = buildPageContext(tenant, pageDoc, protocol, hostname, path, JSON.stringify(query))
  const html = await render(templateDoc.content, context)

  return res.send(html)
}

module.exports = {getPage}
