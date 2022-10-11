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
      question: {answers: [{isCorrectAnswer: false, value: 'Admins need to be informed when the Security administrator role is activated: Alerts'}, {isCorrectAnswer: true, value: 'Admins need to be informed when the Security administrator role is activated: Roles'}, {isCorrectAnswer: false, value: 'Admins need to be informed when the Security administrator role is activated: Access reviews'}, {isCorrectAnswer: false, value: 'Users assigned the Security Administrator role need to be automatically removed if they don\'t log in for 30 days: Alerts'}, {isCorrectAnswer: false, value: 'Users assigned the Security Administrator role need to be automatically removed if they don\'t log in for 30 days: Roles'}, {isCorrectAnswer: true, value: 'Users assigned the Security Administrator role need to be automatically removed if they don\'t log in for 30 days: Access reviews'}], canonical: 'https://www.gitbit.org/course/ms-500/test/lockbox-risk-policies-access-review-and-jit-8awhclygp/question/which-azure-ad-pim-settin-n0tzj6wii', id: 'W580XiwzO', question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dpurb', text: 'Your organization has a Microsoft 365 tenant.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f4ag1', text: 'Your manager has asked you to re-configure the Microsoft 365 tenant to meet the following security requirements:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5sdi4', text: 'Admins need to be informed when the Security administrator role is activated.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a2d7n', text: 'Users assigned the Security Administrator role need to be automatically removed if they don\'t log in for 30 days.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 's219', text: 'Which Azure AD PIM setting should you re-configure to meet the security requirements.', type: 'unstyled'}], entityMap: {}}, references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3mim0', text: '"Admins need to be informed when the Security administrator role is activated" is located under the Roles section.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 114, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 114, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 114, offset: 0, style: 'fontsize-16'}, {length: 114, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '2or5v', text: '"Users assigned the Security Administrator role need to be automatically removed if they don\'t log in for 30 days" is located in the Access reviews section.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 94, offset: 0}], inlineStyleRanges: [], key: '57ek3', text: 'https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 137, offset: 0}], inlineStyleRanges: [], key: '75s50', text: 'https://docs.microsoft.com/bs-latn-ba/azure/active-directory/privileged-identity-management/pim-how-to-configure-security-alerts?tabs=new', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 2, length: 135, offset: 0}], inlineStyleRanges: [], key: '5pn4h', text: 'https://docs.microsoft.com/bs-latn-ba/azure/active-directory/privileged-identity-management/pim-how-to-change-default-settings?tabs=new', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {targetOption: '_blank', url: 'https://docs.microsoft.com/bs-latn-ba/azure/active-directory/privileged-identity-management/pim-how-to-configure-security-alerts?tabs=new'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {data: {targetOption: '_blank', url: 'https://docs.microsoft.com/bs-latn-ba/azure/active-directory/privileged-identity-management/pim-how-to-change-default-settings?tabs=new'}, mutability: 'MUTABLE', type: 'LINK'}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant.</p>
<p>Your manager has asked you to re-configure the Microsoft 365 tenant to meet the following security requirements:</p>
<ul>
<li>Admins need to be informed when the Security administrator role is activated.</li>
<li>Users assigned the Security Administrator role need to be automatically removed if they don't log in for 30 days.</li>
</ul>
<p>Which Azure AD PIM setting should you re-configure to meet the security requirements.</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant. Your manager has asked you to re-configure the Microsoft 365 tenant to meet the following security requirements: Admins need to be informed when the Security administrator role is activated. Users assigned the Security Administrator role need to be automatically removed if they don't log in for 30 days. Which Azure AD PIM setting should you re-configure to meet the security requirements.`,
      referencesHtml: `<p>"Admins need to be informed when the Security administrator role is activated" is located under the Roles section.</p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">"Users assigned the Security Administrator role need to be automatically removed if they don't log in for 30 days"</span> is located in the Access reviews section.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2" target="_blank">https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2</a></p>
<p><a href="https://docs.microsoft.com/bs-latn-ba/azure/active-directory/privileged-identity-management/pim-how-to-configure-security-alerts?tabs=new" target="_blank">https://docs.microsoft.com/bs-latn-ba/azure/active-directory/privileged-identity-management/pim-how-to-configure-security-alerts?tabs=new</a></p>
<p><a href="https://docs.microsoft.com/bs-latn-ba/azure/active-directory/privileged-identity-management/pim-how-to-change-default-settings?tabs=new" target="_blank">https://docs.microsoft.com/bs-latn-ba/azure/active-directory/privileged-identity-management/pim-how-to-change-default-settings?tabs=new</a></p>
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
