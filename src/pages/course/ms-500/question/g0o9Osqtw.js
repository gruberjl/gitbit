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
      question: {references: {blocks: [{depth: 0, text: 'UserA has alerts investigation so AserA can run anti-virus scans.', entityRanges: [], inlineStyleRanges: [], key: '9f4m1', data: {}, type: 'unstyled'}, {entityRanges: [], text: 'UserB does not have the alerts investigation permission so UserB cannot collect an investigation package', data: {}, inlineStyleRanges: [], key: 'cpdh6', type: 'unstyled', depth: 0}, {data: {}, text: 'UserC has Active remediation actions so User3 can isolate Device1', key: 'e6oda', inlineStyleRanges: [], depth: 0, type: 'unstyled', entityRanges: []}, {inlineStyleRanges: [], entityRanges: [{key: 0, length: 129, offset: 0}], data: {}, key: 'deele', depth: 0, text: 'https://www.gitbit.org/course/ms-500/learn/Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T', type: 'unstyled'}], entityMap: {0: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T', targetOption: '_blank'}, type: 'LINK', mutability: 'MUTABLE'}}}, answers: [{value: 'UserA can start an antivirus scan on Device1.', isCorrectAnswer: true}, {isCorrectAnswer: false, value: 'UserB can collect an investigation package from Device2.'}, {isCorrectAnswer: true, value: 'UserC can isolate Device1.'}], id: 'g0o9Osqtw', question: {blocks: [{key: 'dljoj', type: 'unstyled', entityRanges: [], inlineStyleRanges: [], text: 'Your organization has a Microsoft 365 tenant with the following users.', depth: 0, data: {}}, {type: 'unordered-list-item', depth: 0, inlineStyleRanges: [], text: 'UserA is a member of Group1', entityRanges: [], key: 'fcdhd', data: {}}, {data: {}, inlineStyleRanges: [], entityRanges: [], depth: 0, text: 'UserB is a member of Group2', type: 'unordered-list-item', key: '8sgha'}, {inlineStyleRanges: [], key: 'qhd1', entityRanges: [], depth: 0, text: 'UserC is a member of Group3', data: {}, type: 'unordered-list-item'}, {entityRanges: [], data: {}, type: 'unstyled', key: '960sq', inlineStyleRanges: [], text: 'Your organization implements Microsoft Defender for Endpoints. Microsoft Defender for Endpoints is configured with the following roles.', depth: 0}, {inlineStyleRanges: [], data: {}, depth: 0, text: ' ', type: 'atomic', entityRanges: [{key: 0, length: 1, offset: 0}], key: '476d9'}, {entityRanges: [], data: {}, inlineStyleRanges: [], key: '1lkcp', depth: 0, text: 'Microsoft Defender for Endpoints contains the following machine groups.', type: 'unstyled'}, {data: {}, inlineStyleRanges: [], text: ' ', depth: 0, type: 'atomic', entityRanges: [{key: 1, length: 1, offset: 0}], key: '3hlpj'}, {key: 'f5ss2', type: 'unstyled', entityRanges: [], data: {}, depth: 0, inlineStyleRanges: [], text: 'check the box next to each true statement.'}], entityMap: {0: {data: {src: 'https://i.ibb.co/Mkq6rTY/role-permissions.png', width: 'auto', alignment: 'left', alt: 'Role Permissions chart', height: 'auto'}, type: 'IMAGE', mutability: 'MUTABLE'}, 1: {data: {alignment: 'left', height: 'auto', width: 'auto', alt: 'Machine group access', src: 'https://i.ibb.co/5h01sfF/machine-group-access.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 2: {mutability: 'MUTABLE', type: 'IMAGE', data: {alt: 'Machine group access', height: 'auto', src: 'https://i.ibb.co/5h01sfF/machine-group-access.png', alignment: 'left', width: 'auto'}}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant with the following users.</p>
<ul>
<li>UserA is a member of Group1</li>
<li>UserB is a member of Group2</li>
<li>UserC is a member of Group3</li>
</ul>
<p>Your organization implements Microsoft Defender for Endpoints. Microsoft Defender for Endpoints is configured with the following roles.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/Mkq6rTY/role-permissions.png" alt="Role Permissions chart" style="height: auto;width: auto"/></div>
<p>Microsoft Defender for Endpoints contains the following machine groups.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/5h01sfF/machine-group-access.png" alt="Machine group access" style="height: auto;width: auto"/></div>
<p>check the box next to each true statement.</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant with the following users. UserA is a member of Group1 UserB is a member of Group2 UserC is a member of Group3 Your organization implements Microsoft Defender for Endpoints. Microsoft Defender for Endpoints is configured with the following roles. Microsoft Defender for Endpoints contains the following machine groups. check the box next to each true statement.`,
      referencesHtml: `<p>UserA has alerts investigation so AserA can run anti-virus scans.</p>
<p>UserB does not have the alerts investigation permission so UserB cannot collect an investigation package</p>
<p>UserC has Active remediation actions so User3 can isolate Device1</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T" target="_blank">https://www.gitbit.org/course/ms-500/learn/Protecting-Windows-10-and-other-devices-with-Microsoft-Defender-for-Endpoint-z0qPG6v4T</a></p>
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
