const {destroy} = require('../destroy')
const {pages} = require('../dbs')

describe('server/lib/db/destroy.js', () => {
  let doc
  beforeAll(async () => {
    await pages.put({_id: 'd1'})
    doc = await pages.get('d1')
  })

  test('should destroy item', () => destroy('pages', doc)
    .then((res) => {
      expect(res.id).toEqual('d1')
      expect(res.ok).toEqual(true)
      expect(typeof res.rev).toEqual('string')
    }))

  test('should error because doc does not exists', () => destroy('pages', 'd2')
    .then((res) => {
      expect(res.error).toEqual({
        status: 404,
        name: 'not_found',
        message: 'missing',
        error: true,
        reason: 'deleted',
        id: undefined,
        docId: undefined
      })
    }))
})
