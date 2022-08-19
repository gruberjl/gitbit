import {h, Component} from 'preact'
import Grid from '@mui/material/Grid'
import Wysiwyg from '../wysiwyg'
import Button from '@mui/material/Button'
import shortid from 'shortid'
import decorators from '../wysiwyg-decorators'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import {EditorState, convertToRaw, convertFromRaw} from 'draft-js'
const clone = require('clone')

class MultipleChoice extends Component {
  constructor(props) {
    super()
    this.addAnswerOption = this.addAnswerOption.bind(this)
    this.setQuestionState = this.setQuestionState.bind(this)
    this.setAnswerState = this.setAnswerState.bind(this)
    this.deleteAnswerOption = this.deleteAnswerOption.bind(this)
    this.setAnswers = this.setAnswers.bind(this)

    const answersState = {}
    Object.values(props.question.answerOptions).forEach((answerOption) => {
      answersState[answerOption.id] = EditorState.createWithContent(convertFromRaw(answerOption.answer), decorators)
    })

    this.state = {
      questionState: EditorState.createWithContent(convertFromRaw(props.question.question), decorators),
      answersState
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
      answer: convertToRaw(EditorState.createEmpty(decorators).getCurrentContent())
    }

    const question = clone(this.props.question)
    question.answerOptions[answerOption.id] = answerOption

    const answersState = this.state.answersState
    answersState[answerOption.id] = EditorState.createEmpty(decorators)

    const answers = clone(this.props.answers)
    answers[answerOption.id] = {
      id: answerOption.id,
      isCorrect: false
    }
    this.props.setAnswers(answers)

    this.props.setQuestion(question)
  }

  setAnswerState(answerOption) {
    return (answerState) => {
      const answersState = this.state.answersState
      answersState[answerOption.id] = answerState
      this.setState({answersState})

      const question = clone(this.props.question)
      question.answerOptions[answerOption.id].answer = convertToRaw(answersState[answerOption.id].getCurrentContent())
      this.props.setQuestion(question)
    }
  }

  deleteAnswerOption(answerOption) {
    const question = clone(this.props.question)
    delete question.answerOptions[answerOption.id]
    this.props.setQuestion(question)

    const answersState = this.state.answersState
    delete answersState[answerOption.id]
    this.setState({answersState})

    const answers = clone(this.props.answers)
    delete answers[answerOption.id]
    this.props.setAnswers(answers)
  }

  setAnswers(answerOption) {
    return (event) => {
      const answers = clone(this.props.answers)
      answers[answerOption.id] = {
        id: answerOption.id,
        isCorrect: event.target.checked
      }
      this.props.setAnswers(answers)
    }
  }

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Wysiwyg editorState={this.state.questionState} onEditorStateChange={this.setQuestionState} addImage={this.props.addImage} />
        </Grid>
        {Object.values(this.props.question.answerOptions).map((answerOption) => (
          <Grid container item xs={12} key={answerOption.id} style={{border: '1px solid', paddingBottom: '6px', marginTop: '6px'}}>
            <Grid item xs={1}>
              <Checkbox checked={this.props.answers[answerOption.id].isCorrect} onChange={this.setAnswers(answerOption)} />
            </Grid>
            <Grid item xs={10}>
              <Wysiwyg editorState={this.state.answersState[answerOption.id]} onEditorStateChange={this.setAnswerState(answerOption)} addImage={this.props.addImage} />
            </Grid>
            <Grid item xs={1}>
              <IconButton aria-label="delete" size="large" onClick={() => this.deleteAnswerOption(answerOption)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button onClick={this.addAnswerOption}>Add</Button>
        </Grid>
      </Grid>
    )
  }
}

export default MultipleChoice
