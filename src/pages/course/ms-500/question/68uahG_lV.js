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
      question: {id: '68uahG_lV', question: {blocks: [{depth: 0, inlineStyleRanges: [], key: '347i8', data: {}, entityRanges: [], text: 'Your manager has asked you to configure the following in Microsoft 365.', type: 'unstyled'}, {type: 'unordered-list-item', data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e44co', text: 'Set guest access to be reviewed every 30 days.'}, {data: {}, inlineStyleRanges: [], type: 'unordered-list-item', depth: 0, text: 'Grant John Gruber the ability to invite guests to the Microsoft 365 tenant.', entityRanges: [], key: 'am7ii'}, {data: {}, inlineStyleRanges: [], key: '9mktc', depth: 0, text: 'Your organization adheres to the principle of least privilege.', type: 'unstyled', entityRanges: []}, {depth: 0, text: 'What should you do?', entityRanges: [], type: 'unstyled', key: '39v8l', data: {}, inlineStyleRanges: []}], entityMap: {}}, references: {blocks: [{inlineStyleRanges: [], key: 'f88oc', depth: 0, text: 'To configure guest access review you must create an access review policy.', entityRanges: [], data: {}, type: 'unstyled'}, {data: {}, entityRanges: [{key: 0, length: 94, offset: 0}], depth: 0, key: '89v07', text: 'https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2', type: 'unstyled', inlineStyleRanges: []}, {key: '8osgc', depth: 0, data: {}, type: 'unstyled', entityRanges: [], text: 'Assigning the Guest invited role to John Gruber will give him the ability to invite guests. Global admins can also invite guests but that would give John Gruber way too many permissions.', inlineStyleRanges: []}, {data: {}, inlineStyleRanges: [], key: 'f6dp9', depth: 0, entityRanges: [{length: 95, key: 1, offset: 0}], text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU', type: 'unstyled'}, {type: 'unstyled', depth: 0, key: 'f8u8p', inlineStyleRanges: [], entityRanges: [{length: 144, offset: 0, key: 2}], data: {}, text: 'https://docs.microsoft.com/en-us/microsoft-365/solutions/create-secure-guest-sharing-environment?view=o365-worldwide#set-up-guest-access-reviews'}], entityMap: {0: {mutability: 'MUTABLE', type: 'LINK', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2', targetOption: '_blank'}}, 1: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU'}, mutability: 'MUTABLE', type: 'LINK'}, 2: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/microsoft-365/solutions/create-secure-guest-sharing-environment?view=o365-worldwide#set-up-guest-access-reviews'}}}}, answers: [{value: 'Create an access review policy.', isCorrectAnswer: true}, {value: 'Grant John Gruber the global admin role.', isCorrectAnswer: false}, {isCorrectAnswer: true, value: 'Grant John Gruber the Guest inviter role.'}, {isCorrectAnswer: false, value: 'In Azure Active Directory admin center modify the external collaboration settings.'}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your manager has asked you to configure the following in Microsoft 365.</p>
<ul>
<li>Set guest access to be reviewed every 30 days.</li>
<li>Grant John Gruber the ability to invite guests to the Microsoft 365 tenant.</li>
</ul>
<p>Your organization adheres to the principle of least privilege.</p>
<p>What should you do?</p>
`,
      questionText: `Your manager has asked you to configure the following in Microsoft 365. Set guest access to be reviewed every 30 days. Grant John Gruber the ability to invite guests to the Microsoft 365 tenant. Your organization adheres to the principle of least privilege. What should you do?`,
      referencesHtml: `<p>To configure guest access review you must create an access review policy.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2" target="_blank">https://www.gitbit.org/course/ms-500/learn/Automating-Access-Review-in-Microsoft-365-rK48f6iM2</a></p>
<p>Assigning the Guest invited role to John Gruber will give him the ability to invite guests. Global admins can also invite guests but that would give John Gruber way too many permissions.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU" target="_blank">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU</a></p>
<p><a href="https://docs.microsoft.com/en-us/microsoft-365/solutions/create-secure-guest-sharing-environment?view=o365-worldwide#set-up-guest-access-reviews" target="_blank">https://docs.microsoft.com/en-us/microsoft-365/solutions/create-secure-guest-sharing-environment?view=o365-worldwide#set-up-guest-access-reviews</a></p>
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
