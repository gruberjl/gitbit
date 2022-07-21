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
      question: {"id":"TO1FKMRg4","question":{"blocks":[{"data":{},"entityRanges":[],"key":"7qt30","inlineStyleRanges":[],"depth":0,"text":"Your organization has a Microsoft 365 tenant. Your organization has a user named John Gruber. Several users have full access to John Gruber's mailbox.","type":"unstyled"},{"entityRanges":[],"key":"cafcm","depth":0,"data":{},"type":"unstyled","inlineStyleRanges":[],"text":"A few emails that were sent to John Gruber have been read and deleted before John Gruber viewed them."},{"key":"2ri6","type":"unstyled","data":{},"entityRanges":[],"inlineStyleRanges":[],"depth":0,"text":"You've been asked to see who accessed and deleted the emails. You search the audit log in the Microsoft Defender admin center to see who read and deleted the emails but the audit logs are blank. So your manager has asked you to configure the audit logs so your can view who accessed the mailbox in the future."},{"type":"unstyled","data":{},"entityRanges":[],"key":"9ip01","depth":0,"text":"What Exchange PowerShell commands do you need to run to verify you can see the audit logs in the future?","inlineStyleRanges":[]}],"entityMap":{}},"references":{"blocks":[{"data":{},"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"depth":0,"key":"addi5","text":"To enable Exchange auditing we'll need to use PowerShell."},{"key":"c980p","type":"unstyled","depth":0,"text":"1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.","inlineStyleRanges":[],"data":{},"entityRanges":[]},{"key":"898ib","text":"2. Run the following command \"Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets *Mailbox*\"","type":"unstyled","entityRanges":[],"depth":0,"inlineStyleRanges":[],"data":{}},{"depth":0,"data":{},"type":"unstyled","key":"3cjkc","inlineStyleRanges":[],"entityRanges":[],"text":"3. Then run the following command \"Set-OrganizationConfig -AuditDisabled $false\""},{"depth":0,"entityRanges":[],"inlineStyleRanges":[],"type":"unstyled","data":{},"text":"You can also replace step 3 with the following: Set-Mailbox -Identity \"User1 \" -AuditDelegate @{Add=\"MailboxLogin\"}","key":"3s83k"},{"depth":0,"type":"unstyled","data":{},"key":"2qcvr","entityRanges":[{"length":105,"offset":0,"key":0}],"inlineStyleRanges":[],"text":"https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1"},{"key":"cd35f","data":{},"depth":0,"inlineStyleRanges":[],"entityRanges":[{"key":1,"offset":0,"length":128}],"type":"unstyled","text":"https://docs.microsoft.com/en-us/powershell/module/exchange/policy-and-compliance-audit/set-adminauditlogconfig?view=exchange-ps"},{"entityRanges":[{"offset":0,"length":101,"key":2}],"inlineStyleRanges":[],"key":"2eq4a","depth":0,"data":{},"type":"unstyled","text":"https://docs.microsoft.com/en-us/microsoft-365/compliance/enable-mailbox-auditing?view=o365-worldwide "}],"entityMap":{"0":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1"},"type":"LINK"},"1":{"mutability":"MUTABLE","type":"LINK","data":{"url":"https://docs.microsoft.com/en-us/powershell/module/exchange/policy-and-compliance-audit/set-adminauditlogconfig?view=exchange-ps","targetOption":"_blank"}},"2":{"data":{"url":"https://docs.microsoft.com/en-us/microsoft-365/compliance/enable-mailbox-auditing?view=o365-worldwide","targetOption":"_blank"},"mutability":"MUTABLE","type":"LINK"}}},"answers":[{"isCorrectAnswer":false,"value":"Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets *Mailbox*"},{"value":"Set-Maibox -Identity \"John Gruber\" -AuditEnabled $true","isCorrectAnswer":true}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionId: 'TO1FKMRg4',
      questionIdx: '',
      questionHtml: `<p>Your organization has a Microsoft 365 tenant. Your organization has a user named John Gruber. Several users have full access to John Gruber's mailbox.</p>
<p>A few emails that were sent to John Gruber have been read and deleted before John Gruber viewed them.</p>
<p>You've been asked to see who accessed and deleted the emails. You search the audit log in the Microsoft Defender admin center to see who read and deleted the emails but the audit logs are blank. So your manager has asked you to configure the audit logs so your can view who accessed the mailbox in the future.</p>
<p>What Exchange PowerShell commands do you need to run to verify you can see the audit logs in the future?</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant. Your organization has a user named John Gruber. Several users have full access to John Gruber's mailbox. A few emails that were sent to John Gruber have been read and deleted before John Gruber viewed them. You've been asked to see who accessed and deleted the emails. You search the audit log in the Microsoft Defender admin center to see who read and deleted the emails but the audit logs are blank. So your manager has asked you to configure the audit logs so your can view who accessed the mailbox in the future. What Exchange PowerShell commands do you need to run to verify you can see the audit logs in the future?`,
      referencesHtml: `<p>To enable Exchange auditing we'll need to use PowerShell.</p>
<p>1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.</p>
<p>2. Run the following command "Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets *Mailbox*"</p>
<p>3. Then run the following command "Set-OrganizationConfig -AuditDisabled $false"</p>
<p>You can also replace step 3 with the following: Set-Mailbox -Identity "User1 " -AuditDelegate @{Add="MailboxLogin"}</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1" target="_blank">https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1</a></p>
<p><a href="https://docs.microsoft.com/en-us/powershell/module/exchange/policy-and-compliance-audit/set-adminauditlogconfig?view=exchange-ps" target="_blank">https://docs.microsoft.com/en-us/powershell/module/exchange/policy-and-compliance-audit/set-adminauditlogconfig?view=exchange-ps</a></p>
<p><a href="https://docs.microsoft.com/en-us/microsoft-365/compliance/enable-mailbox-auditing?view=o365-worldwide" target="_blank">https://docs.microsoft.com/en-us/microsoft-365/compliance/enable-mailbox-auditing?view=o365-worldwide</a>&nbsp;</p>
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
        url: 'https://www.gitbit.org/course/ms-500/question/TO1FKMRg4',
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
