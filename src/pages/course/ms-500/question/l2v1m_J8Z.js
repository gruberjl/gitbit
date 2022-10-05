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
      question: {answers: [{isCorrectAnswer: false, value: 'External users will be able to open and read File1'}, {isCorrectAnswer: false, value: 'Any user in your organization can open and read File2'}, {isCorrectAnswer: false, value: 'External users will be able to open and read File3'}], canonical: 'https://www.gitbit.org/course/ms-500/test/data-loss-prevention-policies-dlp-hwkqi18rz/question/who-can-access-the-files-y2xargzdq', id: 'l2v1m_J8Z', question: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '50gpj', text: 'Your organization has a Microsoft 365 tenant with the primary domain of gitbit.org', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '260nn', text: 'OneDrive contains the following files that are shared externally.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 1, offset: 0}], inlineStyleRanges: [], key: 'euhdj', text: ' ', type: 'atomic'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'a6paf', text: 'You create a data loss prevention (DLP) policy and apply it to OneDrive. You configure the DLP policy with the following rules', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 6, offset: 0, style: 'BOLD'}], key: '6vh9m', text: 'Rule 1:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'bgdm7', text: 'Applies when content is marked with Label1 and shared with people outside my organization', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'e369v', text: 'Restrict access by blocking people outside your organization.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '7are6', text: 'Notify the user who shared or last modified the content.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'df6nh', text: 'Allow overrides from Microsoft 365 services.', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'av8gm', text: 'Priority: 0', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 0, style: 'BOLD'}], key: 'og34', text: 'Rule2:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 42, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 42, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 42, offset: 0, style: 'fontsize-16'}, {length: 42, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: 'cjeds', text: 'Applies when content is marked with Label1 or Label2', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '854sf', text: 'Block everyone from accessing the content excluding the owner and last modifier', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '3s1li', text: 'Priority: 1', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 5, offset: 0, style: 'BOLD'}], key: '5ujn5', text: 'Rule3:', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: 'f2jcf', text: 'Applies when content is marked with Label2 and shared with people outside my organization', type: 'unordered-list-item'}, {data: {'margin-left': '1.5em'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 61, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 61, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 61, offset: 0, style: 'fontsize-16'}, {length: 61, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '4rk5n', text: 'Restrict access by blocking people outside your organization. ', type: 'unordered-list-item'}, {data: {'margin-left': '1.5em'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 56, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 56, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 56, offset: 0, style: 'fontsize-16'}, {length: 56, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '6lr8c', text: 'Notify the user who shared or last modified the content. ', type: 'unordered-list-item'}, {data: {'margin-left': '1.5em'}, depth: 0, entityRanges: [], inlineStyleRanges: [{length: 44, offset: 0, style: 'color-rgb(33,37,41)'}, {length: 44, offset: 0, style: 'bgcolor-rgb(255,255,255)'}, {length: 44, offset: 0, style: 'fontsize-16'}, {length: 44, offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], key: '7iado', text: 'Allow overrides from Microsoft 365 services. ', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '1mk1m', text: 'Priority: 2', type: 'unordered-list-item'}, {data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '4p8lg', text: 'Check the box next to each true statement', type: 'unstyled'}], entityMap: {0: {data: {alignment: 'left', alt: 'Files and labels chart', height: 'auto', src: 'https://i.ibb.co/rMYDH1g/file-labels.png', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, references: {blocks: [{data: {}, depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5t3am', text: 'All of them will match Rule2 because it is the most restrictive.', type: 'unstyled'}, {data: {}, depth: 0, entityRanges: [{key: 0, length: 116, offset: 0}], inlineStyleRanges: [], key: 'eu9vf', text: 'https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w', type: 'unstyled'}], entityMap: {0: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w'}, mutability: 'MUTABLE', type: 'LINK'}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant with the primary domain of gitbit.org</p>
<p>OneDrive contains the following files that are shared externally.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/rMYDH1g/file-labels.png" alt="Files and labels chart" style="height: auto;width: auto"/></div>
<p>You create a data loss prevention (DLP) policy and apply it to OneDrive. You configure the DLP policy with the following rules</p>
<p><strong>Rule 1</strong>:</p>
<ul>
<li>Applies when content is marked with Label1 and shared with people outside my organization</li>
<li>Restrict access by blocking people outside your organization.</li>
<li>Notify the user who shared or last modified the content.</li>
<li>Allow overrides from Microsoft 365 services.</li>
<li>Priority: 0</li>
</ul>
<p><strong>Rule2</strong>:</p>
<ul>
<li><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Applies when content is marked with Label1</span> or Label2</li>
<li>Block everyone from accessing the content excluding the owner and last modifier</li>
<li>Priority: 1</li>
</ul>
<p><strong>Rule3</strong>:</p>
<ul>
<li>Applies when content is marked with Label2 and shared with people outside my organization</li>
<li style="margin-left:1.5em;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Restrict access by blocking people outside your organization.</span>&nbsp;</li>
<li style="margin-left:1.5em;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Notify the user who shared or last modified the content.</span>&nbsp;</li>
<li style="margin-left:1.5em;"><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Allow overrides from Microsoft 365 services.</span>&nbsp;</li>
<li>Priority: 2</li>
</ul>
<p>Check the box next to each true statement</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant with the primary domain of gitbit.org OneDrive contains the following files that are shared externally. You create a data loss prevention (DLP) policy and apply it to OneDrive. You configure the DLP policy with the following rules Rule 1: Applies when content is marked with Label1 and shared with people outside my organization Restrict access by blocking people outside your organization. Notify the user who shared or last modified the content. Allow overrides from Microsoft 365 services. Priority: 0 Rule2: Applies when content is marked with Label1 or Label2 Block everyone from accessing the content excluding the owner and last modifier Priority: 1 Rule3: Applies when content is marked with Label2 and shared with people outside my organization Restrict access by blocking people outside your organization. Notify the user who shared or last modified the content. Allow overrides from Microsoft 365 services. Priority: 2 Check the box next to each true statement`,
      referencesHtml: `<p>All of them will match Rule2 because it is the most restrictive.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w" target="_blank">https://www.gitbit.org/course/ms-500/learn/Preventing-accidental-and-malicious-data-loss-with-DLP-policies-IsPGsme8w</a></p>
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
