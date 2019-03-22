const {fetch} = require('whatwg-fetch')

const getStory = async (id) => {
  if (id)
    return fetch(`/api/pages/find?id=${id}`)
      .then(res => res.json())
      .then(res => res.doc)


  return {
    editorDelta: {},
    editorHtml: '',
    title: '',
    featuredImage: '',
    publishTime: '',
    slug: ''
  }
}

module.exports = {getStory}
