import {h} from 'preact'
import {useEffect} from 'preact/hooks'
import Heading from './heading'
import PageHeader from './page-header'
import Footer from './footer'

export default function Page({children, canonical, title, description, jsonLdType, image, jsonLd, footerMargin}) {
  useEffect(() => {
    if (window)
      (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  if (location.host == 'www.gitbit.org' && window.location.protocol != 'https:')
    window.location.protocol = 'https:'


  return (
    <div>
      <Heading canonical={canonical} title={title} description={description} jsonLdType={jsonLdType} image={image} jsonLd={jsonLd} />
      <PageHeader />
      {children}
      <ins class="adsbygoogle" data-ad-client="ca-pub-8622067882965868" />
      <Footer footerMargin={footerMargin} />
    </div>
  )
}
