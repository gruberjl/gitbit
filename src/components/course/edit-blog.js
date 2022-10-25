import {h, Component} from 'preact'
import Button from '@mui/material/Button'
import getAllDocs from '../firebase/get-all-docs'
import saveDoc from '../firebase/save-doc'
import deleteDoc from '../firebase/delete-doc'
import shortid from 'shortid'
import Snackbar from '@mui/material/Snackbar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Public from '@mui/icons-material/Public'
import PublicOff from '@mui/icons-material/PublicOff'
import {EditorState, convertToRaw} from 'draft-js'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

const flexStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

class EditBlog extends Component {
  constructor(props) {
    super(props)
    this.newArticle = this.newArticle.bind(this)
    this.setBlog = this.setBlog.bind(this)
    this.deleteArticle = this.deleteArticle.bind(this)
    this.closeAlert = this.closeAlert.bind(this)

    this.state = {
      blog: [],
      alert: ''
    }
  }

  componentDidMount() {
    getAllDocs(`courses/${this.props.courseId}/blog`).then(this.setBlog)
  }

  newArticle() {
    const article = {
      id: shortid.generate().split('-').join('1').toLowerCase(),
      title: '',
      type: 'article',
      images: [],
      description: '',
      featuredImage: '',
      publish: false,
      publishDate: '',
      slug: '',
      article: JSON.parse(JSON.stringify(convertToRaw(EditorState.createEmpty().getCurrentContent())))
    }

    saveDoc(`courses/${this.props.courseId}/blog`, article).then(() => {
      window.location.href = `/course/edit-blog?courseId=${this.props.courseId}&articleId=${article.id}`
    })
  }

  setBlog(blog) {
    this.setState({blog})
  }

  deleteArticle(article) {
    if (confirm(`Are you sure you want to delete the article "${article.title}"?`)) {
      deleteDoc(`courses/${this.props.courseId}/blog`, article.id).then(() => {
        this.setState({alert: 'Article deleted'})
        const blog = this.state.blog.filter((b) => b.id !== article.id)
        this.setState({blog})
      }).catch((err) => {
        this.setState({
          alert: err
        })
      })
    }
  }

  closeAlert() {
    this.setState({alert: ''})
  }

  render() {
    return (
      <div>
        <div style={flexStyle}>
          <h1>Edit Blog</h1>
          <Button onClick={this.newArticle} variant="contained">Create</Button>
        </div>
        <List>
          { this.state.blog.map((article, idx) => (
            <ListItem key={idx} secondaryAction={<IconButton edge="end" aria-label="delete" onClick={() => this.deleteArticle(article)}><DeleteIcon /></IconButton>}>
              <ListItemButton component="a" href={`/course/edit-blog?courseId=${this.props.courseId}&articleId=${article.id}`}>
                <ListItemIcon>{article.publish ? <Public /> : <PublicOff />}</ListItemIcon>
                <ListItemText primary={article.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Snackbar open={this.state.alert !== ''} autoHideDuration={3000} onClose={this.closeAlert} message={this.state.alert} />
      </div>
    )
  }
}

export default EditBlog
