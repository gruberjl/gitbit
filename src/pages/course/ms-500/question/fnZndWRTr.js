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
      question: {references: {entityMap: {0: {type: 'LINK', mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f'}}, 1: {mutability: 'MUTABLE', type: 'LINK', data: {url: 'https://docs.microsoft.com/en-us/office365/securitycompliance/assign-ediscovery-permissions', targetOption: '_blank'}}}, blocks: [{depth: 0, text: 'The user will need the eDiscovery Manager role assigned and then be given the permissions to the case.', key: '20j6g', type: 'unstyled', entityRanges: [], inlineStyleRanges: [], data: {}}, {entityRanges: [], depth: 0, key: '6f8bi', data: {}, text: '1. Go to Microsoft Purview admin center > Permissions > Microsoft Purview solutions roles  > eDiscovery Manager. Click Edit next to eDiscovery Manager.', inlineStyleRanges: [], type: 'unstyled'}, {depth: 0, key: '7eq0k', type: 'unstyled', entityRanges: [], data: {}, inlineStyleRanges: [], text: '2. Click Choose eDisvoery Manager > Add. Click the member you want to grant permissions to. Click Add. Click Done > Save.'}, {inlineStyleRanges: [], depth: 0, entityRanges: [{length: 114, offset: 0, key: 0}], text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f', type: 'unstyled', key: 'ch81d', data: {}}, {type: 'unstyled', inlineStyleRanges: [], text: 'https://docs.microsoft.com/en-us/office365/securitycompliance/assign-ediscovery-permissions', key: '3uetn', entityRanges: [{length: 91, key: 1, offset: 0}], data: {}, depth: 0}]}, answers: [{value: 'From the Azure Active Directory admin center, assign a role group to Admin1.', isCorrectAnswer: false}, {value: 'From the Microsoft 365 admin center, assign a role to Admin1.', isCorrectAnswer: false}, {isCorrectAnswer: true, value: 'From the Microsoft Purview admin center, open the case and go to Settings > Access & permissions'}], id: 'fnZndWRTr', question: {blocks: [{key: '46kh2', depth: 0, data: {}, entityRanges: [], text: 'You have a Microsoft 365 subscription.', type: 'unstyled', inlineStyleRanges: []}, {key: '6qs2l', inlineStyleRanges: [], depth: 0, text: 'The Global administrator role is assigned to your user account. You have a user named Admin1.', data: {}, entityRanges: [], type: 'unstyled'}, {depth: 0, inlineStyleRanges: [], data: {}, type: 'unstyled', entityRanges: [], key: '653k', text: 'You create an eDiscovery case named Case1.'}, {key: '3avhu', data: {}, type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], text: 'You need to ensure that Admin1 can view the results of Case1.'}, {data: {}, inlineStyleRanges: [], entityRanges: [], key: 'chmgb', text: 'What should you do first?', type: 'unstyled', depth: 0}], entityMap: {}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You have a Microsoft 365 subscription.</p>
<p>The Global administrator role is assigned to your user account. You have a user named Admin1.</p>
<p>You create an eDiscovery case named Case1.</p>
<p>You need to ensure that Admin1 can view the results of Case1.</p>
<p>What should you do first?</p>
`,
      questionText: `You have a Microsoft 365 subscription. The Global administrator role is assigned to your user account. You have a user named Admin1. You create an eDiscovery case named Case1. You need to ensure that Admin1 can view the results of Case1. What should you do first?`,
      referencesHtml: `<p>The user will need the eDiscovery Manager role assigned and then be given the permissions to the case.</p>
<p>1. Go to Microsoft Purview admin center &gt; Permissions &gt; Microsoft Purview solutions roles  &gt; eDiscovery Manager. Click Edit next to eDiscovery Manager.</p>
<p>2. Click Choose eDisvoery Manager &gt; Add. Click the member you want to grant permissions to. Click Add. Click Done &gt; Save.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f" target="_blank">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-data-retention-to-conform-to-compliance-NsF7No40f</a></p>
<p><a href="https://docs.microsoft.com/en-us/office365/securitycompliance/assign-ediscovery-permissions" target="_blank">https://docs.microsoft.com/en-us/office365/securitycompliance/assign-ediscovery-permissions</a></p>
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
