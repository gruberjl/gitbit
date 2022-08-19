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

class HotArea extends Component {
  constructor(props) {
    super()
    this.addAnswerOption = this.addAnswerOption.bind(this)
    this.setAnswerOption = this.setAnswerOption.bind(this)
    this.setQuestionState = this.setQuestionState.bind(this)
    this.deleteAnswerOption = this.deleteAnswerOption.bind(this)
    this.setCorrectAnswer = this.setCorrectAnswer.bind(this)
    this.setAnswerOptionAnswer = this.setAnswerOptionAnswer.bind(this)
    this.addAnswerOptionAnswer = this.addAnswerOptionAnswer.bind(this)
    this.deleteAnswerOptionAnswer = this.deleteAnswerOptionAnswer.bind(this)

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
      text: '',
      answers: {}
    }

    const question = clone(this.props.question)
    question.answerOptions[answerOption.id] = answerOption

    this.props.setQuestion(question)

    const answers = clone(this.props.answers)
    answers[answerOption.id] = {}
    this.props.setAnswers(answers)
  }

  setAnswerOption(answerOption) {
    return (event) => {
      const question = clone(this.props.question)
      question.answerOptions[answerOption.id].text = event.target.value
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

  setCorrectAnswer(answerOption, answer) {
    return (event) => {
      const answers = clone(this.props.answers)

      answers[answerOption.id][answer.id].isCorrect = event.target.checked
      this.props.setAnswers(answers)
    }
  }

  setAnswerOptionAnswer(answerOption, answer) {
    return (event) => {
      const question = clone(this.props.question)
      question.answerOptions[answerOption.id].answers[answer.id].text = event.target.value
      this.props.setQuestion(question)
    }
  }

  addAnswerOptionAnswer(answerOption) {
    return () => {
      const question = clone(this.props.question)
      const answer = {
        id: shortid.generate().toLowerCase(),
        text: ''
      }
      question.answerOptions[answerOption.id].answers[answer.id] = answer
      this.props.setQuestion(question)

      const answers = clone(this.props.answers)
      answers[answerOption.id][answer.id] = {
        id: answer.id,
        isCorrect: false
      }
      this.props.setAnswers(answers)
    }
  }

  deleteAnswerOptionAnswer(answerOption, answer) {
    return () => {
      const question = clone(this.props.question)
      console.log(question.answerOptions[answerOption.id].answers)
      delete question.answerOptions[answerOption.id].answers[answer.id]
      this.props.setQuestion(question)
    }
  }

  render() {
    const optionalAnswers = Object.values(this.props.question.answerOptions)

    return (
      <Grid container>
        <Grid item xs={12}>
          <Wysiwyg editorState={this.state.questionState} onEditorStateChange={this.setQuestionState} addImage={this.props.addImage} />
        </Grid>
        {optionalAnswers.map((answerOption) => (
          <Grid container item xs={12} key={answerOption.id}>
            <Grid item xs={11}>
              <input value={answerOption.text} onChange={this.setAnswerOption(answerOption)} style={{width: '100%', height: '40px'}} placeholder="hot area label" />
            </Grid>
            <Grid item xs={1}>
              <IconButton aria-label="delete" size="large" onClick={this.deleteAnswerOption(answerOption)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
            { Object.values(answerOption.answers).map((answer) => (
              <Grid item container xs={12} key={answer.id}>
                <Grid item xs={1} style={{display: 'flex', 'justify-content': 'end'}}>
                  <Checkbox checked={this.props.answers[answerOption.id][answer.id].isCorrect} onChange={this.setCorrectAnswer(answerOption, answer)} />
                </Grid>
                <Grid item xs={10} style={{padding: '6px 0px', display: 'flex'}}>
                  <input value={answer.text} onChange={this.setAnswerOptionAnswer(answerOption, answer)} style={{height: '42px', width: 'calc(100% - 48px)'}} />
                  <IconButton aria-label="delete" size="large" onClick={this.deleteAnswerOptionAnswer(answerOption, answer)}>
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button onClick={this.addAnswerOptionAnswer(answerOption)}>Add optional answer</Button>
            </Grid>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button onClick={this.addAnswerOption}>Add hot area</Button>
        </Grid>
      </Grid>
    )
  }
}

export default HotArea
