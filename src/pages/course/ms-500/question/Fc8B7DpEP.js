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
      question: {id: 'Fc8B7DpEP', answers: [{isCorrectAnswer: false, value: 'User sign-in settings: Password Synchronization with single-sign on'}, {isCorrectAnswer: true, value: 'User sign-in settings: Pass-through authentication with single-sign on'}, {value: 'User sign-in settings: Federation with Active Directory Federation Services (AD FS)', isCorrectAnswer: false}, {isCorrectAnswer: true, value: 'Device options: Hybrid Azure AD Join'}, {value: 'Device options: Enable Device writeback', isCorrectAnswer: false}, {value: 'Device options: Disable Device writeback', isCorrectAnswer: false}], references: {blocks: [{type: 'unstyled', depth: 0, text: 'To ensure that all domain-joined computers are registered to Azure AD Hybrid Azure AD Join would need to be configured.', key: '5ipu7', inlineStyleRanges: [], entityRanges: [], data: {}}, {entityRanges: [], data: {}, inlineStyleRanges: [], depth: 0, type: 'unstyled', text: 'To prevent users locked out of Active Directory from signing in to Azure AD and Active Directory pass-through authentication would need to be configured.', key: '2hgvf'}, {entityRanges: [{key: 0, offset: 0, length: 69}], inlineStyleRanges: [], key: 'ho77', depth: 0, type: 'unstyled', data: {}, text: 'https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P'}, type: 'LINK', mutability: 'MUTABLE'}}}, question: {blocks: [{data: {}, depth: 0, entityRanges: [], text: 'Your organization has a Microsoft 365 tenant and an on-premises Active Directory (AD) domain. Your organization has installed AD Connect but hasn\'t enabled the syncing of your on-premises AD to Microsoft 365. Your organization is currently using the default authentication settings.', type: 'unstyled', inlineStyleRanges: [], key: '2eoh4'}, {data: {}, text: 'Your manager has asked you to perform the following', entityRanges: [], inlineStyleRanges: [], depth: 0, type: 'unstyled', key: 'doc92'}, {type: 'unordered-list-item', key: 'f92hp', depth: 0, text: 'Have all domain joined computers registered in Azure AD.', entityRanges: [], data: {}, inlineStyleRanges: []}, {data: {}, type: 'unordered-list-item', depth: 0, text: 'Configure Microsoft 365 to lock out any user that\'s currently locked out of the on-premises AD.', inlineStyleRanges: [], entityRanges: [], key: '8gce'}, {inlineStyleRanges: [], type: 'unstyled', data: {}, depth: 0, entityRanges: [], key: '51pq4', text: 'What two settings will you need to configure to meet the goals listed above?'}], entityMap: {}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant and an on-premises Active Directory (AD) domain. Your organization has installed AD Connect but hasn't enabled the syncing of your on-premises AD to Microsoft 365. Your organization is currently using the default authentication settings.</p>
<p>Your manager has asked you to perform the following</p>
<ul>
<li>Have all domain joined computers registered in Azure AD.</li>
<li>Configure Microsoft 365 to lock out any user that's currently locked out of the on-premises AD.</li>
</ul>
<p>What two settings will you need to configure to meet the goals listed above?</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant and an on-premises Active Directory (AD) domain. Your organization has installed AD Connect but hasn't enabled the syncing of your on-premises AD to Microsoft 365. Your organization is currently using the default authentication settings. Your manager has asked you to perform the following Have all domain joined computers registered in Azure AD. Configure Microsoft 365 to lock out any user that's currently locked out of the on-premises AD. What two settings will you need to configure to meet the goals listed above?`,
      referencesHtml: `<p>To ensure that all domain-joined computers are registered to Azure AD Hybrid Azure AD Join would need to be configured.</p>
<p>To prevent users locked out of Active Directory from signing in to Azure AD and Active Directory pass-through authentication would need to be configured.</p>
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
