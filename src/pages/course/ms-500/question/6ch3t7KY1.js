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
      question: {answers: [{isCorrectAnswer: true, value: 'On April 6, 2022, Device2 is flagged as compliant'}, {value: 'On April 10, 2022, Device1 is flagged as compliant', isCorrectAnswer: true}, {value: 'On April 16, 2020, Device1 is flagged as compliant', isCorrectAnswer: false}], question: {entityMap: {0: {type: 'IMAGE', data: {width: 'auto', height: 'auto', alt: 'Compliance policy default settings', alignment: 'left', src: 'https://i.ibb.co/7QprCW9/Compliance-policy-default-settings.png'}, mutability: 'MUTABLE'}, 1: {mutability: 'MUTABLE', data: {height: 'auto', src: 'https://i.ibb.co/Y7cX97M/compliance-policy-requirements.png', alignment: 'left', width: 'auto', alt: 'Compliance policy requirement'}, type: 'IMAGE'}, 2: {mutability: 'MUTABLE', type: 'IMAGE', data: {src: 'https://i.ibb.co/X5ck0VC/compliance-policy-devices.png', height: 'auto', width: 'auto', alt: 'Compliance policy devices', alignment: 'left'}}}, blocks: [{inlineStyleRanges: [], data: {}, entityRanges: [], key: '8ag66', text: 'You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization uses Intune and it\'s managed through the Microsoft Endpoint Manager admin center.', type: 'unstyled', depth: 0}, {key: '3cv0k', type: 'unstyled', entityRanges: [], depth: 0, data: {}, inlineStyleRanges: [], text: 'You\'ve already configured the compliance policy settings as below.'}, {type: 'atomic', data: {}, entityRanges: [{length: 1, key: 0, offset: 0}], key: 'fdqe7', inlineStyleRanges: [], depth: 0, text: ' '}, {depth: 0, data: {}, inlineStyleRanges: [], type: 'unstyled', text: 'On April 1, 2022, you create the device compliance policies shown below', key: '2spop', entityRanges: []}, {depth: 0, type: 'atomic', entityRanges: [{offset: 0, key: 1, length: 1}], key: '65slj', inlineStyleRanges: [], text: ' ', data: {}}, {inlineStyleRanges: [], depth: 0, text: 'On April 5, 2022, users enroll the following Windows 10 devices in Intune.', entityRanges: [], data: {}, key: 'b31el', type: 'unstyled'}, {inlineStyleRanges: [], depth: 0, entityRanges: [{offset: 0, key: 2, length: 1}], key: '2annk', text: ' ', data: {}, type: 'atomic'}, {key: '7isct', depth: 0, text: 'Check the boxes below if the statements are true.', entityRanges: [], inlineStyleRanges: [], type: 'unstyled', data: {}}]}, id: '6ch3t7KY1', references: {blocks: [{entityRanges: [], data: {}, type: 'unstyled', text: 'On April 6, 2022, Device2 is flagged as compliant is true', inlineStyleRanges: [{offset: 0, style: 'BOLD', length: 57}], key: 'atuk', depth: 0}, {key: '5utm', text: 'Device2 is in Group2 so Policy2 applies.', data: {}, type: 'unstyled', entityRanges: [], inlineStyleRanges: [], depth: 0}, {inlineStyleRanges: [], key: 'fng6i', data: {}, depth: 0, text: 'Device2 is not compliant with Policy2, however, the device won\'t be marked as non-compliant until 10 days after the device was enrolled.', type: 'unstyled', entityRanges: []}, {inlineStyleRanges: [{length: 58, style: 'BOLD', offset: 0}], entityRanges: [], key: 'gcor', type: 'unstyled', depth: 0, text: 'On April 10, 2022, Device1 is flagged as compliant is true', data: {}}, {key: 'eku7n', text: 'Device1 is in Group1 and Group2 so both Policy1 and Policy2 apply.', data: {}, depth: 0, inlineStyleRanges: [], entityRanges: [], type: 'unstyled'}, {depth: 0, text: 'Device1 is compliant with Policy1 but non-compliant with Policy2. However, the device won\'t be marked as non-compliant until 10 days after the device was enrolled.', data: {}, key: 'ik9r', inlineStyleRanges: [], type: 'unstyled', entityRanges: []}, {entityRanges: [], depth: 0, inlineStyleRanges: [{style: 'BOLD', length: 62, offset: 0}], data: {}, text: 'On April 16, 2020, Device1 is flagged as compliant is not true', key: '8ujou', type: 'unstyled'}, {entityRanges: [], inlineStyleRanges: [], key: 'cs208', data: {}, depth: 0, text: 'Device1 is in Group1 and Group2 so both Policy1 and Policy2 apply.', type: 'unstyled'}, {entityRanges: [], key: '1d05a', data: {}, inlineStyleRanges: [], text: 'Device1 is compliant with Policy1 but non-compliant with Policy2.', type: 'unstyled', depth: 0}, {depth: 0, type: 'unstyled', inlineStyleRanges: [], text: 'March 16 is more than 10 days after the device was enrolled so it will now be marked as non-compliant by Policy2.', data: {}, entityRanges: [], key: 'ftmse'}, {key: 'acqoh', type: 'unstyled', depth: 0, text: 'https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN', entityRanges: [{length: 86, key: 0, offset: 0}], data: {}, inlineStyleRanges: []}], entityMap: {0: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN', targetOption: '_blank'}, mutability: 'MUTABLE', type: 'LINK'}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization uses Intune and it's managed through the Microsoft Endpoint Manager admin center.</p>
<p>You've already configured the compliance policy settings as below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/7QprCW9/Compliance-policy-default-settings.png" alt="Compliance policy default settings" style="height: auto;width: auto"/></div>
<p>On April 1, 2022, you create the device compliance policies shown below</p>
<div style="text-align:left;"><img src="https://i.ibb.co/Y7cX97M/compliance-policy-requirements.png" alt="Compliance policy requirement" style="height: auto;width: auto"/></div>
<p>On April 5, 2022, users enroll the following Windows 10 devices in Intune.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/X5ck0VC/compliance-policy-devices.png" alt="Compliance policy devices" style="height: auto;width: auto"/></div>
<p>Check the boxes below if the statements are true.</p>
`,
      questionText: `You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. Your organization uses Intune and it's managed through the Microsoft Endpoint Manager admin center. You've already configured the compliance policy settings as below. On April 1, 2022, you create the device compliance policies shown below On April 5, 2022, users enroll the following Windows 10 devices in Intune. Check the boxes below if the statements are true.`,
      referencesHtml: `<p><strong>On April 6, 2022, Device2 is flagged as compliant is true</strong></p>
<p>Device2 is in Group2 so Policy2 applies.</p>
<p>Device2 is not compliant with Policy2, however, the device won't be marked as non-compliant until 10 days after the device was enrolled.</p>
<p><strong>On April 10, 2022, Device1 is flagged as compliant is true</strong></p>
<p>Device1 is in Group1 and Group2 so both Policy1 and Policy2 apply.</p>
<p>Device1 is compliant with Policy1 but non-compliant with Policy2. However, the device won't be marked as non-compliant until 10 days after the device was enrolled.</p>
<p><strong>On April 16, 2020, Device1 is flagged as compliant is not true</strong></p>
<p>Device1 is in Group1 and Group2 so both Policy1 and Policy2 apply.</p>
<p>Device1 is compliant with Policy1 but non-compliant with Policy2.</p>
<p>March 16 is more than 10 days after the device was enrolled so it will now be marked as non-compliant by Policy2.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN" target="_blank">https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN</a></p>
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
