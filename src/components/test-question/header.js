import {h} from 'preact'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'

const marginTop24Style = {
  marginTop: '24px'
}

const Header = ({uid, questionIdx, previousQuestionSlug, nextQuestionSlug, testSlug, toggleEndExam, numOfQuestions}) => {
  return (
    <Grid container sx={{alignItems: 'center'}}>
      <Grid item md={6} xs={12} lg={8}>
        <Typography variant="h3" component="h1" style={marginTop24Style}>Question {questionIdx + 1} of {numOfQuestions}</Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4} sx={{display: 'flex', justifyContent: 'end'}}>
        <ButtonGroup variant="text" aria-label="text button group" style={marginTop24Style}>
          { previousQuestionSlug ?
            <Button variant="text" href={`/course/ms-500/test/${testSlug}/question/${previousQuestionSlug}`}>Previous Question</Button> :
            ''
          }
          { nextQuestionSlug ?
            <Button variant="text" href={`/course/ms-500/test/${testSlug}/question/${nextQuestionSlug}`}>Next Question</Button> :
            ''
          }
          { uid ?
            <Button variant="text" onClick={toggleEndExam} color="secondary">End Exam</Button> :
            ''
          }
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default Header
