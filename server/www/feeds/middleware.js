const {Feed} = require('feed')
const {db} = require('../lib/db')

const getFeed = async (hostname, tenant) => {
  const startkey = `${tenant._id}/`
  const endkey = `${tenant._id}/\ufff0`
  const pageRows = await db.pages.query('view/for_feed', {startkey, endkey})

  if (pageRows.error)
    return {error: pageRows.error}

  const feed = new Feed({
    title: tenant.title,
    description: 'Need too add description',
    id: hostname,
    link: hostname,
    copyright: 'All rights reserved',
    feedLinks: {
      rss: `https://${hostname}/rss.xml`,
      json: `https://${hostname}/feed.json`,
      atom: `https://${hostname}/atom.xml`
    }
  })

  pageRows.rows.map(row => row.value)
    .forEach((page) => {
      feed.addItem({
        title: page.title,
        id: `${hostname}${page.slug}`,
        link: `${hostname}${page.slug}`,
        date: new Date(page.publishTime)
      })
    })

  return feed
}

const getRss = async (req, res) => {
  const feed = await getFeed(req.hostname, req.tenant)
  res.set('Content-Type', 'application/rss+xml')
  res.send(feed.rss2())
}

const getJsonFeed = async (req, res) => {
  const feed = await getFeed(req.hostname, req.tenant)
  res.set('Content-Type', 'application/rss+xml')
  res.send(feed.json1())
}

const getAtom = async (req, res) => {
  const feed = await getFeed(req.hostname, req.tenant)
  res.set('Content-Type', 'application/rss+xml')
  res.send(feed.atom1())
}

module.exports = {getRss, getJsonFeed, getAtom}
