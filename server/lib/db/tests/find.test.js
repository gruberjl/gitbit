const {find} = require('../find')
const {pages} = require('../dbs')

describe('server/lib/db/find.js', () => {
  beforeAll(async () => {
    await pages.put({_id: 'f1'})
  })

  afterAll(async () => {
    const doc = await pages.get('f1')
    await pages.remove(doc)
  })

  test('should find item', () => find('pages', 'f1')
    .then((res) => {
      expect(res._id).toEqual('f1')
      expect(typeof res._rev).toEqual('string')
    }))

  test('should error because doc does not exists', () => find('pages', 'f2')
    .then((res) => {
      expect(res.error).toEqual({
        status: 404,
        name: 'not_found',
        message: 'missing',
        error: true,
        reason: 'missing',
        docId: 'f2'
      })
    }))
})
