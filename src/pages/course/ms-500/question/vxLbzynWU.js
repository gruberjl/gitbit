import { h, Component } from "preact"
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
      test: {questions:[{answers:[]}]},
      question: {"question":{"entityMap":{"0":{"data":{"alt":"Users at Risk screenshot","height":"auto","width":"auto","src":"https://i.ibb.co/RTNLdyM/Users-At-Risk.png","alignment":"left"},"type":"IMAGE","mutability":"MUTABLE"},"1":{"data":{"width":"auto","alt":"User role chart","height":"auto","alignment":"left","src":"https://i.ibb.co/wzLBtGJ/user-role-chart.png"},"type":"IMAGE","mutability":"MUTABLE"},"2":{"data":{"alignment":"left","width":"auto","alt":"User RIsk Chart","height":"auto","src":"https://i.ibb.co/dDHb6VK/user-risk-chart.png"},"type":"IMAGE","mutability":"MUTABLE"}},"blocks":[{"data":{},"entityRanges":[],"depth":0,"text":"You have a Microsoft 365 tenant with Microsoft 365 E5 licenses.","key":"957rl","inlineStyleRanges":[],"type":"unstyled"},{"data":{},"entityRanges":[],"key":"8uunj","depth":0,"inlineStyleRanges":[{"length":106,"style":"color-rgb(33,37,41)","offset":0},{"style":"bgcolor-rgb(255,255,255)","length":106,"offset":0},{"offset":0,"style":"fontsize-16","length":106},{"length":106,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":0}],"type":"unstyled","text":"A user named John Gruber is configured to receive alerts from Azure AD Identity Protection as shown below."},{"text":" ","entityRanges":[{"key":0,"length":1,"offset":0}],"inlineStyleRanges":[],"depth":0,"type":"atomic","key":"d1p7o","data":{}},{"text":"Your tenant contains the following users.","depth":0,"data":{},"key":"deom4","inlineStyleRanges":[],"type":"unstyled","entityRanges":[]},{"key":"bd174","inlineStyleRanges":[],"depth":0,"entityRanges":[{"length":1,"key":1,"offset":0}],"data":{},"text":" ","type":"atomic"},{"data":{},"inlineStyleRanges":[],"depth":0,"text":"The user sign-in log is shown below","entityRanges":[],"key":"10fuk","type":"unstyled"},{"type":"atomic","depth":0,"text":" ","key":"1pjgg","data":{},"entityRanges":[{"key":2,"offset":0,"length":1}],"inlineStyleRanges":[]},{"inlineStyleRanges":[],"data":{},"entityRanges":[],"key":"6nlr4","type":"unstyled","depth":0,"text":"Check the box next to each true statement."}]},"id":"vxLbzynWU","answers":[{"value":"John Gruber receives 3 email alerts from Azure AD Identity Protection","isCorrectAnswer":false},{"value":"User2 receives 3 email alerts from Azure AD Identity Protection","isCorrectAnswer":false},{"isCorrectAnswer":false,"value":"User3 receives 2 email alerts from Azure AD Identity Protection"}],"references":{"blocks":[{"type":"unstyled","inlineStyleRanges":[{"style":"BOLD","length":16,"offset":0}],"entityRanges":[],"depth":0,"data":{},"text":"Box 1: Unchecked","key":"b4n82"},{"type":"unstyled","key":"a4q6n","data":{},"entityRanges":[],"text":"John Gruber will receive two alerts.","depth":0,"inlineStyleRanges":[]},{"data":{},"key":"fnuqh","inlineStyleRanges":[],"depth":0,"text":"Sign-ins from an infected device are classified as low. John Gruber will receive alerts on the unfamiliar location and anonymous IP address though.","type":"unstyled","entityRanges":[]},{"data":{},"entityRanges":[],"inlineStyleRanges":[{"offset":0,"style":"BOLD","length":9}],"depth":0,"text":"Box 2: No","key":"fc3ej","type":"unstyled"},{"entityRanges":[],"depth":0,"data":{},"type":"unstyled","inlineStyleRanges":[],"text":"User2 will receive two alerts. Email alerts are sent to all global admins, security admins, and security readers","key":"3shng"},{"text":"Sign-ins from the infected device are classified as low.","type":"unstyled","entityRanges":[],"key":"2hg9v","depth":0,"inlineStyleRanges":[],"data":{}},{"entityRanges":[],"text":"Box 3: No","depth":0,"key":"shoc","data":{},"inlineStyleRanges":[{"length":9,"offset":0,"style":"BOLD"}],"type":"unstyled"},{"inlineStyleRanges":[],"depth":0,"text":"User3 will not receive alerts. Email alerts are sent to all global admins, security admins, and security readers by default.","type":"unstyled","key":"9benb","entityRanges":[],"data":{}},{"depth":0,"type":"unstyled","inlineStyleRanges":[],"key":"49c2a","data":{},"text":"https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ","entityRanges":[{"offset":0,"key":0,"length":123}]},{"key":"btri2","text":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection","type":"unstyled","depth":0,"entityRanges":[{"length":104,"key":1,"offset":0}],"data":{},"inlineStyleRanges":[]},{"key":"6d4nq","depth":0,"text":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/howto-identity-protection-configure-risk-policies","data":{},"type":"unstyled","inlineStyleRanges":[],"entityRanges":[{"offset":0,"key":2,"length":125}]}],"entityMap":{"0":{"mutability":"MUTABLE","type":"LINK","data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ"}},"1":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection"}},"2":{"data":{"url":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"}}}},
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
  			"Microsoft",
  			"Microsoft 365",
  			"Office 365",
        'MS-500',
        'Microsoft 365 Security Administration'
  		],
      mainEntity: {
        '@type': "Question",
        name: this.state.questionText.substring(0, 150),
        text: this.state.questionText,
        answerCount: this.state.question.answers ? this.state.question.answers.length : 0,
        dateCreated: "2021-09-08T16:52:31Z",
        author: {
          "@type": "Person",
          "name": "John Gruber",
          url: 'https://medium.com/@gruberjl'
        }
      }
    }

    if (this.state.question.answers) {
      this.state.jsonLd.mainEntity.acceptedAnswer = {
        "@type": "Answer",
        "text": this.state.question.answers ? this.state.question.answers.filter(answer => answer.isCorrectAnswer).map(a => a.value).join('; ') : 'None',
        url: `https://www.gitbit.org/course/ms-500/question/${this.state.question.id}`,
        author: {
          type: 'Person',
          name: 'John Gruber',
          url: 'https://medium.com/@gruberjl'
        },
        upvoteCount: 1,
        dateCreated: "2021-09-08T16:52:31Z"
      }
    }
  }

  componentDidMount() {
    if (isBrowser()) {
      this.onAuthStateChangedListener = onAuthStateChanged(this.setUid)
    }
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
        getDoc(`users/${user.uid}/tests`, this.state.testId).then(test => {
          const questionIdx = test.questions.findIndex(question => question.id === this.state.question.id)
          const previousQuestionId = questionIdx > 0 ? test.questions[questionIdx-1].id : ''
          const nextQuestionId = test.questions.length-1 == questionIdx ? '' : test.questions[questionIdx+1].id

          this.setState({
            test,
            questionIdx: questionIdx,
            nextQuestionId: nextQuestionId,
            previousQuestionId: previousQuestionId
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
              <Header questionIdx={this.state.questionIdx} previousQuestionId={this.state.previousQuestionId} nextQuestionId={this.state.nextQuestionId} testId={this.state.testId} toggleEndExam={this.toggleEndExam}/>
              <Choice questionHtml={this.state.questionHtml} question={this.state.question} testQuestion={this.state.test.questions[this.state.questionIdx]} onTestQuestionChange={this.onTestQuestionChange} showAnswer={this.state.answerShown} />
              <Grid container>
                <Grid item xs={12}>
                  { this.state.answerShown ?
                    <div dangerouslySetInnerHTML={{__html: this.state.referencesHtml}}></div> :
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
