const {update} = require('../update')
const {pages} = require('../dbs')

describe('server/lib/db/update.js', () => {
  let doc
  beforeAll(async () => {
    await pages.put({_id: 'u1'})
    doc = await pages.get('u1')
  })

  afterAll(async () => {
    const u1 = await pages.get('u1')
    await pages.remove(u1)
  })

  test('should update item', () => update('pages', Object.assign({name: 'b'}, doc))
    .then((res) => {
      expect(res.id).toEqual('u1')
      expect(res.ok).toEqual(true)
      expect(res.error).toBeUndefined()
      expect(typeof res.rev).toEqual('string')
    }))

  test('should error because of conflict', () => update('pages', Object.assign({name: 'c'}, doc))
    .then((res) => {
      expect(res.error).toEqual({
        status: 409,
        name: 'conflict',
        message: 'Document update conflict',
        error: true,
        id: 'u1',
        docId: 'u1'
      })
    }))
})
