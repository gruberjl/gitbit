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
      question: {"references":{"entityMap":{"0":{"mutability":"MUTABLE","data":{"url":"https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ","targetOption":"_blank"},"type":"LINK"}},"blocks":[{"text":"User1 will be required to change his password","depth":0,"entityRanges":[],"key":"44apb","type":"unstyled","inlineStyleRanges":[{"style":"BOLD","offset":0,"length":45}],"data":{}},{"entityRanges":[],"inlineStyleRanges":[],"key":"192u7","depth":0,"data":{},"text":"User1 is in Group1 which the policy applies.","type":"unstyled"},{"key":"8vpnm","type":"unstyled","inlineStyleRanges":[{"length":49,"style":"color-rgb(33,37,41)","offset":0},{"length":49,"offset":0,"style":"bgcolor-rgb(255,255,255)"},{"style":"fontsize-16","offset":0,"length":49},{"length":49,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0},{"style":"BOLD","length":50,"offset":0}],"text":"User2 will not be required to change his password ","entityRanges":[],"data":{},"depth":0},{"depth":0,"text":"User2 is in Group2 which is excluded from the policy.","type":"unstyled","key":"48tc0","entityRanges":[],"data":{},"inlineStyleRanges":[]},{"inlineStyleRanges":[{"length":49,"style":"color-rgb(33,37,41)","offset":0},{"style":"bgcolor-rgb(255,255,255)","offset":0,"length":49},{"offset":0,"style":"fontsize-16","length":49},{"length":49,"offset":0,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"},{"offset":0,"length":49,"style":"BOLD"}],"depth":0,"data":{},"key":"17c30","text":"User3 will not be required to change his password  ","type":"unstyled","entityRanges":[]},{"key":"97snb","text":"User3 is in Group1 which is included in the policy but is also in Group2 which is excluded from the policy. In this case, the exclusion wins so the policy does not apply to User3.","data":{},"type":"unstyled","entityRanges":[],"depth":0,"inlineStyleRanges":[]},{"key":"1ijpn","entityRanges":[{"offset":0,"key":0,"length":123}],"data":{},"text":"https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ","type":"unstyled","depth":0,"inlineStyleRanges":[]}]},"id":"DCx8K1f29","answers":[{"isCorrectAnswer":true,"value":"User1"},{"isCorrectAnswer":false,"value":"User2"},{"isCorrectAnswer":false,"value":"User3"}],"question":{"entityMap":{"0":{"type":"IMAGE","mutability":"MUTABLE","data":{"alignment":"left","width":"auto","height":"auto","src":"https://i.ibb.co/WVjQP2K/chart7.png","alt":"Chart showing users and groups"}},"1":{"data":{"height":"auto","alt":"Chart showing user risk level","alignment":"left","width":"auto","src":"https://i.ibb.co/LxsWp5S/Chart8.png"},"type":"IMAGE","mutability":"MUTABLE"}},"blocks":[{"data":{},"type":"unstyled","key":"9gu7q","inlineStyleRanges":[],"depth":0,"text":"your organization has a Microsoft 365 tenant that contains the following users.","entityRanges":[]},{"type":"atomic","key":"99lev","text":" ","depth":0,"data":{},"entityRanges":[{"key":0,"length":1,"offset":0}],"inlineStyleRanges":[]},{"key":"dv9re","inlineStyleRanges":[],"entityRanges":[],"data":{},"text":"You configure an Azure AD Identity Protection sign-in risk policy with the following settings:","type":"unstyled","depth":0},{"inlineStyleRanges":[],"depth":0,"entityRanges":[],"type":"unordered-list-item","text":"Assigned to Group1 and excludes Group2.","key":"ej5j1","data":{}},{"entityRanges":[],"depth":0,"text":"Only apply if the user risk level is medium or above.","key":"f82ql","data":{},"type":"unordered-list-item","inlineStyleRanges":[]},{"data":{},"depth":0,"type":"unordered-list-item","key":"5kuqa","entityRanges":[],"inlineStyleRanges":[],"text":"If the user risk level is medium or above allow access but require a password change."},{"data":{},"inlineStyleRanges":[],"type":"unstyled","depth":0,"key":"d3chi","text":"The risk level for each user is shown below.","entityRanges":[]},{"inlineStyleRanges":[],"key":"5naop","type":"atomic","data":{},"depth":0,"entityRanges":[{"length":1,"offset":0,"key":1}],"text":" "},{"entityRanges":[],"data":{},"text":"Which users will be required to change their password?","type":"unstyled","inlineStyleRanges":[],"key":"38vb7","depth":0}]}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: 'DCx8K1f29',
      questionIdx: '',
      questionHtml: `<p>your organization has a Microsoft 365 tenant that contains the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/WVjQP2K/chart7.png" alt="Chart showing users and groups" style="height: auto;width: auto"/></div>
<p>You configure an Azure AD Identity Protection sign-in risk policy with the following settings:</p>
<ul>
<li>Assigned to Group1 and excludes Group2.</li>
<li>Only apply if the user risk level is medium or above.</li>
<li>If the user risk level is medium or above allow access but require a password change.</li>
</ul>
<p>The risk level for each user is shown below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/LxsWp5S/Chart8.png" alt="Chart showing user risk level" style="height: auto;width: auto"/></div>
<p>Which users will be required to change their password?</p>
`,
      questionText: `your organization has a Microsoft 365 tenant that contains the following users. You configure an Azure AD Identity Protection sign-in risk policy with the following settings: Assigned to Group1 and excludes Group2. Only apply if the user risk level is medium or above. If the user risk level is medium or above allow access but require a password change. The risk level for each user is shown below. Which users will be required to change their password?`,
      referencesHtml: `<p><strong>User1 will be required to change his password</strong></p>
<p>User1 is in Group1 which the policy applies.</p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;"><strong>User2 will not be required to change his password</strong></span><strong> </strong></p>
<p>User2 is in Group2 which is excluded from the policy.</p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;"><strong>User3 will not be required to change his password</strong></span>&nbsp;&nbsp;</p>
<p>User3 is in Group1 which is included in the policy but is also in Group2 which is excluded from the policy. In this case, the exclusion wins so the policy does not apply to User3.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ" target="_blank">https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ</a></p>
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
        url: 'https://www.gitbit.org/course/ms-500/question/DCx8K1f29',
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
