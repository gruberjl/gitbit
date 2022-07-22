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
      question: {references: {blocks: [{depth: 0, inlineStyleRanges: [], data: {}, text: 'Since PolicyC applies to iOS and DeviceA is a Windows 10 device PolicyC does not apply.', entityRanges: [], type: 'unstyled', key: '4pcat'}, {entityRanges: [], inlineStyleRanges: [], data: {}, type: 'unstyled', depth: 0, text: 'Since UserB is a member of GroupB and PolicyB does apply to Windows 10 devices, PolicyB applies to UserB on DeviceA.', key: '6gnh7'}, {inlineStyleRanges: [], key: 'dkqsg', depth: 0, text: 'UserB isn\'t a member of GroupB and since you need to have users as part of the protected group PolicyD does not apply to DeviceB / UserB.', entityRanges: [], type: 'unstyled', data: {}}, {text: 'https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx', depth: 0, type: 'unstyled', data: {}, key: '7eipd', entityRanges: [{length: 98, key: 0, offset: 0}], inlineStyleRanges: []}, {entityRanges: [{offset: 0, key: 1, length: 66}], type: 'unstyled', depth: 0, data: {}, inlineStyleRanges: [], text: 'https://docs.microsoft.com/en-us/intune/apps/app-protection-policy', key: 'd8arv'}], entityMap: {0: {type: 'LINK', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx', targetOption: '_blank'}, mutability: 'MUTABLE'}, 1: {type: 'LINK', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/intune/apps/app-protection-policy'}, mutability: 'MUTABLE'}}}, answers: [{value: 'If UserA uses DeviceA, PolicyC applies', isCorrectAnswer: false}, {isCorrectAnswer: true, value: 'When UserB uses DeviceA, PolicyB applies'}, {value: 'When UserB uses DeviceB, PolicyD applies', isCorrectAnswer: false}], question: {entityMap: {0: {data: {alignment: 'left', height: 'auto', src: 'https://i.ibb.co/Lk75D86/user-and-group-membership.png', alt: 'Chart showing 2 users with their group membership', width: 'auto'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {mutability: 'MUTABLE', type: 'IMAGE', data: {alignment: 'left', width: 'auto', src: 'https://i.ibb.co/cTP8vKV/device-chart.png', alt: 'Chart showing devices, platform, and membership', height: 'auto'}}, 2: {type: 'IMAGE', data: {alt: 'Chart showing the app protection policies and their assignments', src: 'https://i.ibb.co/GnwXkhx/App-Protection-Policies-Assignment.png', width: 'auto', height: 'auto', alignment: 'left'}, mutability: 'MUTABLE'}, 3: {type: 'IMAGE', data: {alignment: 'left', height: 'auto', width: 'auto', src: 'https://i.ibb.co/JC9cYZS/policy-chart.png', alt: 'Policy Chart'}, mutability: 'MUTABLE'}}, blocks: [{depth: 0, text: 'Your organization has a Microsoft 365 tenant named GitBit.org that contains the following users.', entityRanges: [], type: 'unstyled', key: '1v5dd', data: {}, inlineStyleRanges: []}, {inlineStyleRanges: [], text: ' ', data: {}, type: 'atomic', entityRanges: [{key: 0, length: 1, offset: 0}], key: 'c346s', depth: 0}, {data: {}, text: 'Your organization has registered the following devices in Azure AD.', type: 'unstyled', key: '5k82i', inlineStyleRanges: [], depth: 0, entityRanges: []}, {text: ' ', key: '970fs', data: {}, type: 'atomic', depth: 0, inlineStyleRanges: [], entityRanges: [{offset: 0, key: 1, length: 1}]}, {data: {}, depth: 0, inlineStyleRanges: [], key: '8vtdt', entityRanges: [], text: 'You create the app protection policies in the Microsoft Endpoint Manager admin center as shown below.', type: 'unstyled'}, {entityRanges: [{offset: 0, key: 2, length: 1}], type: 'atomic', text: ' ', depth: 0, key: 'e5k92', data: {}, inlineStyleRanges: []}, {entityRanges: [], key: '8cifv', depth: 0, text: 'Check the box next to each true statement below.', type: 'unstyled', data: {}, inlineStyleRanges: []}]}, id: 'IvqICJEKL'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant named GitBit.org that contains the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/Lk75D86/user-and-group-membership.png" alt="Chart showing 2 users with their group membership" style="height: auto;width: auto"/></div>
<p>Your organization has registered the following devices in Azure AD.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/cTP8vKV/device-chart.png" alt="Chart showing devices, platform, and membership" style="height: auto;width: auto"/></div>
<p>You create the app protection policies in the Microsoft Endpoint Manager admin center as shown below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/GnwXkhx/App-Protection-Policies-Assignment.png" alt="Chart showing the app protection policies and their assignments" style="height: auto;width: auto"/></div>
<p>Check the box next to each true statement below.</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant named GitBit.org that contains the following users. Your organization has registered the following devices in Azure AD. You create the app protection policies in the Microsoft Endpoint Manager admin center as shown below. Check the box next to each true statement below.`,
      referencesHtml: `<p>Since PolicyC applies to iOS and DeviceA is a Windows 10 device PolicyC does not apply.</p>
<p>Since UserB is a member of GroupB and PolicyB does apply to Windows 10 devices, PolicyB applies to UserB on DeviceA.</p>
<p>UserB isn't a member of GroupB and since you need to have users as part of the protected group PolicyD does not apply to DeviceB / UserB.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx" target="_blank">https://www.gitbit.org/course/ms-500/learn/Restricting-and-managing-apps-on-user-devices-62t_7oiZx</a></p>
<p><a href="https://docs.microsoft.com/en-us/intune/apps/app-protection-policy" target="_blank">https://docs.microsoft.com/en-us/intune/apps/app-protection-policy</a></p>
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
