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
      question: {"answers":[{"value":"A sales user who is logging in from the Montreal office will be prompted for MFA.","isCorrectAnswer":true},{"isCorrectAnswer":true,"value":"A sales user who signs in from home with a public IP address of 193.77.140.140 will be prompted for MFA."},{"isCorrectAnswer":false,"value":"A sales user who is logging in from the New York office will be prompted for Azure MFA credentials."}],"question":{"blocks":[{"entityRanges":[],"key":"2qdub","depth":0,"text":"Your organization has the offices in the following chart. Each office has the following IP addresses.","data":{},"inlineStyleRanges":[],"type":"unstyled"},{"key":"5llr","type":"atomic","data":{},"depth":0,"inlineStyleRanges":[],"text":" ","entityRanges":[{"offset":0,"key":0,"length":1}]},{"inlineStyleRanges":[],"text":"You've configured named locations in Azure AD as below.","entityRanges":[],"depth":0,"data":{},"type":"unstyled","key":"c07p6"},{"inlineStyleRanges":[],"type":"atomic","data":{},"entityRanges":[{"length":1,"offset":0,"key":1}],"depth":0,"key":"a8u3o","text":" "},{"key":"c772p","text":"An address space of 198.35.3.0/24 is defined in the trusted IPs list on the Multi-Factor Authentication page.","type":"unstyled","entityRanges":[],"depth":0,"data":{},"inlineStyleRanges":[{"offset":76,"style":"color-rgb(33,37,41)","length":33},{"offset":76,"style":"bgcolor-rgb(255,255,255)","length":33},{"length":33,"style":"fontsize-16","offset":76},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":76,"length":33}]},{"inlineStyleRanges":[],"key":"8d983","type":"unstyled","text":"MFA is enabled for the users in the sales department.","depth":0,"data":{},"entityRanges":[]},{"key":"bcs2k","inlineStyleRanges":[],"text":"You are evaluating which sales department users will be prompted for MFA.","depth":0,"type":"unstyled","data":{},"entityRanges":[]},{"depth":0,"inlineStyleRanges":[],"entityRanges":[],"text":"Check the box for each true statement.","data":{},"type":"unstyled","key":"99kqm"}],"entityMap":{"0":{"type":"IMAGE","data":{"alt":"Chart of locations and IP addresses","width":"auto","src":"https://i.ibb.co/tBQ9xgK/location-chart.png","alignment":"left","height":"auto"},"mutability":"MUTABLE"},"1":{"data":{"alignment":"left","src":"https://i.ibb.co/dJnwkFX/trusted-locations-chart.png","height":"auto","width":"auto","alt":"Trusted Locations Chart"},"mutability":"MUTABLE","type":"IMAGE"}}},"references":{"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"url":"https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh","targetOption":"_blank"}},"1":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition#:~:text=and%20IPv6%20addresses.-,Named%20locations,that%20you%20wish%20to%20block"}}},"blocks":[{"inlineStyleRanges":[],"depth":0,"key":"6icl3","entityRanges":[],"data":{},"text":"The only trusted IP address is the New York office. So sales users connecting from the New York office will not be prompted for MFA. All other users will be prompted for MFA.","type":"unstyled"},{"key":"4236g","data":{},"entityRanges":[{"offset":0,"length":86,"key":0}],"inlineStyleRanges":[],"type":"unstyled","depth":0,"text":"https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh"},{"text":"https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition#:~:text=and%20IPv6%20addresses.-,Named%20locations,that%20you%20wish%20to%20block","data":{},"inlineStyleRanges":[],"key":"4al6p","depth":0,"type":"unstyled","entityRanges":[{"length":175,"key":1,"offset":0}]}]},"id":"PUWxVj7lH"},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: 'PUWxVj7lH',
      questionIdx: '',
      questionHtml: `<p>Your organization has the offices in the following chart. Each office has the following IP addresses.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/tBQ9xgK/location-chart.png" alt="Chart of locations and IP addresses" style="height: auto;width: auto"/></div>
<p>You've configured named locations in Azure AD as below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/dJnwkFX/trusted-locations-chart.png" alt="Trusted Locations Chart" style="height: auto;width: auto"/></div>
<p>An address space of 198.35.3.0/24 is defined in the trusted IPs list on the <span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Multi-Factor Authentication page.</span></p>
<p>MFA is enabled for the users in the sales department.</p>
<p>You are evaluating which sales department users will be prompted for MFA.</p>
<p>Check the box for each true statement.</p>
`,
      questionText: `Your organization has the offices in the following chart. Each office has the following IP addresses. You've configured named locations in Azure AD as below. An address space of 198.35.3.0/24 is defined in the trusted IPs list on the Multi-Factor Authentication page. MFA is enabled for the users in the sales department. You are evaluating which sales department users will be prompted for MFA. Check the box for each true statement.`,
      referencesHtml: `<p>The only trusted IP address is the New York office. So sales users connecting from the New York office will not be prompted for MFA. All other users will be prompted for MFA.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh" target="_blank">https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition#:~:text=and%20IPv6%20addresses.-,Named%20locations,that%20you%20wish%20to%20block" target="_blank">https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition#:~:text=and%20IPv6%20addresses.-,Named%20locations,that%20you%20wish%20to%20block</a></p>
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
        url: 'https://www.gitbit.org/course/ms-500/question/PUWxVj7lH',
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
