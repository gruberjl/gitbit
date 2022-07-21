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
      question: {"references":{"blocks":[{"data":{},"depth":0,"inlineStyleRanges":[{"style":"BOLD","length":16,"offset":0}],"type":"unstyled","key":"b4n82","text":"Box 1: Unchecked","entityRanges":[]},{"entityRanges":[],"key":"a4q6n","data":{},"inlineStyleRanges":[],"text":"John Gruber will receive two alerts.","type":"unstyled","depth":0},{"type":"unstyled","depth":0,"data":{},"text":"Sign-ins from an infected device are classified as low. John Gruber will receive alerts on the unfamiliar location and anonymous IP address though.","inlineStyleRanges":[],"entityRanges":[],"key":"fnuqh"},{"text":"Box 2: No","entityRanges":[],"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":9}],"data":{},"key":"fc3ej","type":"unstyled","depth":0},{"depth":0,"text":"User2 will receive two alerts. Email alerts are sent to all global admins, security admins, and security readers","key":"3shng","type":"unstyled","entityRanges":[],"data":{},"inlineStyleRanges":[]},{"data":{},"inlineStyleRanges":[],"entityRanges":[],"depth":0,"type":"unstyled","text":"Sign-ins from the infected device are classified as low.","key":"2hg9v"},{"depth":0,"data":{},"entityRanges":[],"inlineStyleRanges":[{"style":"BOLD","offset":0,"length":9}],"text":"Box 3: No","key":"shoc","type":"unstyled"},{"data":{},"type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"depth":0,"text":"User3 will not receive alerts. Email alerts are sent to all global admins, security admins, and security readers by default.","key":"9benb"},{"type":"unstyled","inlineStyleRanges":[],"key":"49c2a","data":{},"depth":0,"text":"https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ","entityRanges":[{"offset":0,"key":0,"length":123}]},{"inlineStyleRanges":[],"entityRanges":[{"key":1,"offset":0,"length":104}],"key":"btri2","text":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection","type":"unstyled","data":{},"depth":0},{"depth":0,"text":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-identity-protection-configure-risk-policies","key":"6d4nq","inlineStyleRanges":[],"type":"unstyled","entityRanges":[{"length":125,"key":2,"offset":0}],"data":{}}],"entityMap":{"0":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ"},"type":"LINK"},"1":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection"}},"2":{"mutability":"MUTABLE","data":{"url":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection","targetOption":"_blank"},"type":"LINK"}}},"answers":[{"value":"John Gruber receives 3 email alerts from Azure AD Identity Protection","isCorrectAnswer":false},{"isCorrectAnswer":false,"value":"User2 receives 3 email alerts from Azure AD Identity Protection"},{"isCorrectAnswer":false,"value":"User3 receives 2 email alerts from Azure AD Identity Protection"}],"id":"vxLbzynWU","question":{"entityMap":{"0":{"data":{"alt":"Users at Risk screenshot","width":"auto","src":"https://i.ibb.co/RTNLdyM/Users-At-Risk.png","height":"auto","alignment":"left"},"mutability":"MUTABLE","type":"IMAGE"},"1":{"mutability":"MUTABLE","type":"IMAGE","data":{"alignment":"left","src":"https://i.ibb.co/wzLBtGJ/user-role-chart.png","height":"auto","alt":"User role chart","width":"auto"}},"2":{"mutability":"MUTABLE","data":{"height":"auto","alt":"User RIsk Chart","src":"https://i.ibb.co/dDHb6VK/user-risk-chart.png","alignment":"left","width":"auto"},"type":"IMAGE"}},"blocks":[{"type":"unstyled","depth":0,"key":"957rl","text":"You have a Microsoft 365 tenant with Microsoft 365 E5 licenses.","data":{},"entityRanges":[],"inlineStyleRanges":[]},{"text":"A user named John Gruber is configured to receive alerts from Azure AD Identity Protection as shown below.","data":{},"entityRanges":[],"depth":0,"key":"8uunj","type":"unstyled","inlineStyleRanges":[{"offset":0,"style":"color-rgb(33,37,41)","length":106},{"style":"bgcolor-rgb(255,255,255)","length":106,"offset":0},{"length":106,"style":"fontsize-16","offset":0},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0,"length":106}]},{"text":" ","inlineStyleRanges":[],"data":{},"type":"atomic","key":"d1p7o","depth":0,"entityRanges":[{"length":1,"key":0,"offset":0}]},{"key":"deom4","inlineStyleRanges":[],"type":"unstyled","depth":0,"text":"Your tenant contains the following users.","data":{},"entityRanges":[]},{"entityRanges":[{"key":1,"length":1,"offset":0}],"text":" ","depth":0,"data":{},"key":"bd174","type":"atomic","inlineStyleRanges":[]},{"data":{},"entityRanges":[],"text":"The user sign-in log is shown below","type":"unstyled","key":"10fuk","inlineStyleRanges":[],"depth":0},{"key":"1pjgg","data":{},"entityRanges":[{"length":1,"offset":0,"key":2}],"text":" ","inlineStyleRanges":[],"type":"atomic","depth":0},{"text":"Check the box next to each true statement.","data":{},"inlineStyleRanges":[],"depth":0,"type":"unstyled","key":"6nlr4","entityRanges":[]}]}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: 'vxLbzynWU',
      questionIdx: '',
      questionHtml: `<p>You have a Microsoft 365 tenant with Microsoft 365 E5 licenses.</p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">A user named John Gruber is configured to receive alerts from Azure AD Identity Protection as shown below.</span></p>
<div style="text-align:left;"><img src="https://i.ibb.co/RTNLdyM/Users-At-Risk.png" alt="Users at Risk screenshot" style="height: auto;width: auto"/></div>
<p>Your tenant contains the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/wzLBtGJ/user-role-chart.png" alt="User role chart" style="height: auto;width: auto"/></div>
<p>The user sign-in log is shown below</p>
<div style="text-align:left;"><img src="https://i.ibb.co/dDHb6VK/user-risk-chart.png" alt="User RIsk Chart" style="height: auto;width: auto"/></div>
<p>Check the box next to each true statement.</p>
`,
      questionText: `You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. A user named John Gruber is configured to receive alerts from Azure AD Identity Protection as shown below. Your tenant contains the following users. The user sign-in log is shown below Check the box next to each true statement.`,
      referencesHtml: `<p><strong>Box 1: Unchecked</strong></p>
<p>John Gruber will receive two alerts.</p>
<p>Sign-ins from an infected device are classified as low. John Gruber will receive alerts on the unfamiliar location and anonymous IP address though.</p>
<p><strong>Box 2: No</strong></p>
<p>User2 will receive two alerts. Email alerts are sent to all global admins, security admins, and security readers</p>
<p>Sign-ins from the infected device are classified as low.</p>
<p><strong>Box 3: No</strong></p>
<p>User3 will not receive alerts. Email alerts are sent to all global admins, security admins, and security readers by default.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ" target="_blank">https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection" target="_blank">https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection" target="_blank">https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-identity-protection-configure-risk-policies</a></p>
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
        url: 'https://www.gitbit.org/course/ms-500/question/vxLbzynWU',
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
