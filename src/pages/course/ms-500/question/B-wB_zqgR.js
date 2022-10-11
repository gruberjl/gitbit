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
      question: {answers: [{isCorrectAnswer: true, value: 'Synchronization Service Manager'}, {isCorrectAnswer: false, value: 'Azure AD Connect wizard'}, {isCorrectAnswer: false, value: 'Synchronization Rules Editor'}, {isCorrectAnswer: false, value: 'IdFix'}], canonical: 'https://www.gitbit.org/course/ms-500/test/adconnect-lg2mr5_z0/question/resolve-the-issue-that-ge-aed9qicvy', id: 'B-wB_zqgR', question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4ufo4', text: 'The network contains an Active Directory forest named gitbit.org. GitBit has a hybrid Microsoft Azure Active Directory (Azure AD) environment.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'c4img', text: 'The company maintains some on-premises servers for specific applications, but most end-user applications are provided by a Microsoft 365 E5 subscription.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '45i9j', text: 'GitBit identifies the following issues:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'fe0i', text: 'Since last Friday, the IT team has been receiving automated email messages that contain "Unhealthy Identity Synchronization Notification" in the subject line.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'aa9gq', text: 'Several users recently opened email attachments that contained malware. The process to remove the malware was time-consuming.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '8ofra', text: 'You need to resolve the issue that generates the automated email messages to the IT team.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '96grf', text: 'Which tool should you run first?', type: 'unstyled'}], entityMap: {}}, references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7fdiu', text: 'To review the error in more detail log on to the server that has the AD Connect service running then open the Synchronization Service Manager application. From there you\'ll see one of the profiles with a status of Completed-export-error. Click on it. Then click the error (in the bottom right corner. Click Detail. You can also click the CN=GUID to view the account that changed and what attributes have changed.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 69, offset: 0}], inlineStyleRanges: [], key: '1sh5q', text: 'https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P'}, mutability: 'MUTABLE', type: 'LINK'}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>The network contains an Active Directory forest named gitbit.org. GitBit has a hybrid Microsoft Azure Active Directory (Azure AD) environment.</p>
<p>The company maintains some on-premises servers for specific applications, but most end-user applications are provided by a Microsoft 365 E5 subscription.</p>
<p>GitBit identifies the following issues:</p>
<ul>
<li>Since last Friday, the IT team has been receiving automated email messages that contain "Unhealthy Identity Synchronization Notification" in the subject line.</li>
<li>Several users recently opened email attachments that contained malware. The process to remove the malware was time-consuming.</li>
</ul>
<p>You need to resolve the issue that generates the automated email messages to the IT team.</p>
<p>Which tool should you run first?</p>
`,
      questionText: `The network contains an Active Directory forest named gitbit.org. GitBit has a hybrid Microsoft Azure Active Directory (Azure AD) environment. The company maintains some on-premises servers for specific applications, but most end-user applications are provided by a Microsoft 365 E5 subscription. GitBit identifies the following issues: Since last Friday, the IT team has been receiving automated email messages that contain "Unhealthy Identity Synchronization Notification" in the subject line. Several users recently opened email attachments that contained malware. The process to remove the malware was time-consuming. You need to resolve the issue that generates the automated email messages to the IT team. Which tool should you run first?`,
      referencesHtml: `<p>To review the error in more detail log on to the server that has the AD Connect service running then open the Synchronization Service Manager application. From there you'll see one of the profiles with a status of Completed-export-error. Click on it. Then click the error (in the bottom right corner. Click Detail. You can also click the CN=GUID to view the account that changed and what attributes have changed.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P" target="_blank">https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P</a></p>
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
