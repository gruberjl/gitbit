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
      question: {references: {blocks: [{inlineStyleRanges: [], entityRanges: [{length: 137, key: 0, offset: 0}], depth: 0, type: 'unstyled', data: {}, key: 'f9d2a', text: 'https://www.iorad.com/player/1796090/MS-500---Ensure-that-unmanaged-mobile-devices-are-quarantined-when-the-devices-attempt-to-connect-to '}, {data: {}, text: 'You need to configure the Exchange ActiveSync Access Settings.', depth: 0, key: '4im1d', inlineStyleRanges: [], type: 'unstyled', entityRanges: []}, {data: {}, type: 'ordered-list-item', inlineStyleRanges: [], key: 'jnrn', text: 'Go to the Exchange admin center.', entityRanges: [], depth: 0}, {depth: 0, entityRanges: [], inlineStyleRanges: [], type: 'ordered-list-item', data: {}, key: '29jo5', text: 'Click on Mobile in the left navigation pane.'}, {text: 'On the Mobile Device Access page, click the Edit button in the Exchange ActiveSync Access Settings area.', inlineStyleRanges: [], data: {}, type: 'ordered-list-item', key: '8f6v5', entityRanges: [], depth: 0}, {entityRanges: [], key: 'crv1m', inlineStyleRanges: [], text: 'Select the Quarantine option under When a mobile device that isn\'t managed by a rule or personal exemption connects to Exchange.', depth: 0, data: {}, type: 'ordered-list-item'}, {text: 'Optionally, you can configure notifications to be sent to administrators and a message to be sent to the mobile device user when a device is quarantined.', depth: 0, key: '7fd0k', entityRanges: [], inlineStyleRanges: [], data: {}, type: 'ordered-list-item'}, {key: '2q57v', entityRanges: [], type: 'ordered-list-item', data: {}, depth: 0, text: 'Click Save to save the changes.', inlineStyleRanges: []}, {entityRanges: [{length: 86, offset: 0, key: 1}], inlineStyleRanges: [], type: 'unstyled', key: 'h6vu', depth: 0, text: 'https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN', data: {}}], entityMap: {0: {mutability: 'MUTABLE', data: {url: 'https://www.iorad.com/player/1796090/MS-500---Ensure-that-unmanaged-mobile-devices-are-quarantined-when-the-devices-attempt-to-connect-to', targetOption: '_blank'}, type: 'LINK'}, 1: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN', targetOption: '_blank'}, mutability: 'MUTABLE', type: 'LINK'}}}, question: {blocks: [{key: 'cc7cl', inlineStyleRanges: [], entityRanges: [], depth: 0, text: 'You need to ensure that unmanaged mobile devices are quarantined when the devices attempt to connect to Exchange Online.', type: 'unstyled', data: {}}, {type: 'unstyled', inlineStyleRanges: [{offset: 0, style: 'color-rgb(33,37,41)', length: 48}, {length: 48, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {style: 'fontsize-16', length: 48, offset: 0}, {length: 48, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], depth: 0, entityRanges: [], key: '79hqh', text: 'What steps should you take to complete the task?', data: {}}], entityMap: {}}, answers: [{isCorrectAnswer: false, value: 'Open Azure Active Directory Admin Center > Devices > Manage Devices'}, {isCorrectAnswer: true, value: 'Open Exchange Admin Center > Mobile > Edit > Select options'}, {isCorrectAnswer: false, value: 'Open Microsoft 365 Admin Center > Mobile > Edit > Select options'}], id: 's4pkyL5r0'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You need to ensure that unmanaged mobile devices are quarantined when the devices attempt to connect to Exchange Online.</p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">What steps should you take to complete the task?</span></p>
`,
      questionText: `You need to ensure that unmanaged mobile devices are quarantined when the devices attempt to connect to Exchange Online. What steps should you take to complete the task?`,
      referencesHtml: `<p><a href="https://www.iorad.com/player/1796090/MS-500---Ensure-that-unmanaged-mobile-devices-are-quarantined-when-the-devices-attempt-to-connect-to" target="_blank">https://www.iorad.com/player/1796090/MS-500---Ensure-that-unmanaged-mobile-devices-are-quarantined-when-the-devices-attempt-to-connect-to</a>&nbsp;</p>
<p>You need to configure the Exchange ActiveSync Access Settings.</p>
<ol>
<li>Go to the Exchange admin center.</li>
<li>Click on Mobile in the left navigation pane.</li>
<li>On the Mobile Device Access page, click the Edit button in the Exchange ActiveSync Access Settings area.</li>
<li>Select the Quarantine option under When a mobile device that isn't managed by a rule or personal exemption connects to Exchange.</li>
<li>Optionally, you can configure notifications to be sent to administrators and a message to be sent to the mobile device user when a device is quarantined.</li>
<li>Click Save to save the changes.</li>
</ol>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN" target="_blank">https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN</a></p>
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
