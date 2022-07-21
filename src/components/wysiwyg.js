import { h, Component } from "preact"
import {Editor, RichUtils, Modifier, EditorState, convertToRaw, AtomicBlockUtils} from 'draft-js'
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton'
import FormatBold from '@mui/icons-material/FormatBold'
import FormatItalic from '@mui/icons-material/FormatItalic'
import FormatUnderlined from '@mui/icons-material/FormatUnderlined'
import FormatQuote from '@mui/icons-material/FormatQuote'
import FormatListBulleted from '@mui/icons-material/FormatListBulleted'
import FormatListNumbered from '@mui/icons-material/FormatListNumbered'
import Image from '@mui/icons-material/Image'
import Code from '@mui/icons-material/Code'
import Link from '@mui/icons-material/Link'
import Dialog from '@mui/material/Dialog'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const getLinkUrl = (editorState) => {
  let linkUrl = ''

  const selection = editorState.getSelection()
  if (!selection.isCollapsed()) {
    const contentState = editorState.getCurrentContent()
    const startKey = editorState.getSelection().getStartKey()
    const startOffset = editorState.getSelection().getStartOffset()

    const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey)
    const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset)

    if (linkKey) {
      const linkInstance = contentState.getEntity(linkKey);
      linkUrl = linkInstance.getData().url;
    }
  }

  return linkUrl
}

const getText = (editorState) => {
  let linkText = ''

  const selection = editorState.getSelection()
  if (!selection.isCollapsed()) {
    const anchorKey = selection.getAnchorKey();
    const currentContent = editorState.getCurrentContent();
    const currentContentBlock = currentContent.getBlockForKey(anchorKey);
    const start = selection.getStartOffset();
    const end = selection.getEndOffset();
    linkText = currentContentBlock.getText().slice(start, end)
  }

  return linkText
}

class Wysiwyg extends Component {
  constructor(props) {
    super(props)
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this.onTab = this.onTab.bind(this)
    this.openLinkDialog = this.openLinkDialog.bind(this)
    this.closeLinkDialog = this.closeLinkDialog.bind(this)
    this.setLinkText = this.setLinkText.bind(this)
    this.setLinkUrl = this.setLinkUrl.bind(this)
    this.removeLink = this.removeLink.bind(this)
    this.addLink = this.addLink.bind(this)
    this.hasSelection = this.hasSelection.bind(this)
    this.toggleBlockType = this.toggleBlockType.bind(this)
    this.toggleInlineStyle = this.toggleInlineStyle.bind(this)
    this.uploadImage = this.uploadImage.bind(this)
    this.insertImage = this.insertImage.bind(this)
    this.setImageSrc = this.setImageSrc.bind(this)
    this.setImageAlt = this.setImageAlt.bind(this)

    this.state = {
      linkDialogOpen: false,
      linkText: '',
      linkUrl: '',
      imageDialogOpen: false,
      imageSrc: '',
      imageAlt: ''
    }
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.props.onEditorStateChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  hasSelection() {
    return !this.props.editorState.getSelection().isCollapsed()
  }

  onTab(e) {
    this.props.onEditorStateChange(RichUtils.onTab(e, this.props.editorState, 4))
  }

  toggleInlineStyle(styleType) {
    this.props.onEditorStateChange(RichUtils.toggleInlineStyle(this.props.editorState, styleType))
  }

  toggleBlockType(blockType) {
    this.props.onEditorStateChange(RichUtils.toggleBlockType(this.props.editorState, blockType));
  }

  openLinkDialog() {
    const {editorState} = this.props
    const selection = editorState.getSelection()
    const linkUrl = getLinkUrl(editorState)
    const linkText = getText(editorState)

    this.setState({linkDialogOpen:true, linkUrl, linkText})
  }

  closeLinkDialog() {
    this.setState({
      linkDialogOpen:false,
      linkText: '',
      linkUrl: ''
    })
  }

  setLinkText(e) {
    const linkText =  e.target.value
    this.setState({linkText})
  }

  setLinkUrl(e) {
    const linkUrl = e.target.value
    this.setState({linkUrl})
  }

  removeLink() {
    const {editorState} = this.props
    const selection = editorState.getSelection()
    this.props.onEditorStateChange(RichUtils.toggleLink(editorState, selection, null))
    this.closeLinkDialog()
  }

  addLink() {
    const contentState = this.props.editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {url: this.state.linkUrl})
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    let nextEditorState = EditorState.set(this.props.editorState, { currentContent: contentStateWithEntity })
    nextEditorState = RichUtils.toggleLink(nextEditorState, nextEditorState.getSelection(), entityKey)
    this.props.onEditorStateChange(nextEditorState)
    this.closeLinkDialog()
  }

  uploadImage(e) {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)

