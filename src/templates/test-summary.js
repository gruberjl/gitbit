import {h, Component} from 'preact'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import {onAuthStateChanged} from '../../../../../components/firebase/on-auth-state-changed'
import saveDoc from '../../../../../components/firebase/save-doc'
import {getDoc} from '../../../../../components/firebase/get-doc'
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBox from '@mui/icons-material/CheckBox'
import Page from '../../../../../components/page'
import Typography from '@mui/material/Typography'
import {pink} from '@mui/material/colors'
import Snackbar from '@mui/material/Snackbar'
import Box from '@mui/material/Box'
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'
const clone = require('clone')

const gradeQuestion = (question, correctAnswers, testQuestion) => {
  let pointsReceived = 0

  if (testQuestion.type === 'hot-area') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const answer = question.answers[correctAnswer.id]
      const correctAnswerId = Object.values(correctAnswer).find((a) => a.isCorrect).id

      if (answer.answer == correctAnswerId)
        pointsReceived++
    })
  } else if (testQuestion.type === 'drag-drop') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const correctAnswerId = correctAnswer.answerId
      const answer = question.answers[correctAnswer.id]

      if (answer.answerId === correctAnswerId)
        pointsReceived++
    })
  } else if (testQuestion.type === 'build-list') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const answer = question.answers[correctAnswer.id]
      if (answer && answer.idx === correctAnswer.idx)
        pointsReceived++
    })
    Object.values(question.answers).forEach((answer) => {
      const correctAnswer = correctAnswers[answer.id]
      if (!correctAnswer || correctAnswer.idx !== answer.idx)
        pointsReceived--
    })
  } else if (testQuestion.type === 'multiple-choice') {
    Object.values(correctAnswers).forEach((correctAnswer) => {
      const userMarkedCorrect = Boolean(question.answers[correctAnswer.id])

      if (correctAnswer.isCorrect && userMarkedCorrect)
        pointsReceived++
      else if (!correctAnswer.isCorrect && userMarkedCorrect)
        pointsReceived--
    })
  } else
    console.error('unknown question type')


  if (pointsReceived < 0)
    pointsReceived = 0

  return pointsReceived
}

const getMaxPoints = (testQuestion, answers) => {
  let maxPoints = 0

  if (testQuestion.type === 'hot-area')
    maxPoints = Object.values(answers).length
  else if (testQuestion.type === 'drag-drop')
    maxPoints = Object.values(answers).length
  else if (testQuestion.type === 'build-list')
    maxPoints = Object.values(answers).length
  else if (testQuestion.type === 'multiple-choice') {
    Object.values(answers).forEach((answer) => {
      if (answer.isCorrect)
        maxPoints++
    })
  } else
    console.error(`Cannot get max points. unknown question type. question.type===${testQuestion.type}`)


  return maxPoints
}

const isBrowser = () => typeof window !== 'undefined'

