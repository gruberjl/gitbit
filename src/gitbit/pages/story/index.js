/* eslint eqeqeq: 0 no-alert:0 */
const React = require('react')
const clone = require('clone-deep')
const moment = require('moment')
const queryString = require('query-string')
const {toast} = require('react-toastify')
const {Prompt} = require('react-router-dom')
const cheerio = require('cheerio')
const wordCount = require('word-count')
const {Nav, Editor} = require('../../components')
const {getStory, getImages, publish, remove} = require('./lib')
const {FeaturedImages, Slug, PublishTime, Templates} = require('./settings')

class Story extends React.Component {
  constructor(props) {
    super(props)

    this.onUnload = this.onUnload.bind(this)
    this.autoSave = this.autoSave.bind(this)

    this.state = {
      id: queryString.parse(props.location.search).id,
      hasChanged: false,
      words: 0
    }
  }

  componentDidMount() {
    getStory(this.state.id).then(story => this.setState({
      story,
      intervalId: setInterval(this.autoSave, 60000),
      words: Story.getWordCount(story.content)
    }))

    window.addEventListener('beforeunload', this.onUnload)
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onUnload)
    if (this.state.intervalId)
      clearInterval(this.state.intervalId)
  }

  onUnload() {
    if (this.state.hasChanged) {
      const confirmationMessage = 'Quit without saving?'
      window.event.returnValue = confirmationMessage
      return confirmationMessage
    }

    return undefined
  }

  onFeaturedImageClick(featuredImage) {
    this.setState((state) => {
      const story = clone(state.story)
      story.featuredImage = featuredImage
      story.featuredImage1200 = featuredImage.replace('original', 1200)
      return {story, hasChanged: true}
    })
  }

  setPublishTime(dateTime) {
    this.setState((state) => {
      const story = clone(state.story)
      story.publishTime = dateTime
      return {story, hasChanged: true}
    })
  }

  setTitle(event) {
    const title = event.target.value
    this.setState((state) => {
      const story = clone(state.story)
      story.title = title
      return {story, hasChanged: true}
    })
  }

  setSlug(event) {
    const slug = event.target.value
    this.setState((state) => {
      const story = clone(state.story)
      story.slug = slug
      return {story, hasChanged: true}
    })
  }

  setTemplate(event) {
    const template = event.target.value
    this.setState((state) => {
      const story = clone(state.story)
      story.template = template
      return {story, hasChanged: true}
    })
  }

  setDescription(event) {
    const description = event.target.value
    this.setState((state) => {
      const story = clone(state.story)
      story.description = description
      return {story, hasChanged: true}
    })
  }

  setNotes(event) {
    const notes = event.target.value
    this.setState((state) => {
      const story = clone(state.story)
      story.notes = notes
      return {story, hasChanged: true}
    })
  }

  static getWordCount(html) {
    if (html) {
      const text = cheerio.load(html).text()
      return wordCount(text)
    }

    return 0
  }

  autoSave() {
    if (this.state.hasChanged)
      this.publish(false)
  }

  editorChanged(editorDelta, content) {
    if (this.state.story.content != content)
      this.setState((state) => {
        const story = clone(state.story)
        story.editorDelta = editorDelta
        story.content = content
        const words = Story.getWordCount(content)
        return {story, hasChanged: true, words}
      })
  }

  publish(showToast = true) {
    const self = this
    const story = clone(this.state.story)
    story.updateTime = moment().toISOString()

    publish(story).then((savedDoc) => {
      self.setState((state) => {
        const newStory = clone(state.story)
        newStory._rev = savedDoc.doc._rev
        newStory._id = savedDoc.doc._id
        if (showToast)
          toast('saved')

        return {story: newStory, hasChanged: false}
      })
    }).catch(err => toast.error(err.toString()))
  }

  remove() {
    const r = window.confirm('Delete story?')
    if (r)
      remove(this.state.story).then(() => {
        this.props.history.push('/stories')
      })
  }

  render() {
    if (this.state && this.state.story) {
      const {story, hasChanged, words} = this.state
      const wordsLabel = words > 1 ? 'words' : 'word'
      const saveBtnText = moment(story.publishTime).isValid() ? `Publish ${moment(story.publishTime).calendar()}` : 'Save as draft'

      return (
        <div className="pure-g">
          <Prompt when={hasChanged} message="Quit without saving?" />
          <Nav />
          <main className="pure-u-4-5">
            <article>
              <form className="pure-form pure-form-stacked">
                <h1>
                  <textarea
                    placeholder="Story Title"
                    value={story.title}
                    onChange={this.setTitle.bind(this)}
                    className="pure-input-1"
                  />
                </h1>
                <Editor onChange={this.editorChanged.bind(this)} deltaOnMount={story.editorDelta} />
                <div>
                  <span>{words} {wordsLabel}</span>
                </div>
                <hr />
                <textarea placeholder="Notes" value={story.notes} onChange={this.setNotes.bind(this)} rows="5" className="pure-input-1" />
                <FeaturedImages
                  images={getImages(story.editorDelta)}
                  onFeaturedImageClick={this.onFeaturedImageClick.bind(this)}
                  selectedImage={story.featuredImage}
                />
                <Slug slug={story.slug} onChange={this.setSlug.bind(this)} />
                <textarea placeholder="Description" value={story.description} onChange={this.setDescription.bind(this)} rows="5" className="pure-input-1" />
                <PublishTime
                  publishTime={story.publishTime}
                  onChange={this.setPublishTime.bind(this)}
                />
                <Templates template={story.template} onChange={this.setTemplate.bind(this)} />
                <div className="text-align-right">
                  <button onClick={this.publish.bind(this)} type="button" className="pure-button pure-button-primary margin12">{saveBtnText}</button>
                  <button onClick={this.remove.bind(this)} type="button" className="pure-button margin12">Delete Story</button>
                </div>
              </form>
            </article>
          </main>
        </div>
      )
    }

    return <h1>Loading...</h1>
  }
}

module.exports = {Story}
