import {h, Component} from 'preact'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import {onAuthStateChanged} from '../../components/firebase/on-auth-state-changed'
import {getDoc} from '../../components/firebase/get-doc'
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBox from '@mui/icons-material/CheckBox'
import IndeterminateCheckBox from '@mui/icons-material/IndeterminateCheckBox'
import Page from '../../components/page'
import QUESTIONS from '../../data/questions'

const gradeQuestion = (question, answers) => {
  const maxPoints = question.answers.filter((answer) => answer.isCorrectAnswer === true).length
  let pointsReceived = 0

  question.answers.forEach((answer) => {
    const userMarkedCorrect = answers.includes(answer.value)
    if (answer.isCorrectAnswer && userMarkedCorrect)
      pointsReceived++
    else if (!answer.isCorrectAnswer && userMarkedCorrect)
      pointsReceived--
  })

  if (pointsReceived < 0)
    pointsReceived = 0

  return {maxPoints, pointsReceived}
}

const isBrowser = () => typeof window !== 'undefined'

class TestsSummary extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.setQuestions = this.setQuestions.bind(this)
    this.gradeTest = this.gradeTest.bind(this)
    this.setGradeTest = this.setGradeTest.bind(this)

    this.state = {
      test: {score: 0},
      uid: '',
      testId: '',
      questions: []
    }

    if (isBrowser()) {
      const params = new URLSearchParams(location.search)
      this.state.testId = params.get('testId')
    }
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

    this.setState({uid: user.uid})

    getDoc(`users/${user.uid}/tests`, this.state.testId).then((test) => {
      test.score = 0
      this.setState({test})
      this.setQuestions(test)
    })
  }

  setQuestions(test) {
    const questions = this.state.questions

    test.questions.forEach((testQuestion) => {
      const QUESTION = QUESTIONS.find((q) => q.id === testQuestion.id)
      const question = {}
      if (!QUESTION)
        return

      if (test.isComplete) {
        const {maxPoints, pointsReceived} = gradeQuestion(QUESTION, testQuestion.answers || [])
        question.maxPoints = maxPoints
        question.pointsReceived = pointsReceived
      }

      question.text = QUESTION.question.substring(0, 25)
      question.id = QUESTION.id
      question.status = 'Not answered'
      if (question.maxPoints === question.pointsReceived)
        question.status = 'Answered correctly'
      else if (testQuestion.answers.length>0)
        question.status = 'Answered incorrectly'

      questions.push(question)
    })
    this.setState({questions})

    if (test.isComplete)
      this.gradeTest(test, questions)
  }

  setGradeTest() {

  }

  gradeTest(test, questions) {
    let maxPoints = 0
    let pointsReceived = 0

    questions.forEach((question) => {
      maxPoints += question.maxPoints
      pointsReceived += question.pointsReceived
    })

    test.score = Math.round(pointsReceived / maxPoints * 1000)

    this.setState({test})
  }

  render() {
    const questions = this.state.questions
    return (
      <Page title={'Microsoft 365 MS-500 practice test summary'} description={'Microsoft 365 MS-500 practice test summary'}>
        <main style={{backgroundColor: '#F3F6F9', paddingTop: '60px'}}>
          <Container>
            <Paper elevation={3} sx={{p: 4}}>
              <Grid container className='box' spacing={2}>
                <Grid item xs={6} className='box-row'>
                  <strong>Exam Number:</strong> MS-500
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <strong>Passing Score:</strong> 700
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <strong>Your Score:</strong> {this.state.test.score}
                </Grid>
                <Grid item xs={6} className='box-row'>
                  <strong>Result:</strong> {
                    this.state.test.score ?
                      (this.state.test.score > 700 ? 'Pass' : 'Fail') :
                      ''
                  }
                </Grid>
              </Grid>
            </Paper>
            <Grid container>
              <Grid item xs={10}>
                <h1>Test Sumary</h1>
              </Grid>
              { this.state.test.isComplete ?
                '' :
                <Grid item xs={2}>
                  <Button onClick={this.setGradeTest}>Grade Test</Button>
                </Grid>
              }
            </Grid>
            <Grid container>
              { questions.map((question, idx) => (
                <Grid item style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}} xs={6} md={4} key={idx} title={question.status}>
                  { question.status === 'Answered correctly' ?
                    <CheckBox color='success' /> :
                    ''
                  }
                  { question.status === 'Not answered' ?
                    <CheckBoxOutlineBlank color="action" /> :
                    ''
                  }
                  { question.status === 'Answered incorrectly' ?
                    <IndeterminateCheckBox sx={{color: 'red'}} /> :
                    ''
                  }

                  <Button variant="text" size="large" href={`/course/ms-500/question/${question.id}?testId=${this.state.testId}`}>{idx+1}. {question.text}</Button>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </Page>
    )
  }
}

export default TestsSummary