class TestsSummary extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.gradeTest = this.gradeTest.bind(this)
    this.save = this.save.bind(this)
    this.getJsonLd = this.getJsonLd.bind(this)
    this.setCompletedContent = this.setCompletedContent.bind(this)

    this.state = {
      uid: '',
      alert: '',
      nextContentSlug: 'NEXT_CONTENT',
      previousContentSlug: 'PREVIOUS_CONTENT',
      test: {TEST: true}
    }

    this.state.userAcct = {tests: {
      [this.state.test.id]: { }
    }}
  }

  componentDidMount() {
    if (isBrowser())
      this.onAuthStateChangedListener = onAuthStateChanged(this.setUid)
  }

  componentWillUnmount() {
    this.onAuthStateChangedListener()
  }

  setUid(user) {
    if (!user) {
      window.location.href = '/login'
      return
    }

    this.setState({
      uid: user.uid
    })

    getDoc('courses/MS-500/users', user.uid).then((userAcct) => {
      if (!userAcct.tests)
        userAcct.tests = {}

      if (!userAcct.tests[this.state.test.id])
        userAcct.tests[this.state.test.id] = {}

      this.setState({userAcct}, () => {
        if (!userAcct.tests[this.state.test.id].score)
          this.gradeTest()
      })
    })
  }

  setCompletedContent(userAcct) {
    return new Promise((resolve) => {
      if (!userAcct.completedContent.includes(this.state.test.id)) {
        userAcct.completedContent.push(this.state.test.id)
        this.setState({userAcct}, () => {
          saveDoc('courses/MS-500/users', userAcct).then(() => resolve())
        })
      } else
        return resolve()
    })
  }

  gradeTest() {
    let maxPoints = 0
    let pointsReceived = 0
    const userAcct = clone(this.state.userAcct)
    this.setCompletedContent(userAcct)

    Object.keys(this.state.test.answers).forEach((questionId) => {
      const answers = this.state.test.answers[questionId]
      const question = userAcct.tests[this.state.test.id][questionId]
      const testQuestion = this.state.test.questions[question.id]
      const questionMaxPoints = getMaxPoints(testQuestion, answers)
      const pointsReceivedForQuestion = question ? gradeQuestion(question, answers, testQuestion) : 0

      userAcct.tests[this.state.test.id][questionId].maxPoints = questionMaxPoints
      userAcct.tests[this.state.test.id][questionId].pointsReceived = pointsReceivedForQuestion
      pointsReceived = pointsReceived + pointsReceivedForQuestion
      maxPoints = maxPoints + questionMaxPoints
    })

    userAcct.tests[this.state.test.id].score = Math.round(pointsReceived / maxPoints * 1000)

    this.setState({userAcct, alert: 'test grading complete!'}, () => {
      this.save()
    })

    setTimeout(() => {
      this.setState({alert: ''})
    }, 3000)
  }

  save() {
    return saveDoc(`courses/MS-500/users`, this.state.userAcct, false)
  }

  getJsonLd() {
    return {
      $schema: 'https://json-schema.org/draft/2019-09/schema',
      '@context': 'http://schema.org',
      '@type': 'Quiz',
      assesses: this.state.test.title,
      educationalLevel: 'beginner',
      learningResourceType: 'Quiz',
      teaches: this.state.test.title,
      abstract: this.state.test.description,
      image: this.state.test.featuredImage,
      name: this.state.test.title,
      '@id': location.href,
      description: this.state.test.description
    }
  }

  render() {
    return (
      <Page title={`${this.state.test.title} Summary`} description={this.state.test.description} jsonLd={this.getJsonLd()} jsonLdType="Quiz">
        <main style={{backgroundColor: '#F3F6F9'}}>
          <Container>
            <Box sx={{display: 'flex', justifyContent: 'space-between', py: 3}}>
              <Button variant="text" href={ this.state.previousContentSlug === 'PREVIOUS_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.previousContentSlug}` } startIcon={<ArrowBackIos />}>Previous</Button>
              <Button variant="text" href={ this.state.nextContentSlug === 'NEXT_CONTENT' ? '/dashboard' : `/course/ms-500/${this.state.nextContentSlug}` } endIcon={<ArrowForwardIos />}>Next</Button>
            </Box>

            <Paper elevation={3} sx={{p: 4}}>
              <Grid container className='box' spacing={2}>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1"><strong>Exam Number:</strong> MS-500</Typography>
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1"><strong>Passing Score:</strong> 700</Typography>
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1"><strong>Your Score:</strong> {this.state.userAcct.tests[this.state.test.id].score}</Typography>
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <Typography variant="body1">
                    <strong>Result:</strong> {
                      this.state.userAcct.tests[this.state.test.id].score || this.state.userAcct.tests[this.state.test.id].score === 0 ?
                        (this.state.userAcct.tests[this.state.test.id].score >= 700 ? 'Pass' : 'Fail') :
                        ''
                    }
                  </Typography>
                </Grid>
              </Grid>
            </Paper>

            <Paper elevation={3} sx={{my: 4, p: 4}}>
              <Grid container className='box' spacing={2}>
                <Grid item xs={10}>
                  <Typography variant="h4" component="h1">Test Sumary</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Button onClick={this.gradeTest}>Grade test</Button>
                </Grid>
                { Object.keys(this.state.test.answers).map((questionId) => (
                  <Grid container item xs={6} key={questionId}>
                    <Grid item xs={1}>
                      <Button variant="text" href={`/course/ms-500/test/${this.state.test.slug}/question/${this.state.test.questions[questionId].slug}`}>
                        { this.state.userAcct.tests[this.state.test.id][questionId] ? (this.state.userAcct.tests[this.state.test.id][questionId].maxPoints === this.state.userAcct.tests[this.state.test.id][questionId].pointsReceived ?
                          <CheckBox color='success' /> :
                           <CheckBoxOutlineBlank sx={{color: pink[500]}} />) : ''

                        }
                      </Button>
                    </Grid>
                    <Grid item xs={11}>
                      <Button variant="text" href={`/course/ms-500/test/${this.state.test.slug}/question/${this.state.test.questions[questionId].slug}`}>{this.state.test.questions[questionId].title}</Button>
                    </Grid>
                  </Grid>
                ))}

              </Grid>
            </Paper>
          </Container>
        </main>
        <Snackbar message={this.state.alert} open={this.state.alert !== ''} />
      </Page>
    )
  }
}

export default TestsSummary
