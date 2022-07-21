import { h } from "preact"
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const Footer = ({previousQuestionId, nextQuestionId, testId, toggleEndExam, toggleShowAnswer, toggleQuestionList}) => {
  return (
    <Grid container sx={{ alignItems: 'center' }}>
      <Grid item xs={12} sx={{display:'flex', justifyContent:'end'}}>
        <ButtonGroup variant="text" aria-label="text button group">
          { previousQuestionId
            ? <Button variant="text" href={`/course/ms-500/question/${previousQuestionId}?testId=${testId}`}>Previous Question</Button>
            : ''
          }
          { nextQuestionId
            ? <Button variant="text" href={`/course/ms-500/question/${nextQuestionId}?testId=${testId}`}>Next Question</Button>
            : ''
          }
          { testId
            ? <Button variant="text" onClick={toggleEndExam} color="secondary">End Exam</Button>
            : ''
          }
        </ButtonGroup>
      </Grid>
      <Grid item xs={12} sx={{display:'flex', justifyContent:'end'}}>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button variant="text" onClick={toggleShowAnswer}>Show answer</Button>
          <Button variant="text" onClick={toggleQuestionList}>Show question list</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default Footer
