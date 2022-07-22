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
      question: {id: 'vxLbzynWU', references: {blocks: [{data: {}, key: 'b4n82', entityRanges: [], depth: 0, type: 'unstyled', inlineStyleRanges: [{style: 'BOLD', offset: 0, length: 16}], text: 'Box 1: Unchecked'}, {type: 'unstyled', depth: 0, data: {}, inlineStyleRanges: [], text: 'John Gruber will receive two alerts.', key: 'a4q6n', entityRanges: []}, {data: {}, depth: 0, text: 'Sign-ins from an infected device are classified as low. John Gruber will receive alerts on the unfamiliar location and anonymous IP address though.', type: 'unstyled', entityRanges: [], inlineStyleRanges: [], key: 'fnuqh'}, {text: 'Box 2: No', entityRanges: [], type: 'unstyled', depth: 0, inlineStyleRanges: [{offset: 0, style: 'BOLD', length: 9}], key: 'fc3ej', data: {}}, {inlineStyleRanges: [], entityRanges: [], text: 'User2 will receive two alerts. Email alerts are sent to all global admins, security admins, and security readers', type: 'unstyled', key: '3shng', depth: 0, data: {}}, {key: '2hg9v', inlineStyleRanges: [], type: 'unstyled', depth: 0, data: {}, text: 'Sign-ins from the infected device are classified as low.', entityRanges: []}, {inlineStyleRanges: [{style: 'BOLD', length: 9, offset: 0}], text: 'Box 3: No', type: 'unstyled', key: 'shoc', depth: 0, data: {}, entityRanges: []}, {entityRanges: [], key: '9benb', type: 'unstyled', inlineStyleRanges: [], text: 'User3 will not receive alerts. Email alerts are sent to all global admins, security admins, and security readers by default.', depth: 0, data: {}}, {entityRanges: [{key: 0, length: 123, offset: 0}], text: 'https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ', inlineStyleRanges: [], data: {}, type: 'unstyled', key: '49c2a', depth: 0}, {inlineStyleRanges: [], entityRanges: [{length: 104, offset: 0, key: 1}], type: 'unstyled', depth: 0, key: 'btri2', data: {}, text: 'https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection'}, {type: 'unstyled', depth: 0, data: {}, text: 'https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-identity-protection-configure-risk-policies', inlineStyleRanges: [], entityRanges: [{length: 125, offset: 0, key: 2}], key: '6d4nq'}], entityMap: {0: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ', targetOption: '_blank'}, type: 'LINK', mutability: 'MUTABLE'}, 1: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection'}}, 2: {mutability: 'MUTABLE', type: 'LINK', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection'}}}}, question: {blocks: [{text: 'You have a Microsoft 365 tenant with Microsoft 365 E5 licenses.', data: {}, entityRanges: [], depth: 0, type: 'unstyled', inlineStyleRanges: [], key: '957rl'}, {data: {}, key: '8uunj', depth: 0, text: 'A user named John Gruber is configured to receive alerts from Azure AD Identity Protection as shown below.', type: 'unstyled', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', offset: 0, length: 106}, {style: 'bgcolor-rgb(255,255,255)', length: 106, offset: 0}, {length: 106, style: 'fontsize-16', offset: 0}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 106, offset: 0}], entityRanges: []}, {key: 'd1p7o', type: 'atomic', entityRanges: [{length: 1, offset: 0, key: 0}], inlineStyleRanges: [], depth: 0, data: {}, text: ' '}, {text: 'Your tenant contains the following users.', inlineStyleRanges: [], entityRanges: [], depth: 0, key: 'deom4', data: {}, type: 'unstyled'}, {data: {}, text: ' ', inlineStyleRanges: [], type: 'atomic', key: 'bd174', depth: 0, entityRanges: [{length: 1, key: 1, offset: 0}]}, {inlineStyleRanges: [], text: 'The user sign-in log is shown below', entityRanges: [], data: {}, depth: 0, key: '10fuk', type: 'unstyled'}, {text: ' ', depth: 0, key: '1pjgg', type: 'atomic', entityRanges: [{offset: 0, key: 2, length: 1}], inlineStyleRanges: [], data: {}}, {type: 'unstyled', entityRanges: [], inlineStyleRanges: [], text: 'Check the box next to each true statement.', key: '6nlr4', depth: 0, data: {}}], entityMap: {0: {mutability: 'MUTABLE', type: 'IMAGE', data: {height: 'auto', alignment: 'left', alt: 'Users at Risk screenshot', src: 'https://i.ibb.co/RTNLdyM/Users-At-Risk.png', width: 'auto'}}, 1: {mutability: 'MUTABLE', data: {src: 'https://i.ibb.co/wzLBtGJ/user-role-chart.png', alignment: 'left', width: 'auto', height: 'auto', alt: 'User role chart'}, type: 'IMAGE'}, 2: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/dDHb6VK/user-risk-chart.png', height: 'auto', alignment: 'left', width: 'auto', alt: 'User RIsk Chart'}}}}, answers: [{value: 'John Gruber receives 3 email alerts from Azure AD Identity Protection', isCorrectAnswer: false}, {isCorrectAnswer: false, value: 'User2 receives 3 email alerts from Azure AD Identity Protection'}, {isCorrectAnswer: false, value: 'User3 receives 2 email alerts from Azure AD Identity Protection'}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You have a Microsoft 365 tenant with Microsoft 365 E5 licenses.</p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">A user named John Gruber is configured to receive alerts from Azure AD Identity Protection as shown below.</span></p>
<div style="text-align:left;"><img src="https://i.ibb.co/RTNLdyM/Users-At-Risk.png" alt="Users at Risk screenshot" style="height: auto;width: auto"/></div>
<p>Your tenant contains the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/wzLBtGJ/user-role-chart.png" alt="User role chart" style="height: auto;width: auto"/></div>
<p>The user sign-in log is shown below</p>
<div style="text-align:left;"><img src="https://i.ibb.co/dDHb6VK/user-risk-chart.png" alt="User RIsk Chart" style="height: auto;width: auto"/></div>
<p>Check the box next to each true statement.</p>
`,
      questionText: `You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. A user named John Gruber is configured to receive alerts from Azure AD Identity Protection as shown below. Your tenant contains the following users. The user sign-in log is shown below Check the box next to each true statement.`,
      referencesHtml: `<p><strong>Box 1: Unchecked</strong></p>
<p>John Gruber will receive two alerts.</p>
<p>Sign-ins from an infected device are classified as low. John Gruber will receive alerts on the unfamiliar location and anonymous IP address though.</p>
<p><strong>Box 2: No</strong></p>
<p>User2 will receive two alerts. Email alerts are sent to all global admins, security admins, and security readers</p>
<p>Sign-ins from the infected device are classified as low.</p>
<p><strong>Box 3: No</strong></p>
<p>User3 will not receive alerts. Email alerts are sent to all global admins, security admins, and security readers by default.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ" target="_blank">https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection" target="_blank">https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection" target="_blank">https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-identity-protection-configure-risk-policies</a></p>
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
