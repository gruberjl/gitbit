const C = require('../consts')

describe('server/lib/db/consts.js', () => {
  test('should resolve to', () => {
    expect(C).toEqual({
      DB_NAME: {
        HOSTNAMES: 'hostnames',
        TENANTS: 'tenants',
        PAGES: 'pages',
        TEMPLATES: 'templates',
        USERS: 'users',
        SESSIONS: 'sessions',
        LOGS: 'logs'
      },
      SERVER: '', // 'http://localhost:5984/',
      DB_PATH: {
        HOSTNAMES: 'hostnames', // 'http://localhost:5984/hostnames',
        TENANTS: 'tenants', // 'http://localhost:5984/tenants',
        PAGES: 'pages',
        TEMPLATES: 'templates',
        USERS: 'users',
        SESSIONS: 'sessions',
        LOGS: 'logs'
      }
    })
  })
})
