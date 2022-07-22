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
      question: {answers: [{value: 'From Device2, User2 can copy data from AppA to AppC', isCorrectAnswer: true}, {isCorrectAnswer: true, value: 'From Device2, User1 can copy data from AppA to AppB'}, {isCorrectAnswer: false, value: 'From Device2, User1 can copy data from AppA to AppC'}], question: {blocks: [{inlineStyleRanges: [], entityRanges: [], key: '1jrtu', text: 'Your organization has a Microsoft 365 tenant with a default domain of gitbit.org', type: 'unstyled', depth: 0, data: {}}, {type: 'unstyled', entityRanges: [], key: '2p5f2', inlineStyleRanges: [], depth: 0, text: 'Your organization\'s Azure AD contains the following users.', data: {}}, {entityRanges: [{offset: 0, key: 0, length: 1}], depth: 0, type: 'atomic', key: '5mpad', data: {}, inlineStyleRanges: [], text: ' '}, {type: 'unstyled', key: 'abq0p', text: 'Your organization\'s Microsoft Endpoint Manager admin center shows the following devices enrolled.', depth: 0, entityRanges: [], data: {}, inlineStyleRanges: []}, {inlineStyleRanges: [], type: 'atomic', data: {}, text: ' ', depth: 0, entityRanges: [{key: 1, offset: 0, length: 1}], key: '55lm4'}, {key: 'doaun', type: 'unstyled', data: {}, depth: 0, entityRanges: [], text: 'Both devices have three apps named AppA, AppB, and AppC installed.', inlineStyleRanges: []}, {inlineStyleRanges: [], data: {}, type: 'unstyled', key: '4p6gt', depth: 0, text: 'You create an app protection policy named ProtectionPolicyA that has the following settings:', entityRanges: []}, {text: 'Protected apps: AppA', type: 'unordered-list-item', depth: 0, entityRanges: [], inlineStyleRanges: [], key: '5betb', data: {}}, {inlineStyleRanges: [], entityRanges: [], text: 'Exempt apps: AppB', type: 'unordered-list-item', key: 'ai8uj', depth: 0, data: {}}, {depth: 0, entityRanges: [], inlineStyleRanges: [], type: 'unordered-list-item', key: '2mjj5', data: {}, text: 'Windows Information Protection mode: Block'}, {key: 'bnbu5', text: 'You apply ProtectionPolicyA to Group1 and Group3. You exclude Group2 from ProtectionPolicyA.', data: {}, type: 'unstyled', entityRanges: [], depth: 0, inlineStyleRanges: []}, {key: '1u2nf', inlineStyleRanges: [], text: 'Check the box next to each true statement', type: 'unstyled', entityRanges: [], depth: 0, data: {}}], entityMap: {0: {type: 'IMAGE', data: {height: 'auto', alignment: 'left', alt: 'User Group membership chart', width: 'auto', src: 'https://i.ibb.co/KxwDstM/user-group.png'}, mutability: 'MUTABLE'}, 1: {mutability: 'MUTABLE', type: 'IMAGE', data: {height: 'auto', alt: 'Device chart', width: 'auto', alignment: 'left', src: 'https://i.ibb.co/c6d1kCM/device-chart.png'}}}}, references: {blocks: [{key: 'copgf', depth: 0, data: {}, type: 'unstyled', entityRanges: [], text: 'Since User2 is a member of Group2 and Group2 is excluded from the policy User2 can copy data from AppA to AppC.', inlineStyleRanges: []}, {text: 'Since AppB is exempt from the policy User1 can copy data from AppA to AppB.', inlineStyleRanges: [], key: '4l7r0', data: {}, depth: 0, entityRanges: [], type: 'unstyled'}, {type: 'unstyled', inlineStyleRanges: [], key: 'dhmt3', entityRanges: [], depth: 0, text: 'Since User1 is a member of Group1 and Group1 is included in the app protection policy and User1 is not a member of Group2. And since AppA is protected by the app protection policy and AppC is not exempt User1 cannot copy data from AppA to AppC.', data: {}}, {depth: 0, text: 'https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx', inlineStyleRanges: [], key: 'c7d6c', data: {}, type: 'unstyled', entityRanges: [{key: 0, offset: 0, length: 98}]}], entityMap: {0: {mutability: 'MUTABLE', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx', targetOption: '_blank'}, type: 'LINK'}}}, id: 'kFwtQkqEy'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant with a default domain of gitbit.org</p>
<p>Your organization's Azure AD contains the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/KxwDstM/user-group.png" alt="User Group membership chart" style="height: auto;width: auto"/></div>
<p>Your organization's Microsoft Endpoint Manager admin center shows the following devices enrolled.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/c6d1kCM/device-chart.png" alt="Device chart" style="height: auto;width: auto"/></div>
<p>Both devices have three apps named AppA, AppB, and AppC installed.</p>
<p>You create an app protection policy named ProtectionPolicyA that has the following settings:</p>
<ul>
<li>Protected apps: AppA</li>
<li>Exempt apps: AppB</li>
<li>Windows Information Protection mode: Block</li>
</ul>
<p>You apply ProtectionPolicyA to Group1 and Group3. You exclude Group2 from ProtectionPolicyA.</p>
<p>Check the box next to each true statement</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant with a default domain of gitbit.org Your organization's Azure AD contains the following users. Your organization's Microsoft Endpoint Manager admin center shows the following devices enrolled. Both devices have three apps named AppA, AppB, and AppC installed. You create an app protection policy named ProtectionPolicyA that has the following settings: Protected apps: AppA Exempt apps: AppB Windows Information Protection mode: Block You apply ProtectionPolicyA to Group1 and Group3. You exclude Group2 from ProtectionPolicyA. Check the box next to each true statement`,
      referencesHtml: `<p>Since User2 is a member of Group2 and Group2 is excluded from the policy User2 can copy data from AppA to AppC.</p>
<p>Since AppB is exempt from the policy User1 can copy data from AppA to AppB.</p>
<p>Since User1 is a member of Group1 and Group1 is included in the app protection policy and User1 is not a member of Group2. And since AppA is protected by the app protection policy and AppC is not exempt User1 cannot copy data from AppA to AppC.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx" target="_blank">https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx</a></p>
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