    fetch('https://api.imgbb.com/1/upload?key=9cfb93e196063ad9f35c823c94231095', {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    }).then(response => response.json())
    .then(json => {
      this.props.addImage(json)
      this.openImageDialog(json.data.url)
    })
    .catch(e => {
      console.log('Error uploading image')
      console.log(e)
    })
  }

  openImageDialog(url) {
    this.setState({
      imageSrc:url,
      imageAlt: '',
      imageDialogOpen: true
    })
  }

  setImageSrc(e) {
    const imageSrc = e.target.value
    this.setState({imageSrc})
  }

  setImageAlt(e) {
    const imageAlt = e.target.value
    this.setState({imageAlt})
  }

  insertImage() {
    const contentState = this.props.editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity('IMAGE', 'IMMUTABLE', {src: this.state.imageSrc, alt:this.state.imageAlt})
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    const newEditorState = EditorState.set(this.props.editorState, {currentContent: contentStateWithEntity})

    this.props.onEditorStateChange(AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' '))
    this.setState({imageDialogOpen:false})
  }

  render() {
    const uploadImageCallBack = async (file) => {
      const formData = new FormData();
      formData.append('image', file)
      try {
        const response = await fetch('https://api.imgbb.com/1/upload?key=9cfb93e196063ad9f35c823c94231095', {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        })
        const json = await response.json()

        const content = JSON.parse(JSON.stringify(this.state.content))
        content.images.push(json.data.url)

        this.setState({content})
        return { data: { link: json.data.url}}
      } catch(uploadError) {
        this.setState({alert: uploadError})
      }
    }

    return (
      <div>
        <link rel="stylesheet" type="text/css" href="/assets/Draft.css" />
        <div>
          <IconButton onClick={() => this.toggleInlineStyle('BOLD')}><FormatBold/></IconButton>
          <IconButton onClick={() => this.toggleInlineStyle('ITALIC')}><FormatItalic/></IconButton>
          <IconButton onClick={() => this.toggleInlineStyle('UNDERLINE')}><FormatUnderlined/></IconButton>
          <IconButton onClick={this.openLinkDialog} disabled={!this.hasSelection()}><Link/></IconButton>
          <IconButton variant="text" sx={{fontWeight:'bolder', fontSize:20}} onClick={() => this.toggleBlockType('header-two')}>H2</IconButton>
          <IconButton variant="text" sx={{fontWeight:'bolder', fontSize:20}} onClick={() => this.toggleBlockType('header-three')}>H3</IconButton>
          <IconButton variant="text" sx={{fontWeight:'bolder', fontSize:20}} onClick={() => this.toggleBlockType('header-four')}>H4</IconButton>
          <IconButton variant="text" sx={{fontWeight:'bolder', fontSize:20}} onClick={() => this.toggleBlockType('header-five')}>H5</IconButton>
          <IconButton variant="text" sx={{fontWeight:'bolder', fontSize:20}} onClick={() => this.toggleBlockType('header-six')}>H6</IconButton>

          <IconButton onClick={() => this.toggleBlockType('blockquote')}><FormatQuote/></IconButton>
          <IconButton onClick={() => this.toggleBlockType('unordered-list-item')}><FormatListBulleted/></IconButton>
          <IconButton onClick={() => this.toggleBlockType('ordered-list-item')}><FormatListNumbered/></IconButton>
          <IconButton onClick={() => this.toggleBlockType('code-block')}><Code/></IconButton>

          <IconButton component="label"><Image/><input type="file" hidden accept="image/*" onChange={this.uploadImage}/></IconButton>
        </div>
        <Editor
          editorState={this.props.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.props.onEditorStateChange}
        />

        <Dialog onClose={this.closeLinkDialog} open={this.state.linkDialogOpen}>
          <Stack spacing={2} sx={{p:2, width: 500}}>
            <TextField value={this.state.linkUrl} onChange={this.setLinkUrl} label="URL" variant="standard" fullWidth="true"  />
            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={this.removeLink}>Remove</Button>
              <Button variant="contained" onClick={this.addLink}>Save</Button>
            </Stack>
          </Stack>
        </Dialog>

        <Dialog open={this.state.imageDialogOpen}>
          <Stack spacing={2} sx={{p:2, width: 500}}>
            <TextField value={this.state.imageSrc} onChange={this.setImageSrc} label="Image src" variant="standard" fullWidth="true"  />
            <TextField value={this.state.imageAlt} onChange={this.setImageAlt} label="Image alt" variant="standard" fullWidth="true"  />
            <Stack spacing={2} direction="row">
              <Button variant="contained" onClick={this.insertImage}>Save</Button>
            </Stack>
          </Stack>
        </Dialog>
      </div>
    )
  }
}

export default Wysiwyg