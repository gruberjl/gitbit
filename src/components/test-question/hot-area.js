import {h} from 'preact'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
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

const HotArea = ({question, answers, setAnswer, testAnswers, showAnswers}) => {
  const selectAnswer = (answerOption) => {
    return (el) => {
      const newAnswers = clone(answers)

      newAnswers[answerOption.id] = {
        id: answerOption.id,
        answer:el.target.value
      }

      setAnswer(newAnswers)
    }
  }

  const getSelectedAnswer = (answerOption) => {
    if (!answers[answerOption.id])
      return ''

    return answers[answerOption.id].answer
  }

  const showAnswerStyle = (answerOption) => {
    if (!showAnswers)
      return {}
    const correctAnswer = answerOption.answers[Object.values(testAnswers[answerOption.id]).find(answer => answer.isCorrect).id].id
    const selectAnswer = getSelectedAnswer(answerOption)

    if (correctAnswer === selectAnswer)
      return {background: 'rgb(237, 247, 237)'}
    else
      return {background: 'rgb(253, 237, 237)'}
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <div dangerouslySetInnerHTML={{__html: question.questionHtml}} />
      </Grid>
      {Object.values(question.answerOptions).map((answerOption) => (
        <Grid container item xs={12} key={answerOption.id} style={(showAnswers && testAnswers[answerOption.id].isCorrect ? correctAnswerStyle : answerStyle)} key={answerOption.id}>
          <Typography variant="body1">{answerOption.text}</Typography>
          <FormControl fullWidth>
            <Select value={getSelectedAnswer(answerOption)} onChange={selectAnswer(answerOption)} data-id={answerOption.id} style={showAnswerStyle(answerOption)}>
              <MenuItem value={undefined} style={{display: 'none'}}></MenuItem>
              { Object.values(answerOption.answers).map(answer => (
                <MenuItem value={answer.id} key={answer.id}>{answer.text}</MenuItem>
              )) }
            </Select>
          </FormControl>
        </Grid>
      ))}
      <Grid item xs={12} style={showAnswers ? {display:'block'} : {display:'none'}}>
        <Typography variant="h4" component="h2" gutterBottom>Answer</Typography>
        { Object.values(question.answerOptions).map((answerOption) => (
          <span>
            <Typography variant="h5" component="h3" gutterBottom>{answerOption.text}</Typography>
            <Typography variant="body1" gutterBottom>{answerOption.answers[Object.values(testAnswers[answerOption.id]).find(answer => answer.isCorrect).id].text}</Typography>
          </span>
        ))}
      </Grid>
    </Grid>
  )
}

export default HotArea
