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
      question: {"question":{"entityMap":{},"blocks":[{"key":"722d9","depth":0,"data":{},"inlineStyleRanges":[],"type":"unstyled","entityRanges":[],"text":"You need to ensure that all users must change their passwords every 100 days."},{"key":"c0511","data":{},"inlineStyleRanges":[{"length":48,"style":"color-rgb(33,37,41)","offset":0},{"offset":0,"length":48,"style":"bgcolor-rgb(255,255,255)"},{"offset":0,"length":48,"style":"fontsize-16"},{"style":"fontfamily-system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", \"Liberation Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji","length":48,"offset":0}],"text":"What steps should you take to complete the task?","type":"unstyled","entityRanges":[],"depth":0}]},"id":"ACrZaP4GG","references":{"blocks":[{"data":{},"key":"4c9n6","inlineStyleRanges":[],"depth":0,"text":"https://www.gitbit.org/course/ms-500/learn/Protecting-Passwords-in-Microsoft-365-i9pJIjTNH","type":"unstyled","entityRanges":[{"length":90,"offset":0,"key":0}]},{"key":"a7c8c","depth":0,"text":"https://www.iorad.com/player/1796164/MS-500---Ensure-that-all-users-must-change-their-password-every-100-day","inlineStyleRanges":[],"entityRanges":[{"length":108,"offset":0,"key":1}],"data":{},"type":"unstyled"},{"data":{},"inlineStyleRanges":[],"type":"ordered-list-item","text":"Sign in to the Microsoft 365 Admin Center.","depth":0,"entityRanges":[],"key":"aacr"},{"inlineStyleRanges":[],"data":{},"entityRanges":[],"text":"In the left navigation pane, expand Show All > Settings > Org Settings.","depth":0,"type":"ordered-list-item","key":"64psl"},{"depth":0,"entityRanges":[],"text":"Click on Security and Privacy.","key":"ch3mn","type":"ordered-list-item","data":{},"inlineStyleRanges":[]},{"data":{},"inlineStyleRanges":[],"text":"Select the Password Expiration Policy.","depth":0,"type":"ordered-list-item","entityRanges":[],"key":"d1j1g"},{"depth":0,"type":"ordered-list-item","data":{},"inlineStyleRanges":[],"key":"428jq","entityRanges":[],"text":"Ensure that the checkbox labeled Set user passwords to expire after a number of days is ticked."},{"depth":0,"text":"Enter 100 in the Days before passwords expire field.","inlineStyleRanges":[],"type":"ordered-list-item","entityRanges":[],"key":"2loqj","data":{}},{"text":"Click Save changes to save the changes.","type":"ordered-list-item","data":{},"key":"b5gtt","inlineStyleRanges":[],"entityRanges":[],"depth":0}],"entityMap":{"0":{"data":{"url":"https://www.gitbit.org/course/ms-500/learn/Protecting-Passwords-in-Microsoft-365-i9pJIjTNH","targetOption":"_blank"},"type":"LINK","mutability":"MUTABLE"},"1":{"mutability":"MUTABLE","data":{"targetOption":"_blank","url":"https://www.iorad.com/player/1796164/MS-500---Ensure-that-all-users-must-change-their-password-every-100-day"},"type":"LINK"}}},"answers":[{"value":"From the Microsoft 365 Admin Center go to users > Select the user > Set the password expiration policy","isCorrectAnswer":false},{"value":"From the Azure Active Directory Admin Center > Enterprise Admin > Password settings > Device Settings","isCorrectAnswer":false},{"value":"From the Microsoft 365 Admin Center go to Settings > Org Settings > Security and Privacy > Password Expiration policy","isCorrectAnswer":true}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You need to ensure that all users must change their passwords every 100 days.</p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">What steps should you take to complete the task?</span></p>
`,
      questionText: `You need to ensure that all users must change their passwords every 100 days. What steps should you take to complete the task?`,
      referencesHtml: `<p><a href="https://www.gitbit.org/course/ms-500/learn/Protecting-Passwords-in-Microsoft-365-i9pJIjTNH" target="_blank">https://www.gitbit.org/course/ms-500/learn/Protecting-Passwords-in-Microsoft-365-i9pJIjTNH</a></p>
<p><a href="https://www.iorad.com/player/1796164/MS-500---Ensure-that-all-users-must-change-their-password-every-100-day" target="_blank">https://www.iorad.com/player/1796164/MS-500---Ensure-that-all-users-must-change-their-password-every-100-day</a></p>
<ol>
<li>Sign in to the Microsoft 365 Admin Center.</li>
<li>In the left navigation pane, expand Show All &gt; Settings &gt; Org Settings.</li>
<li>Click on Security and Privacy.</li>
<li>Select the Password Expiration Policy.</li>
<li>Ensure that the checkbox labeled Set user passwords to expire after a number of days is ticked.</li>
<li>Enter 100 in the Days before passwords expire field.</li>
<li>Click Save changes to save the changes.</li>
</ol>
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
