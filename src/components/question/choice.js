import {h} from 'preact'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

const correctAnswerStyle = {
  background: 'rgb(237, 247, 237)',
  color: 'rgb(30, 70, 32)'
}

const QuestionChoice = ({questionHtml, question, testQuestion, onTestQuestionChange, showAnswer}) => {
  const onAnswerChange = (answerValue) => {
    const newTestQuestion = JSON.parse(JSON.stringify(testQuestion))

    if (newTestQuestion.answers.includes(answerValue))
      newTestQuestion.answers = newTestQuestion.answers.filter((answer) => answer !== answerValue)
    else
      newTestQuestion.answers.push(answerValue)


    onTestQuestionChange(newTestQuestion)
  }

  const correctAnswers = question.answers.reduce((arr, answer) => {
    if (answer.isCorrectAnswer)
      arr.push(answer.value)

    return arr
  }, [])

  return (
    <Grid container>
      <Grid item xs={12}>
        <div dangerouslySetInnerHTML={{__html: questionHtml}} />
      </Grid>
      { question.answers.map((answer, idx) => (
        <Grid item xs={12} key={idx} style={(showAnswer && correctAnswers.includes(answer.value) ? correctAnswerStyle : null)}>
          <FormControlLabel label={answer.value} control={<Checkbox checked={testQuestion.answers.includes(answer.value)} onChange={() => onAnswerChange(answer.value)} />} />
        </Grid>
      ))}

    </Grid>
  )
}

export default QuestionChoice
