const env = require('../../../lib/env/secure')

const DB_NAME = {
  HOSTNAMES: 'hostnames',
  TENANTS: 'tenants',
  PAGES: 'pages',
  TEMPLATES: 'templates',
  USERS: 'users',
  SESSIONS: 'sessions',
  LOGS: 'logs'
}

const DB_PATH = Object.keys(DB_NAME).reduce((acc, key) => {
  acc[key] = `${env.DB_URL}${DB_NAME[key]}`
  return acc
}, {})

module.exports = {
  DB_NAME,
  SERVER: env.DB_URL,
  DB_PATH
}
