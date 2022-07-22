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
      question: {references: {blocks: [{entityRanges: [], inlineStyleRanges: [{length: 45, style: 'BOLD', offset: 0}], type: 'unstyled', key: '44apb', depth: 0, text: 'User1 will be required to change his password', data: {}}, {depth: 0, entityRanges: [], inlineStyleRanges: [], key: '192u7', type: 'unstyled', text: 'User1 is in Group1 which the policy applies.', data: {}}, {data: {}, key: '8vpnm', depth: 0, text: 'User2 will not be required to change his password ', type: 'unstyled', entityRanges: [], inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 49, offset: 0}, {length: 49, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {offset: 0, length: 49, style: 'fontsize-16'}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 49, offset: 0}, {style: 'BOLD', length: 50, offset: 0}]}, {key: '48tc0', text: 'User2 is in Group2 which is excluded from the policy.', type: 'unstyled', depth: 0, data: {}, inlineStyleRanges: [], entityRanges: []}, {data: {}, text: 'User3 will not be required to change his password  ', type: 'unstyled', key: '17c30', depth: 0, entityRanges: [], inlineStyleRanges: [{style: 'color-rgb(33,37,41)', offset: 0, length: 49}, {style: 'bgcolor-rgb(255,255,255)', offset: 0, length: 49}, {length: 49, style: 'fontsize-16', offset: 0}, {length: 49, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0}, {length: 49, offset: 0, style: 'BOLD'}]}, {entityRanges: [], key: '97snb', text: 'User3 is in Group1 which is included in the policy but is also in Group2 which is excluded from the policy. In this case, the exclusion wins so the policy does not apply to User3.', depth: 0, inlineStyleRanges: [], data: {}, type: 'unstyled'}, {depth: 0, key: '1ijpn', inlineStyleRanges: [], type: 'unstyled', text: 'https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ', entityRanges: [{length: 123, key: 0, offset: 0}], data: {}}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ'}, type: 'LINK', mutability: 'MUTABLE'}}}, id: 'DCx8K1f29', question: {blocks: [{data: {}, entityRanges: [], key: '9gu7q', text: 'your organization has a Microsoft 365 tenant that contains the following users.', inlineStyleRanges: [], depth: 0, type: 'unstyled'}, {entityRanges: [{key: 0, offset: 0, length: 1}], data: {}, type: 'atomic', text: ' ', depth: 0, inlineStyleRanges: [], key: '99lev'}, {type: 'unstyled', data: {}, text: 'You configure an Azure AD Identity Protection sign-in risk policy with the following settings:', key: 'dv9re', depth: 0, entityRanges: [], inlineStyleRanges: []}, {type: 'unordered-list-item', key: 'ej5j1', text: 'Assigned to Group1 and excludes Group2.', data: {}, inlineStyleRanges: [], entityRanges: [], depth: 0}, {key: 'f82ql', depth: 0, entityRanges: [], type: 'unordered-list-item', inlineStyleRanges: [], text: 'Only apply if the user risk level is medium or above.', data: {}}, {inlineStyleRanges: [], entityRanges: [], key: '5kuqa', text: 'If the user risk level is medium or above allow access but require a password change.', data: {}, depth: 0, type: 'unordered-list-item'}, {depth: 0, text: 'The risk level for each user is shown below.', key: 'd3chi', inlineStyleRanges: [], type: 'unstyled', entityRanges: [], data: {}}, {text: ' ', type: 'atomic', depth: 0, data: {}, entityRanges: [{key: 1, offset: 0, length: 1}], inlineStyleRanges: [], key: '5naop'}, {entityRanges: [], data: {}, depth: 0, key: '38vb7', inlineStyleRanges: [], text: 'Which users will be required to change their password?', type: 'unstyled'}], entityMap: {0: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/WVjQP2K/chart7.png', width: 'auto', alt: 'Chart showing users and groups', alignment: 'left', height: 'auto'}}, 1: {mutability: 'MUTABLE', data: {width: 'auto', alt: 'Chart showing user risk level', alignment: 'left', src: 'https://i.ibb.co/LxsWp5S/Chart8.png', height: 'auto'}, type: 'IMAGE'}}}, answers: [{isCorrectAnswer: true, value: 'User1'}, {value: 'User2', isCorrectAnswer: false}, {value: 'User3', isCorrectAnswer: false}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>your organization has a Microsoft 365 tenant that contains the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/WVjQP2K/chart7.png" alt="Chart showing users and groups" style="height: auto;width: auto"/></div>
<p>You configure an Azure AD Identity Protection sign-in risk policy with the following settings:</p>
<ul>
<li>Assigned to Group1 and excludes Group2.</li>
<li>Only apply if the user risk level is medium or above.</li>
<li>If the user risk level is medium or above allow access but require a password change.</li>
</ul>
<p>The risk level for each user is shown below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/LxsWp5S/Chart8.png" alt="Chart showing user risk level" style="height: auto;width: auto"/></div>
<p>Which users will be required to change their password?</p>
`,
      questionText: `your organization has a Microsoft 365 tenant that contains the following users. You configure an Azure AD Identity Protection sign-in risk policy with the following settings: Assigned to Group1 and excludes Group2. Only apply if the user risk level is medium or above. If the user risk level is medium or above allow access but require a password change. The risk level for each user is shown below. Which users will be required to change their password?`,
      referencesHtml: `<p><strong>User1 will be required to change his password</strong></p>
<p>User1 is in Group1 which the policy applies.</p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;"><strong>User2 will not be required to change his password</strong></span><strong> </strong></p>
<p>User2 is in Group2 which is excluded from the policy.</p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;"><strong>User3 will not be required to change his password</strong></span>&nbsp;&nbsp;</p>
<p>User3 is in Group1 which is included in the policy but is also in Group2 which is excluded from the policy. In this case, the exclusion wins so the policy does not apply to User3.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ" target="_blank">https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ</a></p>
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
