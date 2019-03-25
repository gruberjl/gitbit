/* eslint global-require:0, no-await-in-loop:0 */
const {db} = require('../server/lib/db')

const PAGES = [require('./PAGE_HOME'), require('./PAGE_LANDING_1'), require('./PAGE_404'), require('./PAGE_STORY1')]
const TEMPLATES = [require('./TEMPLATE_HOME'), require('./TEMPLATE_LANDING'), require('./TEMPLATE_404'), require('./TEMPLATE_STORY')]
const USERS = [require('./USER_ADMIN')]

const seed = async () => {
  await require('./design-docs')
  await db.hostnames.put({_id: 'localhost', tenant: 'localhost'})
  await db.tenants.put(require('./TENANT_LOCALHOST'))

  for (let p = 0; p < PAGES.length; p++)
    await db.pages.put(PAGES[p])

  for (let t = 0; t < TEMPLATES.length; t++)
    await db.templates.put(TEMPLATES[t])

  for (let u = 0; u < USERS.length; u++)
    await db.users.put(USERS[u])
}

seed()
