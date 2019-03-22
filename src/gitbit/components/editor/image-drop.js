class ImageDrop {
  constructor(quill, options = {}) {
    this.quill = quill
    this.options = options
    this.handleDrop = this.handleDrop.bind(this)
    this.handlePaste = this.handlePaste.bind(this)
    this.quill.root.addEventListener('drop', this.handleDrop, false)
    this.quill.root.addEventListener('paste', this.handlePaste, false)

    if (typeof this.options.upload !== 'function')
      throw new Error('[Missing config] upload function that returns a promise is required')
  }

  handleDrop(evt) {
    evt.preventDefault()
    if (evt.dataTransfer && evt.dataTransfer.files && evt.dataTransfer.files.length) {
      if (document.caretRangeFromPoint) {
        const selection = document.getSelection()
        const range = document.caretRangeFromPoint(evt.clientX, evt.clientY)
        if (selection && range) {
          const {startContainer, startOffset} = range
          selection.setBaseAndExtent(startContainer, startOffset, startContainer, startOffset)
        }
      }
      this.readFiles(evt.dataTransfer.files, this.insert.bind(this))
    }
  }

  handlePaste(evt) {
    if (evt.clipboardData && evt.clipboardData.items && evt.clipboardData.items.length)
      this.readFiles(evt.clipboardData.items, (dataUrl) => {
        const selection = this.quill.getSelection()
        if (selection) {
          // we must be in a browser that supports pasting (like Firefox)
          // so it has already been placed into the editor
        } else
          setTimeout(() => this.insert(dataUrl), 0)
      })
  }

  insert(dataUrl) {
    const index = (this.quill.getSelection() || {}).index || this.quill.getLength()
    this.quill.insertEmbed(index, 'image', dataUrl, 'user')
  }

  readFiles(files, callback) {
    [].forEach.call(files, (file) => {
      if (!file.type.match(/^image\/(gif|jpe?g|a?png|svg|webp|bmp|vnd\.microsoft\.icon)/i))
        return

      // set up file reader
      const reader = new FileReader()

      // read the clipboard item or file
      const blob = file.getAsFile ? file.getAsFile() : file
      if (blob instanceof Blob)
        reader.readAsDataURL(blob)

      this.options.upload(file).then(
        (imageUrl) => {
          callback(imageUrl)
        },
        (error) => {
          throw new Error(error.message)
        }
      )
    })
  }
}

module.exports = {ImageDrop}
