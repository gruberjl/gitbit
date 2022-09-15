import {h, Component} from 'preact'
import Grid from '@mui/material/Grid'
import Wysiwyg from '../wysiwyg'
import Button from '@mui/material/Button'
import shortid from 'shortid'
import decorators from '../wysiwyg-decorators'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import DragIcon from '@mui/icons-material/DragIndicator'
const clone = require('clone')

const answerContainerStyle = {
  display: 'flex',
  margin: '8px 0px',
  'align-items': 'stretch',
  height: '40px'
}

const placeholderStyle = {
  color: 'grey',
  'line-height': '38px',
  'min-height': '100%',
  margin: 0,
  'text-align': 'center'
}

class DragDrop extends Component {
  constructor(props) {
    super()
    this.addAnswerOption = this.addAnswerOption.bind(this)
    this.setAnswerOption = this.setAnswerOption.bind(this)
    this.setQuestionState = this.setQuestionState.bind(this)
    this.deleteAnswerOption = this.deleteAnswerOption.bind(this)
    this.addAnswer = this.addAnswer.bind(this)
    this.deleteAnswer = this.deleteAnswer.bind(this)
    this.setQuestionText = this.setQuestionText.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.onDragStart = this.onDragStart.bind(this)

    this.state = {
      questionState: EditorState.createWithContent(convertFromRaw(props.question.question), decorators)
    }
  }

  setQuestionState(questionState) {
    this.setState({questionState})
    const question = clone(this.props.question)
    question.question = convertToRaw(questionState.getCurrentContent())
    this.props.setQuestion(question)
  }

  addAnswerOption() {
    const answerOption = {
      id: shortid.generate().toLowerCase(),
      answer: ''
    }

    const question = clone(this.props.question)
    question.answerOptions[answerOption.id] = answerOption

    this.props.setQuestion(question)
  }

  setAnswerOption(answerOption) {
    return (event) => {
      const question = clone(this.props.question)
      question.answerOptions[answerOption.id].answer = event.target.value
      this.props.setQuestion(question)
    }
  }

  deleteAnswerOption(answerOption) {
    return () => {
      const question = clone(this.props.question)
      delete question.answerOptions[answerOption.id]
      this.props.setQuestion(question)

      const answers = clone(this.props.answers)
      delete answers[answerOption.id]
      this.props.setAnswers(answers)
    }
  }

  deleteAnswer(question) {
    return () => {
      const answers = clone(this.props.answers)
      delete answers[question.id]
      this.props.setAnswers(answers)

      const question = clone(this.props.question)
      delete question.questions[question.id]
      this.props.setQuestion(question)
    }
  }

  setQuestionText(questionText) {
    return (event) => {
      const question = clone(this.props.question)
      question.questions[questionText.id].text = event.target.value
      this.props.setQuestion(question)
    }
  }

  addAnswer() {
    const question = clone(this.props.question)
    const newQuestion = {
      id: shortid.generate().toLowerCase(),
      text: '',
      answerId: ''
    }
    if (!question.questions)
      question.questions = {}

    question.questions[newQuestion.id] = newQuestion
    this.props.setQuestion(question)

    const answers = clone(this.props.answers)
    answers[newQuestion.id] = {
      id: newQuestion.id,
      answerId: ''
    }
    this.props.setAnswers(answers)
  }

  onDrop(questionText) {
    return (ev) => {
      ev.preventDefault()
      const answerOptionId = ev.dataTransfer.getData('answerOptionId')
      const answers = clone(this.props.answers)
      answers[questionText.id].answerId = answerOptionId
      this.props.setAnswers(answers)
    }
  }

  onDragStart(answerOption) {
    return (ev) => {
      ev.dataTransfer.setData('answerOptionId', answerOption.id)
    }
  }

  render() {
    const optionalAnswers = Object.values(this.props.question.answerOptions)
    const questions = this.props.question.questions ? Object.values(this.props.question.questions) : []
    const answers = Object.values(this.props.answers)

    return (
      <Grid container>
        <Grid item xs={12}>
          <Wysiwyg editorState={this.state.questionState} onEditorStateChange={this.setQuestionState} addImage={this.props.addImage} />
        </Grid>
        <Grid item xs={12} md={6} data-list='optional'>
          <h2>Optional answers</h2>
          {optionalAnswers.map((answerOption) => (
            <div style={answerContainerStyle} className="answer" key={answerOption.id} draggable="true" ondragstart={this.onDragStart(answerOption)}>
              <IconButton className="answer-handle"><DragIcon /></IconButton>
              <input type="text" value={answerOption.answer} onChange={this.setAnswerOption(answerOption)} key={answerOption.id} style={{flexGrow: 2}} />
              <IconButton onClick={this.deleteAnswerOption(answerOption)}>
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
          <Button onClick={this.addAnswerOption}>Add</Button>
        </Grid>
        <Grid container item xs={12} md={6} data-list='correct'>
          <Grid item xs={12}>
            <h2>Answer labels</h2>
          </Grid>
          { questions.map((question) => (
            <Grid container item xs={12} key={question.id}>
              <Grid item xs={6}>
                <input style={{height: '32px', width: 'calc(100% - 12px)'}} value={question.text} onChange={this.setQuestionText(question)} placeholder="answer text" />
              </Grid>
              <Grid item xs={5}>
                <div style={{border: '1px solid black'}} ondrop={this.onDrop(question)} ondragover={(ev) => ev.preventDefault()}>
                  <p style={placeholderStyle}>{this.props.answers[question.id].answerId ? this.props.question.answerOptions[this.props.answers[question.id].answerId].answer : 'correct answer here'}</p>
                </div>
              </Grid>
              <Grid item xs={1}>
                <IconButton onClick={this.deleteAnswer(question)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}
          <Button onClick={this.addAnswer}>Add</Button>
        </Grid>
      </Grid>
    )
  }
}

export default DragDrop
