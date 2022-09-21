import {h, Component} from 'preact'
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
      test: {questions: [{answers: []}]},
      question: {"answers":[{"isCorrectAnswer":false,"value":"In the Microsoft 365 admin center enable threat management."},{"isCorrectAnswer":false,"value":"In the Exchange Admin center create a mail flow rule to block phishing attempts"},{"isCorrectAnswer":true,"value":"In Security & compliance admin center > Threat Management > Policy > Anti-phishing. Enable the settings."}],"id":"1ZxHIf1rT","question":{"blocks":[{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"d3cc3","text":"You need to protect against phishing attacks. The solution must meet the following requirements:","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"93hsr","text":"Phishing email messages must be quarantined if the messages are sent from a spoofed domain.","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"88pl3","text":"As many phishing email messages as possible must be identified.","type":"unordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"3hl1m","text":"The solution must apply to the current SMTP domain names and any domain names added later.","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"41bh9","text":"What steps should you take to complete the task?","type":"unstyled"}],"entityMap":{}},"references":{"blocks":[{"data":{},"depth":0,"entityRanges":[{"key":0,"length":91,"offset":0}],"inlineStyleRanges":[],"key":"42jki","text":"https://www.iorad.com/player/1797326/MS-500---You-need-to-protect-against-phishing-attacks-","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"aj23h","text":"Open the Security & Compliance Admin center","type":"ordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"8i7t1","text":"Click Threat Management > Policy > Anti-Phishing > Default policy","type":"ordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"1g8r0","text":"Click Edit impersonation policy","type":"ordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"3t9je","text":"Go to Add domains to protect.","type":"ordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"6u4eq","text":"Enable Automatically include the domains I own","type":"ordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"7dag8","text":"Go to actions","type":"ordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"d694b","text":"Click Don't apply any action and set to Quarantine the message","type":"ordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"c4vv5","text":"Go to Mailbox Intelligence","type":"ordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"17lmp","text":"Click Enable mailbox intelligence-based impersonation protection.","type":"ordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"c2c11","text":"Click If email is sent by an impersonated user. Set to Quarantine the message.","type":"ordered-list-item"},{"data":{},"depth":0,"entityRanges":[],"inlineStyleRanges":[],"key":"egrsb","text":"Save","type":"ordered-list-item"},{"data":{},"depth":0,"entityRanges":[{"key":1,"length":94,"offset":0}],"inlineStyleRanges":[],"key":"egh8a","text":"https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT ","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":2,"length":146,"offset":0}],"inlineStyleRanges":[],"key":"8jkc1","text":"https://support.office.com/en-us/article/protect-against-phishing-attempts-in-microsoft-365-86c425e1-1686-430a-9151-f7176cce4f2c#ID0EAABAAA=Try_it ","type":"unstyled"},{"data":{},"depth":0,"entityRanges":[{"key":3,"length":186,"offset":0}],"inlineStyleRanges":[],"key":"9dqq3","text":"https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-anti-phishing-policies?view=o365-worldwide#example-anti-phishing-policy-to- protect-a-user-and-a-domain ","type":"unstyled"}],"entityMap":{"0":{"data":{"targetOption":"_blank","url":"https://www.iorad.com/player/1797326/MS-500---You-need-to-protect-against-phishing-attacks-"},"mutability":"MUTABLE","type":"LINK"},"1":{"data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT"},"mutability":"MUTABLE","type":"LINK"},"2":{"data":{"targetOption":"_blank","url":"https://support.office.com/en-us/article/protect-against-phishing-attempts-in-microsoft-365-86c425e1-1686-430a-9151-f7176cce4f2c#ID0EAABAAA=Try_it"},"mutability":"MUTABLE","type":"LINK"},"3":{"data":{"targetOption":"_blank","url":"https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-anti-phishing-policies?view=o365-worldwide#example-anti-phishing-policy-to-"},"mutability":"MUTABLE","type":"LINK"}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You need to protect against phishing attacks. The solution must meet the following requirements:</p>
<ul>
<li>Phishing email messages must be quarantined if the messages are sent from a spoofed domain.</li>
<li>As many phishing email messages as possible must be identified.</li>
</ul>
<p>The solution must apply to the current SMTP domain names and any domain names added later.</p>
<p>What steps should you take to complete the task?</p>
`,
      questionText: `You need to protect against phishing attacks. The solution must meet the following requirements: Phishing email messages must be quarantined if the messages are sent from a spoofed domain. As many phishing email messages as possible must be identified. The solution must apply to the current SMTP domain names and any domain names added later. What steps should you take to complete the task?`,
      referencesHtml: `<p><a href="https://www.iorad.com/player/1797326/MS-500---You-need-to-protect-against-phishing-attacks-" target="_blank">https://www.iorad.com/player/1797326/MS-500---You-need-to-protect-against-phishing-attacks-</a></p>
<ol>
<li>Open the Security &amp; Compliance Admin center</li>
<li>Click Threat Management &gt; Policy &gt; Anti-Phishing &gt; Default policy</li>
<li>Click Edit impersonation policy</li>
<li>Go to Add domains to protect.</li>
<li>Enable Automatically include the domains I own</li>
<li>Go to actions</li>
<li>Click Don't apply any action and set to Quarantine the message</li>
<li>Go to Mailbox Intelligence</li>
<li>Click Enable mailbox intelligence-based impersonation protection.</li>
<li>Click If email is sent by an impersonated user. Set to Quarantine the message.</li>
<li>Save</li>
</ol>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT" target="_blank">https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT</a>&nbsp;</p>
<p><a href="https://support.office.com/en-us/article/protect-against-phishing-attempts-in-microsoft-365-86c425e1-1686-430a-9151-f7176cce4f2c#ID0EAABAAA=Try_it" target="_blank">https://support.office.com/en-us/article/protect-against-phishing-attempts-in-microsoft-365-86c425e1-1686-430a-9151-f7176cce4f2c#ID0EAABAAA=Try_it</a>&nbsp;</p>
<p><a href="https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-anti-phishing-policies?view=o365-worldwide#example-anti-phishing-policy-to-" target="_blank">https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-anti-phishing-policies?view=o365-worldwide#example-anti-phishing-policy-to- protect-a-user-and-a-domain</a>&nbsp;</p>
`,
      answerShown: false,
      questionsShown: false,
      endExamShown: false
    }

    this.state.jsonLd = {
      datePublished: '9-8-2021',
      keywords: [
        'Microsoft',
        'Microsoft 365',
        'Office 365',
        'MS-500',
        'Microsoft 365 Security Administration'
      ],
      mainEntity: {
        '@type': 'Question',
        name: this.state.questionText.substring(0, 150),
        text: this.state.questionText,
        answerCount: this.state.question.answers ? this.state.question.answers.length : 0,
        dateCreated: '2021-09-08T16:52:31Z',
        author: {
          '@type': 'Person',
          name: 'John Gruber',
          url: 'https://medium.com/@gruberjl'
        }
      }
    }

    if (this.state.question.answers) {
      this.state.jsonLd.mainEntity.acceptedAnswer = {
        '@type': 'Answer',
        text: this.state.question.answers ? this.state.question.answers.filter((answer) => answer.isCorrectAnswer).map((a) => a.value).join('; ') : 'None',
        url: `https://www.gitbit.org/course/ms-500/question/${this.state.question.id}`,
        author: {
          type: 'Person',
          name: 'John Gruber',
          url: 'https://medium.com/@gruberjl'
        },
        upvoteCount: 1,
        dateCreated: '2021-09-08T16:52:31Z'
      }
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
    if (user) {
      this.setState({
        uid: user.uid
      })

      if (this.state.testId) {
        getDoc(`users/${user.uid}/tests`, this.state.testId).then((test) => {
          const questionIdx = test.questions.findIndex((question) => question.id === this.state.question.id)
          const previousQuestionId = questionIdx > 0 ? test.questions[questionIdx-1].id : ''
          const nextQuestionId = test.questions.length-1 == questionIdx ? '' : test.questions[questionIdx+1].id

          this.setState({
            test,
            questionIdx,
            nextQuestionId,
            previousQuestionId
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
      <Page jsonLdType={'QAPage'} jsonLd={this.state.jsonLd} title={this.state.questionText} description={this.state.questionText} canonical={this.state.question.canonical}>
        <main>
          <style>{universalStyles}</style>
          <div>
            <Container>
              <Header questionIdx={this.state.questionIdx} previousQuestionId={this.state.previousQuestionId} nextQuestionId={this.state.nextQuestionId} testId={this.state.testId} toggleEndExam={this.toggleEndExam} />
              <Choice questionHtml={this.state.questionHtml} question={this.state.question} testQuestion={this.state.test.questions[this.state.questionIdx]} onTestQuestionChange={this.onTestQuestionChange} showAnswer={this.state.answerShown} />
              <Grid container>
                <Grid item xs={12}>
                  { this.state.answerShown ?
                    <div dangerouslySetInnerHTML={{__html: this.state.referencesHtml}} /> :
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
