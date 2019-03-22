module.exports = {
  _id: '_design/view',
  views: {
    by_tenant: {
      map: 'function (doc) {emit(doc.tenant);};'
    }
  }
}
