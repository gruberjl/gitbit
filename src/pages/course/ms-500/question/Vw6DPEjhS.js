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
      question: {question: {blocks: [{depth: 0, inlineStyleRanges: [], data: {}, type: 'unstyled', entityRanges: [], text: 'The devices enrolled in Intune are configured as shown in the following table:', key: '6t3pm'}, {data: {}, text: ' ', entityRanges: [{key: 0, length: 1, offset: 0}], key: '9tjo3', type: 'atomic', depth: 0, inlineStyleRanges: []}, {key: 'c0grv', depth: 0, type: 'unstyled', text: 'The device compliance policies in Intune are configured as shown in the following table:', data: {}, inlineStyleRanges: [], entityRanges: []}, {inlineStyleRanges: [], entityRanges: [{key: 1, length: 1, offset: 0}], data: {}, depth: 0, type: 'atomic', text: ' ', key: '99it7'}, {depth: 0, entityRanges: [], data: {}, type: 'unstyled', inlineStyleRanges: [], key: '56p0h', text: 'The device compliance policies have the assignments shown in the following table:'}, {entityRanges: [{key: 2, offset: 0, length: 1}], key: '62f10', inlineStyleRanges: [], text: ' ', data: {}, depth: 0, type: 'atomic'}, {entityRanges: [], key: 'a7l90', data: {}, inlineStyleRanges: [], text: 'The Mark devices with no compliance policy are assigned as Compliant.', depth: 0, type: 'unstyled'}, {depth: 0, type: 'unstyled', data: {}, inlineStyleRanges: [], text: 'You are evaluating which devices are compliant with Intune.', entityRanges: [], key: '16cgt'}, {data: {}, text: 'Check the box if the device is compliant', entityRanges: [], depth: 0, type: 'unstyled', key: 'evag6', inlineStyleRanges: []}], entityMap: {0: {type: 'IMAGE', mutability: 'MUTABLE', data: {alignment: 'left', width: 'auto', height: 'auto', alt: 'Devices Chart', src: 'https://i.ibb.co/rt25GT1/Devices.png'}}, 1: {type: 'IMAGE', data: {width: 'auto', alignment: 'left', src: 'https://i.ibb.co/YZzVcsL/Device-policies.png', height: 'auto', alt: 'Device policies chart'}, mutability: 'MUTABLE'}, 2: {data: {height: 'auto', width: 'auto', alt: 'Device policy group chart', alignment: 'left', src: 'https://i.ibb.co/hXnkN3N/Device-policy-goups.png'}, mutability: 'MUTABLE', type: 'IMAGE'}}}, answers: [{value: 'Device1', isCorrectAnswer: false}, {value: 'Device2', isCorrectAnswer: true}, {isCorrectAnswer: true, value: 'Device6'}], references: {blocks: [{text: 'Device1 is an Android device that is not encrypted that\'s a member of GroupA and GroupC. DevicePolicy3 applies to Android devices that are members of GroupA so DevicePolicy3 is applied and requires the device to be encrypted. Since Device1 is not encrypted the device is not compliant.', entityRanges: [], type: 'unstyled', key: '77i1q', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', length: 89, offset: 0}, {style: 'bgcolor-rgb(255,255,255)', offset: 0, length: 89}, {style: 'fontsize-16', offset: 0, length: 89}, {offset: 0, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', length: 89}], data: {}, depth: 0}, {depth: 0, type: 'unstyled', data: {}, entityRanges: [], inlineStyleRanges: [], text: 'Device2 is a Windows 10 computer that\'s encrypted and a member of GroupB and GroupC. DevicePolicy2 has an exclusion of GroupC so Device2 doesn\'t have a compliance policy. As stated all devices that don\'t have a compliance policy are marked compliant so Device2 is marked compliant.', key: 'bi4mp'}, {inlineStyleRanges: [], key: 'aisi1', depth: 0, data: {}, type: 'unstyled', text: 'Device6 is a Windows 10 computer that is not a member of any group therefore it has no compliance policy applied and is therefore marked as compliant.', entityRanges: []}, {key: '4tanb', depth: 0, type: 'unstyled', entityRanges: [{length: 86, offset: 0, key: 0}], data: {}, inlineStyleRanges: [], text: 'https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN '}], entityMap: {0: {type: 'LINK', data: {url: 'https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN', targetOption: '_blank'}, mutability: 'MUTABLE'}}}, id: 'Vw6DPEjhS'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>The devices enrolled in Intune are configured as shown in the following table:</p>
<div style="text-align:left;"><img src="https://i.ibb.co/rt25GT1/Devices.png" alt="Devices Chart" style="height: auto;width: auto"/></div>
<p>The device compliance policies in Intune are configured as shown in the following table:</p>
<div style="text-align:left;"><img src="https://i.ibb.co/YZzVcsL/Device-policies.png" alt="Device policies chart" style="height: auto;width: auto"/></div>
<p>The device compliance policies have the assignments shown in the following table:</p>
<div style="text-align:left;"><img src="https://i.ibb.co/hXnkN3N/Device-policy-goups.png" alt="Device policy group chart" style="height: auto;width: auto"/></div>
<p>The Mark devices with no compliance policy are assigned as Compliant.</p>
<p>You are evaluating which devices are compliant with Intune.</p>
<p>Check the box if the device is compliant</p>
`,
      questionText: `The devices enrolled in Intune are configured as shown in the following table: The device compliance policies in Intune are configured as shown in the following table: The device compliance policies have the assignments shown in the following table: The Mark devices with no compliance policy are assigned as Compliant. You are evaluating which devices are compliant with Intune. Check the box if the device is compliant`,
      referencesHtml: `<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">Device1 is an Android device that is not encrypted that's a member of GroupA and GroupC. </span>DevicePolicy3 applies to Android devices that are members of GroupA so DevicePolicy3 is applied and requires the device to be encrypted. Since Device1 is not encrypted the device is not compliant.</p>
<p>Device2 is a Windows 10 computer that's encrypted and a member of GroupB and GroupC. DevicePolicy2 has an exclusion of GroupC so Device2 doesn't have a compliance policy. As stated all devices that don't have a compliance policy are marked compliant so Device2 is marked compliant.</p>
<p>Device6 is a Windows 10 computer that is not a member of any group therefore it has no compliance policy applied and is therefore marked as compliant.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN" target="_blank">https://www.gitbit.org/course/ms-500/learn/Understanding-compliance-policies-qDRA4jjoN</a>&nbsp;</p>
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
