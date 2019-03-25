module.exports = {
  _id: '_design/view',
  views: {
    for_sitemap: {
      map: "function (doc) {emit(doc._id.split('/')[0], {slug: doc.slug, publishTime: doc.publishTime});};"
    },
    for_feed: {
      map: "function (doc) { if (doc.template === 'story' && new Date(doc.publishTime) <= new Date()) emit(doc._id.split('/')[0] + '/' + doc.publishTime, {slug: doc.slug, publishTime: doc.publishTime, title: doc.title})}"
    },
    by_url: {
      map: 'function (doc) {if (doc.slug) emit([doc.tenant, doc.slug])};'
    }
  }
}
