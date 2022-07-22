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
      question: {references: {blocks: [{entityRanges: [], key: '4bds8', text: 'User 1 is a global admin so they can perform any action on the user risk policy.', type: 'unstyled', inlineStyleRanges: [], depth: 0, data: {}}, {text: 'Compliance administrators don\'t have access to the user risk / risky users area so User 2 can\'t perform anything.', type: 'unstyled', depth: 0, entityRanges: [], inlineStyleRanges: [], key: '12r6a', data: {}}, {inlineStyleRanges: [], depth: 0, text: 'Security administrators can manage user risk policies so User 3 can perform both actions.', key: '5t2vd', type: 'unstyled', entityRanges: [], data: {}}, {type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], key: '4qh94', text: 'Security Readers can view the user risk reports but can\'t make changes so User 4 can view but not update.', data: {}}, {inlineStyleRanges: [], depth: 0, entityRanges: [{key: 0, offset: 0, length: 95}], text: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU', type: 'unstyled', key: 'amh74', data: {}}, {depth: 0, type: 'unstyled', inlineStyleRanges: [], entityRanges: [{key: 1, length: 104, offset: 0}], key: 'ac94i', data: {}, text: 'https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection'}], entityMap: {0: {type: 'LINK', data: {targetOption: '_blank', url: 'https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU'}, mutability: 'MUTABLE'}, 1: {mutability: 'MUTABLE', data: {targetOption: '_blank', url: 'https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off'}, type: 'LINK'}}}, answers: [{isCorrectAnswer: true, value: 'User 1 can update any user risk policy'}, {value: 'User 2 can update any user risk policy', isCorrectAnswer: false}, {isCorrectAnswer: true, value: 'User 3 can update any user risk policy'}, {isCorrectAnswer: false, value: 'User 4 can update any user risk policy'}, {value: 'User 1 can review any user risk reports', isCorrectAnswer: true}, {value: 'User 2 can review any user risk reports', isCorrectAnswer: false}, {isCorrectAnswer: true, value: 'User 3 can review any user risk reports'}, {isCorrectAnswer: true, value: 'User 4 can review any user risk reports'}], question: {entityMap: {0: {mutability: 'MUTABLE', type: 'IMAGE', data: {width: 'auto', alt: 'User role chart', height: 'auto', alignment: 'left', src: 'https://i.ibb.co/WPhc9R4/user-role-chart.png'}}}, blocks: [{type: 'unstyled', text: 'You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. The tenant contains the following users.', inlineStyleRanges: [{offset: 0, style: 'color-rgb(33,37,41)', length: 104}, {style: 'bgcolor-rgb(255,255,255)', offset: 0, length: 104}, {offset: 0, length: 104, style: 'fontsize-16'}, {length: 104, style: 'fontfamily-system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji', offset: 0}], depth: 0, key: '3v2ja', entityRanges: [], data: {}}, {entityRanges: [{key: 0, offset: 0, length: 1}], text: ' ', type: 'atomic', key: 'd45re', data: {}, inlineStyleRanges: [], depth: 0}, {entityRanges: [], data: {}, depth: 0, text: 'You\'ve been tasked with implementing Azure Active Directory (Azure AD) Identity Protection.', inlineStyleRanges: [], key: 'drcns', type: 'unstyled'}, {text: 'Before you can implement it your manager has asked you which users can perform the following actions:', inlineStyleRanges: [], depth: 0, key: '3l75e', data: {}, type: 'unstyled', entityRanges: []}, {text: 'Configure a user risk policy.', type: 'unordered-list-item', entityRanges: [], inlineStyleRanges: [], data: {}, key: '8fh21', depth: 0}, {text: 'View the risky users\' report.', type: 'unordered-list-item', key: 'cvls6', inlineStyleRanges: [], depth: 0, data: {}, entityRanges: []}, {entityRanges: [], text: 'Which users can perform the tasks listed below?', inlineStyleRanges: [], type: 'unstyled', data: {}, depth: 0, key: '4caqj'}]}, id: '4Fm6TwtSS'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p><span style="color: rgb(33,37,41);background-color: rgb(255,255,255);font-size: 16px;font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji;">You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. The tenant contains the following users.</span></p>
<div style="text-align:left;"><img src="https://i.ibb.co/WPhc9R4/user-role-chart.png" alt="User role chart" style="height: auto;width: auto"/></div>
<p>You've been tasked with implementing Azure Active Directory (Azure AD) Identity Protection.</p>
<p>Before you can implement it your manager has asked you which users can perform the following actions:</p>
<ul>
<li>Configure a user risk policy.</li>
<li>View the risky users' report.</li>
</ul>
<p>Which users can perform the tasks listed below?</p>
`,
      questionText: `You have a Microsoft 365 tenant with Microsoft 365 E5 licenses. The tenant contains the following users. You've been tasked with implementing Azure Active Directory (Azure AD) Identity Protection. Before you can implement it your manager has asked you which users can perform the following actions: Configure a user risk policy. View the risky users' report. Which users can perform the tasks listed below?`,
      referencesHtml: `<p>User 1 is a global admin so they can perform any action on the user risk policy.</p>
<p>Compliance administrators don't have access to the user risk / risky users area so User 2 can't perform anything.</p>
<p>Security administrators can manage user risk policies so User 3 can perform both actions.</p>
<p>Security Readers can view the user risk reports but can't make changes so User 4 can view but not update.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU" target="_blank">https://www.gitbit.org/course/ms-500/learn/Creating-and-managing-admins-through-roles-7CpqFkPZU</a></p>
<p><a href="https://docs.microsoft.com/en-us/sharepoint/turn-external-sharing-on-or-off" target="_blank">https://docs.microsoft.com/en-us/azure/active-directory/identity-protection/overview-identity-protection</a></p>
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
