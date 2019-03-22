/* eslint prefer-promise-reject-errors:0 */
const {flat, flatCb} = require('../')

describe('server/lib/flat/index.js', () => {
  describe('flat', () => {
    test('promise should return value', () => {
      flat(Promise.resolve({a: 1})).then((r) => {
        expect(r).toEqual({a: 1})
      })
    })

    test('promise should return error', () => {
      flat(Promise.reject({a: 1})).then((r) => {
        expect(r).toEqual({error: {a: 1}})
      })
    })

    test('callback should return value', () => {
      const a = (cb) => {
        cb(null, {d: 1})
      }

      flat(a).then((r) => {
        expect(r).toEqual({d: 1})
      })
    })

    test('callback should return error', () => {
      const a = (b, cb) => {
        cb({d: 1})
      }

      flat(a, 'b').then((r) => {
        expect(r).toEqual({error: {d: 1}})
      })
    })
  })

  describe('flatCb', () => {
    test('callback should return value', () => {
      const a = (b, cb) => {
        cb(undefined, b)
      }

      flatCb(a)('b').then((r) => {
        expect(r).toEqual({value: 'b'})
      })
    })

    test('callback should return error', () => {
      const a = (b, cb) => {
        cb({d: 1}, b)
      }

      flatCb(a)('b').then((r) => {
        expect(r).toEqual({value: 'b', error: {d: 1}})
      })
    })
  })
})
