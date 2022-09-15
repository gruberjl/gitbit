import {h, Component} from 'preact'
import Page from '../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MultipleChoice from '../../components/edit-question/multiple-choice'
import BuildList from '../../components/edit-question/build-list'
import DragDrop from '../../components/edit-question/drag-drop'
import HotArea from '../../components/edit-question/hot-area'
import Wysiwyg from '../../components/wysiwyg'
import decorators from '../../components/wysiwyg-decorators'
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import Button from '@mui/material/Button'
import saveDoc from '../../components/firebase/save-doc'
import {getDoc} from '../../components/firebase/get-doc'
import Snackbar from '@mui/material/Snackbar'
import TextField from '@mui/material/TextField'
import draftToHtml from 'draftjs-to-html'
import Alert from '@mui/material/Alert'
const clone = require('clone')

const isBrowser = () => typeof window !== 'undefined'

class EditQuestionPage extends Component {
  constructor() {
    super()
    this.setQuestion = this.setQuestion.bind(this)
    this.setQuestionType = this.setQuestionType.bind(this)
    this.addImage = this.addImage.bind(this)
    this.save = this.save.bind(this)
    this.closeAlert = this.closeAlert.bind(this)
    this.setAnswers = this.setAnswers.bind(this)
    this.setReferencesState = this.setReferencesState.bind(this)
    this.setTitle = this.setTitle.bind(this)

    let params = new URLSearchParams()
    if (isBrowser())
      params = new URLSearchParams(location.search)

    this.state = {
      question: {
        id: params.get('questionId'),
        question: '',
        type: '',
        images: [],
        answerOptions: {},
        references: ''
      },
      referencesState: EditorState.createEmpty(decorators),
      test: {
        id: params.get('testId'),
        answers: {}
      },
      courseId: params.get('courseId'),
      alert: '',
      titleRequired: false,
      questionTypeRequired: false
    }
  }

  componentDidMount() {
    getDoc(`courses/${this.state.courseId}/contents`, this.state.test.id).then((test) => {
      const question = test.questions[this.state.question.id]
      this.setState({
        test,
        question,
        referencesState: EditorState.createWithContent(convertFromRaw(question.references), decorators)
      })
    })
  }

  setQuestion(question) {
    this.setState({question})
  }

  setQuestionType(e) {
    const question = clone(this.state.question)
    question.type = e.target.value
    this.setState({question})
  }

  setTitle(e) {
    const question = clone(this.state.question)
    question.title = e.target.value
    this.setState({question})
  }

  setAnswers(answers) {
    const test = clone(this.state.test)
    test.answers[this.state.question.id] = answers
    this.setState({test})
  }

  addImage(json) {
    const question = clone(this.state.question)
    question.images.push(json.data.url)
    const test = clone(this.state.test)
    test.images.push(json.data.url)
    this.setState({question, test})
  }

  setReferencesState(referencesState) {
    this.setState({referencesState})
    const question = clone(this.state.question)
    question.references = convertToRaw(referencesState.getCurrentContent())
    this.setState({question, referencesState})
  }

  save() {
    const test = clone(this.state.test)
    const question = this.state.question

    const error = {}
    if (question.title)
      error.titleRequired = false
    else
      error.titleRequired = true

    if (question.type)
      error.questionTypeRequired = false
    else
      error.questionTypeRequired = true

    this.setState(error)

    if (!error.titleRequired && !error.questionTypeRequired) {
      const questionHtml = draftToHtml(question.question)
      const referencesHtml = draftToHtml(question.references).replace(/\\/g, '\\\\')
      const questionText = convertFromRaw(question.question).getPlainText().replace(/\r?\n|\r/g, ' ').replace(/\s\s+/g, ' ')
      const answerOptions = Object.values(question.answerOptions)

      for (let i = 0; i < answerOptions.length; i++) {
        const answerOption = answerOptions[i]
        question.answerOptions[answerOption.id].answerHtml = draftToHtml(answerOption.answer)
      }

      if (!question.slug) {
        const slug = `${question.title
            .replaceAll(/[^a-zA-Z0-9 ]/g, '')
            .replaceAll(/ {2,}/g, ' ')
            .replaceAll(/ /g, '-')
            .toLowerCase()
            .slice(0, 25) }-${question.id}`

        question.slug = slug
      }

      question.questionText = questionText
      question.questionHtml = questionHtml
      question.referencesHtml = referencesHtml
      test.questions[question.id] = question
      // test.questions[this.state.question.id].question = convertToRaw(this.state.questionState.getCurrentContent())
      // test.questions[this.state.question.id].references = convertToRaw(this.state.referencesState.getCurrentContent())

      saveDoc(`courses/${this.state.courseId}/contents`, test, false).then(() => {
        this.setState({alert: 'saved'})
      })
    }
  }

