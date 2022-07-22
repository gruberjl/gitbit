import {h} from 'preact'
import Heading from './heading'
import PageHeader from './page-header'

export default function Page({children, canonical, title, description, jsonLdType, image, jsonLd}) {
  return (
    <div>
      <Heading canonical={canonical} title={title} description={description} jsonLdType={jsonLdType} image={image} jsonLd={jsonLd} />
      <PageHeader />
      {children}
    </div>
  )
}
