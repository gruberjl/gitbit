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
      question: {answers: [{isCorrectAnswer: true, value: 'In the compliance admin center create a Data Loss Prevention Policy that blocks users from sending information covered under the U.K. Data Protection Act with an exception for gitbit.org'}, {isCorrectAnswer: false, value: 'In the Exchange Admin center create a mail flow rule to block inbound emails that contain information covered in the U.K. Data Protection Act with an exception for gitbit.org'}, {isCorrectAnswer: false, value: 'In the Azure Active Ad admin center create a label that marks emails that contain information covered in the U.K. Data Protection Actwith an exception for gitbit.org'}], canonical: 'https://www.gitbit.org/course/ms-500/test/data-loss-prevention-policies-dlp-hwkqi18rz/question/prevent-any-emails-that-c-6xxnk5yq3', id: '4_zZu6GYm', question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2mndm', text: 'You need to prevent any emails that contain information covered by the U.K. Data Protection Act from being sent to people outside of your organization unless the messages are sent to an external domain named gitbit.org.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 32, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 32, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 32, offset: 0, style: 'fontsize-16'}, {length: 32, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'a99n8', text: 'What should you do to set it up?', type: 'unstyled'}], entityMap: {}}, references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 24, style: 'color-rgb(33,37,41)'}, {length: 5, offset: 24, style: 'bgcolor-rgb(255,255,255)'}, {length: 5, offset: 24, style: 'fontsize-16'}, {length: 5, offset: 24, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'efejo', text: 'A Data loss prevention (DLP) policy would prevent data from leaving the company that is covered under the U.K. Data Protection Act.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 116, offset: 0}], inlineStyleRanges: [], key: '67ehb', text: 'https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 130, offset: 0}], inlineStyleRanges: [], key: '9uen4', text: 'https://www.iorad.com/player/1801811/MS-500---Prevent-any-email-messages-that-contain-data-covered-by-the-U-K--Data-Protection-Act', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3ekuh', text: 'Open the Microsoft 365 Compliance admin center > Policies > Data loss prevention > Policies > Create policy > Privacy > U.K. Data Protection Act > Next > Disable all locations except Exchange email > Create or customize advanced DLP rules > add an exception and block emails from going outbound > Save your new policy.', type: 'ordered-list-item'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {targetOption: '_blank', url: 'https://www.iorad.com/player/1801811/MS-500---Prevent-any-email-messages-that-contain-data-covered-by-the-U-K--Data-Protection-Act'}, mutability: 'MUTABLE', type: 'LINK'}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You need to prevent any emails that contain information covered by the U.K. Data Protection Act from being sent to people outside of your organization unless the messages are sent to an external domain named gitbit.org.</p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">What should you do to set it up?</span></p>
`,
      questionText: `You need to prevent any emails that contain information covered by the U.K. Data Protection Act from being sent to people outside of your organization unless the messages are sent to an external domain named gitbit.org. What should you do to set it up?`,
      referencesHtml: `<p>A Data loss prevention (<span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">DLP) </span>policy would prevent data from leaving the company that is covered under the U.K. Data Protection Act.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w" target="_blank">https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w</a>&nbsp;</p>
<p><a href="https://www.iorad.com/player/1801811/MS-500---Prevent-any-email-messages-that-contain-data-covered-by-the-U-K--Data-Protection-Act" target="_blank">https://www.iorad.com/player/1801811/MS-500---Prevent-any-email-messages-that-contain-data-covered-by-the-U-K--Data-Protection-Act</a></p>
<ol>
<li>Open the Microsoft 365 Compliance admin center &gt; Policies &gt; Data loss prevention &gt; Policies &gt; Create policy &gt; Privacy &gt; U.K. Data Protection Act &gt; Next &gt; Disable all locations except Exchange email &gt; Create or customize advanced DLP rules &gt; add an exception and block emails from going outbound &gt; Save your new policy.</li>
</ol>
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
