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
    this.setAnswerText = this.setAnswerText.bind(this)
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

  deleteAnswer(answer) {
    return () => {
      const answers = clone(this.props.answers)
      delete answers[answer.id]
      this.props.setAnswers(answers)
    }
  }

  setAnswerText(answer) {
    return (event) => {
      const answers = clone(this.props.answers)
      answers[answer.id].text = event.target.value
      this.props.setAnswers(answers)
    }
  }

  addAnswer() {
    const answers = clone(this.props.answers)
    const newAnswer = {
      id: shortid.generate().toLowerCase(),
      text: '',
      answerId: ''
    }
    answers[newAnswer.id] = newAnswer
    this.props.setAnswers(answers)
  }

  onDrop(answer) {
    return (ev) => {
      ev.preventDefault()
      const answerOptionId = ev.dataTransfer.getData('answerOptionId')
      const answers = clone(this.props.answers)
      answers[answer.id].answerId = answerOptionId
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
          { answers.map((answer) => (
            <Grid container item xs={12} key={answer.id}>
              <Grid item xs={6}>
                <input style={{height: '32px', width: 'calc(100% - 12px)'}} value={answer.text} onChange={this.setAnswerText(answer)} placeholder="answer text" />
              </Grid>
              <Grid item xs={5}>
                <div style={{border: '1px solid black'}} ondrop={this.onDrop(answer)} ondragover={(ev) => ev.preventDefault()}>
                  <p style={placeholderStyle}>{answer.answerId ? this.props.question.answerOptions[answer.answerId].answer : 'correct answer here'}</p>
                </div>
              </Grid>
              <Grid item xs={1}>
                <IconButton onClick={this.deleteAnswer(answer)}>
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
