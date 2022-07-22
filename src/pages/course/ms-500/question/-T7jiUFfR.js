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
      question: {question: {blocks: [{inlineStyleRanges: [], text: 'Your organization has a Microsoft 365 tenant with the domain name gitbit.org.', key: '2h8s2', type: 'unstyled', depth: 0, data: {}, entityRanges: []}, {key: '2t9f1', data: {}, text: 'The MFA configuration is shown below.', inlineStyleRanges: [], entityRanges: [], type: 'unstyled', depth: 0}, {entityRanges: [{offset: 0, key: 0, length: 1}], type: 'atomic', data: {}, text: ' ', key: '2317e', depth: 0, inlineStyleRanges: []}, {key: 'ccd7r', type: 'unstyled', data: {}, inlineStyleRanges: [], depth: 0, text: 'Your Microsoft 365 tenant has the following users.', entityRanges: []}, {entityRanges: [{key: 1, length: 1, offset: 0}], inlineStyleRanges: [], depth: 0, type: 'atomic', data: {}, text: ' ', key: 'lvbg'}, {data: {}, depth: 0, inlineStyleRanges: [], type: 'unstyled', key: '4b9b1', entityRanges: [], text: 'What will happen when User1 and User2 log in?'}], entityMap: {0: {data: {width: 'auto', height: 'auto', alignment: 'left', alt: 'Multi-Factor Authentication', src: 'https://i.ibb.co/pQps3R2/MFA.png'}, mutability: 'MUTABLE', type: 'IMAGE'}, 1: {mutability: 'MUTABLE', data: {alt: 'User chart showing 3 users', src: 'https://i.ibb.co/bmTyW56/user-chart.png', height: 'auto', width: 'auto', alignment: 'left'}, type: 'IMAGE'}}}, references: {entityMap: {0: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk', targetOption: '_blank'}, mutability: 'MUTABLE', type: 'LINK'}, 1: {type: 'LINK', mutability: 'MUTABLE', data: {url: 'https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates', targetOption: '_blank'}}}, blocks: [{depth: 0, inlineStyleRanges: [], key: '5mu1d', text: 'The MFA Status Enabled means the user must set up MFA during the next login.', type: 'unstyled', entityRanges: [], data: {}}, {depth: 0, data: {}, text: 'Since "Allow users to create app passwords to sign in to non-browser apps" is checked that means a user can use the app password to log in when MFA is not an available option.', type: 'unstyled', entityRanges: [], key: 'd3ojg', inlineStyleRanges: []}, {inlineStyleRanges: [], depth: 0, type: 'unstyled', data: {}, key: '9clot', text: 'https://www.gitbit.org/course/ms-500/learn/The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk', entityRanges: [{offset: 0, key: 0, length: 128}]}, {key: 'dnvn8', text: 'https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates', inlineStyleRanges: [], type: 'unstyled', depth: 0, entityRanges: [{offset: 0, key: 1, length: 91}], data: {}}]}, answers: [{isCorrectAnswer: false, value: 'User1 can sign in without MFA'}, {value: 'User1 has completed the MFA registration', isCorrectAnswer: false}, {value: 'User1 will be prompted to complete the MFA registration at the next sign-in', isCorrectAnswer: true}, {isCorrectAnswer: false, value: 'User2 can sign in without MFA'}, {isCorrectAnswer: true, value: 'User2 will be required to use app passwords for any apps that don\'t support MFA'}, {value: 'User2 will be required to use their app password to sign into Microsoft 365 apps', isCorrectAnswer: false}], id: '-T7jiUFfR'},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>Your organization has a Microsoft 365 tenant with the domain name gitbit.org.</p>
<p>The MFA configuration is shown below.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/pQps3R2/MFA.png" alt="Multi-Factor Authentication" style="height: auto;width: auto"/></div>
<p>Your Microsoft 365 tenant has the following users.</p>
<div style="text-align:left;"><img src="https://i.ibb.co/bmTyW56/user-chart.png" alt="User chart showing 3 users" style="height: auto;width: auto"/></div>
<p>What will happen when User1 and User2 log in?</p>
`,
      questionText: `Your organization has a Microsoft 365 tenant with the domain name gitbit.org. The MFA configuration is shown below. Your Microsoft 365 tenant has the following users. What will happen when User1 and User2 log in?`,
      referencesHtml: `<p>The MFA Status Enabled means the user must set up MFA during the next login.</p>
<p>Since "Allow users to create app passwords to sign in to non-browser apps" is checked that means a user can use the app password to log in when MFA is not an available option.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk" target="_blank">https://www.gitbit.org/course/ms-500/learn/The-many-ways-to-implement-multi-factor-authentication-MFA-in-Microsoft-365-nAAIvNbtk</a></p>
<p><a href="https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates" target="_blank">https://docs.microsoft.com/en-us/azure/active-directory/authentication/howto-mfa-userstates</a></p>
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
