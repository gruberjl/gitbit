const React = require('react')

const Toolbar = () => (
  <div id="toolbar">
    <button className="ql-bold" type="button">Bold</button>
    <button className="ql-italic" type="button">Italic</button>
    <button className="ql-underline" type="button">Underline</button>
    <button className="ql-blockquote" type="button">Blockquote</button>
    <button className="ql-header" value="1" type="button">H1</button>
    <button className="ql-header" value="2" type="button">H2</button>
    <button className="ql-header" value="3" type="button">H3</button>
    <button className="ql-header" value="4" type="button">H4</button>
    <button className="ql-list" value="ordered" type="button" />
    <button className="ql-list" value="bullet" type="button" />
    <button className="ql-link" type="button">Link</button>
    <button className="ql-image" type="button">Image</button>
    <button className="ql-video" type="button">Video</button>
  </div>
)

module.exports = {Toolbar}
