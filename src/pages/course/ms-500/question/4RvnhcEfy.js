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
      question: {answers: [{isCorrectAnswer: true, value: 'A user with an email address of userA@google.com cannot access OneDrive files.'}, {isCorrectAnswer: false, value: 'A user with an email address of userA@google.com can access OneDrive files after a link is created.'}, {isCorrectAnswer: false, value: 'A user with an email address of userA@google.com must be added to a group before the user can access OneDrive content.'}, {isCorrectAnswer: false, value: 'If a new guest user is created for userB@adatum.com the user cannot access OneDrive files.'}, {isCorrectAnswer: true, value: 'If a new guest user is created for userB@adatum.com the user can access OneDrive content after a link is files.'}, {isCorrectAnswer: false, value: 'If a new guest user is created for userB@adatum.com must be added to a group before the user can access OneDrive content.'}], canonical: 'https://www.gitbit.org/course/ms-500/test/securing-sharepoint-online-vojmqnsev/question/review-what-external-user-zhsvqsjaa', id: '4RvnhcEfy', question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'dnpo8', text: 'Your organization has a Microsoft 365 tenant with a domain of gitbit.org.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '2mcb0', text: 'You configure the Sharing settings in Microsoft SharePoint Online as below.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: '8ogn7', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '122r8', text: 'Click the box next to each true statement', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'left', alt: 'OneDrive Sharing Settings', height: 'auto', src: 'https://i.ibb.co/nP9z6jR/onedrive-sharing-settings.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '52o7v', text: 'google.com is not listed in the "allow only these domains" list so they cannot access OneDrive files.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 225, style: 'color-rgb(33,37,41)'}, {length: 5, offset: 250, style: 'color-rgb(33,37,41)'}, {length: 5, offset: 225, style: 'bgcolor-rgb(255,255,255)'}, {length: 5, offset: 250, style: 'bgcolor-rgb(255,255,255)'}, {length: 5, offset: 225, style: 'fontsize-16'}, {length: 5, offset: 250, style: 'fontsize-16'}, {length: 5, offset: 225, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}, {length: 5, offset: 250, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '12jc2', text: 'adatum.com is listed in the "allow only these domains" but OneDrive sharing is set to "existing external users" so a guest user account would be required. Once the guest account is created and the content is shared with the Adatum.com user then the Adatum user will be able to access the content.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 128, offset: 0}], inlineStyleRanges: [], key: '2nc3v', text: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI ', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 1, length: 75, offset: 0}], inlineStyleRanges: [], key: '1ti69', text: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off'}, mutability: 'MUTABLE', type: 'LINK'}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant with a domain of gitbit.org.</p>
<p>You configure the Sharing settings in Microsoft SharePoint Online as below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/nP9z6jR/onedrive-sharing-settings.png" alt="OneDrive Sharing Settings" style="height: auto;width: auto"/></div>
<p>Click the box next to each true statement</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant with a domain of gitbit.org. You configure the Sharing settings in Microsoft SharePoint Online as below. Click the box next to each true statement`,
      referencesHtml: `<p>google.com is not listed in the "allow only these domains" list so they cannot access OneDrive files.</p>
<p>adatum.com is listed in the "allow only these domains" but OneDrive sharing is set to "existing external users" so a guest user account would be required. Once the guest account is created and the content is shared with the A<span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">datum</span>.com user then the A<span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">datum</span> user will be able to access the content.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI" target="_blank">https://www.gitbit.org/course/ms-500/learn/Everything-you-need-to-know-about-securing-SharePoint-Online-for-the-MS-500-wv2PbXnhI</a>&nbsp;</p>
<p><a href="https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off" target="_blank">https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off</a></p>
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
      <Page jsonLdType={'QAPage'} jsonLd={this.state.jsonLd} title={this.state.questionText} description={this.state.questionText} canonical={this.state.question.canonical}>
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
