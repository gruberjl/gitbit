/* eslint no-unused-vars: "off" */
import {h, Component, createRef} from 'preact'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import DragIndicator from '@mui/icons-material/DragIndicator'
import Delete from '@mui/icons-material/Delete'
import Public from '@mui/icons-material/Public'
import Add from '@mui/icons-material/Add'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import shortid from 'shortid'
import {EditorState, convertToRaw} from 'draft-js'
import Sortable from 'sortablejs'

const marginRight16 = {
  marginRight: '16px'
}

const svgStyle = {
  cursor: 'move'
}

class EditSection extends Component {
  list = createRef()

  componentDidMount() {
    const sortable = Sortable.create(this.list.current, {
      handle: '.handle',
      group: 'contents',
      draggable: '.content',
      onEnd: this.props.onContentSortChange
    })
  }

  render() {
    const {section, updateSection, removeSection, courseId, contents, addContent, removeContent} = this.props
    const sectionContents = contents.filter((content) => content.sectionId === section.id)

    const createContent = (e) => {
      let content
      if (e.target.getAttribute('data-content-type') == 'article') {
        content = {
          id: shortid.generate().split('-').join('1'),
          title: '',
          sectionId: section.id,
          type: e.target.getAttribute('data-content-type'),
          article: convertToRaw(EditorState.createEmpty().getCurrentContent()),
          images: [],
          description: '',
          featuredImage: '',
          publish: false
        }
      } else {
        content = {
          id: shortid.generate().split('-').join('1'),
          title: '',
          sectionId: section.id,
          type: e.target.getAttribute('data-content-type'),
          questions: {},
          answers: {},
          description: '',
          featuredImage: '',
          publish: false
        }
      }

      if (sectionContents.length > 0)
        addContent(content, sectionContents[sectionContents.length-1].id)
      else
        addContent(content)
    }

    return (
      <Paper elevation={3}>
        <List ref={this.list} data-section={section.id}>
          <ListItem secondaryAction={
            <Button edge="end" variant="contained" onClick={removeSection(section)}>
              <Delete />
            </Button>
          }>
            <ListItemAvatar>
              <Avatar className="section-handle"><DragIndicator style={svgStyle} /></Avatar>
            </ListItemAvatar>
            <TextField fullWidth hiddenLabel placeholder="Section Title" variant="standard" value={section.title} name='section-title' onChange={updateSection} style={marginRight16} />
          </ListItem>
          { sectionContents.map((content, index) => (
            <ListItem className='content' key={index} data-content-id={content.id} secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={removeContent(content.id)} data-content-id={content.id} >
                <Delete data-content-id={content.id} />
              </IconButton>
            }>
              <ListItemAvatar>
                <Avatar sx={{bgcolor: '#ffffff', color: 'black'}} style={svgStyle} className="handle"><DragIndicator /></Avatar>
              </ListItemAvatar>
              <ListItemButton href={`/course/edit-${content.type}?courseId=${courseId}&contentId=${content.id}`}>
                <ListItemText primary={content.title || 'New Content'} />
              </ListItemButton>
              {content.publish ? <Public title="published" /> : ''}
            </ListItem>
          ))}
          <ListItem>
            <ListItemButton onClick={createContent} variant="text" data-content-type="article">
              <Add /> Add Article
            </ListItemButton>
            <ListItemButton onClick={createContent} variant="text" data-content-type="test">
              <Add /> Add Test
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>
    )
  }
}

export default EditSection
