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
      question: {"answers":[{"value":"Be a member of the global admins role","isCorrectAnswer":true},{"value":"Configure Office 365 Advanced Threat Protection (ATP)","isCorrectAnswer":false},{"isCorrectAnswer":false,"value":"Create a Conditional Access App Control policy for accessing Office 365"},{"isCorrectAnswer":false,"value":"Integrate Office 365 Threat Intelligence and Microsoft Defender ATP"}],"question":{"entityMap":{},"blocks":[{"depth":0,"inlineStyleRanges":[],"data":{},"key":"c9ri4","text":"You have a Microsoft 365 Enterprise E5 subscription.","entityRanges":[],"type":"unstyled"},{"type":"unstyled","inlineStyleRanges":[],"data":{},"key":"jni0","entityRanges":[],"depth":0,"text":"You use Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP). You plan to use Microsoft Office 365 Attack simulator."},{"depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"1i915","type":"unstyled","text":"What is a prerequisite for running an Attack simulator?"}]},"references":{"entityMap":{"0":{"type":"LINK","data":{"targetOption":"_blank","url":"https://www.gitbit.org/course/ms-500/learn/Simulating-attacks-with-Microsoft-365-GG4cMY8pK"},"mutability":"MUTABLE"},"1":{"type":"LINK","mutability":"MUTABLE","data":{"url":"https://docs.microsoft.com/en-us/office365/securitycompliance/attack-simulator","targetOption":"_blank"}}},"blocks":[{"key":"214ch","entityRanges":[],"data":{},"inlineStyleRanges":[],"type":"unstyled","text":"To setup the attack simulator you need to be part of one of the following roles:","depth":0},{"entityRanges":[],"depth":0,"text":"Global Administrator","data":{},"inlineStyleRanges":[],"key":"bdad","type":"unordered-list-item"},{"key":"22c3t","entityRanges":[],"depth":0,"inlineStyleRanges":[],"type":"unordered-list-item","data":{},"text":"Security Administrator"},{"depth":0,"text":"Attack Simulation Administrators","data":{},"entityRanges":[],"inlineStyleRanges":[],"key":"bs5nt","type":"unordered-list-item"},{"type":"unordered-list-item","key":"1jac5","depth":0,"text":"Attack Payload Author","inlineStyleRanges":[],"entityRanges":[],"data":{}},{"type":"unstyled","key":"bgsqk","data":{},"entityRanges":[{"length":90,"offset":0,"key":0}],"text":"https://www.gitbit.org/course/ms-500/learn/Simulating-attacks-with-Microsoft-365-GG4cMY8pK","depth":0,"inlineStyleRanges":[]},{"text":"https://docs.microsoft.com/en-us/office365/securitycompliance/attack-simulator","key":"1uebk","inlineStyleRanges":[],"type":"unstyled","data":{},"depth":0,"entityRanges":[{"length":78,"key":1,"offset":0}]}]},"id":"M3QKqClsd"},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You have a Microsoft 365 Enterprise E5 subscription.</p>
<p>You use Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP). You plan to use Microsoft Office 365 Attack simulator.</p>
<p>What is a prerequisite for running an Attack simulator?</p>
`,
      questionText: `You have a Microsoft 365 Enterprise E5 subscription. You use Microsoft Defender Advanced Threat Protection (Microsoft Defender ATP). You plan to use Microsoft Office 365 Attack simulator. What is a prerequisite for running an Attack simulator?`,
      referencesHtml: `<p>To setup the attack simulator you need to be part of one of the following roles:</p>
<ul>
<li>Global Administrator</li>
<li>Security Administrator</li>
<li>Attack Simulation Administrators</li>
<li>Attack Payload Author</li>
</ul>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Simulating-attacks-with-Microsoft-365-GG4cMY8pK" target="_blank">https://www.gitbit.org/course/ms-500/learn/Simulating-attacks-with-Microsoft-365-GG4cMY8pK</a></p>
<p><a href="https://docs.microsoft.com/en-us/office365/securitycompliance/attack-simulator" target="_blank">https://docs.microsoft.com/en-us/office365/securitycompliance/attack-simulator</a></p>
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
