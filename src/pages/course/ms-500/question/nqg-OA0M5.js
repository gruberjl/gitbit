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
      question: {question: {entityMap: {}, blocks: [{inlineStyleRanges: [], data: {}, depth: 0, key: '3v3m9', text: 'Your organization has a Microsoft 365 tenant. User accounts are synced from your organization\'s human resources system to Azure AD.', entityRanges: [], type: 'unstyled'}, {depth: 0, inlineStyleRanges: [], text: 'Your organization has five departments that each have there own Microsoft SharePoint Online site. Every user must be granted access to their own department\'s site. No users should be able to access a site that is not a member of the site\'s respective department.', key: '62b11', entityRanges: [], type: 'unstyled', data: {}}, {entityRanges: [], key: 'a1nta', data: {}, type: 'unstyled', text: 'Your manager has asked you to configure the security of the SharePoint sites. He\'s given you the following requirements:', depth: 0, inlineStyleRanges: []}, {entityRanges: [], inlineStyleRanges: [], key: '7l3dd', data: {}, text: 'Users should be automatically added to the security group corresponding to their department.', depth: 0, type: 'unordered-list-item'}, {key: '5pl79', depth: 0, type: 'unordered-list-item', text: 'All group owners must verify their group membership only contains their department\'s users once a month.', data: {}, inlineStyleRanges: [], entityRanges: []}, {entityRanges: [], data: {}, depth: 0, text: 'How do you configure Microsoft 365 to meet the security requirements?', type: 'unstyled', key: 'fospn', inlineStyleRanges: []}]}, id: 'nqg-OA0M5', references: {entityMap: {0: {mutability: 'MUTABLE', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', targetOption: '_blank'}, type: 'LINK'}}, blocks: [{inlineStyleRanges: [], depth: 0, entityRanges: [], text: 'To automatically add users to groups the group type must be dynamic.', type: 'unstyled', key: '3gl08', data: {}}, {depth: 0, text: 'To have owners verify group members\' monthly access reviews must be used.', data: {}, entityRanges: [], type: 'unstyled', key: '7habk', inlineStyleRanges: []}, {key: 'ao7qg', text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', depth: 0, data: {}, type: 'unstyled', entityRanges: [{offset: 0, key: 0, length: 95}], inlineStyleRanges: []}]}, answers: [{value: 'Users should be automatically added to the security group corresponding to their department: dynamic groups', isCorrectAnswer: true}, {value: 'Users should be automatically added to the security group corresponding to their department: Access packages', isCorrectAnswer: false}, {value: 'Users should be automatically added to the security group corresponding to their department: Conditional access policies', isCorrectAnswer: false}, {value: 'Users should be automatically added to the security group corresponding to their department: Assigned groups', isCorrectAnswer: false}, {value: 'All group owners must verify their group membership: Access reviews', isCorrectAnswer: true}, {isCorrectAnswer: false, value: 'All group owners must verify their group membership: Access packages'}, {isCorrectAnswer: false, value: 'All group owners must verify their group membership: Dynamic groups'}, {isCorrectAnswer: false, value: 'All group owners must verify their group membership: Data loss prevention policies'}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant. User accounts are synced from your organization's human resources system to Azure AD.</p>
<p>Your organization has five departments that each have there own Microsoft SharePoint Online site. Every user must be granted access to their own department's site. No users should be able to access a site that is not a member of the site's respective department.</p>
<p>Your manager has asked you to configure the security of the SharePoint sites. He's given you the following requirements:</p>
<ul>
<li>Users should be automatically added to the security group corresponding to their department.</li>
<li>All group owners must verify their group membership only contains their department's users once a month.</li>
</ul>
<p>How do you configure Microsoft 365 to meet the security requirements?</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant. User accounts are synced from your organization's human resources system to Azure AD. Your organization has five departments that each have there own Microsoft SharePoint Online site. Every user must be granted access to their own department's site. No users should be able to access a site that is not a member of the site's respective department. Your manager has asked you to configure the security of the SharePoint sites. He's given you the following requirements: Users should be automatically added to the security group corresponding to their department. All group owners must verify their group membership only contains their department's users once a month. How do you configure Microsoft 365 to meet the security requirements?`,
      referencesHtml: `<p>To automatically add users to groups the group type must be dynamic.</p>
<p>To have owners verify group members' monthly access reviews must be used.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV" target="_blank">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV</a></p>
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
