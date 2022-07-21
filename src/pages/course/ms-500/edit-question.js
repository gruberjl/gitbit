import { h, Component } from "preact"
import shortid from 'shortid'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
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

class EditQuestionPage extends Component {
  constructor(props) {
    super(props)
    this.getData = this.getData.bind(this)
    this.setEditorState = this.setEditorState.bind(this)
    this.setReferencesEditorState = this.setReferencesEditorState.bind(this)
    this.setAnswersState = this.setAnswersState.bind(this)
    this.addImage = this.addImage.bind(this)

    let params = new URLSearchParams()
    if (isBrowser())
      params = new URLSearchParams(location.search)

    this.state = {
      uploadError: '',
      id: params.has('docid') ? params.get('docid') : shortid.generate(),
      editorState: EditorState.createEmpty(),
      referencesEditorState: EditorState.createEmpty(),
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
      hasBeenSaved: params.has('docid') ? true : false,
      doc: {}
    }

    if (params.has('docid')) {
      this.getData(params.get('docid'))
    }
  }

  getData(docId) {
    getDoc('Tests/MS-500/Questions', docId).then(doc => this.setState({
      doc,
      editorState:EditorState.createWithContent(convertFromRaw(doc.question)),
      referencesEditorState:EditorState.createWithContent(convertFromRaw(doc.references)),
      answersState:doc.answers
    }))
  }

  setEditorState(editorState) {
    this.setState({
      editorState,
    });
  }

  setReferencesEditorState(referencesEditorState) {
    this.setState({
      referencesEditorState
    })
  }

  setAnswersState(answersState) {
    this.setState({
      answersState,
    })
  }

  addImage(json) {
    const content = JSON.parse(JSON.stringify(this.state.content))
    content.images.push(json.data.url)
    this.setState({content})
  }

  render() {
    const {editorState, answersState, uploadError, referencesEditorState} = this.state

    const handleCorrectAnswerChange = (event) => {
      const idx = event.target.dataset.index
      const target = event.target;
      let items = [...answersState];
      let item = {...items[idx]};
      item.isCorrectAnswer = target.type === 'checkbox' ? target.checked : target.value
      items[idx] = item;
      this.setAnswersState(items);
    }

    const handleAnswerChange = (event) => {
      const idx = event.target.dataset.index
      const target = event.target;
      let items = [...answersState];
      let item = {...items[idx]};
      item.value = target.type === 'checkbox' ? target.checked : target.value
      items[idx] = item;
      this.setAnswersState(items);
    }

    const addAnswer = () => {
      let items = [...answersState]
      items.push({
        isCorrectAnswer: false,
        value: ''
      })
      this.setAnswersState(items)
    }

    const deleteAnswer = (event) => {
      const idx = event.target.dataset.index
      let items = [...answersState]
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

      saveDoc('Tests/MS-500/Questions', data)
      this.setState({
        hasBeenSaved: true
      })
    }

    const deleteQuestion = () => {
      if(window.confirm('Are you sure you want to delete the question?')) {
        deleteDoc(`Tests/MS-500/Questions`, this.state.id).then(() => {
            window.location.href = "/course/ms-500/edit/"
        }).catch((error) => {
            console.error("Error removing document: ", error);
        })
      }
    }

    return (
      <Page title={'Microsoft 365 MS-500 practice test question edit'} description={'Edit the MS-500 Practice test questions'}>
        <main>
          <div>
            <Container>
              <Grid container>
                <Grid item xs={6}><h1>Question</h1></Grid>
                <Grid item xs={6} className='text-end'>
                  { this.state.hasBeenSaved ?
                      <Button variant="outlined" color="error" style={{marginRight: '12px'}} onClick={deleteQuestion}>Delete</Button> :
                      ''
                  }

                  <Button onClick={save}>Save</Button>
                </Grid>
              </Grid>
              <Grid container>
                <Alert severity="error" sx={{ display: (uploadError === '' ? 'none' : 'flex') }}>
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
                    <Checkbox name={"AnswerCheck" + index} data-index={index} style={checkboxStyles} checked={answerState.isCorrectAnswer} onChange={handleCorrectAnswerChange} />
                    <TextField label="Answer option" variant="Standard" name={"Answer" + index} data-index={index} value={answerState.value} onChange={handleAnswerChange} />
                    <Button onClick={deleteAnswer} name={"deleteAnswer" + index} data-index={index} style={deleteAnswerStyle} variant="outlined" color="error">Delete</Button>
                  </div>
                )
              })}
              <Button onClick={addAnswer}>Add</Button>
              <div>
                <h2 style={referencesStyle}>References</h2>
                <Wysiwyg editorState={referencesEditorState} onEditorStateChange={this.setReferencesEditorState} addImage={this.addImage} />
              </div>
            </Container>
          </div>
        </main>
      </Page>
    )
  }
}

export default EditQuestionPage
