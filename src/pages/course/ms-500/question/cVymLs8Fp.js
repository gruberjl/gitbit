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
      question: {references: {blocks: [{inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 115, offset: 0}, {style: 'bgcolor-rgb(255,255,255)', length: 115, offset: 0}, {length: 115, style: 'fontsize-16', offset: 0}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 115, offset: 0}, {style: 'BOLD', offset: 9, length: 35}, {style: 'BOLD', length: 8, offset: 47}, {style: 'BOLD', length: 12, offset: 58}, {offset: 76, style: 'BOLD', length: 32}, {style: 'BOLD', offset: 112, length: 2}], text: '1. Go to Microsoft 365 Defender admin center > Explorer > MDE Settings. Set Connect to Defender for Endpoint to On.', entityRanges: [], key: '8c33j', depth: 0, data: {}, type: 'unstyled'}, {depth: 0, type: 'unstyled', inlineStyleRanges: [], data: {}, entityRanges: [{offset: 0, key: 0, length: 129}], key: 'eq35r', text: 'https://www.gitbit.org/course/ms-500/learn/Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T'}, {depth: 0, data: {}, entityRanges: [{key: 1, offset: 0, length: 128}], inlineStyleRanges: [], text: 'https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/integrate-office-365-ti-with-mde?view=o365-worldwide', key: '29m1o', type: 'unstyled'}], entityMap: {0: {type: 'LINK', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T', targetOption: '_blank'}, mutability: 'MUTABLE'}, 1: {mutability: 'MUTABLE', data: {url: 'https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/integrate-office-365-ti-with-mde?view=o365-worldwide', targetOption: '_blank'}, type: 'LINK'}}}, question: {blocks: [{inlineStyleRanges: [], key: '6kb7k', type: 'unstyled', data: {}, depth: 0, entityRanges: [], text: 'Your organization has a Microsoft 365 tenant with Microsoft 365 E5 licenses assigned to everyone.'}, {entityRanges: [], key: 'd5jcm', depth: 0, inlineStyleRanges: [], text: 'Your organization is currently using Microsoft Defender for Endpoint.', data: {}, type: 'unstyled'}, {entityRanges: [], text: 'You\'ve been tasked with integrating Microsoft Defender for Office 365 and Microsoft Defender for Endpoint.', key: 'd0r85', depth: 0, type: 'unstyled', data: {}, inlineStyleRanges: []}, {text: 'Where do you configure the integration?', inlineStyleRanges: [], entityRanges: [], key: 'es6q7', depth: 0, data: {}, type: 'unstyled'}], entityMap: {}}, id: 'cVymLs8Fp', answers: [{value: 'In the Microsoft 365 admin center > Settings > Services & add-ins.', isCorrectAnswer: false}, {value: 'In the Microsoft Defender admin center > Threat management > Explorer.', isCorrectAnswer: true}, {value: 'In the Microsoft 365 admin center > Reports > Security & Compliance.', isCorrectAnswer: false}, {isCorrectAnswer: false, value: 'In the Security & Compliance admin center > Threat management > Threat tracker.'}]},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant with Microsoft 365 E5 licenses assigned to everyone.</p>
<p>Your organization is currently using Microsoft Defender for Endpoint.</p>
<p>You've been tasked with integrating Microsoft Defender for Office 365 and Microsoft Defender for Endpoint.</p>
<p>Where do you configure the integration?</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant with Microsoft 365 E5 licenses assigned to everyone. Your organization is currently using Microsoft Defender for Endpoint. You've been tasked with integrating Microsoft Defender for Office 365 and Microsoft Defender for Endpoint. Where do you configure the integration?`,
      referencesHtml: `<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">1. Go to <strong>Microsoft 365 Defender admin center</strong> &gt; <strong>Explorer</strong> &gt; <strong>MDE Settings</strong>. Set <strong>Connect to Defender for Endpoint</strong> to <strong>On</strong>.</span></p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T" target="_blank">https://www.gitbit.org/course/ms-500/learn/Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T</a></p>
<p><a href="https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/integrate-office-365-ti-with-mde?view=o365-worldwide" target="_blank">https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/integrate-office-365-ti-with-mde?view=o365-worldwide</a></p>
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
