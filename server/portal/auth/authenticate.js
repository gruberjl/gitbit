const bcrypt = require('bcryptjs')
const generate = require('nanoid/generate')
const db = require('../../www/lib/db')
const {flat} = require('../../www/lib/flat')
const {template} = require('./login-page')
const {authorize} = require('./authorize')

const authenticate = async (req, res) => {
  const _id = req.body.email
  const user = await db.find('users', _id)

  if (user.error) {
    const html = await template({error: user.error})
    return res.send(html)
  }

  const validPass = await flat(bcrypt.compare(req.body.password, user.password))
  if (validPass.error) {
    const html = await template({error: validPass.error})
    return res.send(html)
  }

  if (!validPass) {
    const html = await template({error: {message: 'Incorrect password.'}})
    return res.send(html)
  }

  const dt = new Date()
  const oneYear = new Date(dt.setFullYear(dt.getFullYear() + 1))

  const sessionDoc = await db.create('sessions', {
    _id: `${user.tenant}-${generate('1234567890abcdefghijklmnopqrstuvwxyz', 10)}`,
    userId: user._id,
    userRev: user._rev,
    created: (new Date()).toISOString(),
    expires: req.body.remember ? oneYear.toISOString() : 0
  })

  if (sessionDoc.error) {
    const html = await template({error: sessionDoc.error})
    return res.send(html)
  }

  res.cookie('ses', sessionDoc.id, {signed: true, httpOnly: true, expires: req.body.remember ? oneYear : 0})

  return res.redirect('/')
}

module.exports = {authenticate: [authenticate, authorize]}
