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
      question: {question: {blocks: [{type: 'unstyled', entityRanges: [], text: 'You\'ve been tasked with updating the safe links policy. Your manager gives you the following 2 requirements:', key: '2p2s2', depth: 0, inlineStyleRanges: [], data: {}}, {key: '93qsd', text: 'Block any access to the GitBit.org domain', entityRanges: [], data: {}, inlineStyleRanges: [], type: 'unordered-list-item', depth: 0}, {entityRanges: [], text: 'Track user clicks on any links to gitbit.org.', type: 'unordered-list-item', key: '8b4p7', inlineStyleRanges: [], depth: 0, data: {}}, {entityRanges: [], depth: 0, type: 'unstyled', key: '42lo8', data: {}, text: 'What steps need to be completed to fulfill the requirements?', inlineStyleRanges: []}], entityMap: {}}, references: {entityMap: {0: {data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Protect-your-email-environment-from-malicious-actors-6HUOr7qbL'}, type: 'LINK', mutability: 'MUTABLE'}, 1: {type: 'LINK', data: {url: 'https://www.iorad.com/player/1797489/MS-500---Block-access-to-a-domain-named-fabrikam-com', targetOption: '_blank'}, mutability: 'MUTABLE'}}, blocks: [{text: 'To block URLs: Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Tenant Allow/Block List > URLs > Block. Add the URL to the "Add URLs with wildcards" section. Set the Remove block entry after to the number of days to block the URL. Click Add.', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], key: 'c5kns', data: {}}, {depth: 0, text: 'To set up tracking: Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Safe links > Global settings. Disable Do not track when users click protected links in Office 365 apps. Click Save.', data: {}, entityRanges: [], key: 'b5702', inlineStyleRanges: [], type: 'unstyled'}, {inlineStyleRanges: [], text: 'https://www.gitbit.org/course/ms-500/learn/Protect-your-email-environment-from-malicious-actors-6HUOr7qbL', depth: 0, entityRanges: [{key: 0, offset: 0, length: 105}], key: '5s5au', type: 'unstyled', data: {}}, {type: 'unstyled', data: {}, key: 'bpoog', depth: 0, text: 'https://www.iorad.com/player/1797489/MS-500---Block-access-to-a-domain-named-fabrikam-com', entityRanges: [{offset: 0, key: 1, length: 89}], inlineStyleRanges: []}]}, answers: [{isCorrectAnswer: true, value: 'Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Tenant Allow/Block List > URLs > Block. Add the URL to the "Add URLs with wildcards" section. Set the Remove block entry after to the number of days to block the URL. Click Add.'}, {isCorrectAnswer: false, value: 'From the Azure AD admin center, go to safe links > add the link to the blocked list.'}, {value: 'From the Microsoft Compliance admin center go to Data Loss Prevention > add the link to the blocked list.', isCorrectAnswer: false}, {isCorrectAnswer: true, value: 'Go to Microsoft 365 Defender admin center > Policies & rules > Threat policies > Safe links > Global settings. Uncheck Do not track when users click protected links in Office 365 apps'}], id: 'HnDt94N5E'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You've been tasked with updating the safe links policy. Your manager gives you the following 2 requirements:</p>
<ul>
<li>Block any access to the GitBit.org domain</li>
<li>Track user clicks on any links to gitbit.org.</li>
</ul>
<p>What steps need to be completed to fulfill the requirements?</p>
`,
      questionText: `You've been tasked with updating the safe links policy. Your manager gives you the following 2 requirements: Block any access to the GitBit.org domain Track user clicks on any links to gitbit.org. What steps need to be completed to fulfill the requirements?`,
      referencesHtml: `<p>To block URLs: Go to Microsoft 365 Defender admin center &gt; Policies &amp; rules &gt; Threat policies &gt; Tenant Allow/Block List &gt; URLs &gt; Block. Add the URL to the "Add URLs with wildcards" section. Set the Remove block entry after to the number of days to block the URL. Click Add.</p>
<p>To set up tracking: Go to Microsoft 365 Defender admin center &gt; Policies &amp; rules &gt; Threat policies &gt; Safe links &gt; Global settings. Disable Do not track when users click protected links in Office 365 apps. Click Save.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Protect-your-email-environment-from-malicious-actors-6HUOr7qbL" target="_blank">https://www.gitbit.org/course/ms-500/learn/Protect-your-email-environment-from-malicious-actors-6HUOr7qbL</a></p>
<p><a href="https://www.iorad.com/player/1797489/MS-500---Block-access-to-a-domain-named-fabrikam-com" target="_blank">https://www.iorad.com/player/1797489/MS-500---Block-access-to-a-domain-named-fabrikam-com</a></p>
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
