import { h, Component } from "preact"
import Page from '../../../../components/page'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import saveDoc from '../../../../components/firebase/save-doc'
import {onAuthStateChanged} from '../../../../components/firebase/on-auth-state-changed'
import {getDoc} from '../../../../components/firebase/get-doc'
import Choice from '../../../../components/question/choice'
import Header from '../../../../components/question/header'
import Footer from '../../../../components/question/footer'
import universalStyles from '../../../../components/universal-styles'

const isBrowser = () => typeof window !== 'undefined'

class EditQuestionPage extends Component {
  constructor(props) {
    super(props)
    this.setUid = this.setUid.bind(this)
    this.toggleShowAnswer = this.toggleShowAnswer.bind(this)
    this.toggleShowQuestions = this.toggleShowQuestions.bind(this)
    this.gotoQuestion = this.gotoQuestion.bind(this)
    this.toggleEndExam = this.toggleEndExam.bind(this)
    this.endExam = this.endExam.bind(this)
    this.onTestQuestionChange = this.onTestQuestionChange.bind(this)

    let params = new URLSearchParams()
    if (isBrowser())
      params = new URLSearchParams(location.search)

    this.state = {
      uid: '',
      testId: params.get('testId'),
      test: {questions:[{answers:[]}]},
      question: {"references":{"entityMap":{"0":{"data":{"url":"https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"1":{"data":{"url":"https://docs.microsoft.com/en-us/powershell/module/exchange/policy-and-compliance-audit/set-adminauditlogconfig?view=exchange-ps","targetOption":"_blank"},"mutability":"MUTABLE","type":"LINK"},"2":{"data":{"targetOption":"_blank","url":"https://docs.microsoft.com/en-us/microsoft-365/compliance/enable-mailbox-auditing?view=o365-worldwide"},"mutability":"MUTABLE","type":"LINK"}},"blocks":[{"type":"unstyled","data":{},"entityRanges":[],"key":"addi5","depth":0,"inlineStyleRanges":[],"text":"To enable Exchange auditing we'll need to use PowerShell."},{"text":"1. Open PowerShell and connect to Exchange Online using Connect-ExchangeOnline.","depth":0,"type":"unstyled","data":{},"key":"c980p","entityRanges":[],"inlineStyleRanges":[]},{"type":"unstyled","entityRanges":[],"depth":0,"text":"2. Run the following command \"Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets *Mailbox*\"","key":"898ib","data":{},"inlineStyleRanges":[]},{"data":{},"depth":0,"inlineStyleRanges":[],"text":"3. Then run the following command \"Set-OrganizationConfig -AuditDisabled $false\"","key":"3cjkc","type":"unstyled","entityRanges":[]},{"key":"3s83k","text":"You can also replace step 3 with the following: Set-Mailbox -Identity \"User1 \" -AuditDelegate @{Add=\"MailboxLogin\"}","data":{},"inlineStyleRanges":[],"entityRanges":[],"depth":0,"type":"unstyled"},{"key":"2qcvr","data":{},"type":"unstyled","depth":0,"inlineStyleRanges":[],"text":"https://www.gitbit.org/course/ms-500/learn/Auditing-sign-ins-and-other-actions-in-Microsoft-365-sH_Ee1DW1","entityRanges":[{"length":105,"offset":0,"key":0}]},{"data":{},"type":"unstyled","key":"cd35f","entityRanges":[{"length":128,"offset":0,"key":1}],"text":"https://docs.microsoft.com/en-us/powershell/module/exchange/policy-and-compliance-audit/set-adminauditlogconfig?view=exchange-ps","depth":0,"inlineStyleRanges":[]},{"depth":0,"text":"https://docs.microsoft.com/en-us/microsoft-365/compliance/enable-mailbox-auditing?view=o365-worldwide ","type":"unstyled","data":{},"entityRanges":[{"offset":0,"length":101,"key":2}],"key":"2eq4a","inlineStyleRanges":[]}]},"question":{"entityMap":{},"blocks":[{"text":"Your organization has a Microsoft 365 tenant. Your organization has a user named John Gruber. Several users have full access to John Gruber's mailbox.","data":{},"key":"7qt30","type":"unstyled","entityRanges":[],"inlineStyleRanges":[],"depth":0},{"data":{},"entityRanges":[],"type":"unstyled","text":"A few emails that were sent to John Gruber have been read and deleted before John Gruber viewed them.","key":"cafcm","depth":0,"inlineStyleRanges":[]},{"inlineStyleRanges":[],"text":"You've been asked to see who accessed and deleted the emails. You search the audit log in the Microsoft Defender admin center to see who read and deleted the emails but the audit logs are blank. So your manager has asked you to configure the audit logs so your can view who accessed the mailbox in the future.","entityRanges":[],"depth":0,"key":"2ri6","data":{},"type":"unstyled"},{"key":"9ip01","depth":0,"text":"What Exchange PowerShell commands do you need to run to verify you can see the audit logs in the future?","inlineStyleRanges":[],"data":{},"type":"unstyled","entityRanges":[]}]},"answers":[{"isCorrectAnswer":false,"value":"Set-AdminAuditLogConfig -AdminAuditLogEnabled $true -AdminAuditLogCmdlets *Mailbox*"},{"value":"Set-Maibox -Identity \"John Gruber\" -AuditEnabled $true","isCorrectAnswer":true}],"id":"TO1FKMRg4"},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
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
      answerShown: false,
      questionsShown: false,
      endExamShown: false
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
        url: `https://www.gitbit.org/course/ms-500/question/${this.state.question.id}`,
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
        getDoc(`users/${user.uid}/tests`, this.state.testId).then(test => {
          const questionIdx = test.questions.findIndex(question => question.id === this.state.question.id)
          const previousQuestionId = questionIdx > 0 ? test.questions[questionIdx-1].id : ''
          const nextQuestionId = test.questions.length-1 == questionIdx ? '' : test.questions[questionIdx+1].id

          this.setState({
            test,
            questionIdx: questionIdx,
            nextQuestionId: nextQuestionId,
            previousQuestionId: previousQuestionId
          })
        })
      }
    }
  }

  onTestQuestionChange(testQuestion) {
    const test = JSON.parse(JSON.stringify(this.state.test))
    test.questions[this.state.questionIdx] = testQuestion
    this.setState({test})
    saveDoc(`users/${this.state.uid}/tests`, test)
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
    return (
      <Page jsonLdType={'QAPage'} jsonLd={this.state.jsonLd} title={this.state.questionText} description={this.state.questionText}>
        <main>
          <style>{universalStyles}</style>
          <div>
            <Container>
              <Header questionIdx={this.state.questionIdx} previousQuestionId={this.state.previousQuestionId} nextQuestionId={this.state.nextQuestionId} testId={this.state.testId} toggleEndExam={this.toggleEndExam}/>
              <Choice questionHtml={this.state.questionHtml} question={this.state.question} testQuestion={this.state.test.questions[this.state.questionIdx]} onTestQuestionChange={this.onTestQuestionChange} showAnswer={this.state.answerShown} />
              <Grid container>
                <Grid item xs={12}>
                  { this.state.answerShown ?
                    <div dangerouslySetInnerHTML={{__html: this.state.referencesHtml}}></div> :
                    ''
                  }
                </Grid>
              </Grid>
              <Footer previousQuestionId={this.state.previousQuestionId} nextQuestionId={this.state.nextQuestionId} testId={this.state.testId} toggleEndExam={this.toggleEndExam} toggleShowAnswer={this.toggleShowAnswer} toggleQuestionList={this.toggleShowQuestions} />
            </Container>
          </div>

          <Dialog onClose={this.toggleShowQuestions} open={this.state.questionsShown}>
            <DialogTitle>Test Questions</DialogTitle>
            <TableContainer>
              <Table striped bordered hover>
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Answered</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  { this.state.test.questions.map((question, idx) => (
                    <TableRow hover key={idx} onClick={this.gotoQuestion(question.id)} className="cursor-pointer">
                      <TableCell>{idx+1}</TableCell>
                      <TableCell>{question.answers.length>0 ? 'Complete' : 'Not complete'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Dialog>

          <Dialog onClose={this.toggleEndExam} open={this.state.endExamShown}>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText>Are you sure you want to end the exam?</DialogContentText>
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
