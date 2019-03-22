const React = require('react')
const clone = require('clone-deep')
const moment = require('moment')
const queryString = require('query-string')
const {toast} = require('react-toastify')
const {Nav, Editor} = require('../../components')
const {getStory, getImages, publish, remove} = require('./lib')
const {FeaturedImages, Slug, PublishTime, Templates} = require('./settings')

class Story extends React.Component {
  constructor(props) {
    super(props)
    this.state = {id: queryString.parse(props.location.search).id}
  }

  componentDidMount() {
    getStory(this.state.id).then(story => this.setState({story}))
  }

  onFeaturedImageClick(featuredImage) {
    this.setState((state) => {
      const story = clone(state.story)
      story.featuredImage = featuredImage
      return {story}
    })
  }

  setPublishTime(dateTime) {
    this.setState((state) => {
      const story = clone(state.story)
      story.publishTime = dateTime
      return {story}
    })
  }

  setTitle(event) {
    const title = event.target.value
    this.setState((state) => {
      const story = clone(state.story)
      story.title = title
      return {story}
    })
  }

  setSlug(event) {
    const slug = event.target.value
    this.setState((state) => {
      const story = clone(state.story)
      story.slug = slug
      return {story}
    })
  }

  setTemplate(event) {
    const template = event.target.value
    this.setState((state) => {
      const story = clone(state.story)
      story.template = template
      return {story}
    })
  }

  editorChanged(editorDelta, content) {
    this.setState((state) => {
      const story = clone(state.story)
      story.editorDelta = editorDelta
      story.content = content
      return {story}
    })
  }

  publish() {
    const self = this
    const story = clone(this.state.story)
    if (!story._id)
      story._id = story.slug

    publish(story).then((savedDoc) => {
      self.setState((state) => {
        const newStory = clone(state.story)
        newStory._rev = savedDoc.doc._rev
        toast('saved')
        return {story: newStory}
      })
    }).catch(err => toast.error(err.toString()))
  }

  remove() {
    remove(this.state.story).then(() => {
      this.props.history.push('/gitbit/stories')
    })
  }

  render() {
    if (this.state && this.state.story) {
      const {story} = this.state

      const saveBtnText = moment(story.publishTime).isValid() ? `Publish ${moment(story.publishTime).calendar()}` : 'Save as draft'

      return (
        <div className="page">
          <Nav />
          <main className="editor 2">
            <article>
              <h1><textarea placeholder="Story Title" value={story.title} onChange={this.setTitle.bind(this)} /></h1>
              <Editor onChange={this.editorChanged.bind(this)} deltaOnMount={story.editorDelta} />
              <hr />
              <FeaturedImages
                images={getImages(story.editorDelta)}
                onFeaturedImageClick={this.onFeaturedImageClick.bind(this)}
                selectedImage={story.featuredImage}
              />
              <Slug slug={story.slug} onChange={this.setSlug.bind(this)} />
              <PublishTime
                publishTime={story.publishTime}
                onChange={this.setPublishTime.bind(this)}
              />
              <Templates template={story.template} onChange={this.setTemplate.bind(this)} />
              <div>
                <button onClick={this.publish.bind(this)} type="button">{saveBtnText}</button>
                <button onClick={this.remove.bind(this)} type="button">Delete Story</button>
              </div>
            </article>
          </main>
        </div>
      )
    }

    return <h1>Loading...</h1>
  }
}

module.exports = {Story}
