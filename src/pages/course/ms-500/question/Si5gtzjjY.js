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
      question: {"answers":[{"value":"An Azure Active Directory Authentication Library (ADAL) token.","isCorrectAnswer":false},{"isCorrectAnswer":false,"value":"The public key."},{"value":"The Username and password for a global admin account.","isCorrectAnswer":false},{"isCorrectAnswer":true,"value":"The URL of the Microsoft Defender for Identity admin center."}],"question":{"entityMap":{},"blocks":[{"type":"unstyled","data":{},"key":"etukd","depth":0,"text":"A colleague has been asked to deploy several Microsoft Defender for Identity sensors.","entityRanges":[],"inlineStyleRanges":[]},{"text":"He's asked you to give him the Azure information required to deploy the sensors.","inlineStyleRanges":[],"entityRanges":[],"data":{},"key":"8orth","type":"unstyled","depth":0},{"data":{},"key":"aqlp3","entityRanges":[],"text":"What information should you provide?","inlineStyleRanges":[],"depth":0,"type":"unstyled"}]},"references":{"entityMap":{"0":{"data":{"targetOption":"_self","url":"https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA"},"type":"LINK","mutability":"MUTABLE"},"1":{"mutability":"MUTABLE","data":{"url":"https://docs.microsoft.com/en-us/azure-advanced-threat-protection/workspace-portal","targetOption":"_blank"},"type":"LINK"}},"blocks":[{"inlineStyleRanges":[],"text":"The URL is specific to every tenant so the admin will need the URL: https://*instancename*.atp.azure.com. The admin will also need the installation files and the access key but both of which can be downloaded from the Microsoft Defender for Identity admin center.","entityRanges":[],"data":{},"key":"67e5s","depth":0,"type":"unstyled"},{"type":"unstyled","inlineStyleRanges":[],"key":"bb6us","data":{},"entityRanges":[{"offset":0,"key":0,"length":90}],"depth":0,"text":"https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA"},{"text":"https://docs.microsoft.com/en-us/azure-advanced-threat-protection/workspace-portal","key":"951j7","depth":0,"entityRanges":[{"key":1,"offset":0,"length":82}],"data":{},"inlineStyleRanges":[],"type":"unstyled"}]},"id":"Si5gtzjjY"},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>A colleague has been asked to deploy several Microsoft Defender for Identity sensors.</p>
<p>He's asked you to give him the Azure information required to deploy the sensors.</p>
<p>What information should you provide?</p>
`,
      questionText: `A colleague has been asked to deploy several Microsoft Defender for Identity sensors. He's asked you to give him the Azure information required to deploy the sensors. What information should you provide?`,
      referencesHtml: `<p>The URL is specific to every tenant so the admin will need the URL: https://*instancename*.atp.azure.com. The admin will also need the installation files and the access key but both of which can be downloaded from the Microsoft Defender for Identity admin center.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA" target="_self">https://www.gitbit.org/course/ms-500/learn/Whats-Microsoft-Defender-for-identity-Kye_yNLxA</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure-advanced-threat-protection/workspace-portal" target="_blank">https://docs.microsoft.com/en-us/azure-advanced-threat-protection/workspace-portal</a></p>
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
