import {h} from 'preact'
import {CompositeDecorator} from 'draft-js'

function findLinkEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity()
        return (
          entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'LINK'
        )
      },
      callback
  )
}

const Link = (props) => {
  const {url} = props.contentState.getEntity(props.entityKey).getData()
  return (
    <a href={url}>
      {props.children}
    </a>
  )
}

function findImageEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity()
        return (
          entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'IMAGE'
        )
      },
      callback
  )
}

const Image = (props) => {
  const {src, alt, height, width} = props.contentState.getEntity(props.entityKey).getData()
  return (
    <div>
      <img src={src} alt={alt} style={`aspect-ratio: auto ${width} / ${height}; height: auto;`} height={height} width={width} />
    </div>
  )
}

function findEmbedEntities(contentBlock, callback, contentState) {
  contentBlock.findEntityRanges(
      (character) => {
        const entityKey = character.getEntity()
        return (
          entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'EMBEDDED_LINK'
        )
      },
      callback
  )
}

const Iframe = (props) => {
  const {src, width, height} = props.contentState.getEntity(props.entityKey).getData()
  return (
    <iframe width={width} height={height} src={src} frameBorder="0" />
  )
}

export default (new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link
  },
  {
    strategy: findImageEntities,
    component: Image
  },
  {
    strategy: findEmbedEntities,
    component: Iframe
  }
]))
