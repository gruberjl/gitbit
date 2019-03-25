const {fetch} = require('whatwg-fetch')

const updatePassword = async (newPassword) => {
  const response = await fetch('/api/users/update-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({newPassword})
  })

  const doc = await response.json()

  return doc
}

module.exports = {updatePassword}
