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
      question: {references: {entityMap: {0: {type: 'LINK', mutability: 'MUTABLE', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w', targetOption: '_blank'}}}, blocks: [{depth: 0, text: 'Policy 1 will have Exchange selected as a location.', entityRanges: [], key: 'e3nvr', inlineStyleRanges: [], data: {}, type: 'unstyled'}, {entityRanges: [], key: 'b49sa', inlineStyleRanges: [], type: 'unordered-list-item', data: {}, depth: 0, text: 'Rule 1: Condition contains EU Social Security number. Action Notify the user and admin'}, {type: 'unordered-list-item', text: 'Rule 2: Condition contains Credit card numbers. Action Restrict access to the content for external users. Notify admin', key: 'fa55s', depth: 0, entityRanges: [], inlineStyleRanges: [], data: {}}, {type: 'unstyled', data: {}, inlineStyleRanges: [], entityRanges: [], depth: 0, key: '2365d', text: 'Policy 2 Will have OneDrive selected as a location.'}, {data: {}, depth: 0, inlineStyleRanges: [{length: 91, style: 'color-rgb(33,37,41)', offset: 27}, {style: 'bgcolor-rgb(255,255,255)', offset: 27, length: 91}, {style: 'fontsize-16', offset: 27, length: 91}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 91, offset: 27}], key: 'csbk', entityRanges: [], type: 'unordered-list-item', text: 'Rule 3: Condition contains EU passport numbers. Action Restrict access to the content for external users. Notify admin'}, {text: 'https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 116, offset: 0}, {style: 'bgcolor-rgb(255,255,255)', offset: 0, length: 116}, {offset: 0, length: 116, style: 'fontsize-16'}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0, length: 116}], entityRanges: [{length: 116, offset: 0, key: 0}], key: '8g2jb', depth: 0, data: {}, type: 'unstyled'}]}, id: 'u4QhevP_z', question: {blocks: [{key: 'b1abo', type: 'unstyled', inlineStyleRanges: [], depth: 0, text: 'You have a Microsoft 365 subscription.', data: {}, entityRanges: []}, {key: '7ie60', depth: 0, entityRanges: [], data: {}, inlineStyleRanges: [], text: 'You identify the following data loss prevention (DLP) requirements:', type: 'unstyled'}, {text: 'Send notifications to users if they attempt to send attachments that contain EU Social Security Numbers (SSN) or Equivalent ID.', entityRanges: [], key: '11d6', data: {}, type: 'unordered-list-item', depth: 0, inlineStyleRanges: []}, {data: {}, entityRanges: [], key: '7421v', depth: 0, text: 'Prevent any email messages that contain credit card numbers from being sent outside your organization.', inlineStyleRanges: [], type: 'unordered-list-item'}, {data: {}, key: 'd0gr9', inlineStyleRanges: [], depth: 0, type: 'unordered-list-item', entityRanges: [], text: 'Block the external sharing of Microsoft OneDrive content that contains EU passport numbers.'}, {key: '917t', depth: 0, data: {}, entityRanges: [], text: 'Send administrators email alerts if any rule matches occur.', inlineStyleRanges: [], type: 'unordered-list-item'}, {text: 'What is the minimum number of DLP policies and rules you must create to meet the requirements? To answer, select the appropriate options in the answer area.', data: {}, type: 'unstyled', depth: 0, entityRanges: [], key: 'ervpb', inlineStyleRanges: []}], entityMap: {}}, answers: [{isCorrectAnswer: false, value: 'Policies: 1'}, {value: 'Policies: 2', isCorrectAnswer: true}, {isCorrectAnswer: false, value: 'Policies: 3'}, {value: 'Rules: 1', isCorrectAnswer: false}, {value: 'Rules: 2', isCorrectAnswer: false}, {isCorrectAnswer: true, value: 'Rules: 3'}, {isCorrectAnswer: false, value: 'Rules: 4'}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You have a Microsoft 365 subscription.</p>
<p>You identify the following data loss prevention (DLP) requirements:</p>
<ul>
<li>Send notifications to users if they attempt to send attachments that contain EU Social Security Numbers (SSN) or Equivalent ID.</li>
<li>Prevent any email messages that contain credit card numbers from being sent outside your organization.</li>
<li>Block the external sharing of Microsoft OneDrive content that contains EU passport numbers.</li>
<li>Send administrators email alerts if any rule matches occur.</li>
</ul>
<p>What is the minimum number of DLP policies and rules you must create to meet the requirements? To answer, select the appropriate options in the answer area.</p>
`,
      questionText: `You have a Microsoft 365 subscription. You identify the following data loss prevention (DLP) requirements: Send notifications to users if they attempt to send attachments that contain EU Social Security Numbers (SSN) or Equivalent ID. Prevent any email messages that contain credit card numbers from being sent outside your organization. Block the external sharing of Microsoft OneDrive content that contains EU passport numbers. Send administrators email alerts if any rule matches occur. What is the minimum number of DLP policies and rules you must create to meet the requirements? To answer, select the appropriate options in the answer area.`,
      referencesHtml: `<p>Policy 1 will have Exchange selected as a location.</p>
<ul>
<li>Rule 1: Condition contains EU Social Security number. Action Notify the user and admin</li>
<li>Rule 2: Condition contains Credit card numbers. Action Restrict access to the content for external users. Notify admin</li>
</ul>
<p>Policy 2 Will have OneDrive selected as a location.</p>
<ul>
<li>Rule 3: Condition contains <span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">EU passport numbers. Action Restrict access to the content for external users. Notify admin</span></li>
</ul>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w" target="_blank"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w</span></a></p>
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
