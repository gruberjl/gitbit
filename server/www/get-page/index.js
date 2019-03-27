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
  res.append('Cache-Control', 'private')
  res.set('Content-Type', 'text/html; charset=utf-8')

  const {tenant, protocol, hostname, path, query} = req
  const pageDoc = await pages.findByUrl(tenant._id, path)

  if (pageDoc.error) {
    const errorHtml = await build404(tenant, protocol, hostname, path, query)
    res.set('Content-Length', Buffer.byteLength(errorHtml, 'utf8'))
    return res.status(404).send(errorHtml)
  }

  if (!moment(pageDoc.publishTime).isValid()) {
    const errorHtml = await build404(tenant)
    res.set('Content-Length', Buffer.byteLength(errorHtml, 'utf8'))
    return res.status(404).send(errorHtml)
  }

  if (moment(pageDoc.publishTime).isAfter(moment.utc())) {
    const errorHtml = await build404(tenant)
    res.set('Content-Length', Buffer.byteLength(errorHtml, 'utf8'))
    return res.status(404).send(errorHtml)
  }

  const templateDoc = await db.find('templates', pageDoc.template)

  const context = buildPageContext(tenant, pageDoc, protocol, hostname, path, JSON.stringify(query))
  const html = await render(templateDoc.content, context)
  res.set('Content-Length', Buffer.byteLength(html, 'utf8'))
  return res.send(html)
}

module.exports = {getPage}
