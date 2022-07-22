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
      question: {id: 'i2EPEDfe7', references: {blocks: [{depth: 0, type: 'unstyled', text: 'Only global administrators and privileged role administrators can approve the admin role assignments.', inlineStyleRanges: [], data: {}, entityRanges: [], key: 'jsce'}, {data: {}, text: 'https://www.gitbit.org/course/ms-500/learn/Just-in-time-approval-and-notification-for-admin-roles-in-Microsoft-365-RHW1API2s ', entityRanges: [{length: 124, offset: 0, key: 0}], key: '4ru2o', inlineStyleRanges: [], type: 'unstyled', depth: 0}], entityMap: {0: {mutability: 'MUTABLE', type: 'LINK', data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Just-in-time-approval-and-notification-for-admin-roles-in-Microsoft-365-RHW1API2s'}}}}, answers: [{isCorrectAnswer: true, value: 'When UserB submits a request to activate the role, User1 can approve the request.'}, {value: 'When UserB submits a request to activate the role, User2 can approve the request.', isCorrectAnswer: true}, {isCorrectAnswer: false, value: 'When UserC submits a request to activate the role, User3 can approve the request.'}], question: {blocks: [{depth: 0, type: 'unstyled', data: {}, text: 'your organization has a Microsoft 365 tenant with the following users.', inlineStyleRanges: [], key: '2u085', entityRanges: []}, {inlineStyleRanges: [], depth: 0, entityRanges: [{offset: 0, key: 0, length: 1}], data: {}, text: ' ', type: 'atomic', key: '7nj32'}, {depth: 0, inlineStyleRanges: [], type: 'unstyled', key: 'q8g8', entityRanges: [], text: 'Your organization has implemented Azure Active Directory (Azure AD) Privileged Identity Management (PIM).', data: {}}, {text: 'From PIM, you see the Application Administrator role has the following users.', inlineStyleRanges: [], data: {}, depth: 0, key: '9t9i0', type: 'unstyled', entityRanges: []}, {data: {}, inlineStyleRanges: [], type: 'atomic', depth: 0, entityRanges: [{key: 1, length: 1, offset: 0}], key: '4e1ch', text: ' '}, {depth: 0, text: 'PIM is configured to use the following settings for users with the Application Administrator role assigned.', data: {}, type: 'unstyled', inlineStyleRanges: [], entityRanges: [], key: 'dqtr5'}, {inlineStyleRanges: [], data: {}, depth: 0, text: 'Require approval to activate: Yes', type: 'unordered-list-item', key: 'fs7s9', entityRanges: []}, {key: 'aqgof', data: {}, text: 'Approvers: None', depth: 0, entityRanges: [], inlineStyleRanges: [], type: 'unordered-list-item'}, {key: 'bpudn', text: 'Check the box next to each true statement.', entityRanges: [], inlineStyleRanges: [], depth: 0, data: {}, type: 'unstyled'}], entityMap: {0: {type: 'IMAGE', data: {height: 'auto', alt: 'Name Role Chart', width: 'auto', src: 'https://i.ibb.co/Cs1cMM8/Chart5.png', alignment: 'left'}, mutability: 'MUTABLE'}, 1: {data: {width: 'auto', alt: 'Name Assignment Type Chart', src: 'https://i.ibb.co/FVBbzdZ/Chart6.png', height: 'auto', alignment: 'left'}, type: 'IMAGE', mutability: 'MUTABLE'}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>your organization has a Microsoft 365 tenant with the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/Cs1cMM8/Chart5.png" alt="Name Role Chart" style="height: auto;width: auto"/></div>
<p>Your organization has implemented Azure Active Directory (Azure AD) Privileged Identity Management (PIM).</p>
<p>From PIM, you see the Application Administrator role has the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/FVBbzdZ/Chart6.png" alt="Name Assignment Type Chart" style="height: auto;width: auto"/></div>
<p>PIM is configured to use the following settings for users with the Application Administrator role assigned.</p>
<ul>
<li>Require approval to activate: Yes</li>
<li>Approvers: None</li>
</ul>
<p>Check the box next to each true statement.</p>
`,
      questionText: `your organization has a Microsoft 365 tenant with the following users. Your organization has implemented Azure Active Directory (Azure AD) Privileged Identity Management (PIM). From PIM, you see the Application Administrator role has the following users. PIM is configured to use the following settings for users with the Application Administrator role assigned. Require approval to activate: Yes Approvers: None Check the box next to each true statement.`,
      referencesHtml: `<p>Only global administrators and privileged role administrators can approve the admin role assignments.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Just-in-time-approval-and-notification-for-admin-roles-in-Microsoft-365-RHW1API2s" target="_blank">https://www.gitbit.org/course/ms-500/learn/Just-in-time-approval-and-notification-for-admin-roles-in-Microsoft-365-RHW1API2s</a>&nbsp;</p>
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
