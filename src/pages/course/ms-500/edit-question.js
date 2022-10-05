import {h, Component} from 'preact'
import shortid from 'shortid'
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import Page from '../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import {getDoc} from '../../../components/firebase/get-doc'
import saveDoc from '../../../components/firebase/save-doc'
import deleteDoc from '../../../components/firebase/delete-doc'
import Wysiwyg from '../../../components/wysiwyg'
import decorators from '../../../components/wysiwyg-decorators'
import universalStyles from '../../../components/universal-styles'

const optionStyles = {
  marginTop: '14px',
  marginBottom: '14px',
  display: 'flex'
}

const checkboxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const deleteAnswerStyle = {
  marginLeft: '14px'
}

const referencesStyle = {
  marginTop: '24px'
}

const isBrowser = () => typeof window !== 'undefined'

class EditQuestionPage extends Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.setEditorState = this.setEditorState.bind(this)
    this.setReferencesEditorState = this.setReferencesEditorState.bind(this)
    this.setAnswersState = this.setAnswersState.bind(this)
    this.addImage = this.addImage.bind(this)
    this.handleCanonicalChange = this.handleCanonicalChange.bind(this)

    let params = new URLSearchParams()
    if (isBrowser())
      params = new URLSearchParams(location.search)

    this.state = {
      uploadError: '',
      id: params.has('docid') ? params.get('docid') : shortid.generate(),
      editorState: EditorState.createEmpty(decorators),
      referencesEditorState: EditorState.createEmpty(decorators),
      answersState: [
        {
          isCorrectAnswer: false,
          value: ''
        },
        {
          isCorrectAnswer: false,
          value: ''
        },
        {
          isCorrectAnswer: false,
          value: ''
        }
      ],
      hasBeenSaved: !!params.has('docid'),
      doc: {},
      canonical: ''
    }

    if (params.has('docid'))
      this.getData(params.get('docid'))
  }

  getData(docId) {
    getDoc('Tests/MS-500/Questions', docId).then((doc) => this.setState({
      doc,
      editorState: EditorState.createWithContent(convertFromRaw(doc.question), decorators),
      referencesEditorState: EditorState.createWithContent(convertFromRaw(doc.references), decorators),
      answersState: doc.answers,
      canonical: doc.canonical || ''
    }))
  }

  setEditorState(editorState) {
    this.setState({
      editorState
    })
  }

  setReferencesEditorState(referencesEditorState) {
    this.setState({
      referencesEditorState
    })
  }

  setAnswersState(answersState) {
    this.setState({
      answersState
    })
  }

  addImage(json) {
    const content = JSON.parse(JSON.stringify(this.state.content))
    content.images.push(json.data.url)
    this.setState({content})
  }

  handleCanonicalChange(event) {
    const canonical = event.target.value
    this.setState({canonical})
  }

  render() {
    const {editorState, answersState, uploadError, referencesEditorState} = this.state

    const handleCorrectAnswerChange = (event) => {
      const idx = event.target.dataset.index
      const target = event.target
      const items = [...answersState]
      const item = {...items[idx]}
      item.isCorrectAnswer = target.type === 'checkbox' ? target.checked : target.value
      items[idx] = item
      this.setAnswersState(items)
    }

    const handleAnswerChange = (event) => {
      const idx = event.target.dataset.index
      const target = event.target
      const items = [...answersState]
      const item = {...items[idx]}
      item.value = target.type === 'checkbox' ? target.checked : target.value
      items[idx] = item
      this.setAnswersState(items)
    }

    const addAnswer = () => {
      const items = [...answersState]
      items.push({
        isCorrectAnswer: false,
        value: ''
      })
      this.setAnswersState(items)
    }

    const deleteAnswer = (event) => {
      const idx = event.target.dataset.index
      const items = [...answersState]
      items.splice(idx, 1)
      this.setAnswersState(items)
    }

    const save = () => {
      const data = {
        answers: this.state.answersState,
        question: convertToRaw(this.state.editorState.getCurrentContent()),
        references: convertToRaw(this.state.referencesEditorState.getCurrentContent()),
        id: this.state.id
      }

      if (this.state.canonical && this.state.canonical !== '')
        data.canonical = this.state.canonical

      saveDoc('Tests/MS-500/Questions', data)
      this.setState({
        hasBeenSaved: true
      })
    }

    const deleteQuestion = () => {
      if (window.confirm('Are you sure you want to delete the question?')) {
        deleteDoc(`Tests/MS-500/Questions`, this.state.id).then(() => {
          window.location.href = '/course/ms-500/edit/'
        }).catch((error) => {
          console.error('Error removing document: ', error)
        })
      }
    }

    return (
      <Page title={'Microsoft 365 MS-500 practice test question edit'} description={'Edit the MS-500 Practice test questions'}>
        <main>
          <style>{universalStyles}</style>
          <Container>
            <Grid container sx={{alignItems: 'center'}}>
              <Grid item xs={6}><h1>Question</h1></Grid>
              <Grid item xs={6} sx={{display: 'flex', justifyContent: 'end'}}>
                { this.state.hasBeenSaved ?
                    <Button variant="outlined" color="error" style={{marginRight: '12px'}} onClick={deleteQuestion}>Delete</Button> :
                    ''
                }

                <Button onClick={save}>Save</Button>
              </Grid>
            </Grid>
            <Grid container>
              <Alert severity="error" sx={{display: (uploadError === '' ? 'none' : 'flex')}}>
                <h5>Error Uploading file to Imgur</h5>
                <p>{uploadError}</p>
              </Alert>
            </Grid>
            <Grid container>
              <Grid item>
                <Wysiwyg editorState={editorState} onEditorStateChange={this.setEditorState} addImage={this.addImage} />
              </Grid>
            </Grid>
            {answersState.map((answerState, index) => {
              return (
                <div style={optionStyles} key={index}>
                  <Checkbox data-index={index} style={checkboxStyles} checked={answerState.isCorrectAnswer} onChange={handleCorrectAnswerChange} />
                  <TextField fullWidth label="Answer option" variant="outlined" data-index={index} value={answerState.value} onChange={handleAnswerChange} />
                  <Button onClick={deleteAnswer} data-index={index} style={deleteAnswerStyle} variant="outlined" color="error">Delete</Button>
                </div>
              )
            })}
            <Button onClick={addAnswer}>Add</Button>
            <div>
              <h2 style={referencesStyle}>References</h2>
              <Wysiwyg editorState={referencesEditorState} onEditorStateChange={this.setReferencesEditorState} addImage={this.addImage} />
            </div>
            <div>
              <TextField fullWidth label="Canonical" variant="outlined" value={this.state.canonical} onChange={this.handleCanonicalChange} sx={{mt: 2}} />
            </div>
          </Container>
        </main>
      </Page>
    )
  }
}

export default EditQuestionPage
