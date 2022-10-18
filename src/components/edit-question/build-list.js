import {h, Component, createRef} from 'preact'
import Grid from '@mui/material/Grid'
import Wysiwyg from '../wysiwyg'
import Button from '@mui/material/Button'
import shortid from 'shortid'
import decorators from '../wysiwyg-decorators'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
import DragIcon from '@mui/icons-material/DragIndicator'
import ChevronRight from '@mui/icons-material/ChevronRight'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
const clone = require('clone')
import Sortable from 'sortablejs'

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
    this.addAnswerOption = this.addAnswerOption.bind(this)
    this.setQuestionState = this.setQuestionState.bind(this)
    this.deleteAnswerOption = this.deleteAnswerOption.bind(this)
    this.setAnswers = this.setAnswers.bind(this)
    this.onAnswerSortChange = this.onAnswerSortChange.bind(this)

    this.state = {
      questionState: EditorState.createWithContent(convertFromRaw(props.question.question), decorators)
    }
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

    this.props.setAnswers(answers)
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

  setAnswers(answerOption) {
    return (event) => {
      const answers = clone(this.props.answers)
      answers[answerOption.id] = event.target.checked
      this.props.setAnswers(answers)
    }
  }

  render() {
    const optionalAnswers = Object.values(this.props.question.answerOptions).filter((answerOption) => !Object.keys(this.props.answers).includes(answerOption.id))
    const correctAnswers = Object.values(this.props.question.answerOptions).filter((answerOption) => Object.keys(this.props.answers).includes(answerOption.id))
        .sort((a, b) => {
          const answerA = this.props.answers[a.id]
          const answerB = this.props.answers[b.id]
          return answerA.idx - answerB.idx
        })

    return (
      <Grid container>
        <Grid item xs={12}>
          <Wysiwyg editorState={this.state.questionState} onEditorStateChange={this.setQuestionState} addImage={this.props.addImage} />
        </Grid>
        <Grid item xs={12} md={5} ref={this.container} data-list='optional'>
          <h2>Optional answers</h2>
          {optionalAnswers.map((answerOption) => (
            <div style={answerContainerStyle} className="answer" data-answer-option-id={answerOption.id} key={answerOption.id}>
              <IconButton className="answer-handle"><DragIcon /></IconButton>
              <input type="text" value={answerOption.answer} onChange={this.setAnswerOption(answerOption)} key={answerOption.id} style={{flexGrow: 2}} />
              <IconButton onClick={this.deleteAnswerOption(answerOption)}>
                <DeleteIcon />
              </IconButton>
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
          <h2>correct answer</h2>
          {correctAnswers.map((answerOption) => (
            <div style={answerContainerStyle} className="answer" data-answer-option-id={answerOption.id} key={answerOption.id}>
              <IconButton className="answer-handle"><DragIcon /></IconButton>
              <input type="text" value={answerOption.answer} onChange={this.setAnswerOption(answerOption)} key={answerOption.id} style={{flexGrow: 2}} />
              <IconButton onClick={this.deleteAnswerOption(answerOption)}>
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </Grid>
      </Grid>
    )
  }
}

export default BuildList
