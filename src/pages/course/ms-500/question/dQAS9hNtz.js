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
      question: {id: 'dQAS9hNtz', answers: [{isCorrectAnswer: false, value: 'When a member of the Intune Endpoint Protection group opens a site that\'s flagged as dangerous, the webpage will open without warning'}, {value: 'When a member of the Intune Endpoint Protection group opens a site that\'s flagged as dangerous, the webpage will be blocked from opening', isCorrectAnswer: false}, {value: 'When a member of the Intune Endpoint Protection group opens a site that\'s flagged as dangerous, the user will receive a security warning', isCorrectAnswer: true}, {value: 'When a member of the group opens a site that\'s flagged as dangerous, the webpage will open without warning', isCorrectAnswer: true}, {value: 'When a member of the Intune Help Desk Operators group opens a site that\'s flagged as dangerous, the webpage will be blocked from opening', isCorrectAnswer: false}, {isCorrectAnswer: false, value: 'When a member of the Intune Help Desk Operators group opens a site that\'s flagged as dangerous, the user will receive a security warning'}], references: {blocks: [{data: {}, inlineStyleRanges: [], type: 'unstyled', text: 'The Intune EndPoint Protection group is included in the policy so SmartScreen will be enabled and display a warning.', key: 'a5td0', entityRanges: [], depth: 0}, {inlineStyleRanges: [], type: 'unstyled', entityRanges: [], depth: 0, text: 'The Intune Help Desk Operators group is excluded from the policy so SmartScreen will be disabled so no warning will be displayed.', data: {}, key: 'eqvfi'}, {inlineStyleRanges: [], entityRanges: [{length: 87, offset: 0, key: 0}], depth: 0, type: 'unstyled', data: {}, key: '1p6g1', text: 'https://www.gitbit.org/course/ms-500/learn/How-to-manage-devices-using-Intune-_LL9VqGZO'}], entityMap: {0: {type: 'LINK', mutability: 'MUTABLE', data: {url: 'https://www.gitbit.org/course/ms-500/learn/How-to-manage-devices-using-Intune-_LL9VqGZO', targetOption: '_blank'}}}}, question: {blocks: [{entityRanges: [], depth: 0, key: 'asi2d', data: {}, inlineStyleRanges: [], type: 'unstyled', text: 'You have a Microsoft 365 tenant with Defender for Endpoint. Intune is set up and installed on your Windows 10 devices.'}, {text: 'You open the Microsoft Endpoint Manager admin center and create an attack surface reduction policy. The policy is shown in the image below.', key: '22bt7', entityRanges: [], data: {}, depth: 0, inlineStyleRanges: [], type: 'unstyled'}, {depth: 0, type: 'atomic', text: ' ', entityRanges: [{length: 1, key: 0, offset: 0}], key: 'dn69q', inlineStyleRanges: [], data: {}}, {depth: 0, key: '8i6ka', inlineStyleRanges: [], text: 'Check the box next to each statement that\'s true.', type: 'unstyled', entityRanges: [], data: {}}], entityMap: {0: {type: 'IMAGE', data: {width: 'auto', src: 'https://i.ibb.co/vqt40MF/endpoint-security.png', height: 'auto', alt: 'Endpoint security settings', alignment: 'left'}, mutability: 'MUTABLE'}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You have a Microsoft 365 tenant with Defender for Endpoint. Intune is set up and installed on your Windows 10 devices.</p>
<p>You open the Microsoft Endpoint Manager admin center and create an attack surface reduction policy. The policy is shown in the image below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/vqt40MF/endpoint-security.png" alt="Endpoint security settings" style="height: auto;width: auto"/></div>
<p>Check the box next to each statement that's true.</p>
`,
      questionText: `You have a Microsoft 365 tenant with Defender for Endpoint. Intune is set up and installed on your Windows 10 devices. You open the Microsoft Endpoint Manager admin center and create an attack surface reduction policy. The policy is shown in the image below. Check the box next to each statement that's true.`,
      referencesHtml: `<p>The Intune EndPoint Protection group is included in the policy so SmartScreen will be enabled and display a warning.</p>
<p>The Intune Help Desk Operators group is excluded from the policy so SmartScreen will be disabled so no warning will be displayed.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/How-to-manage-devices-using-Intune-_LL9VqGZO" target="_blank">https://www.gitbit.org/course/ms-500/learn/How-to-manage-devices-using-Intune-_LL9VqGZO</a></p>
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
