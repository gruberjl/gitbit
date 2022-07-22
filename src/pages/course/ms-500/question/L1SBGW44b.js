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
      question: {references: {blocks: [{type: 'unstyled', inlineStyleRanges: [], depth: 0, key: '5ild6', data: {}, text: 'You\'ll need to integrate a SIEM and Defender for Identity when you\'re using a third-party SIEM solution and you want Defender for Identity to detect when sensitive groups are modified and when malicious services are created. In short, anytime you want Defender for Identity to alert when the SIEM solution picks up an issue.', entityRanges: []}, {text: 'https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA', entityRanges: [{length: 90, key: 0, offset: 0}], key: 'bkm9o', depth: 0, data: {}, inlineStyleRanges: [], type: 'unstyled'}, {depth: 0, key: '6vb60', text: 'https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-event-forwarding ', entityRanges: [{key: 1, length: 92, offset: 0}], data: {}, inlineStyleRanges: [], type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-event-forwarding'}, type: 'LINK'}}}, question: {blocks: [{entityRanges: [], inlineStyleRanges: [], depth: 0, type: 'unstyled', text: 'Your organization has an on-premises Active Directory domain that runs Windows Server 2022 servers and has advanced auditing enabled. Your organization is already collecting the servers\' security logs using a third-party SIEM solution.', key: '9bi1q', data: {}}, {text: 'Your organization has purchased a Microsoft 365 tenant and your manager has asked you to deploy Microsoft Defender for identity by using standalone sensors.', data: {}, inlineStyleRanges: [], depth: 0, key: '7e2p1', entityRanges: [], type: 'unstyled'}, {key: 'ckv72', inlineStyleRanges: [], data: {}, depth: 0, entityRanges: [], type: 'unstyled', text: 'You need to configure the Defender for Identity standalone sensor to detect when certain sensitive groups are updated and any time malicious services are created.'}, {text: 'How can you fulfill your manager\'s request?', data: {}, entityRanges: [], key: '5jeqb', depth: 0, type: 'unstyled', inlineStyleRanges: []}], entityMap: {}}, answers: [{value: 'Disable the delayed updates option for the Microsoft Defender for Identity sensors.', isCorrectAnswer: false}, {isCorrectAnswer: false, value: 'Enable auditing in the Office 365 Security & Compliance center.'}, {isCorrectAnswer: false, value: 'Enable the delayed updates option for the Microsoft Defender for Identity sensors.'}, {value: 'Integrate the third-party SIEM solution with Microsoft Defender for identity.', isCorrectAnswer: true}], id: 'L1SBGW44b'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has an on-premises Active Directory domain that runs Windows Server 2022 servers and has advanced auditing enabled. Your organization is already collecting the servers' security logs using a third-party SIEM solution.</p>
<p>Your organization has purchased a Microsoft 365 tenant and your manager has asked you to deploy Microsoft Defender for identity by using standalone sensors.</p>
<p>You need to configure the Defender for Identity standalone sensor to detect when certain sensitive groups are updated and any time malicious services are created.</p>
<p>How can you fulfill your manager's request?</p>
`,
      questionText: `Your organization has an on-premises Active Directory domain that runs Windows Server 2022 servers and has advanced auditing enabled. Your organization is already collecting the servers' security logs using a third-party SIEM solution. Your organization has purchased a Microsoft 365 tenant and your manager has asked you to deploy Microsoft Defender for identity by using standalone sensors. You need to configure the Defender for Identity standalone sensor to detect when certain sensitive groups are updated and any time malicious services are created. How can you fulfill your manager's request?`,
      referencesHtml: `<p>You'll need to integrate a SIEM and Defender for Identity when you're using a third-party SIEM solution and you want Defender for Identity to detect when sensitive groups are modified and when malicious services are created. In short, anytime you want Defender for Identity to alert when the SIEM solution picks up an issue.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA" target="_blank">https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-event-forwarding" target="_blank">https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-event-forwarding</a>&nbsp;</p>
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
