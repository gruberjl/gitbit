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
      question: {question: {entityMap: {0: {data: {width: 'auto', alignment: 'left', alt: 'servers chart', height: 'auto', src: 'https://i.ibb.co/0y2T0zL/servers.png'}, mutability: 'MUTABLE', type: 'IMAGE'}}, blocks: [{text: 'Your network contains an on-premises Active Directory domain. The domain contains the servers shown in the following table.', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], key: '8j6p0', data: {}}, {key: 'blh46', entityRanges: [{length: 1, offset: 0, key: 0}], depth: 0, inlineStyleRanges: [], text: ' ', type: 'atomic', data: {}}, {entityRanges: [], data: {}, depth: 0, key: 'b4tpj', text: 'You plan to implement Defender for Identity for the domain.', inlineStyleRanges: [], type: 'unstyled'}, {depth: 0, text: 'You install a Defender for Identity standalone sensor on Server1.', key: '9a7i', type: 'unstyled', data: {}, entityRanges: [], inlineStyleRanges: []}, {key: 'aqdev', data: {}, type: 'unstyled', entityRanges: [], inlineStyleRanges: [], depth: 0, text: 'You need to monitor the domain by using Defender for Identity.'}, {inlineStyleRanges: [], data: {}, entityRanges: [], type: 'unstyled', text: 'What should you do?', key: '3c5k5', depth: 0}]}, answers: [{value: 'Configure port mirroring for Server1.', isCorrectAnswer: false}, {isCorrectAnswer: false, value: 'Install the Microsoft Monitoring Agent on DC1.'}, {value: 'Install the Microsoft Monitoring Agent on Server1.', isCorrectAnswer: false}, {value: 'Configure port mirroring for DC1.', isCorrectAnswer: true}], id: 'NHtE6T4cH', references: {blocks: [{data: {}, inlineStyleRanges: [], entityRanges: [], depth: 0, text: 'How to setup a DC to communicate through a member server:', key: 'e3h3', type: 'unstyled'}, {inlineStyleRanges: [], entityRanges: [], depth: 0, text: '1. Install the standalone sensor on Server2', key: 'q319', type: 'unstyled', data: {}}, {inlineStyleRanges: [], depth: 0, data: {}, type: 'unstyled', entityRanges: [], key: '2n2ev', text: '2. Setup event subscription on Server2'}, {type: 'unstyled', data: {}, inlineStyleRanges: [], depth: 0, entityRanges: [], text: '3. Setup port mirroring on Server1', key: '8v1pn'}, {entityRanges: [{key: 0, length: 90, offset: 0}], type: 'unstyled', depth: 0, key: '686d4', data: {}, inlineStyleRanges: [], text: 'https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-port-mirroring'}], entityMap: {0: {mutability: 'MUTABLE', data: {url: 'https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-port-mirroring', targetOption: '_blank'}, type: 'LINK'}}}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your network contains an on-premises Active Directory domain. The domain contains the servers shown in the following table.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/0y2T0zL/servers.png" alt="servers chart" style="height: auto;width: auto"/></div>
<p>You plan to implement Defender for Identity for the domain.</p>
<p>You install a Defender for Identity standalone sensor on Server1.</p>
<p>You need to monitor the domain by using Defender for Identity.</p>
<p>What should you do?</p>
`,
      questionText: `Your network contains an on-premises Active Directory domain. The domain contains the servers shown in the following table. You plan to implement Defender for Identity for the domain. You install a Defender for Identity standalone sensor on Server1. You need to monitor the domain by using Defender for Identity. What should you do?`,
      referencesHtml: `<p>How to setup a DC to communicate through a member server:</p>
<p>1. Install the standalone sensor on Server2</p>
<p>2. Setup event subscription on Server2</p>
<p>3. Setup port mirroring on Server1</p>
<p><a href="https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-port-mirroring" target="_blank">https://docs.microsoft.com/en-us/azure-advanced-threat-protection/configure-port-mirroring</a></p>
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
