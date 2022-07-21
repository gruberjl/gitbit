import { h, Component } from "preact"
import Page from '../../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import saveDoc from '../../../../components/firebase/save-doc'
import {onAuthStateChanged} from '../../../../components/firebase'
import {getDoc} from '../../../../components/firebase'
import draftToHtml from 'draftjs-to-html'

const optionStyles = {
  marginTop: '14px',
  marginBottom: '14px',
  display: 'flex'
}

const checkboxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

const referencesStyle = {
  marginTop: '24px'
}

const bottomButtonStyle = {
  marginTop: '24px'
}

const isBrowser = () => typeof window !== 'undefined'

class EditQuestionPage extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.handleCorrectAnswerChange = this.handleCorrectAnswerChange.bind(this)
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this)
    this.toggleShowQuestions = this.toggleShowQuestions.bind(this)
    this.gotoQuestion = this.gotoQuestion.bind(this)
    this.toggleEndExam = this.toggleEndExam.bind(this)
    this.endExam = this.endExam.bind(this)
    const params = new URLSearchParams(props.location.search)

    this.state = {
      questions: {},
      uid: '',
      testId: params.get('testId'),
      test: {},
      question: {"id":"IvqICJEKL","answers":[{"isCorrectAnswer":false,"value":"If UserA uses DeviceA, PolicyC applies"},{"isCorrectAnswer":true,"value":"When UserB uses DeviceA, PolicyB applies"},{"value":"When UserB uses DeviceB, PolicyD applies","isCorrectAnswer":false}],"question":{"entityMap":{"0":{"mutability":"MUTABLE","data":{"alignment":"left","width":"auto","src":"https://i.ibb.co/Lk75D86/user-and-group-membership.png","height":"auto","alt":"Chart showing 2 users with their group membership"},"type":"IMAGE"},"1":{"mutability":"MUTABLE","type":"IMAGE","data":{"alt":"Chart showing devices, platform, and membership","src":"https://i.ibb.co/cTP8vKV/device-chart.png","height":"auto","alignment":"left","width":"auto"}},"2":{"data":{"alignment":"left","src":"https://i.ibb.co/GnwXkhx/App-Protection-Policies-Assignment.png","height":"auto","alt":"Chart showing the app protection policies and their assignments","width":"auto"},"mutability":"MUTABLE","type":"IMAGE"},"3":{"type":"IMAGE","data":{"alt":"Policy Chart","src":"https://i.ibb.co/JC9cYZS/policy-chart.png","alignment":"left","width":"auto","height":"auto"},"mutability":"MUTABLE"}},"blocks":[{"depth":0,"data":{},"type":"unstyled","key":"1v5dd","entityRanges":[],"text":"Your organization has a Microsoft 365 tenant named GitBit.org that contains the following users.","inlineStyleRanges":[]},{"depth":0,"text":" ","key":"c346s","data":{},"inlineStyleRanges":[],"type":"atomic","entityRanges":[{"key":0,"length":1,"offset":0}]},{"key":"5k82i","inlineStyleRanges":[],"depth":0,"data":{},"type":"unstyled","text":"Your organization has registered the following devices in Azure AD.","entityRanges":[]},{"inlineStyleRanges":[],"depth":0,"text":" ","data":{},"entityRanges":[{"length":1,"offset":0,"key":1}],"key":"970fs","type":"atomic"},{"text":"You create the app protection policies in the Microsoft Endpoint Manager admin center as shown below.","depth":0,"type":"unstyled","data":{},"entityRanges":[],"inlineStyleRanges":[],"key":"8vtdt"},{"key":"e5k92","depth":0,"data":{},"text":" ","inlineStyleRanges":[],"type":"atomic","entityRanges":[{"offset":0,"key":2,"length":1}]},{"depth":0,"text":"Check the box next to each true statement below.","type":"unstyled","entityRanges":[],"data":{},"key":"8cifv","inlineStyleRanges":[]}]},"references":{"blocks":[{"entityRanges":[],"depth":0,"type":"unstyled","inlineStyleRanges":[],"key":"4pcat","data":{},"text":"Since PolicyC applies to iOS and DeviceA is a Windows 10 device PolicyC does not apply."},{"depth":0,"inlineStyleRanges":[],"type":"unstyled","text":"Since UserB is a member of GroupB and PolicyB does apply to Windows 10 devices, PolicyB applies to UserB on DeviceA.","key":"6gnh7","data":{},"entityRanges":[]},{"data":{},"inlineStyleRanges":[],"text":"UserB isn't a member of GroupB and since you need to have users as part of the protected group PolicyD does not apply to DeviceB / UserB.","key":"dkqsg","depth":0,"type":"unstyled","entityRanges":[]},{"depth":0,"inlineStyleRanges":[],"type":"unstyled","key":"7eipd","data":{},"text":"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx","entityRanges":[{"key":0,"length":98,"offset":0}]},{"text":"https://docs.microsoft.com/en-us/intune/apps/app-protection-policy","inlineStyleRanges":[],"entityRanges":[{"key":1,"offset":0,"length":66}],"depth":0,"key":"d8arv","type":"unstyled","data":{}}],"entityMap":{"0":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx"},"type":"LINK"},"1":{"data":{"url":"https://docs.microsoft.com/en-us/intune/apps/app-protection-policy","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: 'IvqICJEKL',
      questionIdx: '',
      questionHtml: `<p>Your organization has a Microsoft 365 tenant named GitBit.org that contains the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/Lk75D86/user-and-group-membership.png" alt="Chart showing 2 users with their group membership" style="height: auto;width: auto"/></div>
<p>Your organization has registered the following devices in Azure AD.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/cTP8vKV/device-chart.png" alt="Chart showing devices, platform, and membership" style="height: auto;width: auto"/></div>
<p>You create the app protection policies in the Microsoft Endpoint Manager admin center as shown below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/GnwXkhx/App-Protection-Policies-Assignment.png" alt="Chart showing the app protection policies and their assignments" style="height: auto;width: auto"/></div>
<p>Check the box next to each true statement below.</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant named GitBit.org that contains the following users. Your organization has registered the following devices in Azure AD. You create the app protection policies in the Microsoft Endpoint Manager admin center as shown below. Check the box next to each true statement below.`,
      referencesHtml: `<p>Since PolicyC applies to iOS and DeviceA is a Windows 10 device PolicyC does not apply.</p>
<p>Since UserB is a member of GroupB and PolicyB does apply to Windows 10 devices, PolicyB applies to UserB on DeviceA.</p>
<p>UserB isn't a member of GroupB and since you need to have users as part of the protected group PolicyD does not apply to DeviceB / UserB.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx" target="_blank">https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx</a></p>
<p><a href="https://docs.microsoft.com/en-us/intune/apps/app-protection-policy" target="_blank">https://docs.microsoft.com/en-us/intune/apps/app-protection-policy</a></p>
`,
      selectedAnswer: [],
      answerShown: false,
      questionsShown: false,
      endExamShown: false,
      endExamText: 'Are you sure you want to end the exam?'
    }

    this.state.jsonLd = {
      datePublished: '9-8-2021',
      keywords: [
  			"Microsoft",
  			"Microsoft 365",
  			"Office 365",
        'MS-500',
        'Microsoft 365 Security Administration'
  		],
      mainEntity: {
        '@type': "Question",
        name: this.state.questionText.substring(0, 150),
        text: this.state.questionText,
        answerCount: this.state.question.answers ? this.state.question.answers.length : 0,
        dateCreated: "2021-09-08T16:52:31Z",
        author: {
          "@type": "Person",
          "name": "John Gruber",
          url: 'https://medium.com/@gruberjl'
        }
      }
    }

    if (this.state.question.answers) {
      this.state.jsonLd.mainEntity.acceptedAnswer = {
        "@type": "Answer",
        "text": this.state.question.answers ? this.state.question.answers.filter(answer => answer.isCorrectAnswer).map(a => a.value).join('; ') : 'None',
        url: 'https://www.gitbit.org/course/ms-500/question/IvqICJEKL',
        author: {
          type: 'Person',
          name: 'John Gruber',
          url: 'https://medium.com/@gruberjl'
        },
        upvoteCount: 1,
        dateCreated: "2021-09-08T16:52:31Z"
      }
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

      if (this.state.testId) {
        getDoc(`users/${this.state.uid}/tests`, this.state.testId).then(test => {
          let previousQuestionId = ''
          let nextQuestionId = ''
          let currentQuestion
          let previousItm
          let foundQuestion = false
          let questionIdx
          let selectedAnswer = this.state.selectedAnswer

          test.questions.forEach((question, idx) => {
            if (foundQuestion) {
                nextQuestionId = question.id
                foundQuestion = false
            }

            if (this.state.questionId === question.id) {
              foundQuestion = true
              currentQuestion = question
              questionIdx = idx+1
              if (previousItm)
                previousQuestionId = previousItm.id

              if (currentQuestion.answered)
                selectedAnswer = currentQuestion.answered
            }

            previousItm = question
          })

          getDoc(`Tests/MS-500/Questions`, currentQuestion.id).then(question => {
            const questionHtml = draftToHtml(question.question)
            const referencesHtml = draftToHtml(question.references)
            this.setState({question, questionHtml, referencesHtml})
          })

          this.setState({
            test,
            questionIdx: questionIdx,
            nextQuestionId: nextQuestionId,
            previousQuestionId: previousQuestionId,
            selectedAnswer
          })
        })
      } else {
        getDoc(`Tests/MS-500/Questions`, this.state.questionId).then(question => {
          const questionHtml = draftToHtml(question.question)
          const referencesHtml = draftToHtml(question.references)
          this.setState({question, questionHtml, referencesHtml})
        })
      }
    }
  }

  handleCorrectAnswerChange(event) {
    const idx = event.target.dataset.index
    const target = event.target
    const selectedAnswer = [...this.state.selectedAnswer]

    if (target.checked) {
      selectedAnswer.push(idx)
    } else {
      const index = selectedAnswer.indexOf(`${idx}`)
      selectedAnswer.splice(index, 1)
    }

    this.setState({selectedAnswer})

    if (this.state.testId) {
      const test = Object.assign({}, this.state.test)

      test.questions = test.questions.map(question => {
        if (question.id === this.state.questionId) {
          question.answered = selectedAnswer
        }
        return question
      })

      saveDoc(`users/${this.state.uid}/tests`, test)

      this.setState({test})
    }
  }

  toggleShowAnswer() {
    const answerShown = !this.state.answerShown
    this.setState({answerShown})
  }

  toggleShowQuestions() {
    const questionsShown = !this.state.questionsShown
    this.setState({questionsShown})
  }

  toggleEndExam() {
    const endExamShown = !this.state.endExamShown
    this.setState({endExamShown})
  }

  gotoQuestion(questionId) {
    return () => {
      window.location.href = `/course/ms-500/question/${questionId}?testId=${this.state.testId}`
    }
  }

  endExam() {
    const test = this.state.test
    test.isComplete = true

    saveDoc(`users/${this.state.uid}/tests`, test).then(() => {
      window.location.href = `/tests/summary?testId=${this.state.testId}`
    })
  }

  render() {
    let answers = this.state.question.answers ? this.state.question.answers : []

    answers = [...answers].map((answer, index) => {
      answer.isSelected = this.state.selectedAnswer.includes(`${index}`)
      answer.optionStyles = Object.assign({}, optionStyles)
      if (this.state.answerShown && answer.isCorrectAnswer) {
        answer.optionStyles.background = 'green'
      }

      return answer
    })

    return (
      <Page jsonLdType={'QAPage'} jsonLd={this.state.jsonLd} title={this.state.questionText} description={this.state.questionText}>
        <main>
          <div>
            <Container>
              <Grid container>
                <Grid item md={6} xs={12} lg={8}><h1>Question {this.state.questionIdx}</h1></Grid>
                <Grid item md={6} xs={12} lg={4} className='flex-space-between'> {
                  this.state.previousQuestionId !== '' ?
                    <Button href={`/course/ms-500/question/${this.state.previousQuestionId}?testId=${this.state.testId}`}>Previous Question</Button> :
                    ''
                  }
                  {
                    this.state.nextQuestionId !== '' ?
                      <Button href={`/course/ms-500/question/${this.state.nextQuestionId}?testId=${this.state.testId}`}>Next Question</Button> : (
                          this.state.testId ?
                            <Button onClick={this.toggleEndExam} color="secondary">End Exam</Button> :
                            ''
                      )

                  }
                </Grid>
              </Grid>
              <Grid container className="img-width-100">
                { this.state.questionHtml !== '' ?
                  <div dangerouslySetInnerHTML={{__html: this.state.questionHtml}}></div>
                  : ''
                }
              </Grid>
              <Grid container>
                {answers.map((answerState, index) => {
                  return (
                    <FormGroup style={answerState.optionStyles} key={index}>
                      <FormControlLabel control={<Checkbox name={"AnswerCheck" + index} id={"AnswerCheck" + index} data-index={index} inline style={checkboxStyles} checked={this.state.selectedAnswer.includes(`${index}`)} onChange={this.handleCorrectAnswerChange} />} label={answerState.value} />
                    </FormGroup>
                  )
                })}
              </Grid>
              <Grid container>
                <Grid item>
                  { this.state.answerShown ?
                    <div style={referencesStyle} dangerouslySetInnerHTML={{__html: this.state.referencesHtml}}></div> :
                    ''
                  }
                </Grid>
              </Grid>
              <Grid container className='align-right'><Grid item md={6} xs={12} lg={8}></Grid>
              <Grid item md={6} xs={12} lg={4} className='flex-space-between'> {
                  this.state.previousQuestionId !== '' ?
                    <Button href={`/course/ms-500/question/${this.state.previousQuestionId}?testId=${this.state.testId}`}>Previous Question</Button> :
                    ''
                  }
                {
                  this.state.nextQuestionId !== '' ?
                    <Button href={`/course/ms-500/question/${this.state.nextQuestionId}?testId=${this.state.testId}`}>Next Question</Button> :
                    this.state.testId ?
                      <Button onClick={this.toggleEndExam} color="secondary">End Exam</Button> :
                      ''
                  }
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} md={6}>
                  <Button onClick={this.toggleShowAnswer} style={bottomButtonStyle}>
                    { this.state.answerShown ?
                      <span>Hide Answer</span> :
                      <span>Show Answer</span>
                    }
                  </Button>
                </Grid>
                { this.state.testId ?
                  <Grid item xs={12} md={6} className='align-right'>
                    <Button onClick={this.toggleShowQuestions} style={bottomButtonStyle}>
                      { this.state.questionsShown ?
                        <span>Hide Question List</span> :
                        <span>Show Question List</span>
                      }
                    </Button>
                  </Grid> :
                  ''
                }
              </Grid>
              { this.state.testId ?
                <Grid container>
                  <Grid item className='align-right'>
                    <Button onClick={this.toggleEndExam} variant="warning" style={bottomButtonStyle}>End Exam</Button>
                  </Grid>
                </Grid> :
                ''
              }
            </Container>
          </div>

          <Dialog onClose={this.toggleShowQuestions} open={this.state.questionsShown}>
            <DialogTitle>Showing Test Questions</DialogTitle>
            <TableContainer>
              <Table striped bordered hover>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Answer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { this.state.test && this.state.test.questions ? this.state.test.questions.map((question, idx) => (
                    <TableRow hover key={idx} onClick={this.gotoQuestion(question.id)} className="cursor-pointer">
                      <TableCell>{idx+1}</TableCell>
                      <TableCell>{question.answered}</TableCell>
                    </TableRow>
                  )) : '' }
                </TableBody>
              </Table>
            </TableContainer>
          </Dialog>

          <Dialog onClose={this.toggleEndExam} open={this.state.endExamShown}>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText>{ this.state.endExamText }</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={this.endExam}>
                Yes
              </Button>
              <Button variant="outlined" onClick={this.toggleEndExam}>
                No
              </Button>
            </DialogActions>
          </Dialog>
        </main>
      </Page>
    )
  }
}

export default EditQuestionPage
