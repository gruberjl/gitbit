import {h, Component} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import {getDoc} from '../../components/firebase/get-doc'
import saveDoc from '../../components/firebase/save-doc'
import Snackbar from '@mui/material/Snackbar'
const isBrowser = () => typeof window !== 'undefined'
import shortid from 'shortid'
import {EditorState, convertToRaw} from 'draft-js'
import decorators from '../../components/wysiwyg-decorators'

const featuredImageStyle = {
  padding: '3px'
}

const inlineStyle = {
  display: 'inline-block',
  height: '64px',
  marginLeft: '12px',
  marginRight: '12px',
  border: '1px solid transparent',
  cursor: 'pointer'
}

const featuredImageSelectedStyle = {
  display: 'inline-block',
  height: '64px',
  marginLeft: '12px',
  marginRight: '12px',
  border: '1px solid #666',
  cursor: 'pointer'
}

class EditContentPage extends Component {
  constructor() {
    super()
    this.setContent = this.setContent.bind(this)
    this.save = this.save.bind(this)
    this.setTitle = this.setTitle.bind(this)
    this.setDescription = this.setDescription.bind(this)
    this.selectFeaturedImage = this.selectFeaturedImage.bind(this)
    this.handlePublishChange = this.handlePublishChange.bind(this)
    this.setSlug = this.setSlug.bind(this)
    this.addImage = this.addImage.bind(this)
    this.addQuestion = this.addQuestion.bind(this)
    this.closeAlert = this.closeAlert.bind(this)
    this.deleteQuestion = this.deleteQuestion.bind(this)

    let params = new URLSearchParams()
    if (isBrowser())
      params = new URLSearchParams(location.search)

    this.state = {
      content: {
        id: params.get('contentId'),
        type: 'test',
        questions: {},
        answers: {},
        title: '',
        images: [],
        description: '',
        featuredImage: '',
        publish: false,
        sectionId: '',
        slug: ''
      },
      courseId: params.get('courseId'),
      alert: ''
    }
  }

  componentDidMount() {
    getDoc(`courses/${this.state.courseId}/contents`, this.state.content.id).then(this.setContent)
  }

  setContent(content) {
    if (!content.publish)
      content.publish = false

    this.setState({
      content
    })
  }

  addQuestion() {
    const content = JSON.parse(JSON.stringify(this.state.content))
    const question = {
      id: shortid.generate().toLowerCase(),
      question: convertToRaw(EditorState.createEmpty(decorators).getCurrentContent()),
      references: convertToRaw(EditorState.createEmpty(decorators).getCurrentContent()),
      type: '',
      images: [],
      answerOptions: {}
    }
    content.questions[question.id] = question
    content.answers[question.id] = {}
    this.setState({content})
    this.save(content).then(() => {
      window.location.href = `/course/edit-question?courseId=${this.state.courseId}&testId=${this.state.content.id}&questionId=${question.id}`
    })
  }

  save(content) {
    if (!content)
      content = JSON.parse(JSON.stringify(this.state.content))
    return saveDoc(`courses/${this.state.courseId}/contents`, content)
        .then(() => {
          this.setState({
            alert: 'Content saved'
          })
        })
  }

  closeAlert() {
    this.setState({alert: ''})
  }

  setSlug(e) {
    const content = this.state.content
    let slug = e.target.value.split(' ').join('-')
    slug = slug.replace(`-${ this.state.content.id}`, '')
    slug = `${encodeURI(slug).replace(/[^\w-]+/g, '') }-${ this.state.content.id}`
    content.slug = slug
    this.setState({content})
  }

  setTitle(e) {
    const content = this.state.content
    content.title = e.target.value
    this.setState({content})
  }

  setDescription(e) {
    const content = this.state.content
    content.description = e.target.value
    this.setState({content})
  }

  deleteQuestion(question) {
    return () => {
      if (window.confirm(`Are you sure you want to delete the question?`)) {
        const content = JSON.parse(JSON.stringify(this.state.content))

        delete content.questions[question.id]
        delete content.answers[question.id]
        this.setState({content})
        this.save(content)
      }
    }
  }

  selectFeaturedImage(image) {
    return () => {
      const content = this.state.content
      content.featuredImage = image
      this.setState({content})
    }
  }

  handlePublishChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const content = this.state.content
    content.publish = value
    if (content.publish) {
      const dateObj = new Date()
      const month = dateObj.getUTCMonth() + 1
      const day = dateObj.getUTCDate()
      const year = dateObj.getUTCFullYear()

      content.datePublished = `${year }/${ month }/${ day}`
    }

    this.setState({content})
  }

  addImage(json) {
    const content = JSON.parse(JSON.stringify(this.state.content))
    content.images.push(json.data.url)
    this.setState({content})
  }

  render() {
    return (
      <Page title={'Edit Content'}>
        <main style={{paddingTop: '24px'}}>
          <Container>
            <Box component="form">
              <Grid container spacing={3}>
                <Grid item xs="12">
                  <TextField fullWidth="true" label="Title" variant="standard" value={this.state.content.title} onChange={this.setTitle} />
                </Grid>
                <Grid item xs="12">
                  <TextField fullWidth="true" label="Slug" variant="standard" value={this.state.content.slug} onChange={this.setSlug} />
                </Grid>
                <Grid item xs="12">
                  <TextField fullWidth="true" label="Description" multiline maxRows={4} value={this.state.content.description} onChange={this.setDescription} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h5" component="h3">Select Featured Image</Typography>
                </Grid>
                <Grid item xs={12}>
                  { this.state.content.images.map((image, idx) => (
                    <div role="button" tabIndex="-1" key={idx} style={this.state.content.featuredImage === image ? featuredImageSelectedStyle : inlineStyle} onClick={this.selectFeaturedImage(image)} onKeyDown={this.selectFeaturedImage(image)}>
                      <img src={image} height="64" alt="" style={featuredImageStyle} />
                    </div>
                  )) }
                </Grid>
                <Grid item xs={12}>
                  <h1>Questions</h1>
                </Grid>
                <Grid item xs={12}>
                  <List>
                    {Object.values(this.state.content.questions).map((question, idx) => (
                      <ListItem key={idx} secondaryAction={<IconButton aria-label="delete question" onClick={this.deleteQuestion(question)}><DeleteIcon /></IconButton>}>
                        <ListItemButton href={`/course/edit-question?courseId=${this.state.courseId}&testId=${this.state.content.id}&questionId=${question.id}`}>
                          <ListItemText primary={question.id} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={this.addQuestion}>Add question</Button>
                </Grid>
                <Grid item container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="Publish?" name="publish" id="Publish" onChange={this.handlePublishChange} checked={this.state.content.publish} />
                    </FormGroup>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" onClick={() => this.save()}>Save</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </main>
        <Snackbar message={this.state.alert} open={this.state.alert !== ''} autoHideDuration={3000} onClose={this.closeAlert} />
      </Page>
    )
  }
}

export default EditContentPage
