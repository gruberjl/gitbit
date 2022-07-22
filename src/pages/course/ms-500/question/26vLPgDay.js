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
      question: {question: {entityMap: {}, blocks: [{depth: 0, data: {}, type: 'unstyled', key: 'ciu80', text: 'Your organization has a Microsoft 365 tenant. You\'ve hired a new employee named John Gruber. You manager has asked you to assign John a role in Microsoft 365. John is required to monitor the service health in Microsoft 365 and create service requests. Your organization adheres to the principle of least privilege.', entityRanges: [], inlineStyleRanges: [{offset: 179, style: 'color-rgb(80,80,80)', length: 135}, {style: 'bgcolor-rgb(255,255,255)', offset: 179, length: 135}, {length: 135, offset: 179, style: 'fontsize-16'}, {offset: 179, style: 'fontfamily-Roboto Condensed", sans-serif', length: 135}]}, {type: 'unstyled', text: 'What role should you assign?', key: 'fkb4t', inlineStyleRanges: [{style: 'color-rgb(33,37,41)', offset: 0, length: 28}, {offset: 0, length: 28, style: 'bgcolor-rgb(255,255,255)'}, {offset: 0, style: 'fontsize-16', length: 28}, {offset: 0, length: 28, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji'}], data: {}, entityRanges: [], depth: 0}]}, references: {entityMap: {0: {type: 'LINK', data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU'}, mutability: 'MUTABLE'}, 1: {data: {url: 'https://www.iorad.com/player/1796220/MS-500---Ensure-that-a-user-named-Joe-Gruber-can-monitor-the-service-health-of-your-Microsoft-365-t', targetOption: '_blank'}, type: 'LINK', mutability: 'MUTABLE'}, 2: {type: 'LINK', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/office365/enterprise/view-service-health'}, mutability: 'MUTABLE'}}, blocks: [{inlineStyleRanges: [], entityRanges: [], data: {}, text: 'From the Microsoft admin center > Users > grant the user the Service Support admin role', depth: 0, key: '4e9b4', type: 'unstyled'}, {depth: 0, type: 'unstyled', data: {}, inlineStyleRanges: [], key: 'ev7ts', entityRanges: [{length: 95, key: 0, offset: 0}], text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU '}, {text: 'https://www.iorad.com/player/1796220/MS-500---Ensure-that-a-user-named-Joe-Gruber-can-monitor-the-service-health-of-your-Microsoft-365-t ', entityRanges: [{length: 136, offset: 0, key: 1}], depth: 0, type: 'unstyled', inlineStyleRanges: [], key: 'fersh', data: {}}, {depth: 0, entityRanges: [], data: {}, inlineStyleRanges: [], key: '3mvdh', text: 'You need to assign the Service Administrator role to Joe Gruber:', type: 'unstyled'}, {type: 'ordered-list-item', data: {}, inlineStyleRanges: [], depth: 0, key: '42o8h', entityRanges: [], text: 'In the Microsoft 365 Admin Center, type Joe Gruber into the Search for users, groups, settings or tasks search box.'}, {entityRanges: [], data: {}, depth: 0, inlineStyleRanges: [], text: 'Select the Joe Gruber user account from the search results.', type: 'ordered-list-item', key: 'fnu33'}, {inlineStyleRanges: [], type: 'ordered-list-item', depth: 0, entityRanges: [], text: 'In the Roles section of the user account properties, click Manage roles.', key: 'e9182', data: {}}, {depth: 0, type: 'ordered-list-item', key: 'eb8m3', data: {}, text: 'Click the Admin center access radio box.', entityRanges: [], inlineStyleRanges: []}, {entityRanges: [], inlineStyleRanges: [], type: 'ordered-list-item', key: 'eob91', text: 'click the Service support admin role.', depth: 0, data: {}}, {data: {}, inlineStyleRanges: [], key: 'ceo5r', depth: 0, type: 'ordered-list-item', text: 'Click Save to save the changes.', entityRanges: []}, {text: 'Reference: https://docs.microsoft.com/en-us/office365/enterprise/view-service-health ', data: {}, depth: 0, inlineStyleRanges: [], key: '95ko3', type: 'unstyled', entityRanges: [{key: 2, length: 73, offset: 11}]}]}, answers: [{isCorrectAnswer: false, value: 'Global Administrator role'}, {value: 'Service Support Administrator role', isCorrectAnswer: true}, {isCorrectAnswer: false, value: 'User Administrator role'}], id: '26vLPgDay'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant. You've hired a new employee named John Gruber. You manager has asked you to assign John a role in Microsoft 365. John is required to <span style="color: rgb(80,80,80);background-color: rgb(255,255,255);font-size: 16px;font-family: Roboto Condensed", sans-serif;">monitor the service health in Microsoft 365 and create service requests. Your organization adheres to the principle of least privilege.</span></p>
<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">What role should you assign?</span></p>
`,
      questionText: `Your organization has a Microsoft 365 tenant. You've hired a new employee named John Gruber. You manager has asked you to assign John a role in Microsoft 365. John is required to monitor the service health in Microsoft 365 and create service requests. Your organization adheres to the principle of least privilege. What role should you assign?`,
      referencesHtml: `<p>From the Microsoft admin center &gt; Users &gt; grant the user the Service Support admin role</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU" target="_blank">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU</a>&nbsp;</p>
<p><a href="https://www.iorad.com/player/1796220/MS-500---Ensure-that-a-user-named-Joe-Gruber-can-monitor-the-service-health-of-your-Microsoft-365-t" target="_blank">https://www.iorad.com/player/1796220/MS-500---Ensure-that-a-user-named-Joe-Gruber-can-monitor-the-service-health-of-your-Microsoft-365-t</a>&nbsp;</p>
<p>You need to assign the Service Administrator role to Joe Gruber:</p>
<ol>
<li>In the Microsoft 365 Admin Center, type Joe Gruber into the Search for users, groups, settings or tasks search box.</li>
<li>Select the Joe Gruber user account from the search results.</li>
<li>In the Roles section of the user account properties, click Manage roles.</li>
<li>Click the Admin center access radio box.</li>
<li>click the Service support admin role.</li>
<li>Click Save to save the changes.</li>
</ol>
<p>Reference: <a href="https://docs.microsoft.com/en-us/office365/enterprise/view-service-health" target="_blank">https://docs.microsoft.com/en-us/office365/enterprise/view-service-health</a>&nbsp;</p>
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
