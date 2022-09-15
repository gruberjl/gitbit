import {h, Component, createRef} from 'preact'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox'
import DragIcon from '@mui/icons-material/DragIndicator'
import ChevronRight from '@mui/icons-material/ChevronRight'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import Error from '@mui/icons-material/Error'
import Sortable from 'sortablejs'
const clone = require('clone')

const marginTop24Style = {
  marginTop: '24px'
}

const correctAnswerStyle = {
  background: 'rgb(237, 247, 237)',
  color: 'rgb(30, 70, 32)',
  paddingBottom: '6px',
  marginTop: '6px'
}

const answerStyle = {
  paddingBottom: '6px',
  marginTop: '6px'
}

const answerContainerStyle = {
  display: 'flex',
  margin: '8px 0px',
  'align-items': 'stretch'
}

const leftRightButtonStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

class BuildList extends Component {
  container = createRef()
  correctAnswerContainer = createRef()

  constructor(props) {
    super()
    this.selectAnswer = this.selectAnswer.bind(this)
    this.onAnswerSortChange = this.onAnswerSortChange.bind(this)
    this.showAnswerStyle = this.showAnswerStyle.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      Sortable.create(this.container.current, {
        group: 'answers',
        handle: '.answer-handle',
        draggable: '.answer',
        onEnd: this.onAnswerSortChange
      })
      Sortable.create(this.correctAnswerContainer.current, {
        group: 'answers',
        handle: '.answer-handle',
        draggable: '.answer',
        onEnd: this.onAnswerSortChange
      })
    }, 1000)
  }

  selectAnswer(answerOption) {
    return () => {
      const newAnswers = clone(this.props.answers)

      if (newAnswers[answerOption.id]) {
        delete newAnswers[answerOption.id]
      } else {
        newAnswers[answerOption.id] = {
          id: answerOption.id
        }
      }

      this.props.setAnswer(newAnswers)
    }
  }

  onAnswerSortChange(ev) {
    const oldList = ev.from.dataset.list
    const newList = ev.to.dataset.list
    const answers = clone(this.props.answers)
    const oldIdx = ev.oldDraggableIndex
    const newIdx = ev.newDraggableIndex

    if (oldList === 'optional' && newList === 'correct') {
      Object.values(answers).forEach((answer) => {
        if (answer.idx >= newIdx)
          answers[answer.id].idx = answer.idx + 1
      })

      answers[ev.item.dataset.answerOptionId] = {
        id: ev.item.dataset.answerOptionId,
        idx: newIdx
      }
    }

    if (oldList === 'correct' && newList === 'optional') {
      delete answers[ev.item.dataset.answerOptionId]
      Object.values(answers).forEach((answer) => {
        if (answer.idx >= oldIdx)
          answers[answer.id].idx = answer.idx - 1
      })
    }

    if (oldList === 'correct' && newList === 'correct') {
      Object.values(answers).forEach((answer) => {
        if (answer.idx >= oldIdx)
          answers[answer.id].idx = answer.idx - 1

        if (answer.idx >= newIdx)
          answers[answer.id].idx = answer.idx + 1
      })

      answers[ev.item.dataset.answerOptionId].idx = newIdx
    }

    this.props.setAnswer(answers)
  }

  showAnswerStyle(answer) {
    const newAnswerContainerStyle = clone(answerContainerStyle)
    if (!this.props.showAnswers)
      return newAnswerContainerStyle

    const correctAnswer = this.props.testAnswers[answer.id]

    if (correctAnswer && correctAnswer.id === answer.id && correctAnswer.idx === answer.idx)
      newAnswerContainerStyle.background = 'rgb(237, 247, 237)'
    else
      newAnswerContainerStyle.background = 'rgb(253, 237, 237)'

    return newAnswerContainerStyle
  }

  render() {
    const answerOptions = Object.values(this.props.question.answerOptions).filter((answerOption) => !Object.keys(this.props.answers).includes(answerOption.id))
    const answers = Object.values(this.props.answers).sort((a, b) => {
      return a.idx - b.idx
    })
    const testAnswers = Object.values(this.props.testAnswers).sort((a, b) => a.idx - b.idx)

    return (
      <Grid container>
        <Grid item xs={12}>
          <div dangerouslySetInnerHTML={{__html: this.props.question.questionHtml}} />
        </Grid>
        <Grid item xs={12} md={5} ref={this.container} data-list='optional'>
          <Typography variant="h4" component="h2" gutterBottom>Optional answers</Typography>
          {answerOptions.map((answerOption) => (
            <div style={answerContainerStyle} className="answer" data-answer-option-id={answerOption.id} key={answerOption.id}>
              <IconButton className="answer-handle"><DragIcon /></IconButton>
              <Typography variant="body1" style={{display: 'flex', alignItems: 'center'}}>{answerOption.answer}</Typography>
            </div>
          ))}
          <Button onClick={this.addAnswerOption}>Add</Button>
        </Grid>
        <Grid item xs={12} md='auto' style={leftRightButtonStyle}>
          <IconButton variant="outlined">
            <ChevronRight />
          </IconButton>
          <IconButton variant="outlined">
            <ChevronLeft />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={5} ref={this.correctAnswerContainer} data-list='correct'>
          <Typography variant="h4" component="h2" gutterBottom>Correct answers</Typography>
          {answers.map((answer) => (
            <div style={answerContainerStyle} className="answer" data-answer-option-id={answer.id} key={answer.id} style={this.showAnswerStyle(answer)}>
              <IconButton className="answer-handle"><DragIcon /></IconButton>
              <Typography variant="body1" style={{display: 'flex', alignItems: 'center'}}>{this.props.question.answerOptions[answer.id].answer}</Typography>
            </div>
          ))}
          { this.props.showAnswers && answers.length < testAnswers.length ? (
              <div style={answerContainerStyle} style={Object.assign({}, answerContainerStyle, {color: 'rgb(95, 33, 32)'})}>
                <IconButton><Error /></IconButton>
                <Typography variant="body1" style={{display: 'flex', alignItems: 'center'}}>Missing answer</Typography>
              </div>
            ) :
            ''
          }
        </Grid>
        <Grid item xs={12} style={this.props.showAnswers ? {display:'block'} : {display:'none'}}>
          <Typography variant="h4" component="h2" gutterBottom>Answer</Typography>
          { testAnswers.map((testAnswer) => (
            <span>
              <Typography variant="body1" gutterBottom>{this.props.question.answerOptions[testAnswer.id].answer}</Typography>
            </span>
          ))}
        </Grid>
      </Grid>
    )
  }
}

export default BuildList
