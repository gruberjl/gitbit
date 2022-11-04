const fs = require('fs')
const Feed = require('feed').Feed
const {articles} = require('../src/data/blog-articles').default
const ms500Articles = require('../src/data/ms500-blog-articles').default

const buildFeeds = async () => {
  await buildGitbitFeed()
  await buildMs500Feed()
}

const buildMs500Feed = () => {
  const feed = new Feed({
    title: 'Gitbit - Microsoft 365 security',
    description: 'Read the latest news, guides, and how to articles on securing Microsoft 365.',
    id: 'https://www.gitbit.org/course/ms-500/blog',
    link: 'https://www.gitbit.org/course/ms-500/blog',
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: `https://www.gitbit.org/assets/gitbit-icon-1200x1200.png`,
    favicon: `https://www.gitbit.org/favicon-32x32.png`,
    copyright: "All rights reserved 2022, John Gruber",
    updated: new Date(), // optional, default = today
    generator: "GitBit", // optional, default = 'Feed for Node.js'
    feedLinks: {
      json: `https://www.gitbit.org/course/ms-500/blog/json-feed.json`,
      atom: `https://www.gitbit.org/course/ms-500/blog/atom-feed.xml`
    },
    author: {
      name: 'John Gruber',
      email: 'John.Gruber@gitbit.org',
      link: 'https://www.gitbit.org'
    }
  });

  ms500Articles.forEach(post => {
    feed.addItem({
      title: post.title,
      id: `https://www.gitbit.org/course/ms-500/blog/${post.slug}`,
      link: `https://www.gitbit.org/course/ms-500/blog/${post.slug}`,
      description: post.description,
      author: [ {
        name: 'John Gruber',
        email: 'John.Gruber@gitbit.org',
        link: 'https://www.gitbit.org'
      } ],
      date: new Date(post.datePublished),
      image: post.image
    })
  })

  feed.addCategory("Technology")

  feed.addContributor({
    name: 'John Gruber',
    email: 'John.Gruber@gitbit.org',
    link: 'https://www.gitbit.org'
  });

  fs.writeFileSync(`./docs/course/ms-500/blog/rss-feed.xml`, feed.rss2())
  fs.writeFileSync(`./docs/course/ms-500/blog/atom-feed.xml`, feed.atom1())
  fs.writeFileSync(`./docs/course/ms-500/blog/json-feed.json`, feed.json1())
}

const buildGitbitFeed = () => {
  const feed = new Feed({
    title: 'Training for MS-500: Microsoft Office 365 Security Admin',
    description: 'Read the latest news, guides, and how to articles on securing Microsoft 365.',
    id: 'https://www.gitbit.org',
    link: 'https://www.gitbit.org/blog',
    language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
    image: `https://www.gitbit.org/assets/gitbit-icon-1200x1200.png`,
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
