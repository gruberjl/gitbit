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
      question: {"references":{"blocks":[{"depth":0,"data":{},"key":"6i5qo","entityRanges":[],"type":"unstyled","text":"Leaked credentials detection can only work if the password hash is synced/stored in Microsoft 365.","inlineStyleRanges":[{"style":"color-rgb(23,23,23)","offset":0,"length":19},{"length":98,"style":"bgcolor-rgb(255,255,255)","offset":0},{"length":98,"style":"fontsize-16","offset":0},{"offset":0,"length":19,"style":"fontfamily-Segoe UI\", SegoeUI, \"Helvetica Neue\", Helvetica, Arial, sans-serif"},{"length":79,"offset":19,"style":"color-rgb(33,37,41)"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":79,"offset":19}]},{"depth":0,"data":{},"inlineStyleRanges":[{"style":"color-rgb(23,23,23)","length":69,"offset":0},{"style":"bgcolor-rgb(255,255,255)","length":69,"offset":0},{"offset":0,"length":69,"style":"fontsize-16"},{"length":69,"style":"fontfamily-Segoe UI\", SegoeUI, \"Helvetica Neue\", Helvetica, Arial, sans-serif","offset":0}],"entityRanges":[{"length":69,"key":0,"offset":0}],"key":"fmtgm","text":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P","type":"unstyled"},{"inlineStyleRanges":[],"depth":0,"data":{},"key":"27bbv","text":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks#password-hash-synchronization","entityRanges":[{"key":1,"length":139,"offset":0}],"type":"unstyled"}],"entityMap":{"0":{"data":{"url":"https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P","targetOption":"_blank"},"mutability":"MUTABLE","type":"LINK"},"1":{"data":{"url":"https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks#password-hash-synchronization","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"}}},"question":{"blocks":[{"entityRanges":[],"type":"unstyled","data":{},"depth":0,"key":"fla6r","inlineStyleRanges":[],"text":"Your organization has a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization currently uses AD Connect to sync your user accounts from the on-premises AD to Microsoft 365. Your organization is also using Active Directory Federation Services (AD FS) to federate between the on-premises Active Directory (AD) and the Microsoft 365 tenant. Azure AD Connect has the following settings:"},{"key":"e9s9s","type":"atomic","depth":0,"entityRanges":[{"length":1,"key":0,"offset":0}],"text":" ","inlineStyleRanges":[],"data":{}},{"depth":0,"text":"Your manager has asked if you can update the configuration so leaked credentials detection can run properly.","data":{},"type":"unstyled","key":"2bd7q","entityRanges":[],"inlineStyleRanges":[]},{"entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"unstyled","text":"Solution: You modify the Source Anchor settings.","data":{},"key":"5g4g7"},{"data":{},"depth":0,"type":"unstyled","entityRanges":[],"key":"f1f2e","inlineStyleRanges":[],"text":"Does that meet the goal?"}],"entityMap":{"0":{"data":{"height":"auto","alignment":"left","alt":"AD Connect settings","width":"auto","src":"https://i.ibb.co/Y87wd88/AD-Connect-Settings.png"},"type":"IMAGE","mutability":"MUTABLE"}}},"id":"695aFlD-J","answers":[{"isCorrectAnswer":false,"value":"attribute filtering settings"},{"isCorrectAnswer":false,"value":"Source Anchor settings"},{"value":"Password Hash Synchronization settings","isCorrectAnswer":true},{"value":"Azure AD app and attribute filtering settings","isCorrectAnswer":false},{"isCorrectAnswer":false,"value":"User principal name settings"}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization currently uses AD Connect to sync your user accounts from the on-premises AD to Microsoft 365. Your organization is also using Active Directory Federation Services (AD FS) to federate between the on-premises Active Directory (AD) and the Microsoft 365 tenant. Azure AD Connect has the following settings:</p>
<div style="text-align:left;"><img src="https://i.ibb.co/Y87wd88/AD-Connect-Settings.png" alt="AD Connect settings" style="height: auto;width: auto"/></div>
<p>Your manager has asked if you can update the configuration so leaked credentials detection can run properly.</p>
<p>Solution: You modify the Source Anchor settings.</p>
<p>Does that meet the goal?</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization currently uses AD Connect to sync your user accounts from the on-premises AD to Microsoft 365. Your organization is also using Active Directory Federation Services (AD FS) to federate between the on-premises Active Directory (AD) and the Microsoft 365 tenant. Azure AD Connect has the following settings: Your manager has asked if you can update the configuration so leaked credentials detection can run properly. Solution: You modify the Source Anchor settings. Does that meet the goal?`,
      referencesHtml: `<p><span style="color: rgb(23,23,23);background-color: rgb(255,255,255);font-size: 16px;font-family: Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif;">Leaked credentials </span><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">detection can only work if the password hash is synced/stored in Microsoft 365.</span></p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P" target="_blank"><span style="color: rgb(23,23,23);background-color: rgb(255,255,255);font-size: 16px;font-family: Segoe UI", SegoeUI, "Helvetica Neue", Helvetica, Arial, sans-serif;">https://www.gitbit.org/course/ms-500/learn/Whats-AD-Connect-ky5W0Lz5P</span></a></p>
<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks#password-hash-synchronization" target="_blank">https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/concept-identity-protection-risks#password-hash-synchronization</a></p>
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
