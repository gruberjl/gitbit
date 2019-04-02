const {fetch} = require('whatwg-fetch')

const getStories = async () => fetch('/api/pages/query-by-updated').then(res => res.json())

module.exports = {getStories}
