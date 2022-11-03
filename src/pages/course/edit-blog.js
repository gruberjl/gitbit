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
import {getDoc} from '../../components/firebase/get-doc'
import saveDoc from '../../components/firebase/save-doc'
import Snackbar from '@mui/material/Snackbar'
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import Wysiwyg from '../../components/wysiwyg'
import decorators from '../../components/wysiwyg-decorators'
const isBrowser = () => typeof window !== 'undefined'

import debounce from 'debounce'

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

class EditBlogPage extends Component {
  constructor() {
    super()
    this.setContent = this.setContent.bind(this)
    this.setEditorState = this.setEditorState.bind(this)
    this.save = this.save.bind(this)
    this.setTitle = this.setTitle.bind(this)
    this.setDescription = this.setDescription.bind(this)
    this.selectFeaturedImage = this.selectFeaturedImage.bind(this)
    this.handlePublishChange = this.handlePublishChange.bind(this)
    this.setSlug = this.setSlug.bind(this)
    this.addImage = this.addImage.bind(this)
    this.setCourse = this.setCourse.bind(this)

    let params = new URLSearchParams()
    if (isBrowser())
      params = new URLSearchParams(location.search)

    this.state = {
      course: {},
      content: {
        id: params.get('articleId'),
        type: 'article',
        article: EditorState.createEmpty(),
        images: [],
        description: '',
        featuredImage: '',
        publish: false,
        datePublished: '',
        slug: ''
      },
      courseId: params.get('courseId'),
      editorState: EditorState.createEmpty(decorators),
      alert: ''
    }
  }

  componentDidMount() {
    getDoc('courses', this.state.courseId).then(this.setCourse)
    getDoc(`courses/${this.state.courseId}/blog`, this.state.content.id).then(this.setContent)
  }

  setCourse(course) {
    this.setState({
      course
    })
  }

  setContent(content) {
    this.setState({
      content,
      editorState: EditorState.createWithContent(convertFromRaw(content.article), decorators)
    })
  }

  setEditorState(editorState) {
    this.setState({
      editorState
    })

    if (!this.debounceSave)
      this.debounceSave = debounce(this.save, 5000)

    this.debounceSave()
  }

  save() {
    const data = JSON.parse(JSON.stringify(this.state.content))
    data.article = JSON.parse(JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())))

    saveDoc(`courses/${this.state.courseId}/blog`, data)
    this.setState({
      alert: 'Content saved'
    })

    setTimeout(() => {
      this.setState({alert: ''})
    }, 3000)
  }

  setSlug(e) {
    const content = JSON.parse(JSON.stringify(this.state.content))
    let slug = e.target.value.split(' ').join('-')
    slug = slug.replace(`-${this.state.content.id}`, '')
    slug = `${encodeURI(slug).replace(/[^\w-]+/g, '')}-${this.state.content.id}`
    content.slug = slug.toLowerCase()
    this.setState({content})
  }

  setTitle(e) {
    const content = JSON.parse(JSON.stringify(this.state.content))
    content.title = e.target.value
    this.setState({content})
  }

  setDescription(e) {
    const content = JSON.parse(JSON.stringify(this.state.content))
    content.description = e.target.value
    this.setState({content})
  }

  selectFeaturedImage(image) {
    return () => {
      const content = JSON.parse(JSON.stringify(this.state.content))
      content.featuredImage = image
      this.setState({content})
    }
  }

  handlePublishChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const content = JSON.parse(JSON.stringify(this.state.content))
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
                  <Wysiwyg editorState={this.state.editorState} onEditorStateChange={this.setEditorState} addImage={this.addImage} />
                </Grid>
                <Grid item container justifyContent="space-between" alignItems="center">
                  <Grid item>
                    <FormGroup>
                      <FormControlLabel control={<Checkbox />} label="Publish?" name="publish" id="Publish" onChange={this.handlePublishChange} checked={this.state.content.publish} />
                    </FormGroup>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" onClick={this.save}>Save</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </main>
        <Snackbar message={this.state.alert} open={this.state.alert !== ''} />
      </Page>
    )
  }
}

export default EditBlogPage
