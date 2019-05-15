/* global Quill */
const Delta = Quill.import('delta')

const Clipboard = Quill.import('modules/clipboard')

class PlainTextClipboard extends Clipboard {
  onPaste(e) {
    const range = this.quill.getSelection()
    const formats = this.quill.getFormat(range.index)
    const text = (e.originalEvent || e).clipboardData.getData('text/plain')
    const html = (e.originalEvent || e).clipboardData.getData('text/html')
    const pastedDelta = this.convert({text, html}, formats)
    const delta = new Delta()
      .retain(range.index)
      .delete(range.length)
      .concat(pastedDelta)
    this.quill.updateContents(delta, Quill.sources.USER)
    // range.length contributes to delta.length()
    this.quill.setSelection(
      delta.length() - range.length,
      Quill.sources.SILENT,
    )
    this.quill.scrollIntoView()
  }
}

module.exports = {PlainTextClipboard}
