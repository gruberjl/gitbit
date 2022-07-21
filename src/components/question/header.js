import { h } from "preact"
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const Header = ({questionIdx, previousQuestionId, nextQuestionId, testId, toggleEndExam}) => {
  return (
    <Grid container sx={{ alignItems: 'center' }}>
      <Grid item md={6} xs={12} lg={8}><h1>Question {questionIdx+1}</h1></Grid>
      <Grid item xs={12} md={6} lg={4} sx={{display:'flex', justifyContent:'end'}}>
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
    </Grid>
  )
}

export default Header