  closeAlert() {
    this.setState({alert: ''})
  }

  render() {
    return (
      <Page title={'Edit Question'} description={'Edit your question.'}>
        <main>
          <div>
            <Container>
              <Grid container>
                <Grid item xs={12}>
                  <Typography sx={{mt: 5}} variant="h2" component="h1">Edit Question</Typography>
                </Grid>
                <Grid item xs={10}>
                  <FormControl sx={{m: 1, minWidth: 200}}>
                    <InputLabel id="question-type-label">Question type</InputLabel>
                    <Select labelId="question-type-label" id="question-type" value={this.state.question.type} label="Question type" onChange={this.setQuestionType}>
                      <MenuItem value="multiple-choice">Multiple choice</MenuItem>
                      <MenuItem value="build-list">Build list</MenuItem>
                      <MenuItem value="drag-drop">Drag and drop</MenuItem>
                      <MenuItem value="hot-area">Hot area</MenuItem>
                    </Select>
                    <FormHelperText>Type of question</FormHelperText>
                  </FormControl>
                  <Alert severity="error" style={this.state.questionTypeRequired ? {display:'flex'} : {display:'none'}}>Question type is a required field!</Alert>
                </Grid>
                <Grid xs={2}>
                  <Button onClick={this.save}>Save</Button>
                </Grid>
                <Grid xs={12}>
                  <TextField id="title" label="Question title" variant="standard" onChange={this.setTitle} value={this.state.question.title} fullWidth />
                  <Alert severity="error" style={this.state.titleRequired ? {display:'flex'} : {display:'none'}}>Question title is a required field!</Alert>
                </Grid>
                <Grid xs={12}>
                  {
                    {
                      'multiple-choice': <MultipleChoice
                        question={this.state.question}
                        setQuestion={this.setQuestion}
                        addImage={this.addImage}
                        answers={this.state.test.answers[this.state.question.id]}
                        setAnswers={this.setAnswers}
                      />,
                      'build-list': <BuildList
                        question={this.state.question}
                        setQuestion={this.setQuestion}
                        addImage={this.addImage}
                        answers={this.state.test.answers[this.state.question.id]}
                        setAnswers={this.setAnswers}
                      />,
                      'drag-drop': <DragDrop
                        question={this.state.question}
                        setQuestion={this.setQuestion}
                        addImage={this.addImage}
                        answers={this.state.test.answers[this.state.question.id]}
                        setAnswers={this.setAnswers}
                      />,
                      'hot-area': <HotArea
                        question={this.state.question}
                        setQuestion={this.setQuestion}
                        addImage={this.addImage}
                        answers={this.state.test.answers[this.state.question.id]}
                        setAnswers={this.setAnswers}
                      />
                    }[this.state.question.type]
                  }
                </Grid>
                <Grid item xs={12}>
                  <h2>References</h2>
                </Grid>
                <Grid item xs={12}>
                  <Wysiwyg editorState={this.state.referencesState} onEditorStateChange={this.setReferencesState} addImage={this.props.addImage} />
                </Grid>
              </Grid>
            </Container>
          </div>
        </main>
        <Snackbar message={this.state.alert} open={this.state.alert !== ''} autoHideDuration={3000} onClose={this.closeAlert} />
      </Page>
    )
  }
}

export default EditQuestionPage
