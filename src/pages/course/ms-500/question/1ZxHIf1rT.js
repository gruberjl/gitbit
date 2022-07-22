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
      question: {id: '1ZxHIf1rT', references: {blocks: [{type: 'unstyled', data: {}, entityRanges: [{length: 91, offset: 0, key: 0}], depth: 0, text: 'https://www.iorad.com/player/1797326/MS-500---You-need-to-protect-against-phishing-attacks-', key: '42jki', inlineStyleRanges: []}, {text: 'Open the Security & Compliance Admin center', depth: 0, inlineStyleRanges: [], key: 'aj23h', entityRanges: [], data: {}, type: 'ordered-list-item'}, {depth: 0, data: {}, text: 'Click Threat Management > Policy > Anti-Phishing > Default policy', key: '8i7t1', type: 'ordered-list-item', entityRanges: [], inlineStyleRanges: []}, {depth: 0, data: {}, text: 'Click Edit impersonation policy', entityRanges: [], inlineStyleRanges: [], key: '1g8r0', type: 'ordered-list-item'}, {data: {}, depth: 0, inlineStyleRanges: [], key: '3t9je', text: 'Go to Add domains to protect.', entityRanges: [], type: 'ordered-list-item'}, {data: {}, entityRanges: [], depth: 0, inlineStyleRanges: [], type: 'ordered-list-item', text: 'Enable Automatically include the domains I own', key: '6u4eq'}, {key: '7dag8', inlineStyleRanges: [], type: 'ordered-list-item', text: 'Go to actions', depth: 0, data: {}, entityRanges: []}, {key: 'd694b', inlineStyleRanges: [], type: 'ordered-list-item', entityRanges: [], data: {}, text: 'Click Don\'t apply any action and set to Quarantine the message', depth: 0}, {data: {}, inlineStyleRanges: [], entityRanges: [], depth: 0, text: 'Go to Mailbox Intelligence', key: 'c4vv5', type: 'ordered-list-item'}, {entityRanges: [], inlineStyleRanges: [], type: 'ordered-list-item', key: '17lmp', data: {}, text: 'Click Enable mailbox intelligence-based impersonation protection.', depth: 0}, {depth: 0, data: {}, text: 'Click If email is sent by an impersonated user. Set to Quarantine the message.', key: 'c2c11', entityRanges: [], type: 'ordered-list-item', inlineStyleRanges: []}, {entityRanges: [], type: 'ordered-list-item', key: 'egrsb', depth: 0, data: {}, inlineStyleRanges: [], text: 'Save'}, {text: 'https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT ', data: {}, entityRanges: [{key: 1, offset: 0, length: 94}], key: 'egh8a', type: 'unstyled', inlineStyleRanges: [], depth: 0}, {text: 'https://support.office.com/en-us/article/protect-against-phishing-attempts-in-microsoft-365-86c425e1-1686-430a-9151-f7176cce4f2c#ID0EAABAAA=Try_it ', type: 'unstyled', inlineStyleRanges: [], key: '8jkc1', depth: 0, entityRanges: [{length: 146, offset: 0, key: 2}], data: {}}, {type: 'unstyled', key: '9dqq3', text: 'https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-anti-phishing-policies?view=o365-worldwide#example-anti-phishing-policy-to- protect-a-user-and-a-domain ', entityRanges: [{key: 3, offset: 0, length: 186}], data: {}, depth: 0, inlineStyleRanges: []}], entityMap: {0: {mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://www.iorad.com/player/1797326/MS-500---You-need-to-protect-against-phishing-attacks-'}, type: 'LINK'}, 1: {type: 'LINK', mutability: 'MUTABLE', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Protecting-email-against-phishing-attacks-GCOOUsSBT', targetOption: '_blank'}}, 2: {type: 'LINK', data: {targetOption: '_blank', url: 'https://support.office.com/en-us/article/protect-against-phishing-attempts-in-microsoft-365-86c425e1-1686-430a-9151-f7176cce4f2c#ID0EAABAAA=Try_it'}, mutability: 'MUTABLE'}, 3: {data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-anti-phishing-policies?view=o365-worldwide#example-anti-phishing-policy-to-'}, type: 'LINK', mutability: 'MUTABLE'}}}, question: {blocks: [{data: {}, inlineStyleRanges: [], entityRanges: [], depth: 0, key: 'd3cc3', text: 'You need to protect against phishing attacks. The solution must meet the following requirements:', type: 'unstyled'}, {key: '93hsr', data: {}, inlineStyleRanges: [], entityRanges: [], text: 'Phishing email messages must be quarantined if the messages are sent from a spoofed domain.', depth: 0, type: 'unordered-list-item'}, {text: 'As many phishing email messages as possible must be identified.', entityRanges: [], depth: 0, inlineStyleRanges: [], data: {}, type: 'unordered-list-item', key: '88pl3'}, {inlineStyleRanges: [], key: '3hl1m', depth: 0, type: 'unstyled', entityRanges: [], text: 'The solution must apply to the current SMTP domain names and any domain names added later.', data: {}}, {key: '41bh9', depth: 0, text: 'What steps should you take to complete the task?', entityRanges: [], type: 'unstyled', inlineStyleRanges: [], data: {}}], entityMap: {}}, answers: [{value: 'In the Microsoft 365 admin center enable threat management.', isCorrectAnswer: false}, {isCorrectAnswer: false, value: 'In the Exchange Admin center create a mail flow rule to block phishing attempts'}, {value: 'In Security & compliance admin center > Threat Management > Policy > Anti-phishing. Enable the settings.', isCorrectAnswer: true}]},
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
      <Page jsonLdType={'QAPage'} jsonLd={this.state.jsonLd} title={this.state.questionText} description={this.state.questionText}>
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
