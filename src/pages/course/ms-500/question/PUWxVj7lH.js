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
      question: {"references":{"entityMap":{"0":{"mutability":"MUTABLE","data":{"url":"https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh","targetOption":"_blank"},"type":"LINK"},"1":{"type":"LINK","mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition#:~:text=and%20IPv6%20addresses.-,Named%20locations,that%20you%20wish%20to%20block"}}},"blocks":[{"data":{},"inlineStyleRanges":[],"type":"unstyled","depth":0,"text":"The only trusted IP address is the New York office. So sales users connecting from the New York office will not be prompted for MFA. All other users will be prompted for MFA.","entityRanges":[],"key":"6icl3"},{"data":{},"key":"4236g","type":"unstyled","entityRanges":[{"key":0,"length":86,"offset":0}],"depth":0,"inlineStyleRanges":[],"text":"https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh"},{"key":"4al6p","type":"unstyled","data":{},"text":"https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition#:~:text=and%20IPv6%20addresses.-,Named%20locations,that%20you%20wish%20to%20block","inlineStyleRanges":[],"entityRanges":[{"key":1,"length":175,"offset":0}],"depth":0}]},"id":"PUWxVj7lH","answers":[{"value":"A sales user who is logging in from the Montreal office will be prompted for MFA.","isCorrectAnswer":true},{"value":"A sales user who signs in from home with a public IP address of 193.77.140.140 will be prompted for MFA.","isCorrectAnswer":true},{"isCorrectAnswer":false,"value":"A sales user who is logging in from the New York office will be prompted for Azure MFA credentials."}],"question":{"entityMap":{"0":{"mutability":"MUTABLE","data":{"alignment":"left","height":"auto","width":"auto","src":"https://i.ibb.co/tBQ9xgK/location-chart.png","alt":"Chart of locations and IP addresses"},"type":"IMAGE"},"1":{"type":"IMAGE","data":{"alignment":"left","width":"auto","height":"auto","alt":"Trusted Locations Chart","src":"https://i.ibb.co/dJnwkFX/trusted-locations-chart.png"},"mutability":"MUTABLE"}},"blocks":[{"depth":0,"inlineStyleRanges":[],"data":{},"key":"2qdub","entityRanges":[],"text":"Your organization has the offices in the following chart. Each office has the following IP addresses.","type":"unstyled"},{"depth":0,"text":" ","entityRanges":[{"key":0,"length":1,"offset":0}],"key":"5llr","inlineStyleRanges":[],"data":{},"type":"atomic"},{"depth":0,"key":"c07p6","data":{},"type":"unstyled","inlineStyleRanges":[],"entityRanges":[],"text":"You've configured named locations in Azure AD as below."},{"type":"atomic","data":{},"text":" ","depth":0,"key":"a8u3o","entityRanges":[{"offset":0,"key":1,"length":1}],"inlineStyleRanges":[]},{"entityRanges":[],"text":"An address space of 198.35.3.0/24 is defined in the trusted IPs list on the Multi-Factor Authentication page.","type":"unstyled","data":{},"inlineStyleRanges":[{"length":33,"offset":76,"style":"color-rgb(33,37,41)"},{"offset":76,"length":33,"style":"bgcolor-rgb(255,255,255)"},{"offset":76,"style":"fontsize-16","length":33},{"length":33,"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","offset":76}],"depth":0,"key":"c772p"},{"inlineStyleRanges":[],"text":"MFA is enabled for the users in the sales department.","key":"8d983","data":{},"type":"unstyled","entityRanges":[],"depth":0},{"inlineStyleRanges":[],"depth":0,"entityRanges":[],"type":"unstyled","data":{},"text":"You are evaluating which sales department users will be prompted for MFA.","key":"bcs2k"},{"entityRanges":[],"data":{},"text":"Check the box for each true statement.","type":"unstyled","depth":0,"inlineStyleRanges":[],"key":"99kqm"}]}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has the offices in the following chart. Each office has the following IP addresses.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/tBQ9xgK/location-chart.png" alt="Chart of locations and IP addresses" style="height: auto;width: auto"/></div>
<p>You've configured named locations in Azure AD as below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/dJnwkFX/trusted-locations-chart.png" alt="Trusted Locations Chart" style="height: auto;width: auto"/></div>
<p>An address space of 198.35.3.0/24 is defined in the trusted IPs list on the <span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Multi-Factor Authentication page.</span></p>
<p>MFA is enabled for the users in the sales department.</p>
<p>You are evaluating which sales department users will be prompted for MFA.</p>
<p>Check the box for each true statement.</p>
`,
      questionText: `Your organization has the offices in the following chart. Each office has the following IP addresses. You've configured named locations in Azure AD as below. An address space of 198.35.3.0/24 is defined in the trusted IPs list on the Multi-Factor Authentication page. MFA is enabled for the users in the sales department. You are evaluating which sales department users will be prompted for MFA. Check the box for each true statement.`,
      referencesHtml: `<p>The only trusted IP address is the New York office. So sales users connecting from the New York office will not be prompted for MFA. All other users will be prompted for MFA.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh" target="_blank">https://www.gitbit.org/course/ms-500/learn/Whats-a-conditional-access-policy-V1en9Iugh</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition#:~:text=and%20IPv6%20addresses.-,Named%20locations,that%20you%20wish%20to%20block" target="_blank">https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition#:~:text=and%20IPv6%20addresses.-,Named%20locations,that%20you%20wish%20to%20block</a></p>
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
