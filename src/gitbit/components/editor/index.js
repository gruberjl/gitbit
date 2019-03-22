/* global Quill */
const React = require('react')
const {ImageDrop} = require('./image-drop')
const {ImageUploader} = require('./image-uploader')
const {Toolbar} = require('./toolbar')
const {upload} = require('./upload')

let quillRegistered = false

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.quill = null
  }

  componentDidMount() {
    this.buildQuill()
  }

  buildQuill() {
    const t = this
    const {deltaOnMount} = this.props

    if (!quillRegistered) {
      quillRegistered = true
      Quill.register('modules/imageDrop', ImageDrop)
      Quill.register('modules/imageUploader', ImageUploader)
    }

    this.quill = new Quill('#editor', {
      modules: {toolbar: '#toolbar', imageDrop: {upload}, imageUploader: {upload}},
      placeholder: 'Write your story...',
      theme: 'snow'
    })

    this.quill.on('text-change', () => {
      t.props.onChange(t.quill.getContents(), t.quill.root.innerHTML)
    })

    if (deltaOnMount)
      this.quill.setContents(deltaOnMount)
  }

  render() {
    return (
      <div>
        <Toolbar />
        <div className="content" id="editor" />
      </div>
    )
  }
}

module.exports = {Editor}
