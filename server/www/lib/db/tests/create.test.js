const {create} = require('../create')
const {pages} = require('../dbs')

describe('server/lib/db/create.js', () => {
  afterAll(async () => {
    const doc = await pages.get('c1')
    await pages.remove(doc)
  })

  test('should create item', () => create('pages', {_id: 'c1'})
    .then((res) => {
      expect(res.id).toEqual('c1')
      expect(res.ok).toEqual(true)
      expect(res.error).toBeUndefined()
      expect(typeof res.rev).toEqual('string')
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
