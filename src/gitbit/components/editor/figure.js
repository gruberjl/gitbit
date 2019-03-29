/* global Quill */
const BlockEmbed = Quill.import('blots/block/embed')

class Figure extends BlockEmbed {
  static create(value) {
    const node = super.create()

    const img = document.createElement('img')
    img.setAttribute('src', value.image2500)
    const srcset = `${value.image400} 400w, ${value.image800} 800w, ${value.image1200} 1200w, ${value.image2500} 2500w`
    img.setAttribute('srcset', srcset)
    const sizes = '(max-width: 400px) 360px,(max-width: 800px) 760px,(max-width: 1200px) 1160px, 2500px'
    img.setAttribute('sizes', sizes)

    node.appendChild(img)
    return node
  }

  static value(node) {
    const srcset = node.getElementsByTagName('img')[0].getAttribute('srcset')
    const sizes = srcset.split(',')
    const image400 = sizes[0].trim().split(' ')[0]
    const image800 = sizes[1].trim().split(' ')[0]
    const image1200 = sizes[2].trim().split(' ')[0]
    const image2500 = sizes[3].trim().split(' ')[0]
    return {image400, image800, image1200, image2500}
  }
}

Figure.blotName = 'figure'
Figure.tagName = 'figure'

module.exports = {Figure}
