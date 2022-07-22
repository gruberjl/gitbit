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
      question: {answers: [{isCorrectAnswer: true, value: 'From the Azure AD admin center, register AppA. Then create a conditional access policy. From the Cloud App Security admin center, create an access policy.'}, {isCorrectAnswer: false, value: 'From the Azure AD admin center, register AppA. Then from the Cloud App Security admin center, create an access policy. Then create an app discovery policy.'}, {value: 'From the Cloud App Security admin center, create an access policy. Then from the Endpoint Management admin center, create an app configuration policy. Finally, from the Azure AD admin center, create a conditional access policy.', isCorrectAnswer: false}, {isCorrectAnswer: false, value: 'From the Endpoint Management admin center, add AppA. Then from the Azure AD admin center, create a conditional access policy. Finally from the Endpoint Management admin center, create an app configuration policy.'}], question: {blocks: [{inlineStyleRanges: [], text: 'All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune.', key: '8rhoa', depth: 0, type: 'unstyled', data: {}, entityRanges: []}, {inlineStyleRanges: [], key: '7kn79', depth: 0, type: 'unstyled', entityRanges: [], data: {}, text: 'Your organization has purchased an app named AppA.'}, {type: 'unstyled', entityRanges: [], text: 'AppA that supports Microsoft\'s session controls.', inlineStyleRanges: [], data: {}, key: '3feh', depth: 0}, {data: {}, key: 'bnqig', inlineStyleRanges: [], type: 'unstyled', text: 'Your manager asks you to configure AppA so it can be reviewed in real-time.', entityRanges: [], depth: 0}, {data: {}, type: 'unstyled', entityRanges: [], text: 'What do you need to do?', inlineStyleRanges: [], key: '9k3bk', depth: 0}], entityMap: {}}, references: {blocks: [{key: '2cg64', data: {}, text: 'You\'ll need to perform three steps to manage a device:', inlineStyleRanges: [], entityRanges: [], depth: 0, type: 'unstyled'}, {text: 'From the Azure AD admin center, register AppA.', data: {}, key: 'dgocv', type: 'ordered-list-item', depth: 0, inlineStyleRanges: [], entityRanges: []}, {depth: 0, entityRanges: [], data: {}, key: '3bh87', inlineStyleRanges: [], type: 'ordered-list-item', text: 'From the Azure AD admin center, create a conditional access policy.'}, {inlineStyleRanges: [], depth: 0, data: {}, text: 'From the Cloud App Security admin center, create an access policy.', type: 'ordered-list-item', key: '59ba8', entityRanges: []}, {depth: 0, type: 'unstyled', inlineStyleRanges: [], entityRanges: [{offset: 0, key: 0, length: 69}], text: 'https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad', key: '16k6h', data: {}}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad'}, type: 'LINK', mutability: 'MUTABLE'}}}, id: 'SkXjr_BYf'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune.</p>
<p>Your organization has purchased an app named AppA.</p>
<p>AppA that supports Microsoft's session controls.</p>
<p>Your manager asks you to configure AppA so it can be reviewed in real-time.</p>
<p>What do you need to do?</p>
`,
      questionText: `All the devices in the Microsoft 365 tenant are managed by using Microsoft Intune. Your organization has purchased an app named AppA. AppA that supports Microsoft's session controls. Your manager asks you to configure AppA so it can be reviewed in real-time. What do you need to do?`,
      referencesHtml: `<p>You'll need to perform three steps to manage a device:</p>
<ol>
<li>From the Azure AD admin center, register AppA.</li>
<li>From the Azure AD admin center, create a conditional access policy.</li>
<li>From the Cloud App Security admin center, create an access policy.</li>
</ol>
<p><a href="https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad" target="_blank">https://docs.microsoft.com/en-us/cloud-app-security/access-policy-aad</a></p>
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
