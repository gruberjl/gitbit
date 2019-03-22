const {fetch} = require('whatwg-fetch')

const publish = (story) => {
  const url = story._rev ? '/api/pages/update' : '/api/pages/create'

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(story)
  }).then(response => response.json())
}

// const publish = (title, content, editorDelta, settings) => {
//   console.log(title)
//   console.log('')
//   console.log(content)
//   console.log('')
//   console.log(editorDelta)
//   console.log('')
//   console.log(settings)
// }

module.exports = {publish}
