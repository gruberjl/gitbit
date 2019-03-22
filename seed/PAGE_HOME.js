module.exports = {
  _id: 'localhost/',
  slug: '/',
  editorDelta: {
    ops: [
      {insert: 'This is my home page!'},
      {attributes: {header: 1}, insert: '\n'},
      {attributes: {link: '/landingpage1'}, insert: 'Landing Page 1'},
      {insert: '\n'},
      {attributes: {link: '/articles/story1'}, insert: 'Story 1'},
      {insert: '\n'},
      {attributes: {link: '/not-a-site'}, insert: '404 Error'},
      {insert: '\n'}
    ]
  },
  featuredImage: '',
  content: '<h1>This is my home page!</h1><p><a href="/landingpage1" target="_blank">Landing Page 1</a></p><p><a href="/articles/story1" target="_blank">Story 1</a></p><p><a href="/not-a-site" target="_blank">404 Error</a></p>',
  title: 'Localhost site',
  publishTime: '2019-12-31T20:17:00.000Z',
  template: 'home'
}
