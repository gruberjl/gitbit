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
      question: {answers: [{value: 'John Gruber receives 3 email alerts from Azure AD Identity Protection', isCorrectAnswer: false}, {isCorrectAnswer: false, value: 'User2 receives 3 email alerts from Azure AD Identity Protection'}, {isCorrectAnswer: false, value: 'User3 receives 2 email alerts from Azure AD Identity Protection'}], references: {entityMap: {0: {mutability: 'MUTABLE', type: 'LINK', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ', targetOption: '_blank'}}, 1: {data: {url: 'https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection', targetOption: '_blank'}, type: 'LINK', mutability: 'MUTABLE'}, 2: {type: 'LINK', mutability: 'MUTABLE', data: {url: 'https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection', targetOption: '_blank'}}}, blocks: [{entityRanges: [], text: 'Box 1: Unchecked', data: {}, depth: 0, type: 'unstyled', key: 'b4n82', inlineStyleRanges: [{offset: 0, length: 16, style: 'BOLD'}]}, {entityRanges: [], depth: 0, text: 'John Gruber will receive two alerts.', key: 'a4q6n', type: 'unstyled', inlineStyleRanges: [], data: {}}, {entityRanges: [], key: 'fnuqh', type: 'unstyled', depth: 0, data: {}, inlineStyleRanges: [], text: 'Sign-ins from an infected device are classified as low. John Gruber will receive alerts on the unfamiliar location and anonymous IP address though.'}, {depth: 0, key: 'fc3ej', text: 'Box 2: No', entityRanges: [], data: {}, type: 'unstyled', inlineStyleRanges: [{offset: 0, style: 'BOLD', length: 9}]}, {key: '3shng', depth: 0, type: 'unstyled', inlineStyleRanges: [], data: {}, text: 'User2 will receive two alerts. Email alerts are sent to all global admins, security admins, and security readers', entityRanges: []}, {inlineStyleRanges: [], type: 'unstyled', key: '2hg9v', data: {}, text: 'Sign-ins from the infected device are classified as low.', depth: 0, entityRanges: []}, {key: 'shoc', type: 'unstyled', entityRanges: [], data: {}, text: 'Box 3: No', inlineStyleRanges: [{offset: 0, length: 9, style: 'BOLD'}], depth: 0}, {key: '9benb', depth: 0, inlineStyleRanges: [], data: {}, type: 'unstyled', entityRanges: [], text: 'User3 will not receive alerts. Email alerts are sent to all global admins, security admins, and security readers by default.'}, {data: {}, text: 'https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ', type: 'unstyled', depth: 0, entityRanges: [{offset: 0, length: 123, key: 0}], key: '49c2a', inlineStyleRanges: []}, {entityRanges: [{key: 1, length: 104, offset: 0}], data: {}, type: 'unstyled', depth: 0, inlineStyleRanges: [], key: 'btri2', text: 'https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection'}, {entityRanges: [{key: 2, length: 125, offset: 0}], depth: 0, data: {}, key: '6d4nq', inlineStyleRanges: [], type: 'unstyled', text: 'https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-identity-protection-configure-risk-policies'}]}, id: 'vxLbzynWU', question: {entityMap: {0: {type: 'IMAGE', data: {width: 'auto', alignment: 'left', alt: 'Users at Risk screenshot', height: 'auto', src: 'https://i.ibb.co/RTNLdyM/Users-At-Risk.png'}, mutability: 'MUTABLE'}, 1: {type: 'IMAGE', mutability: 'MUTABLE', data: {height: 'auto', alt: 'User role chart', width: 'auto', alignment: 'left', src: 'https://i.ibb.co/wzLBtGJ/user-role-chart.png'}}, 2: {type: 'IMAGE', data: {alt: 'User RIsk Chart', src: 'https://i.ibb.co/dDHb6VK/user-risk-chart.png', width: 'auto', height: 'auto', alignment: 'left'}, mutability: 'MUTABLE'}}, blocks: [{type: 'unstyled', text: 'You have a Microsoft 365 tenant with Microsoft 365 E5 licenses.', entityRanges: [], inlineStyleRanges: [], depth: 0, data: {}, key: '957rl'}, {inlineStyleRanges: [{length: 106, style: 'color-rgb(33,37,41)', offset: 0}, {offset: 0, length: 106, style: 'bgcolor-rgb(255,255,255)'}, {offset: 0, length: 106, style: 'fontsize-16'}, {length: 106, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0}], data: {}, depth: 0, text: 'A user named John Gruber is configured to receive alerts from Azure AD Identity Protection as shown below.', type: 'unstyled', entityRanges: [], key: '8uunj'}, {data: {}, key: 'd1p7o', inlineStyleRanges: [], entityRanges: [{key: 0, offset: 0, length: 1}], text: ' ', depth: 0, type: 'atomic'}, {entityRanges: [], depth: 0, inlineStyleRanges: [], data: {}, key: 'deom4', text: 'Your tenant contains the following users.', type: 'unstyled'}, {inlineStyleRanges: [], depth: 0, text: ' ', data: {}, entityRanges: [{key: 1, offset: 0, length: 1}], key: 'bd174', type: 'atomic'}, {entityRanges: [], type: 'unstyled', key: '10fuk', depth: 0, data: {}, text: 'The user sign-in log is shown below', inlineStyleRanges: []}, {data: {}, entityRanges: [{offset: 0, length: 1, key: 2}], depth: 0, key: '1pjgg', type: 'atomic', text: ' ', inlineStyleRanges: []}, {entityRanges: [], data: {}, type: 'unstyled', inlineStyleRanges: [], text: 'Check the box next to each true statement.', key: '6nlr4', depth: 0}]}},
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
