/* global Quill */
/* eslint consistent-return: 0 */
const Delta = Quill.import('delta')

const Clipboard = Quill.import('modules/clipboard')

class PlainTextClipboard extends Clipboard {
  onPaste(e) {
    if (e.defaultPrevented || !this.quill.isEnabled())
      return

    const range = this.quill.getSelection()
    let delta = new Delta().retain(range.index)

    if (e && e.clipboardData && e.clipboardData.types && e.clipboardData.getData) {
      const text = (e.originalEvent || e).clipboardData.getData('text/plain')
      const cleanedText = this.convert(text)

      // Stop the data from actually being pasted
      e.stopPropagation()
      e.preventDefault()

      // Process cleaned text
      delta = delta.concat(cleanedText).delete(range.length)
      this.quill.updateContents(delta, Quill.sources.USER)
      // range.length contributes to delta.length()
      this.quill.setSelection(delta.length() - range.length, Quill.sources.SILENT)

      return false
    }
  }
}

module.exports = {PlainTextClipboard}
