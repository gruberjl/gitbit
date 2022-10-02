import {h, Component, createRef} from 'preact'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DragIcon from '@mui/icons-material/DragIndicator'
const clone = require('clone')

const answerContainerStyle = {
  display: 'flex',
  margin: '8px 0px',
  'align-items': 'stretch'
}

const placeholderStyle = {
  color: 'grey',
  'line-height': '38px',
  'min-height': '100%',
  margin: 0,
  'text-align': 'center'
}

class DragDrop extends Component {
  container = createRef()
  correctAnswerContainer = createRef()

  constructor(props) {
    super()
    this.onDrop = this.onDrop.bind(this)
    this.onDragStart = this.onDragStart.bind(this)
    this.showAnswerStyle = this.showAnswerStyle.bind(this)
  }

  onDragStart(answerOption) {
    return (ev) => {
      ev.dataTransfer.setData('answerOptionId', answerOption.id)
    }
  }

  onDrop(answer) {
    return (ev) => {
      ev.preventDefault()
      const answerOptionId = ev.dataTransfer.getData('answerOptionId')
      const answers = clone(this.props.answers)

      if (!answers[answer.id])
        answers[answer.id] = {}

      answers[answer.id].answerId = answerOptionId
      this.props.setAnswer(answers)
    }
  }

  showAnswerStyle(question) {
    if (!this.props.showAnswers)
      return {}

    const correctAnswer = this.props.testAnswers[question.id].answerId

    let selectAnswer
    if (this.props.answers[question.id])
      selectAnswer = this.props.answers[question.id].answerId

    if (correctAnswer === selectAnswer)
      return {background: 'rgb(237, 247, 237)'}
    return {background: 'rgb(253, 237, 237)'}
  }

  render() {
    const answerOptions = Object.values(this.props.question.answerOptions).filter((answerOption) => !Object.keys(this.props.answers).includes(answerOption.id))
    const questions = Object.values(this.props.question.questions)
    // console.log(answerOptions)
    // console.log(this.props.testAnswers[answerOptions[0].id].answerId)

    return (
      <Grid container>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{__html: this.props.question.questionHtml}} />
        </Grid>
        <Grid item xs={12} md={6} ref={this.container} data-list='optional'>
          <Typography variant="h4" component="h2" gutterBottom>Optional answers</Typography>
          {answerOptions.map((answerOption) => (
            <div style={answerContainerStyle} className="answer" key={answerOption.id} draggable="true" ondragstart={this.onDragStart(answerOption)}>
              <IconButton className="answer-handle"><DragIcon /></IconButton>
              <Typography variant="body1" style={{display: 'flex', alignItems: 'center'}}>{answerOption.answer}</Typography>
            </div>
          ))}
          <Button onClick={this.addAnswerOption}>Add</Button>
        </Grid>
        <Grid item xs={12} md={6} ref={this.correctAnswerContainer} data-list='correct'>
          <Typography variant="h4" component="h2" gutterBottom>Correct answers</Typography>
          { questions.map((question) => (
            <Grid container item xs={12} key={question.id} style={{marginBottom: '8px'}}>
              <Grid item xs={6}>
                <Typography variant="body1" style={{display: 'flex', alignItems: 'center', minHeight: '100%'}}>{question.text}</Typography>
              </Grid>
              <Grid item xs={6} style={this.showAnswerStyle(question)}>
                <div style={{border: '1px solid black'}} ondrop={this.onDrop(question)} ondragover={(ev) => ev.preventDefault()}>
                  <p style={placeholderStyle}>{this.props.answers[question.id] ? this.props.question.answerOptions[this.props.answers[question.id].answerId].answer : 'correct answer here'}</p>
                </div>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} style={this.props.showAnswers ? {display: 'block'} : {display: 'none'}}>
          <Typography variant="h4" component="h2" gutterBottom>Answer</Typography>
          { Object.values(this.props.testAnswers).map((testAnswer) => (
            <span key={testAnswer.id}>
              <Typography variant="h5" component="h3" gutterBottom>{this.props.question.questions[testAnswer.id].text}</Typography>
              <Typography variant="body1" gutterBottom>{this.props.question.answerOptions[testAnswer.answerId].answer}</Typography>
            </span>
          ))}
        </Grid>
      </Grid>
    )
  }
}
// <Typography variant="body1" gutterBottom>{answerOption.answers[Object.values(this.props.testAnswers[answerOption.id]).find(answer => answer.isCorrect).id].text}</Typography>
export default DragDrop
