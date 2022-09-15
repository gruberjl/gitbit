import {h} from 'preact'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
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

const Choice = ({question, answers, setAnswer, testAnswers, showAnswers}) => {
  const selectAnswer = (answerOption) => {
    return () => {
      const newAnswers = clone(answers)

      if (newAnswers[answerOption.id]) {
        delete newAnswers[answerOption.id]
      } else {
        newAnswers[answerOption.id] = {
          id: answerOption.id
        }
      }

      setAnswer(newAnswers)
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <div dangerouslySetInnerHTML={{__html: question.questionHtml}} />
      </Grid>
      {Object.values(question.answerOptions).map((answerOption) => (
        <Grid container item xs={12} key={answerOption.id} style={(showAnswers && testAnswers[answerOption.id].isCorrect ? correctAnswerStyle : answerStyle)} key={answerOption.id}>
          <Grid item xs={1} style={{marginBlockStart: 'calc(1em - 12px)', textAlign: 'right'}}>
            <Checkbox id={`chk-${answerOption.id}`} checked={answers.hasOwnProperty(answerOption.id)} onChange={selectAnswer(answerOption)} />
          </Grid>
          <Grid item xs={11}>
            <label for={`chk-${answerOption.id}`} dangerouslySetInnerHTML={{__html: answerOption.answerHtml}} style={{cursor: 'pointer'}} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default Choice
