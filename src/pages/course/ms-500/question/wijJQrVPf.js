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
      question: {id: 'wijJQrVPf', answers: [{value: ' Microsoft Sentinel Automation Contributor', isCorrectAnswer: false}, {isCorrectAnswer: false, value: 'Reader'}, {isCorrectAnswer: false, value: 'Managed Application Operator Role'}, {isCorrectAnswer: true, value: 'Contributor'}, {value: 'Logic App contributor', isCorrectAnswer: true}], question: {blocks: [{data: {}, entityRanges: [], text: 'You have a Microsoft Sentinel workspace that has a connector to Azure AD and a connector to Microsoft Office 365.', depth: 0, key: '3uuah', type: 'unstyled', inlineStyleRanges: []}, {type: 'unstyled', entityRanges: [], text: 'A new admin has been hired and needs to perform the following tasks.', inlineStyleRanges: [], depth: 0, data: {}, key: 'eqqf0'}, {type: 'unordered-list-item', key: 'c2ql9', text: 'Create and run playbooks.', inlineStyleRanges: [], depth: 0, entityRanges: [], data: {}}, {depth: 0, type: 'unordered-list-item', inlineStyleRanges: [], entityRanges: [], data: {}, text: 'Manage incidents.', key: '5aok0'}, {text: 'Which two roles could you assign to the new user?', entityRanges: [], inlineStyleRanges: [], type: 'unstyled', data: {}, key: '9ko98', depth: 0}], entityMap: {}}, references: {entityMap: {0: {mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt'}, type: 'LINK'}, 1: {mutability: 'MUTABLE', type: 'LINK', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/azure/sentinel/roles'}}}, blocks: [{depth: 0, inlineStyleRanges: [], type: 'unstyled', text: 'The Contributor can perform everything the owner can except they can\'t assign roles.', data: {}, key: 'fq1n3', entityRanges: []}, {depth: 0, data: {}, inlineStyleRanges: [], entityRanges: [], type: 'unstyled', text: 'The Logic App contributor role allows you to manage logic apps including playbooks and incidents.', key: '9tr0e'}, {depth: 0, key: '39f6f', type: 'unstyled', data: {}, text: 'https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt', inlineStyleRanges: [], entityRanges: [{length: 136, offset: 0, key: 0}]}, {data: {}, text: 'https://docs.microsoft.com/en-us/azure/sentinel/roles', type: 'unstyled', depth: 0, entityRanges: [{offset: 0, key: 1, length: 53}], inlineStyleRanges: [], key: 'c7jdu'}]}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You have a Microsoft Sentinel workspace that has a connector to Azure AD and a connector to Microsoft Office 365.</p>
<p>A new admin has been hired and needs to perform the following tasks.</p>
<ul>
<li>Create and run playbooks.</li>
<li>Manage incidents.</li>
</ul>
<p>Which two roles could you assign to the new user?</p>
`,
      questionText: `You have a Microsoft Sentinel workspace that has a connector to Azure AD and a connector to Microsoft Office 365. A new admin has been hired and needs to perform the following tasks. Create and run playbooks. Manage incidents. Which two roles could you assign to the new user?`,
      referencesHtml: `<p>The Contributor can perform everything the owner can except they can't assign roles.</p>
<p>The Logic App contributor role allows you to manage logic apps including playbooks and incidents.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt" target="_blank">https://www.gitbit.org/course/ms-500/learn/Collect-detect-investigate-and-respond-to-security-threats-using-Microsoft-Sentinel-LEyZMWBSt</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure/sentinel/roles" target="_blank">https://docs.microsoft.com/en-us/azure/sentinel/roles</a></p>
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
