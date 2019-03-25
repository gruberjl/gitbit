const {create} = require('../create')
const {pages} = require('../dbs')

describe('server/lib/db/create.js', () => {
  afterAll(async () => {
    const doc = await pages.get('c1')
    await pages.remove(doc)
  })

  test('should create item', () => create('pages', {_id: 'c1', a: 'a'})
    .then((res) => {
      expect(res._id).toEqual('c1')
      expect(res.a).toEqual('a')
      expect(typeof res._rev).toEqual('string')
      expect(res.error).toBeUndefined()
    })
    .then(() => pages.get('c1'))
    .then((response) => {
      expect(response._id).toEqual('c1')
      expect(typeof response._rev).toEqual('string')
    }))

  test('should error because _id is not unique', () => create('pages', {_id: 'c1'})
    .then((res) => {
      expect(res.error).toEqual({
        status: 409,
        name: 'conflict',
        message: 'Document update conflict',
        error: true,
        id: 'c1',
        docId: 'c1'
      })
    }))
})
