const db = require('../../www/lib/db')

const authorize = async (req, res, next) => {
  const sessionId = req.signedCookies.ses

  if (!sessionId)
    return res.redirect('/login?error=bad-session-id')

  const sessionDoc = await db.find('sessions', sessionId)

  if (sessionDoc.error)
    return res.redirect('/login?error=sessionDoc-error')

  const user = await db.find('users', sessionDoc.userId)

  if (user.error)
    return res.redirect('/login?error=user-error')

  req.user = user

  return next()
}

module.exports = {authorize}
