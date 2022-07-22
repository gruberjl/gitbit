const fs = require('fs')
const Feed = require('feed').Feed
const {articles} = require('../src/data/blog-articles').default

const buildFeeds = () => {
  const feed = new Feed({
    title: 'Training for MS-500: Microsoft Office 365 Security Admin',
    description: 'Learn, prepare and training for the Microsoft Microsoft Office 365 Exam MS-500: Microsoft 365 Security Administration MS-500 exam',
    id: 'https://www.gitbit.org',
    link: 'https://www.gitbit.org/blog',
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: `https://www.gitbit.org/images/gitbit-logo-1200x675.png`,
    favicon: `https://www.gitbit.org/favicon-32x32.png`,
    copyright: "All rights reserved 2021, John Gruber",
    updated: new Date(), // optional, default = today
    generator: "GitBit", // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: `https://www.gitbit.org/feed/feed.json`,
      atom: `https://www.gitbit.org/feed/atom.xml`
    },
    author: {
      name: 'John Gruber',
      email: 'John.Gruber@gitbit.org',
      link: 'https://www.gitbit.org'
    }
  });

  articles.forEach(post => {
    feed.addItem({
      title: post.title,
      id: `https://www.gitbit.org/blog/${post.gitbitURL}`,
      link: `https://www.gitbit.org/blog/${post.gitbitURL}`,
      description: post.description,
      author: [ {
        name: 'John Gruber',
        email: 'John.Gruber@gitbit.org',
        link: 'https://www.gitbit.org'
      } ],
      date: new Date(post.publishedDate),
      image: post.image
    })
  })

  feed.addCategory("Technology")

  feed.addContributor({
    name: 'John Gruber',
    email: 'John.Gruber@gitbit.org',
    link: 'https://www.gitbit.org'
  });

  fs.mkdirSync('./docs/feed')
  fs.writeFileSync(`./docs/feed/rss.xml`, feed.rss2())
  fs.writeFileSync(`./docs/feed/atom.xml`, feed.atom1())
  fs.writeFileSync(`./docs/feed/feed.json`, feed.json1())
}

export default buildFeeds
