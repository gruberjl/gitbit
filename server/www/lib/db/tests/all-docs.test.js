const {allDocs} = require('../all-docs')
const {pages} = require('../dbs')

describe('server/lib/db/all-docs.js', () => {
  beforeAll(async () => {
    await pages.put({_id: 'q1'})
    await pages.put({_id: 'q2'})
    await pages.put({_id: 'q3'})
  })

  afterAll(async () => {
    const q1 = await pages.get('q1')
    await pages.remove(q1)
    const q2 = await pages.get('q2')
    await pages.remove(q2)
    const q3 = await pages.get('q3')
    await pages.remove(q3)
  })

  test('should query item', () => allDocs('pages', {startkey: 'q2', endkey: 'q3'})
    .then((res) => {
      expect(res.total_rows).toEqual(3)
      expect(res.offset).toEqual(0)
      expect(res.rows.length).toEqual(2)
    }))

  test('should return nothing', () => allDocs('pages', {skip: 10})
    .then((res) => {
      expect(res.total_rows).toEqual(3)
      expect(res.offset).toEqual(10)
      expect(res.rows.length).toEqual(0)
    }))
})
