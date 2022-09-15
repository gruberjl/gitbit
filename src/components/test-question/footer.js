import {h} from 'preact'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const Footer = ({uid, testSlug, previousQuestionSlug, nextQuestionSlug, testId, toggleEndExam, toggleShowAnswer, toggleQuestionList,  navigateTo}) => {
  return (
    <Grid container sx={{alignItems: 'center'}}>
      <Grid item xs={12} sx={{display: 'flex', justifyContent: 'end'}}>
        <ButtonGroup variant="text" aria-label="text button group">
          { previousQuestionSlug ?
            <Button variant="text" href={`/course/ms-500/test/${testSlug}/question/${previousQuestionSlug}`} onClick={navigateTo(`/course/ms-500/test/${testSlug}/question/${previousQuestionSlug}`)}>Previous Question</Button> :
            ''
          }
          { nextQuestionSlug ?
            <Button variant="text" href={`/course/ms-500/test/${testSlug}/question/${nextQuestionSlug}`} onClick={navigateTo(`/course/ms-500/test/${testSlug}/question/${nextQuestionSlug}`)}>Next Question</Button> :
            ''
          }
          { uid ?
            <Button variant="text" onClick={toggleEndExam} color="secondary">End Exam</Button> :
            ''
          }
        </ButtonGroup>
      </Grid>
      <Grid item xs={12} sx={{display: 'flex', justifyContent: 'end'}}>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button variant="text" onClick={toggleShowAnswer}>Show answer</Button>
          <Button variant="text" onClick={toggleQuestionList}>Show question list</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

export default Footer
