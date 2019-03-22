const {buildId} = require('../build-id')

describe('server/gitbit/api/lib/build-id.js', () => {
  test('should add tenant/', () => {
    expect(buildId('t', 'i')).toEqual('t/i')
  })

  test('should add tenant', () => {
    expect(buildId('t', '/i')).toEqual('t/i')
  })

  test('should return id', () => {
    expect(buildId('t', 't/i')).toEqual('t/i')
  })
})
