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
      question: {answers: [{isCorrectAnswer: true, value: 'ADGroup1: User1'}, {isCorrectAnswer: true, value: 'ADGroup1: User2'}, {isCorrectAnswer: true, value: 'ADGroup1: User3'}, {value: 'ADGroup1: User4', isCorrectAnswer: true}, {value: 'ADGroup2: User1', isCorrectAnswer: true}, {isCorrectAnswer: true, value: 'ADGroup2: User2'}, {isCorrectAnswer: true, value: 'ADGroup2: User3'}, {value: 'ADGroup2: User4', isCorrectAnswer: true}], id: 'C29rzn6aM', question: {blocks: [{key: 'eb6b1', inlineStyleRanges: [], entityRanges: [], depth: 0, data: {}, type: 'unstyled', text: 'You organization has a Microsoft 365 tenant with the following users.'}, {text: ' ', type: 'atomic', depth: 0, entityRanges: [{key: 0, offset: 0, length: 1}], key: 'b36r0', data: {}, inlineStyleRanges: []}, {key: '4s9rt', depth: 0, entityRanges: [], text: 'The Microsoft 365 tenant contains the following dynamic groups.', type: 'unstyled', data: {}, inlineStyleRanges: []}, {depth: 0, text: ' ', inlineStyleRanges: [], type: 'atomic', entityRanges: [{length: 1, key: 1, offset: 0}], key: '635cj', data: {}}, {inlineStyleRanges: [], text: 'Which users are members of ADGroup1 and ADGroup2?', depth: 0, entityRanges: [], key: '60b80', data: {}, type: 'unstyled'}], entityMap: {0: {data: {alignment: 'left', height: 'auto', width: 'auto', alt: 'Users chart', src: 'https://i.ibb.co/r5zkJWT/Users-chart.png'}, type: 'IMAGE', mutability: 'MUTABLE'}, 1: {type: 'IMAGE', data: {src: 'https://i.ibb.co/R91f09F/group-membership-chart.png', height: 'auto', width: 'auto', alt: 'Dynamic group chart', alignment: 'left'}, mutability: 'MUTABLE'}}}, references: {entityMap: {0: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', targetOption: '_blank'}, type: 'LINK', mutability: 'MUTABLE'}, 1: {mutability: 'MUTABLE', type: 'LINK', data: {url: 'https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/groups-dynamic-membership', targetOption: '_blank'}}}, blocks: [{inlineStyleRanges: [], type: 'unstyled', key: 'b95ee', depth: 0, data: {}, entityRanges: [], text: 'The membership rule "contains" isn\'t case-sensitive. It matches any city that contains the chars "sea" so users 1 - 4 are all added.'}, {inlineStyleRanges: [], entityRanges: [], type: 'unstyled', depth: 0, key: '7cppa', data: {}, text: 'The membership rule "match" isn\'t case-sensitive. It matches any city that starts with "sea" so users 1 - 4 are all added.'}, {text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV', key: '48apm', depth: 0, data: {}, inlineStyleRanges: [], type: 'unstyled', entityRanges: [{length: 95, offset: 0, key: 0}]}, {entityRanges: [{length: 98, key: 1, offset: 0}], type: 'unstyled', inlineStyleRanges: [], depth: 0, text: 'https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/groups-dynamic-membership', key: '5k4cn', data: {}}]}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You organization has a Microsoft 365 tenant with the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/r5zkJWT/Users-chart.png" alt="Users chart" style="height: auto;width: auto"/></div>
<p>The Microsoft 365 tenant contains the following dynamic groups.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/R91f09F/group-membership-chart.png" alt="Dynamic group chart" style="height: auto;width: auto"/></div>
<p>Which users are members of ADGroup1 and ADGroup2?</p>
`,
      questionText: `You organization has a Microsoft 365 tenant with the following users. The Microsoft 365 tenant contains the following dynamic groups. Which users are members of ADGroup1 and ADGroup2?`,
      referencesHtml: `<p>The membership rule "contains" isn't case-sensitive. It matches any city that contains the chars "sea" so users 1 - 4 are all added.</p>
<p>The membership rule "match" isn't case-sensitive. It matches any city that starts with "sea" so users 1 - 4 are all added.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV" target="_blank">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-users-through-groups-S1hQgFOMV</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/groups-dynamic-membership" target="_blank">https://docs.microsoft.com/en-us/azure/active-directory/enterprise-users/groups-dynamic-membership</a></p>
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
