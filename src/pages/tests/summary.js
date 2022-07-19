import { h, Component } from "preact"
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import { onAuthStateChanged } from "../../components/firebase/on-auth-state-changed"
import {getDoc} from '../../components/firebase/get-doc'
import saveDoc from '../../components/firebase/save-doc'
import CheckBox from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank'
import Page from '../../components/page'
import QUESTIONS from '../../data/questions'

const checkedBoxSyle = {
  color: 'green',
  marginRight: '12px'
}

const uncheckedBoxSyle = {
  color: 'red',
  marginRight: '12px'
}

const isBrowser = () => typeof window !== 'undefined'

class TestsSummary extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.gradeTest = this.gradeTest.bind(this)

    this.state = {
      test: {},
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
    if (isBrowser()) {
      this.onAuthStateChangedListener = onAuthStateChanged(this.setUid)
    }
  }

  componentWillUnmount() {
    this.onAuthStateChangedListener()
  }

  setUid(user) {
    if (user) {
      this.setState({
        uid: user.uid
      })

      getDoc(`users/${user.uid}/tests`, this.state.testId).then(test => {
        this.setState({test})

        const questions = this.state.questions
          test.questions.forEach(testQuestion => {
            const question = QUESTIONS.find(question => question.id === testQuestion.id)
            if (question) {
              // getDoc(`Tests/MS-500/Questions`, testQuestion.id).then(question => {
              // question.text = convertFromRaw(question.question).getPlainText().substring(0, 25)
              question.text = question.question.substring(0, 25)
              question.answered = testQuestion.answered

              if (!test.isGraded && test.isComplete) {
                const {maxPoints, pointsReceived} = this.gradeQuestion(question, testQuestion.answered || [])
                question.maxPoints = maxPoints
                question.pointsReceived = pointsReceived
                questions.push(question)

                if (questions.length >= test.questions.length)
                  this.gradeTest(test, questions)
              } else {
                questions.push(question)
              }
              this.setState({questions})
            }
          })
      })
    } else {
      window.location.href = '/login'
    }
  }

  gradeQuestion(question, answers) {
    const maxPoints = question.answers.filter((answer) => answer.isCorrectAnswer === true).length
    let pointsReceived = 0

    answers.forEach((answer) => {
      const questionAnswer = question.answers[answer]
      if (questionAnswer.isCorrectAnswer)
        pointsReceived++
      else
        pointsReceived--
    })

    if (pointsReceived < 0)
      pointsReceived = 0

    return {maxPoints, pointsReceived}
  }

  gradeTest(test, questions) {
    let maxPoints = 0
    let pointsReceived = 0
    questions.forEach(question => {
      maxPoints += question.maxPoints
      pointsReceived += question.pointsReceived
    })

    test.isGraded = true
    test.score = Math.round(pointsReceived / maxPoints * 1000)

    saveDoc(`users/${this.state.uid}/tests`, test)

    this.setState(test)
  }

  render() {
    const questions = this.state.questions
    return (
      <Page title={'Microsoft 365 MS-500 practice test summary'} description={'Microsoft 365 MS-500 practice test summary'}>
        <main>
          <Container>
            <Grid container className='box'>
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
            <Grid container>
              <Grid item xs={10}>
                <h1>Test Sumary</h1>
              </Grid>
              { this.state.test.isComplete ?
                '' :
                <Grid item xs={2}>
                  <Button>Grade Test</Button>
                </Grid>
              }
            </Grid>
            <Grid container>
              { questions.map((question, idx) => (
                <Grid xs={6} md={4} key={idx} title={question.answered && question.answered.length > 0 ? ( question.maxPoints === question.pointsReceived ? 'Answered correctly' : 'Answered incorrectly' ) : 'Not answered'}>
                  { question.answered && question.answered.length > 0 ?
                      ( question.maxPoints === question.pointsReceived ?
                          <CheckBox style={checkedBoxSyle} /> :
                          <CheckBox style={uncheckedBoxSyle} /> ) :
                      <CheckBoxOutlineBlank style={uncheckedBoxSyle} />
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
