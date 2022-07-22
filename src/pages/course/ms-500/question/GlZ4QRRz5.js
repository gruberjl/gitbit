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
      question: {references: {entityMap: {0: {mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf'}, type: 'LINK'}, 1: {type: 'LINK', data: {url: 'http://localhost:8000/course/ms-500/question/edit/?docid=GSRw6_3Xv', targetOption: '_blank'}, mutability: 'MUTABLE'}}, blocks: [{depth: 0, entityRanges: [{key: 0, length: 103, offset: 0}], key: 'cg4bf', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf', data: {}, inlineStyleRanges: [], type: 'unstyled'}, {key: 'esf1l', data: {}, text: 'The groups must be mail-enabled.', depth: 0, entityRanges: [], inlineStyleRanges: [], type: 'unstyled'}, {data: {}, type: 'unstyled', key: '604a5', depth: 0, inlineStyleRanges: [], entityRanges: [], text: 'Labels can be published to any specific user or email-enabled group. The group can be a security group, distribution group, or Microsoft 365 group. The group can have assigned or dynamic membership.'}, {depth: 0, type: 'unstyled', data: {}, entityRanges: [{offset: 0, key: 1, length: 96}], text: 'https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide ', inlineStyleRanges: [], key: '49c1'}]}, answers: [{value: 'Group1', isCorrectAnswer: true}, {value: 'Group2', isCorrectAnswer: false}, {value: 'Group3', isCorrectAnswer: false}, {isCorrectAnswer: true, value: 'Group4'}, {value: 'Group11', isCorrectAnswer: false}, {value: 'Group12', isCorrectAnswer: false}, {isCorrectAnswer: true, value: 'Group13'}, {value: 'Group14', isCorrectAnswer: true}], question: {blocks: [{depth: 0, inlineStyleRanges: [{length: 140, style: 'color-rgb(33,37,41)', offset: 106}, {offset: 106, style: 'bgcolor-rgb(255,255,255)', length: 140}, {offset: 106, style: 'fontsize-16', length: 140}, {style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 106, length: 140}], entityRanges: [], data: {}, key: 'd19n8', type: 'unstyled', text: 'Your organization has a Microsoft 365 tenant and an on-premises Active Directory domain named gitbit.org. Your on-premises domain is synced to Microsoft 365. Your on-premises domain has the following groups that are being synced to Microsoft 365.'}, {type: 'atomic', entityRanges: [{key: 0, offset: 0, length: 1}], key: '5r2qb', depth: 0, inlineStyleRanges: [], text: ' ', data: {}}, {depth: 0, text: 'Your organization has the following cloud-only groups in Azure AD.', key: '9fvb7', type: 'unstyled', entityRanges: [], data: {}, inlineStyleRanges: []}, {text: ' ', entityRanges: [{length: 1, key: 1, offset: 0}], type: 'atomic', inlineStyleRanges: [], key: 'b3k1q', depth: 0, data: {}}, {key: '1dj79', data: {}, depth: 0, text: 'You\'ve been tasked with creating an information protection label named LabelA. You\'ve created the label and now need to publish the label.', entityRanges: [], type: 'unstyled', inlineStyleRanges: []}, {type: 'unstyled', data: {}, key: 'aoue8', depth: 0, text: 'What groups can you publish LabelA to?', inlineStyleRanges: [], entityRanges: []}], entityMap: {0: {mutability: 'MUTABLE', type: 'IMAGE', data: {height: 'auto', alignment: 'left', width: 'auto', alt: 'Group type chart', src: 'https://i.ibb.co/ysp7Thd/group-type-chart2.png'}}, 1: {mutability: 'MUTABLE', type: 'IMAGE', data: {alignment: 'left', height: 'auto', width: 'auto', alt: 'Group type chart', src: 'https://i.ibb.co/VgcSY26/group-type-chart2.png'}}}}, id: 'GlZ4QRRz5'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant and an on-premises Active Directory domain named gitbit.org. <span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Your on-premises domain is synced to Microsoft 365. Your on-premises domain has the following groups that are being synced to Microsoft 365.</span></p>
<div style="text-align:left;"><img src="https://i.ibb.co/ysp7Thd/group-type-chart2.png" alt="Group type chart" style="height: auto;width: auto"/></div>
<p>Your organization has the following cloud-only groups in Azure AD.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/VgcSY26/group-type-chart2.png" alt="Group type chart" style="height: auto;width: auto"/></div>
<p>You've been tasked with creating an information protection label named LabelA. You've created the label and now need to publish the label.</p>
<p>What groups can you publish LabelA to?</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant and an on-premises Active Directory domain named gitbit.org. Your on-premises domain is synced to Microsoft 365. Your on-premises domain has the following groups that are being synced to Microsoft 365. Your organization has the following cloud-only groups in Azure AD. You've been tasked with creating an information protection label named LabelA. You've created the label and now need to publish the label. What groups can you publish LabelA to?`,
      referencesHtml: `<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf" target="_blank">https://www.gitbit.org/course/ms-500/learn/How-to-classify-data-using-labels-in-Microsoft-365-vLweLmxZf</a></p>
<p>The groups must be mail-enabled.</p>
<p>Labels can be published to any specific user or email-enabled group. The group can be a security group, distribution group, or Microsoft 365 group. The group can have assigned or dynamic membership.</p>
<p><a href="http://localhost:8000/course/ms-500/question/edit/?docid=GSRw6_3Xv" target="_blank">https://docs.microsoft.com/en-us/microsoft-365/compliance/sensitivity-labels?view=o365-worldwide</a>&nbsp;</p>
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
