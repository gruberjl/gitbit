const {db} = require('../server/lib/db')
const DESIGN_HOSTNAMES = require('./DESIGN_HOSTNAMES')
const DESIGN_PAGES = require('./DESIGN_PAGES')

const seedDesignDocs = async () => {
  await db.hostnames.put(DESIGN_HOSTNAMES)
  await db.pages.put(DESIGN_PAGES)

  await db.pages.createIndex({
    index: {
      fields: ['tenant', 'slug'],
      ddoc: 'byUrl'
    }
  })
}

seedDesignDocs()
