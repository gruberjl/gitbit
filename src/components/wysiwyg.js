import { h, Component } from "preact"
import {Editor, RichUtils, Modifier, EditorState, convertToRaw} from 'draft-js'
import ButtonGroup from '@mui/material/ButtonGroup'
import IconButton from '@mui/material/IconButton'
import FormatBold from '@mui/icons-material/FormatBold'
import FormatItalic from '@mui/icons-material/FormatItalic'
import FormatUnderlined from '@mui/icons-material/FormatUnderlined'
import Link from '@mui/icons-material/Link'
import Dialog from '@mui/material/Dialog'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

class Wysiwyg extends Component {
  constructor(props) {
    super(props)
    this.handleKeyCommand = this.handleKeyCommand.bind(this)
    this.onBoldClick = this.onBoldClick.bind(this)
    this.onItalicClick = this.onItalicClick.bind(this)
    this.onUnderlineClick = this.onUnderlineClick.bind(this)
    this.openLinkDialog = this.openLinkDialog.bind(this)
    this.closeLinkDialog = this.closeLinkDialog.bind(this)
    this.setLinkText = this.setLinkText.bind(this)
    this.setLinkUrl = this.setLinkUrl.bind(this)
    this.removeLink = this.removeLink.bind(this)
    this.addLink = this.addLink.bind(this)

    this.state = {
      linkDialogOpen: false,
      linkText: '',
      linkUrl: ''
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

  onBoldClick() {
    console.log('clicked')
    this.props.onEditorStateChange(RichUtils.toggleInlineStyle(this.props.editorState, 'BOLD'));
  }

  onItalicClick() {
    this.props.onEditorStateChange(RichUtils.toggleInlineStyle(this.props.editorState, 'ITALIC'));
  }

  onUnderlineClick() {
    this.props.onEditorStateChange(RichUtils.toggleInlineStyle(this.props.editorState, 'UNDERLINE'));
  }

  openLinkDialog() {
    this.setState({linkDialogOpen:true})
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
    this.closeLinkDialog()
  }

  addLink() {
    // const selection = this.props.editorState.getSelection()
    // this.props.onEditorStateChange(newEditorState)

    const contentState = this.props.editorState.getCurrentContent()
    const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', {url: this.state.linkUrl})
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
    let nextEditorState = EditorState.set(this.props.editorState, { currentContent: contentStateWithEntity })
    nextEditorState = RichUtils.toggleLink(nextEditorState, nextEditorState.getSelection(), entityKey)
    console.log(convertToRaw(contentState))
    this.props.onEditorStateChange(nextEditorState)

    this.closeLinkDialog()
  }

  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="/assets/Draft.css" />
        <div>
          <IconButton onClick={this.onBoldClick}><FormatBold/></IconButton>
          <IconButton onClick={this.onItalicClick}><FormatItalic/></IconButton>
          <IconButton onClick={this.onUnderlineClick}><FormatUnderlined/></IconButton>
          <IconButton onClick={this.openLinkDialog}><Link/></IconButton>
        </div>
        <Editor
          editorState={this.props.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.props.onEditorStateChange}
        />

        <Dialog onClose={this.closeLinkDialog} open={this.state.linkDialogOpen}>
          <Stack spacing={2} sx={{p:2, width: 500}}>
            <TextField fullWidth="true" label="Text to display" variant="standard" value={this.state.linkText} onChange={this.setLinkText} />
            <TextField value={this.state.linkUrl} onChange={this.setLinkUrl} label="URL" variant="standard" fullWidth="true"  />
            <Stack spacing={2} direction="row">
              <Button variant="outlined" onClick={this.removeLink}>Remove</Button>
              <Button variant="contained" onClick={this.addLink}>Save</Button>
            </Stack>
          </Stack>
        </Dialog>
      </div>
    )
  }
}

export default Wysiwyg
