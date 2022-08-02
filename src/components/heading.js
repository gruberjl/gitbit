import {h} from 'preact'
import Helmet from 'preact-helmet'
const gitBitImg = '/assets/gitbit-icon-500x500.png'

const getDescription = (propsDescription) => {
  if (propsDescription) {
    let description = propsDescription
    if (description.length > 147)
      description = `${description.substring(0, 156) }...`
    return description
  }

  return 'Learn, prepare and training for the Microsoft Microsoft 365 Exam MS-500: Microsoft 365 Security Administration MS-500 exam'
}

const getTitle = (propsTitle) => {
  if (propsTitle) {
    let title = propsTitle
    if (title.length > 58)
      title = `${title.substring(0, 58) }...`
    return title
  }

  return 'Training for MS-500: Microsoft 365 Security Administration'
}

const getImageUrl = (image) => {
  if (image && image.startsWith('/'))
    return `https://www.gitbit.org${image}`

  return image
}

const getJsonLd = (jsonLdType, /* id, */ title, description, image, jsonLd={}) => {
  if (!jsonLdType)
    return null

  const jsonLD = [
    Object.assign({},
        {
          audience: {
            '@type': 'Audience',
            audienceType: [
              'Anyone who wants to learn about Microsoft 365.'
            ]
          },
          image: getImageUrl(image) || gitBitImg,
          provider: {
            '@type': 'Organization',
            sameAs: 'www.gitbit.org',
            name: 'GitBit'
          },
          about: {
            name: 'Microsoft 365'
          },
          name: title,
          creator: [
            {
              '@type': 'Person',
              name: 'John Gruber'
            }
          ],
          '@id': location.href,
          inLanguage: 'en',
          publisher: {
            '@type': 'Organization',
            sameAs: 'www.gitbit.org',
            name: 'GitBit'
          },
          '@type': jsonLdType,
          isAccessibleForFree: true,
          description,
          '@context': 'http://schema.org'
        },
        jsonLd
    )
  ]

  return jsonLD
}

export default function Heading(props) {
  const description = getDescription(props.description)
  const title = getTitle(props.title)
  const pageTitle = `${title} - GitBit`

  const jsonLD = getJsonLd(props.jsonLdType, title, description, props.image, props.jsonLd)

  return (
    <div>
      <Helmet title={pageTitle}
        meta={[
          {name: 'description', content: description},
          {property: 'og:image', content: getImageUrl(props.image) || gitBitImg},
          {name: 'og:title', property: 'og:title', content: title},
          {name: 'og:description', property: 'og:description', content: description},
          {name: 'twitter:title', property: 'twitter:title', content: title},
          {name: 'twitter:description', property: 'twitter:description', content: description},
          {name: 'twitter:image', property: 'twitter:image', content: getImageUrl(props.image) || gitBitImg}
        ]}
        script={[
          {type: 'application/ld+json', innerHTML: JSON.stringify(jsonLD)},
          {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8622067882965868', crossorigin: 'anonymous'}
        ]}
        style={[
          {type: 'text/css', cssText: 'body {margin:0px} .blog-article p, .blog-article h1, .blog-article h2, .blog-article h3, .blog-article h4, .blog-article ol, .blog-article ul, .blog-article pre, .blog-article span { max-width: 900px; margin: 12px auto; }'}
        ]}
      />
    </div>
  )
}
