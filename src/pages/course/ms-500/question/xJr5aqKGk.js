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
      question: {id: 'xJr5aqKGk', references: {entityMap: {0: {data: {url: 'https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ', targetOption: '_blank'}, mutability: 'MUTABLE', type: 'LINK'}}, blocks: [{inlineStyleRanges: [], depth: 0, text: 'User1 is excluded from the policy because excluding GroupB takes precedence over the inclusion of GroupA.', key: '9c8uc', type: 'unstyled', entityRanges: [], data: {}}, {type: 'unstyled', key: 'd20ah', depth: 0, inlineStyleRanges: [], entityRanges: [], text: 'User2 is blocked from signing in because the MFA status for the user is Disabled. Once User2 configures their MFA then they\'ll be able to log in with MFA.', data: {}}, {depth: 0, entityRanges: [{key: 0, offset: 0, length: 123}], text: 'https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ', key: '3ktpn', inlineStyleRanges: [], data: {}, type: 'unstyled'}]}, answers: [{value: 'User 1 will be blocked from signing in', isCorrectAnswer: false}, {value: 'User 1 will be able to sign in without MFA', isCorrectAnswer: true}, {isCorrectAnswer: false, value: 'User 1 will be prompted for MFA before signing in'}, {value: 'User 2 will be blocked from signing in', isCorrectAnswer: true}, {isCorrectAnswer: false, value: 'User 2 will be able to sign in without MFA'}, {isCorrectAnswer: false, value: 'User 2 will be prompted for MFA before signing in'}], question: {entityMap: {0: {mutability: 'MUTABLE', data: {height: 'auto', src: 'https://i.ibb.co/rtkchN3/user-groups.png', width: 'auto', alignment: 'left', alt: 'Char showing User1 and User2 that has Group memberships'}, type: 'IMAGE'}}, blocks: [{type: 'unstyled', key: '9h023', depth: 0, data: {}, text: 'You have a Microsoft 365 tenant named GitBit.org that contains the following users:', inlineStyleRanges: [], entityRanges: []}, {text: ' ', data: {}, key: '17ndt', type: 'atomic', depth: 0, entityRanges: [{offset: 0, length: 1, key: 0}], inlineStyleRanges: []}, {type: 'unstyled', inlineStyleRanges: [], depth: 0, data: {}, key: 'dn9c4', entityRanges: [], text: 'You create an Azure AD Identity Protection sign-in risk policy.'}, {type: 'unstyled', data: {}, key: 'crs1t', depth: 0, text: 'You\'ve assigned the policy to GroupA and excluded GroupB.', entityRanges: [], inlineStyleRanges: [{length: 7, style: 'BOLD', offset: 30}, {style: 'BOLD', length: 15, offset: 41}]}, {depth: 0, data: {}, key: 'ceebf', inlineStyleRanges: [{style: 'BOLD', offset: 41, length: 13}], type: 'unstyled', entityRanges: [], text: 'You\'ve set the sign-in risk condition to low and above.'}, {data: {}, text: 'You\'ve set the access control to Allow access, require MFA', type: 'unstyled', inlineStyleRanges: [{length: 25, offset: 33, style: 'BOLD'}], depth: 0, key: 'de801', entityRanges: []}, {entityRanges: [], inlineStyleRanges: [], data: {}, key: '8daa5', text: 'You need to understand how the policy will affect your users.', type: 'unstyled', depth: 0}, {type: 'unstyled', text: 'What will happen when one of the user\'s signs in from an anonymous IP address?', entityRanges: [], depth: 0, inlineStyleRanges: [], key: '84q3k', data: {}}]}},
      previousQuestionId: '',
      nextQuestionId: '',
      questionIdx: 0,
      questionHtml: `<p>You have a Microsoft 365 tenant named GitBit.org that contains the following users:</p>
<div style="text-align:left;"><img src="https://i.ibb.co/rtkchN3/user-groups.png" alt="Char showing User1 and User2 that has Group memberships" style="height: auto;width: auto"/></div>
<p>You create an Azure AD Identity Protection sign-in risk policy.</p>
<p>You've assigned the policy to <strong>GroupA </strong>and <strong>excluded GroupB</strong>.</p>
<p>You've set the sign-in risk condition to <strong>low and above</strong>.</p>
<p>You've set the access control to <strong>Allow access, require MFA</strong></p>
<p>You need to understand how the policy will affect your users.</p>
<p>What will happen when one of the user's signs in from an anonymous IP address?</p>
`,
      questionText: `You have a Microsoft 365 tenant named GitBit.org that contains the following users: You create an Azure AD Identity Protection sign-in risk policy. You've assigned the policy to GroupA and excluded GroupB. You've set the sign-in risk condition to low and above. You've set the access control to Allow access, require MFA You need to understand how the policy will affect your users. What will happen when one of the user's signs in from an anonymous IP address?`,
      referencesHtml: `<p>User1 is excluded from the policy because excluding GroupB takes precedence over the inclusion of GroupA.</p>
<p>User2 is blocked from signing in because the MFA status for the user is Disabled. Once User2 configures their MFA then they'll be able to log in with MFA.</p>
<p><a href="https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ" target="_blank">https://www.gitbit.org/course/ms-500/learn/Implementing-intelligent-security-using-risk-policies-in-Microsoft-365-NFQ6rYFeQ</a></p>
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
