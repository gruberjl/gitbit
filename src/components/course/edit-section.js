import { h } from "preact"
import Paper  from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
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
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import shortid from 'shortid'
import { EditorState, convertToRaw } from 'draft-js'

const flexStyle = {
  display: 'flex'
}

const marginRight16 = {
  marginRight: '16px'
}

const marginLeft16 = {
  marginLeft: '16px'
}

const svgStyle = {
  cursor: 'move'
}

const resort = (arr) => {
  return arr.sort((firstEl, secondEl) => {
    if (firstEl.order < secondEl.order)
      return -1
    if (firstEl.order > secondEl.order)
      return 1

    return 0
  })
}

const EditSection = ({section, updateSection, removeSection, allowDrop, onDrop, idx, courseId, contents, addContent, removeContent}) => {
  const dragStartSection = (section) => {return (ev) => {
    ev.dataTransfer.setData("sectionId", section.id)
    ev.dataTransfer.setData("type", 'section')
  }}

  const dragStartContent = (section, content) => {return (ev) => {
    ev.dataTransfer.setData("sectionId", section.id)
    ev.dataTransfer.setData("contentId", content.id)
    ev.dataTransfer.setData("type", 'content')
  }}

  const sectionContents = resort(contents.filter(content => content.sectionId === section.id))

  const createContent = () => {
    const content = {
      id: shortid.generate().split('-').join('1'),
      title: '',
      sectionId: section.id,
      type: 'article',
      article: convertToRaw(EditorState.createEmpty().getCurrentContent()),
      images: [],
      description: '',
      featuredImage: ''
    }

    if (sectionContents.length > 0) {
      addContent(content, sectionContents[sectionContents.length-1].id)
    } else {
      addContent(content)
    }

  }

  return (
    <Paper elevation={3} onDragOver={allowDrop} onDrop={onDrop} data-section-idx={idx}>
      <List>
        <ListItem secondaryAction={
          <Button edge="end" variant="contained" onClick={removeSection(section)} data-section-idx={idx}>
            <Delete data-section-idx={idx}/>
          </Button>
        }>
          <ListItemAvatar>
            <Avatar><DragIndicator style={svgStyle} data-section-idx={idx} /></Avatar>
          </ListItemAvatar>
          <TextField fullWidth hiddenLabel placeholder="Section Title" variant="standard" value={section.title} name='section-title' onChange={updateSection} style={marginRight16} data-section-idx={idx}/>
        </ListItem>
        { sectionContents.map((content, index) => (
          <ListItem secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={removeContent(content.id)} >
              <Delete />
            </IconButton>
          }>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: '#ffffff', color: 'black' }} style={svgStyle}><DragIndicator /></Avatar>
            </ListItemAvatar>
            <ListItemButton href={`/course/edit-content?courseId=${courseId}&contentId=${content.id}`}>
              <ListItemText primary={content.title || 'New Content'}/>
            </ListItemButton>
            {content.publish ? <Public title="published"/> : ''}
          </ListItem>
        ))}
        <ListItem data-section-idx={idx}>
          <ListItemButton onClick={createContent} variant="text" data-section-idx={idx}>
            <Add data-section-idx={idx} /> Add Article
          </ListItemButton>
        </ListItem>
    </List>
    </Paper>
  )
}

export default EditSection
